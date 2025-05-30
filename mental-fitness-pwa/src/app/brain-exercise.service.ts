import { Injectable } from '@angular/core';

@Injectable()
export class BrainExerciseService {
  private exercises: string[] = [
    'Remember a sequence of numbers backwards',
    'Solve a quick math puzzle',
    'Name five countries that start with S',
    'Do a short meditation focusing on breathing'
  ];

  getDailyExercise(): string {
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }
}
