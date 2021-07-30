import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TimeAgoPipe } from './time-ago.pipe';
import { ReposComponent } from './components/repos/repos.component';
import { HighlightDirective } from './highlight.directive';
import { InfoReposComponent } from './components/info-repos/info-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
    ReposComponent,
    HighlightDirective,
    InfoReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
