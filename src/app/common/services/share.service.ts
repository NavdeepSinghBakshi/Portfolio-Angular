import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private employeeEmails = new BehaviorSubject([]);
  private projectLists = new BehaviorSubject([])
  private Subject = new BehaviorSubject({})
  private user = new BehaviorSubject({})
  private skills = new BehaviorSubject({})
  public replay = new ReplaySubject();
  //replayObs = this.replay.asObservable();
  employeeEmailsObs = this.employeeEmails.asObservable()
  projectListsObs = this.projectLists.asObservable()
  SubjectObs = this.Subject.asObservable()
  userObs = this.user.asObservable()
  skillsObs = this.skills.asObservable()
  constructor() {
  }
  projectListsChange(data: any) {
    this.projectLists.next(data);
  }
  employeeEmailsChange(data: any) {
    this.employeeEmails.next(data);
  }
  SubjectChange(data: any) {
    this.Subject.next(data);
  }
  userChange(data: any) {
    this.user.next(data);
  }
  skillsChange(data: any) {
    this.skills.next(data);
  }
  replayChange(data:any){
    this.replay.next(data);
  }
}
