import 'hammerjs';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
    declarations: [
        AppComponent, MenuComponent, DishDetailComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, AppRoutingModule
    ],
    providers: [DishService],
    bootstrap: [AppComponent]
})
export class AppModule {}