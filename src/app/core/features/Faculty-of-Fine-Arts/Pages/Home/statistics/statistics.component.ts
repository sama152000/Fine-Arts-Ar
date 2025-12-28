import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsService } from '../../../Services/statistics.service';
import { Statistic } from '../../../model/statistics.model';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statistics: Statistic[] = [];
  private animationTriggered = false;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.statisticsService.getStatistics().subscribe(res => {
      if (res.success) {
        this.statistics = res.data;
        setTimeout(() => this.animateCounters(), 500);
      }
    });
  }

  private animateCounters() {
    if (this.animationTriggered) return;
    this.animationTriggered = true;

    this.statistics.forEach(stat => {
      const duration = 2000;
      const steps = 60;
      const increment = Number(stat.value) / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= Number(stat.value)) {
          current = Number(stat.value);
          clearInterval(timer);
        }

        const element = document.querySelector(`[data-stat-id="${stat.id}"]`);
        if (element) {
          element.textContent = Math.floor(current).toString();
        }
      }, duration / steps);
    });
  }
}
