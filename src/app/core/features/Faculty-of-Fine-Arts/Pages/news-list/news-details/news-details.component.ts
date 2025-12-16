import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { EventsService } from '../../../Services/event.service';
import { AnnouncementsService } from '../../../Services/announcements.service';
import { ArticlesService } from '../../../Services/articles.service';
import { NewsItem } from '../../../model/news.model';
import { EventItem } from '../../../model/event.model';
import { AnnouncementItem } from '../../../model/announcement.model';
import { ArticleItem } from '../../../model/article.model';

type ContentItem = NewsItem | EventItem | AnnouncementItem | ArticleItem;
type ContentType = 'news' | 'event' | 'announcement' | 'article';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  contentItem: ContentItem | null = null;
  relatedItems: ContentItem[] = [];
  contentType: ContentType = 'news';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private newsService: NewsService,
    private eventsService: EventsService,
    private announcementsService: AnnouncementsService,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.route.queryParams.subscribe(queryParams => {
        this.contentType = queryParams['type'] || 'news';
        this.loadContent(id);
      });
    });
  }

  loadContent(id: number) {
    let item: ContentItem | undefined;

    switch (this.contentType) {
      case 'news':
        item = this.newsService.getNewsById(id);
        break;
      case 'event':
        item = this.eventsService.getEventById(id);
        break;
      case 'announcement':
        item = this.announcementsService.getAnnouncementById(id);
        break;
      case 'article':
        item = this.articlesService.getArticleById(id);
        break;
    }

    if (item) {
      this.contentItem = item;
      this.loadRelatedItems();
    } else {
      this.router.navigate(['/news-list']);
    }
  }

  loadRelatedItems() {
    if (!this.contentItem || !this.contentItem.relatedItems) {
      return;
    }

    // Load related items from all services
    const allItems: ContentItem[] = [
      ...this.newsService.getAllNews(),
      ...this.eventsService.getAllEvents(),
      ...this.announcementsService.getAllAnnouncements(),
      ...this.articlesService.getAllArticles()
    ];

    this.relatedItems = allItems.filter(item => 
      this.contentItem!.relatedItems!.includes(item.id) && 
      item.id !== this.contentItem!.id
    ).slice(0, 5);
  }

  goBack() {
    this.location.back();
  }

  goToTab(tab: string) {
    this.router.navigate(['/news-list'], { 
      queryParams: { tab: tab }
    });
  }

  navigateToRelated(item: ContentItem) {
    this.router.navigate(['/news-details', item.id], { 
      queryParams: { type: item.category }
    });
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  formatTime(time: string): string {
    return time;
  }

  isEventItem(item: ContentItem): item is EventItem {
    return item.category === 'event';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'news': 'pi pi-book',
      'event': 'pi pi-calendar',
      'announcement': 'pi pi-megaphone',
      'article': 'pi pi-file-edit'
    };
    return icons[category as keyof typeof icons] || 'pi pi-info';
  }

  getCategoryColor(category: string): string {
    const colors = {
      'news': 'text-primary-blue',
      'event': 'text-accent-gold',
      'announcement': 'text-primary-red',
      'article': 'text-secondary'
    };
    return colors[category as keyof typeof colors] || 'text-primary-blue';
  }
}