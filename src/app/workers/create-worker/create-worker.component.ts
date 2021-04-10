import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
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
  salaries = new FormArray([]);

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    //let dateOfBirth: Date = null;

    this.newWorkerForm = this.fb.group({
      mainData: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        middleName: [''],
        gender: [''],
        dateOfBirth: [''],
        citizenship: [''],
        country: [''],
        bornNumber: [''],
      }),
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: [''],
        countryAddress: [''],
      }),
      contactAddress: this.fb.group({
        streetContact: [''],
        cityContact: [''],
        zipContact: [''],
        countryAddressContact: [''],
      }),
      contactData: this.fb.group({
        phoneWork: [''],
        emailWork: [''],
        phonePrivate: [''],
        emailPrivate: [''],
        linkedIn: [''],
        facebook: [''],
      }),
      bankData: this.fb.group({
        bank: [''],
        bankCode: [''],
        bankAccountNumber: [''],
        iban: [''],
        swift: [''],
        healthInsurance: [''],
      }),
      contractData: this.fb.group({
        contractType: [''],
        dateOfCooperation: [''],
        capacity: [''],
        capacityOther: [''],

        salaries: this.fb.array([
        ]),

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
      }),
    }
    );
  }

  createSalary(): FormGroup {
    return this.fb.group({
      salaryChangeDate: [''],
      salaryChange: ['']
    });
  }

  addSalary(): void {
    this.salaries = this.newWorkerForm.get('contractData').get('salaries') as FormArray;
    this.salaries.push(this.createSalary());
  }

  deleteSalary(index: number) {
    console.log('test');
    (<FormArray>this.newWorkerForm.get('contractData').get('salaries')).removeAt(index);
  }

  onSubmit() {
    console.log(this.newWorkerForm.value);
    this.store.dispatch(new WorkerActions.AddWorker(<Worker>this.newWorkerForm.value));
  }



}
