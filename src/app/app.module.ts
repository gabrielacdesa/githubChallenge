import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//Importações
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent
  ],

  //Adição das importações realizadas (HttpClientModule e ReactiveFormsModule)
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //Adição do GithubService dentro do providers
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
