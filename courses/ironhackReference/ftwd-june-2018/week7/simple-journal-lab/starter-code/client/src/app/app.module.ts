import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';
import { JournalService } from './services/journal.service';
import { RouterModule, Routes } from "@angular/router";
import { AboutPageComponent } from './about-page/about-page.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const routes: Routes = [
  { path: '', component: JournalEntriesComponent },
  { path: 'about',  component: AboutPageComponent },
  {path: 'entries/:id', component: EntryDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JournalEntriesComponent,
    AboutPageComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
