import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  budgets: any[] = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgets = this.budgetService.getBudgets();
  }

}

