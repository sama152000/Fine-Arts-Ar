import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { Post } from '../../../model/news.model';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  post: Post | null = null;
  relatedPosts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadPost(id);
    });
  }

  // تحميل البوست من الـ API (خبر أو حدث أو مؤتمر)
  loadPost(id: string) {
    this.newsService.getPosts().subscribe(res => {
      if (res.success) {
        const found = res.data.find(p => p.id === id);
        if (found) {
          this.post = found;
          this.loadRelatedPosts();
        } else {
          this.router.navigate(['/news-list']);
        }
      }
    });
  }

  // تحميل العناصر المرتبطة (من نفس الفئة)
  loadRelatedPosts() {
    if (!this.post) return;
    this.newsService.getPosts().subscribe(res => {
      if (res.success) {
        this.relatedPosts = res.data
          .filter(p =>
            p.postCategories.some(c =>
              this.post!.postCategories.some(pc => pc.categoryName === c.categoryName)
            ) && p.id !== this.post!.id
          )
          .slice(0, 5);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  formatDate(date: string): string {
    return new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }

  // ✅ دوال خاصة بالأحداث
  isEvent(post: Post): boolean {
    return post.postCategories.some(c => c.categoryName === 'الاحداث');
  }

  // لو البوست حدث ممكن نعرض تفاصيل إضافية (لو موجودة في الـ content أو حقول مستقبلية)
  getEventDetails(post: Post): string {
    if (this.isEvent(post)) {
      return `تفاصيل الفعالية: ${post.content.slice(0, 150)}...`;
    }
    return '';
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'الأخبار': 'pi pi-book',
      'الاحداث': 'pi pi-calendar',
      'المؤتمرات': 'pi pi-megaphone'
    };
    return icons[category] || 'pi pi-info';
  }

  getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      'الأخبار': 'text-primary-blue',
      'الاحداث': 'text-accent-gold',
      'المؤتمرات': 'text-primary-red'
    };
    return colors[category] || 'text-primary-blue';
  }

  // التنقل لبوست مرتبط
  navigateToRelated(item: Post) {
    this.router.navigate(['/news-details', item.id], {
      queryParams: { category: item.postCategories[0]?.categoryName ?? 'الأخبار' }
    });
  }

  // التنقل لصفحة الفئة
  goToTab(category: string) {
    this.router.navigate(['/news-list'], {
      queryParams: { tab: category }
    });
  }
}
