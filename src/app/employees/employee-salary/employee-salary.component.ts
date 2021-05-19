import { Component, OnInit } from '@angular/core';

import { User } from '../../_models';
import { AuthenticationService, TransferService } from '../../_services';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html'
})
export class EmployeeSalaryComponent implements OnInit {
    public user: User;
    public component: any;

    constructor(protected authService: AuthenticationService) { }

    ngOnInit() {
        this.changeUser(this.authService.getUser());
    }

    changeUser(user: User) {
        this.user = user;
        this.component && this.component.changeUser(user);
    }

    componentAdded(component) {
        this.component = component;
        this.component.changeUser(this.user);
    }

    componentRemoved(component) {
        this.component = null;
    }
}
