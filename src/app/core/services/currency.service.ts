import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrencyInterface} from "../interfaces/currency-interface";
import {ConvertCurrencyInterface} from "../interfaces/convert-currency.interface";

const api = "https://api.apilayer.com/exchangerates_data/";

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  constructor(private http: HttpClient) {
  }

  getRates(baseCurrency: string): Observable<CurrencyInterface> {
    return this.http.get<CurrencyInterface>(api + `latest?base=${baseCurrency}&symbols=UAH`);
  }

  convertCurrency(requestOptions: {amount: number, from: string, to: string}): Observable<ConvertCurrencyInterface> {
    return this.http.get<ConvertCurrencyInterface>(
      api + `convert?amount=${requestOptions.amount}&from=${requestOptions.from}&to=${requestOptions.to}`
    );
  }
}
