import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      web: false,
      seo: false,
      ads: false
    });
  }
  get total() {
    let price = 0;

    if (this.form.value.web) {
      price += 500;
    }

    if (this.form.value.seo) {
      price += 300;
    }

    if (this.form.value.ads) {
      price += 200;
    }

    return price;
  }
}


