import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../../Services/hero.service';
import { HeroContent, HeroSlide } from '../../../model/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroContent: HeroContent = { slides: [] };
  currentSlideIndex = 0;
  autoplayInterval: any;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroContent().subscribe(content => {
      this.heroContent = content;
      if (this.heroContent.autoplay) {
        this.startAutoplay();
      }
    });
  }

  ngOnDestroy() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.heroContent.autoplayInterval || 5000);
  }

  nextSlide() {
    if (this.heroContent.slides.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroContent.slides.length;
    }
  }

  prevSlide() {
    if (this.heroContent.slides.length > 0) {
      this.currentSlideIndex =
        this.currentSlideIndex === 0
          ? this.heroContent.slides.length - 1
          : this.currentSlideIndex - 1;
    }
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.heroContent.slides.length) {
      this.currentSlideIndex = index;
    }
  }

  getCurrentSlide(): HeroSlide | undefined {
    return this.heroContent.slides[this.currentSlideIndex];
  }
}
