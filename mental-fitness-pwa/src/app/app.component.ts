import { Component, OnInit } from '@angular/core';
import { BrainExerciseService } from './brain-exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dailyExercise: string = '';
  constructor(private brain: BrainExerciseService) {}
  ngOnInit() {
    this.dailyExercise = this.brain.getDailyExercise();
  }
}
