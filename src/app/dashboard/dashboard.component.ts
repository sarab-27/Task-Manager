import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscription: any;
  InfoArray= [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
     this.subscription = this.appService.getTaskAddEvent()
    .subscribe(data => this.setDefaultData(data));
  }

  setDefaultData(data) {
    debugger
      const obj = {'task': data.task, 'priority': data.priority, 'description': data.description,'status':data.status };
      this.InfoArray.push(obj);

  }

}
