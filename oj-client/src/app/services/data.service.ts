import { Injectable } from '@angular/core';
import { problems } from "../fake-data"
import { Problem } from "../models/problem.model"

@Injectable()
export class DataService {
  //import fake data
  PROBLEMS : Problem[] = problems;
  constructor() { }
  //get All problems
  getProblems() : Problem[] {
    return this.PROBLEMS;
  }
  //get single problem by id
  getProblem(id : number)  : Problem{
    return this.PROBLEMS.find((Problem) => (Problem.id === id));
  }

  addProblem(problem: Problem) {
    problem.id = this.PROBLEMS.length + 1;
    this.PROBLEMS.push(problem);
  }

}
