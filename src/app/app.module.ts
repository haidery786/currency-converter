import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CurrencyService } from "./currency.service";
import { AppComponent } from "./app.component";
import { CurrencyComponent } from "./currency/currency.component";
import { CurrencyInputSelectComponent } from "./currency-input-select/currency-input-select.component";

@NgModule({
  declarations: [AppComponent, CurrencyComponent, CurrencyInputSelectComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
