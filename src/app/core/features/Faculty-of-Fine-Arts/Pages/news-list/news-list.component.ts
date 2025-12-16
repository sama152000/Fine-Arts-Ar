import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { EventsService } from '../../Services/event.service';
import { AnnouncementsService } from '../../Services/announcements.service';
import { ArticlesService } from '../../Services/articles.service';
import { NewsItem } from '../../model/news.model';
import { EventItem } from '../../model/event.model';
import { AnnouncementItem } from '../../model/announcement.model';
import { ArticleItem } from '../../model/article.model';

type ContentItem = NewsItem | EventItem | AnnouncementItem | ArticleItem;
type TabType = 'all' | 'news' | 'event' | 'announcement' | 'article';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  activeTab: TabType = 'all';
  allContent: ContentItem[] = [];
  filteredContent: ContentItem[] = [];

  tabs = [
    { id: 'all' as TabType, label: 'الكل', icon: 'pi pi-list' },
    { id: 'news' as TabType, label: 'الاخبار', icon: 'pi pi-book' },
    { id: 'event' as TabType, label: 'الفاعليات', icon: 'pi pi-calendar' },
    { id: 'announcement' as TabType, label: 'الاعلانات', icon: 'pi pi-megaphone' },
    { id: 'article' as TabType, label: 'المقالات', icon: 'pi pi-file-edit' }
  ];

  constructor(
    private newsService: NewsService,
    private eventsService: EventsService,
    private announcementsService: AnnouncementsService,
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAllContent();
    this.filterContent();
  }

  loadAllContent() {
    const news = this.newsService.getAllNews();
    const events = this.eventsService.getAllEvents();
    const announcements = this.announcementsService.getAllAnnouncements();
    const articles = this.articlesService.getAllArticles();

    this.allContent = [...news, ...events, ...announcements, ...articles]
      .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  }

  selectTab(tabId: TabType) {
    this.activeTab = tabId;
    this.filterContent();
  }

  filterContent() {
    if (this.activeTab === 'all') {
      this.filteredContent = this.allContent;
    } else {
      this.filteredContent = this.allContent.filter(item => item.category === this.activeTab);
    }
  }

  navigateToDetails(item: ContentItem) {
    this.router.navigate(['/news-details', item.id], { 
      queryParams: { type: item.category }
    });
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }

  isEventItem(item: ContentItem): item is EventItem {
    return item.category === 'event';
  }
}