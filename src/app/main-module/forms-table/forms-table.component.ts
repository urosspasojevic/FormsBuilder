import { Component, OnInit, Input } from '@angular/core';
import { FormDefinition, FieldType } from './form-definition.model';

@Component({
  selector: 'forms-table',
  templateUrl: './forms-table.component.html',
  styleUrls: ['./forms-table.component.scss']
})
export class FormsTableComponent implements OnInit {

  constructor() { }

  @Input('forms') forms: Array<FormDefinition>;

  public FieldType = FieldType;

  ngOnInit() {
  }

}
