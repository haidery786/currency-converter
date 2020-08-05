import { Component, OnInit } from "@angular/core";
import { Rate } from "../rate";
import { CurrencyService } from "../currency.service";

@Component({
  selector: "currency-component",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.scss"],
})
export class CurrencyComponent implements OnInit {
  selectedBase: string = "GBP";
  selectedConvert: string = "USD";
  inputBase: number | string;
  inputConvert: number | string;
  currencyRate: number;

  arrBase: Rate[];
  arrConvert: Rate[];

  baseObject: object;
  convertObject: object;

  getRates(): void {
    this.currencyService.getRates(this.selectedBase).subscribe((data) => {
      let arr = [];
      Object.entries(data).forEach((key, i) => {
        arr.push(data[i]);
      });
      this.arrBase = arr.filter((rate) => rate.code !== this.selectedConvert);
      this.arrConvert = arr.filter((rate) => rate.code !== this.selectedBase);
      //console.log(this.arrBase);
      this.currencyRate = this.arrConvert.filter(
        (rates) => rates.code === this.selectedConvert
      )[0].rate;
      console.log(
        `${this.selectedBase} to ${this.selectedConvert} = ${this.currencyRate}`
      );
    });
  }

  clearInputs(): void {
    this.inputBase = "";
    this.inputConvert = "";
  }

  onSelectBase(base): void {
    //debugger;
    this.selectedBase = base["code"];
    this.getRates();
    this.clearInputs();
  }

  onSelectConvert(convert: object): void {
    this.selectedConvert = convert["code"];
    this.currencyRate = convert["rate"];
    this.arrBase = this.arrBase.filter(
      (rate) => rate.code !== this.selectedConvert
    );
    this.arrConvert = this.arrConvert.filter(
      (rate) => rate.code !== this.selectedBase
    );
    console.log(
      `${this.selectedBase} to ${this.selectedConvert} = ${this.currencyRate}`
    );
    this.clearInputs();
  }

  onKeyupBase(e): void {
    // debugger;
    e = Math.abs(e);
    this.inputBase = e;
    this.inputConvert = this.currencyRate * Number(e);
  }

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getRates();
    // debugger;
    this.baseObject = {
      name: "base",
      selectedRate: this.selectedBase,
      inputValue: this.inputBase,
      onKeyup: this.onKeyupBase,
      onSelect: this.onSelectBase,
    };

    this.convertObject = {
      name: "convert",
      selectedRate: this.selectedConvert,
      inputValue: this.inputConvert,
      onSelect: this.onSelectBase,
    };
  }

  ngDoCheck() {
    this.baseObject = {
      selectedRate: this.selectedBase,
      inputValue: this.inputBase,
    };

    this.convertObject = {
      name: "convert",
      selectedRate: this.selectedConvert,
      inputValue: this.inputConvert,
    };
  }
}
