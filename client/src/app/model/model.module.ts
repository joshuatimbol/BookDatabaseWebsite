
import { NgModule } from '@angular/core';
import { Book } from './book.model';
import { BookRepository } from './book.repository';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [BookRepository, StaticDataSource, Cart,
    {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule {}