/*
 * Angular Imports
 */
import {
  Component
} from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { platformBrowserDynamic }           from '@angular/platform-browser-dynamic';
import { HttpModule }                       from '@angular/http';
import { FormsModule }                      from '@angular/forms';
import {
  RouterModule,
  Routes
}                                           from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
}                                           from '@angular/common';

/*
 * Components
 */
import { AppContainerComponent }      from './components/common/app.component';
import { UserHeaderPanelComponent }   from './components/common/user.header.panel.component';
import { MainMenuComponent }          from './components/common/main.menu.component';
import { UserComponent }              from './components/user/user.component';
import { UserInformationComponent }   from './components/user/user-information/user.information.component';
import { UserContactsComponent }      from './components/user/user-contacts/user.contacts.component';
import { UserLastPicturesComponent }  from './components/user/user-last-pictures/user.last.pictures.component';
import { UserDiaryComponent }         from './components/user/user-diary/user.diary.component';
import { routes as contactsChildren,
         ContactsComponent,
         ContactsComponentModule }    from './components/contacts/contacts.component';
import { MessagesComponent }          from './components/messages/messages.component';
import { routes as optionsChildren,
         OptionsComponent,
         OptionsComponentModule }    from './components/options/options.component';
import { EmptyComponent }             from './components/common/empty.component';

/*
 * Services
 */


const routes: Routes = [
   { path: '', redirectTo: 'homepage', pathMatch: 'full' },
   { path: 'homepage', component: UserComponent },
   { path: 'contacts', component: ContactsComponent, children: contactsChildren },
   { path: 'messages', component: MessagesComponent },
   { path: 'options', component:  OptionsComponent, children: optionsChildren },
 ];

@NgModule({
  declarations: [
    AppContainerComponent,
    UserHeaderPanelComponent,
    MainMenuComponent,
    UserComponent,
    UserInformationComponent,
    UserDiaryComponent,
    UserContactsComponent,
    UserLastPicturesComponent,
    ContactsComponent,
    MessagesComponent,
    OptionsComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
    ContactsComponentModule,
    OptionsComponentModule
  ],
  bootstrap: [ AppContainerComponent ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AirSimAppModule {}
