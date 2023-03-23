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
      
  }
}
