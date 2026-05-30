import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { Banner } from './shared/components/banner/banner';
import { CardComponent } from './shared/components/card/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Home } from './pages/home/home';
import { Container } from './shared/components/container/container';
import { CardBusca } from './shared/components/card-busca/card-busca';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimento } from './shared/components/card-depoimento/card-depoimento';
import { FormBusca } from './shared/components/form-busca/form-busca';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Modal } from './shared/components/modal/modal';
import { MatDialogModule } from '@angular/material/dialog';
import { SeletorQuantidade } from './shared/components/seletor-quantidade/seletor-quantidade';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrlPipe } from './shared/pipes/brl-pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DropdownUf } from './shared/components/form-busca/dropdown-uf/dropdown-uf';
import { FiltrosComplementares } from './shared/components/form-busca/filtros-complementares/filtros-complementares';
import { Busca } from './pages/busca/busca';
import { CardPassagem } from './shared/components/card-passagem/card-passagem';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Companhias } from './shared/components/form-busca/filtros-complementares/companhias/companhias';
import { Paradas } from './shared/components/form-busca/filtros-complementares/paradas/paradas';
import { Label } from './shared/components/form-busca/filtros-complementares/label/label';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Precos } from './shared/components/form-busca/filtros-complementares/precos/precos';
import { MatSliderModule } from '@angular/material/slider';
import { CardSugestaoPassagem } from './shared/components/card-sugestao-passagem/card-sugestao-passagem';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Banner,
    Home,
    Container,
    CardBusca,
    CardDepoimento,
    FormBusca,
    Modal,
    SeletorQuantidade,
    BrlPipe,
    DropdownUf,
    FiltrosComplementares,
    Busca,
    CardPassagem,
    CardComponent,
    Companhias,
    Paradas,
    Label,
    Precos,
    CardSugestaoPassagem,
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
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [App],
})
export class AppModule {}
