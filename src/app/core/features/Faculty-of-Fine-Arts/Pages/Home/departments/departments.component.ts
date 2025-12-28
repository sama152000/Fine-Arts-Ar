import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentsService } from '../../../Services/department.service';
import { Department } from '../../../model/department.model';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit() {
    // استدعاء الـ API وجلب أول 3 أقسام فقط
    this.departmentsService.getDepartments().subscribe(res => {
      if (res.success) {
        this.departments = res.data.slice(0, 3);
      }
    });
  }
}
