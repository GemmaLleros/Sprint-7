import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public totalPrice: number = 0;
  public budgets: any[] = [];

  calculateTotal(pageNumber: number, languageNumber: number): number {
    this.totalPrice = 0; // Reiniciar el totalPrice a 0
    if (pageNumber > 1) {
      this.totalPrice += (pageNumber - 1) * 30; // Restar 1 al pageNumber y sumar al totalPrice
    }
    if (languageNumber > 1) {
      this.totalPrice += (languageNumber - 1) * 30; // Restar 1 al languageNumber y sumar al totalPrice
    }
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





