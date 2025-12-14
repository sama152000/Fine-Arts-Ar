import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { NewsItem } from '../../../model/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsItems = this.newsService.getAllNews().slice(0, 4);
  }

  getCategoryClass(category: string): string {
    switch (category) {
      case 'news': return 'badge-news';
      case 'achievement': return 'badge-achievement';
      case 'announcement': return 'badge-announcement';
      default: return 'badge-default';
    }
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'news': return 'pi pi-megaphone';
      case 'achievement': return 'pi pi-star';
      case 'announcement': return 'pi pi-bell';
      default: return 'pi pi-info';
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
}