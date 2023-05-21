export interface CurrencyInterface {
  base: string;
  date: string;
  rates: {
    UAH: number,
  };
  success: boolean;
  timestamp: number;
}
