import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./core/features/Faculty-of-Fine-Arts/Pages/shared/footer/footer.component";
import { HeaderComponent } from "./core/features/Faculty-of-Fine-Arts/Pages/shared/header/header.component";


@Component({
  selector: 'app-root',
  imports: [ButtonModule, CommonModule, RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'كلية الفنون الجميلة ';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
