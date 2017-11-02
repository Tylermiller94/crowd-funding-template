import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
   }

   getProjects() {
     return this.projects;
   }

   getProjectById(projectId) {
     return this.database.object('projects/' + projectId);
   }

   addProject(newProject: Project) {
     this.projects.push(newProject);
   }

   updateProject(localUpdatedProject) {
     var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
     projectEntryInFirebase.update({name: localUpdatedProject.name,
                                    description: localUpdatedProject.description,
                                    goal: localUpdatedProject.goal,
                                    fundingPlans: localUpdatedProject.fundingPlans});
   }

   deleteProject(localProjectToDelete){
     var projectEntryInFirebase =this.getProjectById(localProjectToDelete.$key);
     projectEntryInFirebase.remove();
   }

}
