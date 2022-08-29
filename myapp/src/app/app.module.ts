import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { AddhobbyComponent } from './components/addhobby/addhobby.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { MypipePipe } from './pipes/mypipe.pipe';
import { MydirDirective } from './directives/mydir.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HobbyComponent,
    AddhobbyComponent,
    FavouriteComponent,
    MypipePipe,
    MydirDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
