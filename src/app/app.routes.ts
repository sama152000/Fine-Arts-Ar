import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/Faculty-of-Fine-Arts/Pages/Home/Home.component';
import { FacultyOfFineArtsComponent } from './core/features/Faculty-of-Fine-Arts/Faculty-of-Fine-Arts.component';
import { DepartmentsComponent } from './core/features/Faculty-of-Fine-Arts/Pages/departments/departments.component';
import { AboutComponent } from './core/features/Faculty-of-Fine-Arts/Pages/about/about.component';
import { SectorsComponent } from './core/features/Faculty-of-Fine-Arts/Pages/sectors/sectors.component';
import { UnitsComponent } from './core/features/Faculty-of-Fine-Arts/Pages/units/units.component';
import { StudentServicesComponent } from './core/features/Faculty-of-Fine-Arts/Pages/student-services/student-services.component';
import { NewsListComponent } from './core/features/Faculty-of-Fine-Arts/Pages/news-list/news-list.component';
import { NewsDetailsComponent } from './core/features/Faculty-of-Fine-Arts/Pages/news-list/news-details/news-details.component';
import { ContactComponent } from './core/features/Faculty-of-Fine-Arts/Pages/contact/contact.component';
export const routes: Routes = [


    {
    path: '',
    component: FacultyOfFineArtsComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: 'departments', component: DepartmentsComponent },
  { path: 'departments/:id', component: DepartmentsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:id', component: AboutComponent },
   { path: 'sectors', component: SectorsComponent },
  { path: 'sectors/:id', component: SectorsComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'units/:id', component: UnitsComponent },
  { path: 'student-services', component: StudentServicesComponent },
  { path: 'student-services/:id', component: StudentServicesComponent },
   { path: 'news-list', component: NewsListComponent },
      { path: 'news-details/:id', component: NewsDetailsComponent },
      { path: 'contact', component: ContactComponent }
    
    ]}
];
