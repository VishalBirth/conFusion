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

@NgModule({
    declarations: [
        AppComponent, MenuComponent, DishDetailComponent, HeaderComponent, FooterComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule
    ],
    providers: [DishService],
    bootstrap: [AppComponent]
})
export class AppModule {}