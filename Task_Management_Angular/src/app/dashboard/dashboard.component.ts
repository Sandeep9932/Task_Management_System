import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  tasks:any;
  constructor(public http:HttpClient, public app:AppComponent)
  {
    let url='http://localhost:8080/readAllTasks'+this.app.userid;
    this.http.get(url).subscribe((data:any)=>
    {
       console.log(data);
       this.tasks=data;
    }
    );
  }

  logout()
  {
    this.app.isLoggedIn=0;
  }

  delete(student:any)
  {
    
  }

  details:string='';
  add()
  {
    let url='http://localhost:8080/add'+this.app.userid;
    this.http.post(url,this.details).subscribe((data:any)=>
    {
          if(data==null)
          {
            alert('Exception on server')
          }
          else
          {
            this.tasks.push(data);
            this.details='';
          }
    }
    );
  }
}
