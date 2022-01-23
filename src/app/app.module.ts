import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { LoginComponent } from './components/view/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MeuEspacoComponent } from './components/view/meu-espaco/meu-espaco.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ConfCegaPendComponent } from './components/view/meu-espaco/conf-cega-pend/conf-cega-pend.component';
import { RankProdutoComponent } from './components/view/meu-espaco/rank-produto/rank-produto.component';
import { ConfTransPendComponent } from './components/view/meu-espaco/conf-trans-pend/conf-trans-pend.component';
import { TransPendComponent } from './components/view/meu-espaco/trans-pend/trans-pend.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MeuEspacoComponent,
    ConfCegaPendComponent,
    RankProdutoComponent,
    ConfTransPendComponent,
    TransPendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
