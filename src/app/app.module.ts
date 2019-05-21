//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

//Servicios
import { BlogServiceService } from './services/blog-service.service';



const myPaths: Routes = [
  {'path': 'home', 'component': HomeComponent},
  {'path': 'post/:id', 'component': DetailComponent},
  {'path': '', 'component': HomeComponent},
  {'path': '**', 'component': HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myPaths)
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
