import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Hello<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    console.log("enter");
    
    this.http.get('/api/message')
      .subscribe((resp: any) => this.message = resp);
  }
}