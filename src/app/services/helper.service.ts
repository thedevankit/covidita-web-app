import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  loginSideNav = new BehaviorSubject(false);
  constructor() { }
}
