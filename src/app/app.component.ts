import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'TaskManager';
  task : any;
  priority: any;
  description:any;
  status:any;

  constructor(private appService: AppService,private router: Router,) {

  }
  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(){
    const request = {
      'task': this.task,
      'priority': this.priority,
      'description': this.description,
      'status': this.status
    };
    this.appService.emitData(request);
    this.Close();
  }
  Close() {
    this.task = '';
    this.description = '';
    this.status = 'undefined';
    this.priority = 'undefined';
    
  }
}
