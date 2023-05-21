import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {ConverterComponent} from './pages/converter/converter.component';
import {CurrencyService} from './core/services/currency.service';
import {HeaderInterceptor} from './core/services/header-interceptor.service';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [CurrencyService, {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
