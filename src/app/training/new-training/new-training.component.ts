import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  cardColor: Boolean;
  // @Output() trainingStart = new EventEmitter<void>();
  // exercises: Exercise[];
  $exercises: Observable<Exercise[]>;
  // @ViewChild('exerciseOptionSelected') selectedOption;

  constructor(
    private trainingService: TrainingService,
    // private db: AngularFirestore // *C.I for ANgularFire
  ) { }

  ngOnInit() {
    // this.exercises = this.trainingService.getAvaliableExercise();
    this.$exercises = this.trainingService.fetchAvaliableExercise();
  }

  onStartNewTraning(exerciseSelected) {

    // console.log(this.selectedOption.value);
    // this.trainingStart.emit();
    this.trainingService.startExercise(exerciseSelected);
  }

}
