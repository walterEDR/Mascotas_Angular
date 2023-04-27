import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NopageComponent } from './modules/nopage/nopage.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkeletonComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,//para incorporar animaciones del navegador
    CoreModule, // para clases utilizadas por app.module
    SharedModule, // recursos que se van a utilizar en mas de un modulo
    AppRoutingModule,// modulo de rutas
    HttpClientModule,
    ToastrModule.forRoot() // toastrModule agregado
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
