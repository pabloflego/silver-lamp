import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor (
    private httpService: HttpService
  ) {}
  
  ngOnInit(): void {
    this.ReadCurrentDate();
    this.ReadPastDate();
  }

  ReadCurrentDate () {
    this.httpService.getCurrentDate('').subscribe({
    next: (response) => console.log(response),
    error: (error) => console.log(error),
    complete: () => 'Succes'
  })
}

  ReadPastDate () {
    this.httpService.getPastDate('').subscribe({
    next: (response) => console.log(response),
    error: (error) => console.log(error),
    complete: () => 'Succes'
    })
  }
}


