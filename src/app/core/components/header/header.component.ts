import {Component, OnInit} from '@angular/core';
import {CurrencyInterface} from "../../interfaces/currency-interface";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currencies: CurrencyInterface[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.convert('USD');
    this.convert('EUR');
  }

  convert(currency: string) {
    this.currencyService.getRates(currency).subscribe(data => {
      this.currencies.push(data);
    })
  }
}
