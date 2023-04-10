import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  budgets: any[] = [];
  filteredBudgets: any[] = [];
  searchTerm: string = '';

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgets = this.budgetService.getBudgets();
    this.filteredBudgets = this.budgets;
  }

  deleteBudget(index: number) {
    this.budgetService.deleteBudget(index);
    this.budgets = this.budgetService.getBudgets();
  }

  sortByName() {
    this.budgets.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  sortByDate() {
    this.budgets.sort((a: any, b: any) => (a.date - b.date) ? 1 : -1);
  }

  resetOrder() {
    this.budgets.sort((a: any, b: any) => (a.id > b.id) ? 1 : -1);
  }

  searchBudgetsByName() {
    console.log('Presupuestos filtrados:', this.filteredBudgets);
    if (this.searchTerm.trim() === '') {
      this.filteredBudgets = this.budgets;
    } else {
      this.filteredBudgets = this.budgets.filter(budget => budget.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  
    if (this.filteredBudgets.length === 0) {
      alert('No se encontraron presupuestos con ese nombre.');
    }
  }

  resetOrderAndSearch() {
    this.resetOrder(); // Resetea el orden
    this.searchTerm = ''; // Resetea el término de búsqueda
    this.filteredBudgets = this.budgets; // Muestra todos los presupuestos de nuevo
  }
  
}





