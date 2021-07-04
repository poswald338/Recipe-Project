import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AuthEffects } from './auth/store/auth.effects';
import { environment } from '../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { RecipeEffects } from './recipes/store/recipe.effects';
import { CoreModule } from './core.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    CoreModule
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule { }
