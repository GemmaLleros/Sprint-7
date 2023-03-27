
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

interface service {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  services: any[] = [
    { name: 'Una página web', price: 500, selected: false },
    { name: 'Una consultoría SEO', price: 300, selected: false },
    { name: 'Una campaña de Google Ads', price: 200, selected: false },
  ];

  myForm: FormGroup;
  totalpanel = this.BudgetService.totalPrice;
  
  constructor(private formBuilder: FormBuilder, private BudgetService: BudgetService) {
    this.myForm = this.formBuilder.group({
      selectedService0: new FormControl(false),
      selectedService1: new FormControl(false),
      selectedService2: new FormControl(false)
    });
  }
  get selectedService0() {
    return this.myForm.get('selectedService0');
  }

  get totalSum() {
    let sum = this.services.reduce((acc, curr) => {
      return curr.selected ? acc + curr.price : acc;
    }, 0);

    if (this.services[0].selected) {
      sum += this.BudgetService.totalPrice;
    }

    return sum;
  }
}

