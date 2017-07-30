import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent, AddContactDialogComponent } from './popular/popular.component';
import { ContactsService } from 'app/contacts.service';

const routes: Routes = [{
  path: '',
  component: PopularComponent
},
{
  path: 'contacts',
  component: ContactsComponent
},
{
  path: 'popular',
  component: PopularComponent
}
];

@NgModule({
  entryComponents: [AddContactDialogComponent],
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
