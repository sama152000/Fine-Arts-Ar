import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-Faculty-of-Fine-Arts',
  standalone: true,
  templateUrl: './Faculty-of-Fine-Arts.component.html',
  styleUrls: ['./Faculty-of-Fine-Arts.component.css'],
  imports:[
    RouterOutlet
  ]
})
export class FacultyOfFineArtsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
