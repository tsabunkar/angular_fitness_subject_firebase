import { Component, OnInit, ChangeDetectorRef, OnChanges, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Exercise } from '../exercise.model';
import { mockExercises } from 'src/app/core/mocks/exercise.mock';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-past-training',
  // templateUrl: './past-training-table.component.html',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['exerciseId', 'exerciseName', 'exerciseDuration', 'caloriesBurned', 'date', 'exerciseState'];
  // exercises: Exercise[] = mockExercises;
  // !No need to mention Exercise[] array in the genrics, by default angular material expect it to be [] :- MatTableDataSource<Exercise>()
  exercises = new MatTableDataSource<Exercise>();
  // $exercises: Observable<Exercise[]>;
  @ViewChild('toogleSlider') toogleSlider;
  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  subscription: Subscription;

  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    // console.log('toogleSlider', this.toogleSlider);
    // this.$exercises = this.trainingService.historyChanged;

    // this.trainingService.historyChanged.subscribe(ex => this.exercises.data = ex);
    // !Fetching for Firebase DB, Instead of InMemoryServices

    this.subscription = this.trainingService.getCompletedHistoryExercises()
      .subscribe(exercisesData => {
        this.exercises.data = exercisesData;
      });

  }

  ngAfterViewInit() {
    this.exercises.sort = this.matSort;
    this.exercises.paginator = this.matPaginator;
  }

  onToggle() {
    // this.$exercises = this.trainingService.getCompletedHistoryExercises();
    // this.exercises.data = this.trainingService.getCompletedHistoryExercises();

  }

  doFilter(inputText: string) {
    this.exercises.filter = inputText.trim().toLowerCase();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
