import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./modules/core/core.module";
import { HomeComponent } from "./components/home/home.component";
import { CarouselComponent, CarouselItemElement } from "./components/shared/carousel/carousel.component";
import { CarouselItemDirective } from "./components/shared/carousel/carousel-item.directive";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductsComponent } from './components/products/products.component';
import { FeaturedComponent } from './components/products/featured/featured.component';
import { NewComponent } from './components/products/new/new.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    ProductsComponent,
    FeaturedComponent,
    NewComponent,
    PostsComponent,
    FooterComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
