import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import {ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, manager:string, description: string, goal: string, fundingPlans: string) {
    var newProject: Project= new Project(name, manager, description, goal, fundingPlans);
    this.projectService.addProject(newProject);
  }

}
