import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../../Services/event.service';
import { EventItem } from '../../../model/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: EventItem[] = [];

  constructor(private eventService: EventsService) {}

  ngOnInit() {
    this.events = this.eventService.getAllEvents().slice(0, 4);
  }

  getCategoryClass(category: string): string {
    switch (category) {
      case 'exhibition': return 'category-exhibition';
      case 'workshop': return 'category-workshop';
      case 'seminar': return 'category-seminar';
      case 'conference': return 'category-conference';
      default: return 'category-default';
    }
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'exhibition': return 'pi pi-image';
      case 'workshop': return 'pi pi-wrench';
      case 'seminar': return 'pi pi-comments';
      case 'conference': return 'pi pi-users';
      default: return 'pi pi-calendar';
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  formatTime(time: string): string {
    return time;
  }

  getDaysUntilEvent(eventDate: Date): number {
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}