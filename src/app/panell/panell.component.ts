import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent {
  form: FormGroup;
  pages: AbstractControl;
  languages: AbstractControl;

  constructor(private fb:FormBuilder, private budgetService: BudgetService  ){
      this.form = this.fb.group({
        pages: [1, Validators.required],
        languages: [1, Validators.required]
      });
      this.pages =  this.form.get('pages') as AbstractControl;
      this.languages =  this.form.get('languages') as AbstractControl;

    // Agregar el listener para los cambios de valor en el formulario
    this.form.valueChanges.subscribe(() => {
      this.getValue();
    });
  }

  sumar(control: AbstractControl) {
    const currentValue = control.value;
    control.setValue(currentValue + 1);
  }

  restar(control: AbstractControl) {
    const currentValue = control.value;
    if (currentValue > 1) {
      control.setValue(currentValue - 1);
    }
  }
  getValue() {
    const pages = this.pages.value;
    const languages = this.languages.value;
    if (pages !== 1 || languages !== 1) { // Verificar si se ha modificado el valor de pages o languages
      this.budgetService.calculateTotal(pages, languages);
    } else {
      this.budgetService.calculateTotal(0, 0); // Si no se ha modificado, llamar a calculateTotal con 0 en ambos parámetros
    }
  }
  
}
