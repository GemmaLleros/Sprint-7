import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public totalPrice: number = 0;
  
  calculateTotal(pn: number, ln: number): number {
    this.totalPrice = pn * ln * 30;
    return this.totalPrice;
  }
}
