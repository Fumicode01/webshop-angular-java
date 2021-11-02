import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Routes, RouterModule } from "@angular/router";
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes: Routes = [
    {path: "products/:id", component: ProductDetailsComponent},
    {path: "search/:keyword", component: ProductListComponent},


    {path: "category/:id", component: ProductListComponent},
    {path: "category", component: ProductListComponent},
    {path: "products", component: ProductListComponent},
    {path: "", redirectTo: "/priducts", pathMatch: "full"},
    {path: "**", redirectTo: "/priducts", pathMatch: "full"},


]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
