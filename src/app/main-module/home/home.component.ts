import { Component, OnInit } from '@angular/core';
import { FormsService } from './forms.service';
import { FormDefinition } from '../forms-table/form-definition.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FormsService]
})
export class HomeComponent implements OnInit {

  constructor(private formsService: FormsService) { }

  public forms: Array<FormDefinition>;

  ngOnInit() {
    this.formsService.getForms().subscribe(forms => this.forms = forms);
  }

}
