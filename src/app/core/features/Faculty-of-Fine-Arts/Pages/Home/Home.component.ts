import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { EventsComponent } from "./events/events.component";
import { NewsComponent } from "./news/news.component";
import { StatisticsComponent } from "./statistics/statistics.component";

@Component({
  selector: 'app-Home',
  standalone: true,
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  imports: [HeroComponent, AboutComponent, EventsComponent, NewsComponent, StatisticsComponent, DepartmentsComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
