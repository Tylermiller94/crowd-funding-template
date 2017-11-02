import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClarityModule } from "clarity-angular";
import { ProjectListComponent } from './project-list/project-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AdminComponent } from './admin/admin.component';
import { FundingPipe } from './funding.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    WelcomeComponent,
    ProjectDetailComponent,
    EditProjectComponent,
    AdminComponent,
    FundingPipe
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
