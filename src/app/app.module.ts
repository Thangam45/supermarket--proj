import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HOMEComponent } from './pages/home/home.component';
import { MENUComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { CONTACTComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ProductsComponent } from './pages/products/products.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomesComponent } from './pages//homes/homes.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HOMEComponent,
    MENUComponent,
    AboutComponent,
    CONTACTComponent,
    MenupageComponent,
    BlogsComponent,
    ProductsComponent,
    LogInComponent,
    HomesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
