import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rate } from '../rate';

@Component({
  selector: 'currency-input-select',
  templateUrl: './currency-input-select.component.html',
  styleUrls: ['./currency-input-select.component.scss']
})

export class CurrencyInputSelectComponent implements OnInit {
  @Input() model: any;
  @Input() currencyArr: Rate[];
  @Output() onKeyupFn: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSelectFn: EventEmitter<any> = new EventEmitter<any>();
  @Output() onFocusFn: EventEmitter<any> = new EventEmitter<any>();

  name: string;
  inputValue: any;
  inputId: string = this.name;
  selectedRate: string;
  allowedRates: string[];

  focusEvent(e) {
    this.onFocusFn.emit(e);
  }

  onKeyup(e) {
    //console.log(e);
    this.onKeyupFn.emit(e);
  }

  onSelect(e) {
   // console.log(e);
    this.onSelectFn.emit(e);
  }

  constructor() { }

  ngOnChanges() {
    this.selectedRate = this.model.selectedRate;
    this.inputValue = this.model.inputValue;
  }

  ngOnInit() {
    this.name = `currency-${this.model.name}`;
    this.selectedRate = this.model.selectedRate;
    this.inputValue = this.model.inputValue;
    this.allowedRates = this.model.allowedRates;
  }

}
