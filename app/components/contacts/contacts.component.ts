/*
 * Angular
 */
import {
  NgModule,
  Component
} from '@angular/core';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

/*
 * Components
 */
import { FriendsTabComponent }     from './friends-tab/friends.tab.component';
import { AddContactTabComponent }  from './add-contact-tab/add.contact.tab.component';
import { UpdatesTabComponent }     from './updates-tab/updates.tab.component';

@Component({
  selector: 'contacts',
  templateUrl: './app/components/contacts/contacts.template.html'
})
export class ContactsComponent { }

export const routes: Routes = [
  { path: '', redirectTo: 'friends' },
  { path: 'friends', component: FriendsTabComponent },
  { path: 'add-contact', component: AddContactTabComponent },
  { path: 'updates', component: UpdatesTabComponent }
];

@NgModule({
  declarations: [
    FriendsTabComponent,
    AddContactTabComponent,
    UpdatesTabComponent
  ],
  exports: [
    FriendsTabComponent,
    AddContactTabComponent,
    UpdatesTabComponent
  ],
  imports: [ RouterModule ]
})
export class ContactsComponentModule {}
