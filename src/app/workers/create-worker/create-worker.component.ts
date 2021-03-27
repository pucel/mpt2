import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import { Worker } from '../worker.model';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.scss']
})
export class CreateWorkerComponent implements OnInit {

  countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  banks = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  healthInsurance = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  newWorkerForm: FormGroup;

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    //let dateOfBirth: Date = null;

    this.newWorkerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      gender: [''],
      dateOfBirth: [''],
      citizenship: [''],
      country: [''],
      street: [''],
      city: [''],
      zip: [''],
      countryAddress: [''],
      streetContact: [''],
      cityContact: [''],
      zipContact: [''],
      countryAddressContact: [''],
      phone: [''],
      email: [''],
      bank: [''],
      bankCode: [''],
      bankAccountNumber: [''],
      iban: [''],
      swift: [''],
      healthInsurance: [''],
      bornNumber: [''],
      contractType: [''],
      dateOfCooperation: [''],
      capacity: [''],
      capacityOther: [''],
      linkedIn: [''],
      facebook: [''],
      salary: [''],
      limitation: [''],
      fixSalaryAmount: [''],
      salaryPerHour: [''],
      graduatedFixSalary: [''],
      salaryChangeFrom: [''],
      graduatedSalaryChange: [''],
      fixVariableSalary: [''],
      variablePart: [''],
      dateLimitation: [''],
      position: [''],
      team: [''],
      seat: [''],
      manager: [''],
      costCenter: [''],
      activeTradingLicence: [''],
      exEmployer: [''],
      student: ['']
    }
    );
  }

  onSubmit() {
    this.store.dispatch(new WorkerActions.AddWorker(<Worker>this.newWorkerForm.value));
  }

}
