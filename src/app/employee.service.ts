import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

    export class EmployeeService{

        constructor(private http: HttpClient) {
            
        }
        fetchEmployee(): Observable<Object>{
            return this.http.get('http://localhost:8080/employees/');
        }
    }