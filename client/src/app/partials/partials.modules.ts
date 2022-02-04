import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BookStoreComponent } from '../book-store/book-store.component';
import { Book } from '../model/book.model';
import { BasePageComponent } from './base-page/base-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from '../book-store/cart-summary/cart-summary.component';




@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [
       CartSummaryComponent,
       BasePageComponent,
       FooterComponent,
       HeaderComponent
    ],
    exports: [
        BasePageComponent,
        FooterComponent,
        HeaderComponent
    ]
})
export class PartialsModule {} 