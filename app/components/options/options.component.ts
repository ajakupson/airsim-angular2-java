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
import { PrivateTabComponent }          from './private-tab/private.tab.component';
import { SynchronizationTabComponent }  from './synchronization-tab/synchronization.tab.component';
import { SafetyTabComponent }           from './safety-tab/safety.tab.component';
import { PersonalDataTabComponent }     from './personal-data-tab/personal.data.tab.component';

@Component({
  selector: 'options',
  templateUrl: './app/components/options/options.template.html'
})
export class OptionsComponent { }

export const routes: Routes = [
  { path: '', redirectTo: 'private' },
  { path: 'private', component: PrivateTabComponent },
  { path: 'synchronization', component: SynchronizationTabComponent },
  { path: 'safety', component: SafetyTabComponent },
  { path: 'personal-data', component: PersonalDataTabComponent }
];

@NgModule({
  declarations: [
    PrivateTabComponent,
    SynchronizationTabComponent,
    SafetyTabComponent,
    PersonalDataTabComponent
  ],
  exports: [
    PrivateTabComponent,
    SynchronizationTabComponent,
    SafetyTabComponent,
    PersonalDataTabComponent
  ],
  imports: [ RouterModule ]
})
export class OptionsComponentModule {}
