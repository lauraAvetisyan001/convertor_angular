import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../core/services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  currencies = [
    {title: 'US', value: 'USD'},
    {title: 'EU', value: 'EUR'},
    {title: 'UA', value: 'UAH'},
  ];
  selectedInputCurrency = {title: '', value: ''};
  selectedOutputCurrency = {title: '', value: ''};
  inputAmount: number = 1;
  outputAmount: number = 1;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
  }

  changeSelectedCurrency(title: string, value: string, currencyType: string) {
    currencyType === 'input'
      ? this.selectedInputCurrency = {title: title, value: value}
      : this.selectedOutputCurrency = {title: title, value: value};
    this.convertCurrency(currencyType);
  }

  convertCurrency(context: string) {
    const requestOptions = {
      amount: 0,
      from: '',
      to: ''
    }
    if (context === 'input') {
      requestOptions.amount = this.inputAmount;
      requestOptions.from = this.selectedInputCurrency.value;
      requestOptions.to = this.selectedOutputCurrency.value;
    } else if ('output') {
      requestOptions.amount = this.outputAmount;
      requestOptions.from = this.selectedOutputCurrency.value;
      requestOptions.to = this.selectedInputCurrency.value;
    }
    this.currencyService.convertCurrency(requestOptions)
      .subscribe(data => {
        if (context === 'input') {
          this.outputAmount = data.result;
        } else if (context === 'output') {
          this.inputAmount = data.result;
        }
      })
  }
}
