
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { BudgetService } from '../services/budget.service';
import { BudgetListComponent } from '../budget-list/budget-list.component';

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
  budgetList: BudgetListComponent = {} as BudgetListComponent;

  constructor(
    private formBuilder: FormBuilder, 
    private BudgetService: BudgetService
  ) {

    this.myForm = this.formBuilder.group({
      selectedService0: new FormControl(false),
      selectedService1: new FormControl(false),
      selectedService2: new FormControl(false),
      budgetName: new FormControl(''),
      clientName: new FormControl('')
    });
  }
  get selectedService0() {
    return this.myForm.get('selectedService0');
  }

  get totalSum() {
    let sumServices = this.services.reduce((acc, curr) => {
      return curr.selected ? acc + curr.price : acc;
    }, 0);

    if (this.services[0].selected) {
      sumServices += this.BudgetService.totalPrice;
    }

    return sumServices;
  }

  saveBudget() {
    const budgetName = this.myForm.get('budgetName')?.value;
    const clientName = this.myForm.get('clientName')?.value;
    const service = this.services.find(service => service.selected);
    const totalPrice = this.totalSum;
    
    // Verificar si el totalPrice es igual a cero
    if (totalPrice === 0) {
      // Mostrar alerta al usuario
      alert('Por favor, seleccione al menos un servicio para crear un presupuesto.');
      return; // Salir del método sin guardar el presupuesto
    }
    
    this.BudgetService.addBudget(budgetName, clientName, service.name, totalPrice);
    
    this.myForm.reset({
      selectedService0: false,
      selectedService1: false,
      selectedService2: false,
      budgetName: '',
      clientName: ''
    });
    
    // Establecer el total del precio a cero después de guardar el presupuesto
    this.services.forEach(service => {
      service.selected = false;
    });
    this.BudgetService.totalPrice = 0;
  }
  
    
}


