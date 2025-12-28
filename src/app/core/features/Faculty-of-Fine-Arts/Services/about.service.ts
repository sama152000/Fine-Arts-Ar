import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import {
  AboutApiResponse,
  AboutResponse,
  AboutSection,
  DeanSpeechResponse,
  MemberResponse,
  AboutFaculty
} from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutUrl = environment.apiUrl + 'about/getall';
  private deanSpeechUrl = environment.apiUrl + 'deanspeechs/getall';
  private memberUrl = environment.apiUrl + 'member/getall';

  constructor(private http: HttpClient) {}

  // 📌 About Page Data
  getAboutData(): Observable<AboutApiResponse> {
    return this.http.get<AboutApiResponse>(this.aboutUrl);
  }

  // 📌 Sections mapped for navigation
  getMappedSections(): Observable<AboutSection[]> {
    return this.getAboutData().pipe(
      map((response: AboutApiResponse) => {
        // Find the item with pageName 'عن الكلية' or the first one with populated fields
        const data = response.data.find(d => d.pageName === 'عن الكلية') || response.data.find(d => d.vision || d.mission || d.history) || response.data[0];
        return [
          { id: 'vision', title: 'الرؤية', content: data.vision || 'رؤية الكلية هي...', icon: 'pi pi-eye' },
          { id: 'mission', title: 'الرسالة', content: data.mission || 'رسالة الكلية هي...', icon: 'pi pi-flag' },
          { id: 'goals', title: 'الأهداف', content: data.goals?.map(g => g.goalName).join('\n') || 'أهداف الكلية...', icon: 'pi pi-list' },
          { id: 'history', title: 'تاريخ الكلية', content: data.history || 'تاريخ الكلية...', icon: 'pi pi-book' },
          { id: 'dean', title: 'كلمة العميد', content: data.content, icon: 'pi pi-user' },
          { id: 'structure', title: 'الهيكل الإداري', content: '', icon: 'pi pi-sitemap' }
        ];
      })
    );
  }

  // 📌 Dean Speech
  getDeanSpeech(): Observable<DeanSpeechResponse> {
    return this.http.get<DeanSpeechResponse>(this.deanSpeechUrl);
  }

  // 📌 Members (Administrative Structure)
  getMembers(): Observable<MemberResponse> {
    return this.http.get<MemberResponse>(this.memberUrl);
  }

  // 📌 About Faculty (مختصر للـ Home Component)
  // هنا بنجمع بيانات عن الكلية + صورة العميد
  getAboutFaculty(): Observable<AboutFaculty> {
    return forkJoin({
      about: this.getAboutData(),
      dean: this.getDeanSpeech()
    }).pipe(
      map(({ about, dean }) => {
        const data = about.data.find(d => d.pageName === 'عن الكلية') || about.data.find(d => d.vision || d.mission || d.history) || about.data[0];
        const deanImage = dean.success && dean.data.length > 0 && dean.data[0].deanSpeechAttachments.length > 0
          ? dean.data[0].deanSpeechAttachments[0].url
          : '';

        return {
          title: data.pageName,                // "عن الكلية"
          description: data.content,           // المحتوى العام
          highlights: data.goals?.map((g: any) => g.goalName) || [], // الأهداف كـ highlights
          vision: data.vision,
          mission: data.mission,
          imageUrl: deanImage,                  // صورة العميد من الـ API
          establishedYear: 1996                 // ممكن تستخرجها من الـ history لو حبيت
        } as AboutFaculty;
      })
    );
  }

  // 📌 Static sections for NavigationService
  getAboutSections(): AboutSection[] {
    return [
      { id: 'vision', title: 'الرؤية', content: '', icon: 'pi pi-eye' },
      { id: 'mission', title: 'الرسالة', content: '', icon: 'pi pi-flag' },
      { id: 'goals', title: 'الأهداف', content: '', icon: 'pi pi-list' },
      { id: 'history', title: 'تاريخ الكلية', content: '', icon: 'pi pi-book' },
      { id: 'dean', title: 'كلمة العميد', content: '', icon: 'pi pi-user' },
      { id: 'structure', title: 'الهيكل الإداري', content: '', icon: 'pi pi-sitemap' }
    ];
  }
}
