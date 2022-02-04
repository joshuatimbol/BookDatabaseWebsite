import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BookStoreComponent } from '../book-store/book-store.component';
import { Book } from '../model/book.model';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PartialsModule } from '../partials/partials.modules';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent,
        PartialsModule
    ]
})
export class PagesModule {} 