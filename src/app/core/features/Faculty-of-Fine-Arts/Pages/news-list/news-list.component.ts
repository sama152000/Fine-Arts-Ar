import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { Post } from '../../model/news.model'; // الموديل الجديد اللي يطابق الـ API

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  activeTab: string = 'الكل';
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  // الفئات اللي هنفلتر بيها
  categories = ['الكل', 'الأخبار', 'الاحداث', 'المؤتمرات'];

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    // تحميل الأخبار من الـ API
    this.newsService.getPosts().subscribe(res => {
      if (res.success) {
        this.posts = res.data;
        this.filteredPosts = this.posts; // افتراضي: عرض الكل
      }
    });
  }

  // فلترة حسب الفئة
  filterByCategory(category: string) {
    this.activeTab = category;
    if (category === 'الكل') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.postCategories.some(c => c.categoryName === category)
      );
    }
  }

  // التنقل لصفحة التفاصيل
  navigateToDetails(post: Post) {
    this.router.navigate(['/news-details', post.id], { 
      queryParams: { category: post.postCategories[0]?.categoryName }
    });
  }

  // تنسيق التاريخ للعرض
  formatDate(date: string): string {
    return new Intl.DateTimeFormat('ar-EG', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(new Date(date));
  }
}
