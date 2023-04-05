import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public totalPrice: number = 0;
  public budgets: any[] = [];

  calculateTotal(pageNumber: number, languageNumber: number): number {
    this.totalPrice = pageNumber * languageNumber * 30;
    return this.totalPrice;
  }

  addBudget(name: string, client: string, service: string, totalPrice: number) {
    this.budgets.push({
      name,
      client,
      service,
      totalPrice
    });
  }

  getBudgets() {
    return this.budgets;
  }

}





