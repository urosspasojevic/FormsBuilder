import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormDefinition } from '../forms-table/form-definition.model';

@Injectable({ providedIn: 'root' })
export class FormsService {
    constructor(private http: HttpClient) { }


    public getForms(): Observable<Array<FormDefinition>> {
        return this.http.get<Array<FormDefinition>>(`forms/forms.json`);
    }
}
