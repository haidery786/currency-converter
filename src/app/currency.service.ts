import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Rate } from "./rate";

@Injectable()
export class CurrencyService {
  constructor() {}

  getRates(base: string): Observable<Rate[]> {
    let baserateData;

    switch (base) {
      case "EUR": {
        baserateData = [
          { id: 1, code: "AUD", rate: 1.54442 },
          { id: 2, code: "GBP", rate: 0.87613 },
          { id: 4, code: "USD", rate: 1.16682 },
        ];

        break;
      }
      case "USD": {
        baserateData = [
          { id: 1, code: "AUD", rate: 1.32361 },
          { id: 2, code: "GBP", rate: 0.75087 },
          { id: 4, code: "EUR", rate: 0.85703 },
        ];

        break;
      }
      case "GBP": {
        baserateData = [
          { id: 1, code: "AUD", rate: 1.76277 },
          { id: 2, code: "USD", rate: 1.33179 },
          { id: 4, code: "EUR", rate: 1.14138 },
        ];

        break;
      }
      case "AUD": {
        baserateData = [
          { id: 1, code: "GBP", rate: 0.56729 },
          { id: 2, code: "USD", rate: 0.75551 },
          { id: 4, code: "EUR", rate: 0.64749 },
        ];
        break;
      }
    }

    return of(baserateData);
  }
}
