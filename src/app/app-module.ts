import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Banner } from './shared/banner/banner';
import { Card } from './shared/card/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Home } from './pages/home/home';
import { Container } from './shared/container/container';
import { CardBusca } from './shared/card-busca/card-busca';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimento } from './shared/card-depoimento/card-depoimento';
import { FormBusca } from './shared/form-busca/form-busca';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Banner,
    Card,
    Home,
    Container,
    CardBusca,
    CardDepoimento,
    FormBusca,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    provideBrowserGlobalErrorListeners(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [App],
})
export class AppModule {}
