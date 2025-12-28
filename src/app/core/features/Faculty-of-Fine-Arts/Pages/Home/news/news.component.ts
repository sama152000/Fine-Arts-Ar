import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { Post } from '../../../model/news.model'; // الموديل الجديد اللي يطابق الـ API

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsItems: Post[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // تحميل الأخبار من الـ API
    this.newsService.getPosts().subscribe(res => {
      if (res.success) {
        // عرض أول 4 أخبار فقط
        this.newsItems = res.data.slice(0, 4);
      }
    });
  }

  getCategoryClass(category: string | undefined): string {
    switch (category) {
      case 'الأخبار': return 'badge-news';
      case 'الاحداث': return 'badge-event';
      case 'المؤتمرات': return 'badge-announcement';
      default: return 'badge-default';
    }
  }

  getCategoryIcon(category: string | undefined): string {
    switch (category) {
      case 'الأخبار': return 'pi pi-megaphone';
      case 'الاحداث': return 'pi pi-calendar';
      case 'المؤتمرات': return 'pi pi-bell';
      default: return 'pi pi-info';
    }
  }

  formatDate(date: string): string {
    return new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }
}
