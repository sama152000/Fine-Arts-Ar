import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { Post } from '../../../model/news.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Post[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getPosts().subscribe(res => {
      if (res.success) {
        // فلترة البوستات بحيث تعرض فقط الفاعليات (الاحداث)
        this.events = res.data
          .filter(post => post.postCategories.some(c => c.categoryName === 'الاحداث'))
          .slice(0, 4); // عرض أول 4 فعاليات فقط
      }
    });
  }

  formatDate(date: string): string {
    return new Intl.DateTimeFormat('ar-EG', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  }

  // لو عايز تحسب الأيام المتبقية للفعالية
  getDaysUntilEvent(eventDate: string): number {
    const today = new Date();
    const diffTime = new Date(eventDate).getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
