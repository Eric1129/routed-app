import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { InsightsComponent } from './insights/insights.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { AssetViewComponent } from './net-worth/asset-view/asset-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MarketMoversComponent,
    CashFlowComponent,
    InsightsComponent,
    NetWorthComponent,
    AssetViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // the FormsModule is needed for forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
