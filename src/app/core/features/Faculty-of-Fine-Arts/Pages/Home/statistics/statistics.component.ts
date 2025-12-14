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
    this.statistics = this.statisticsService.getStatistics().slice(0, 4);
    
    // Trigger counter animation after component loads
    setTimeout(() => {
      this.animateCounters();
    }, 500);
  }

  private animateCounters() {
    if (this.animationTriggered) return;
    this.animationTriggered = true;

    this.statistics.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        // Update the displayed value
        const element = document.querySelector(`[data-stat-id="${stat.id}"]`);
        if (element) {
          element.textContent = Math.floor(current).toString();
        }
      }, duration / steps);
    });
  }

  getDisplayValue(statistic: Statistic): string {
    const prefix = statistic.prefix || '';
    const suffix = statistic.suffix || '';
    return `${prefix}${statistic.value}${suffix}`;
  }
}