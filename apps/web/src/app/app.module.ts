import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DemoCoreModule} from '@ngrx-demo/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NxModule} from '@nrwl/nx';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {reducers} from './app.reducer';
import { VisibleTodosPipe } from '@ngrx-demo/core/src/visibleTodosPipe';

@NgModule({
    imports: [
        BrowserModule,
        DemoCoreModule,
        NxModule.forRoot(),
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : []
    ],
    declarations: [AppComponent, VisibleTodosPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
