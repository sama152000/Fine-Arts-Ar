import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../../Services/department.service';
import { Department } from '../../../model/department.model';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departments = this.departmentService.getDepartments().slice(0, 3);
  }
}