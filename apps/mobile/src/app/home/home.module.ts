import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import { VisibleTodosPipe } from '@ngrx-demo/core/src/visibleTodosPipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage, VisibleTodosPipe]
})
export class HomePageModule {
}
