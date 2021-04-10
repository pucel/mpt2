import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as AppState from '../../store/app.reducer';
import * as WorkerActions from '../store/worker.actions';
import { Worker } from '../worker.model';

@Component({
  selector: 'app-update-worker',
  templateUrl: './update-worker.component.html',
  styleUrls: ['./update-worker.component.scss']
})
export class UpdateWorkerComponent implements OnInit {

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

  updateWorkerForm: FormGroup;
  editMode = false;
  store$: Observable<boolean>;
  worker: Worker;
  salaries = new FormArray([]);

  constructor(private store: Store<AppState.AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {

    //Get the current worker from store
    this.store$ = this.store.select('worker').pipe(
      map(workerState => {
        if (workerState.currentWorker) {
          console.log('true11111');
        }
        this.worker = workerState.currentWorker;
        return true;
      }),
      tap(() => {
        this.initForm()
      })
    );
  }

  initForm() {
    this.updateWorkerForm = this.fb.group({
      _id: [this.worker._id],
      mainData: this.fb.group({
        firstName: [this.worker.mainData.firstName],
        lastName: [this.worker.mainData.lastName],
        middleName: [this.worker.mainData.middleName],
        gender: [this.worker.mainData.gender],
        dateOfBirth: [new Date(this.worker.mainData.dateOfBirth)],
        citizenship: [this.worker.mainData.citizenship],
        country: [this.worker.mainData.country],
        bornNumber: [this.worker.mainData.bornNumber],
      }),
      address: this.fb.group({
        street: [this.worker.address.street],
        city: [this.worker.address.city],
        zip: [this.worker.address.zip],
        countryAddress: [this.worker.address.countryAddress],
      }),
      contactAddress: this.fb.group({
        streetContact: [this.worker.contactAddress.streetContact],
        cityContact: [this.worker.contactAddress.cityContact],
        zipContact: [this.worker.contactAddress.zipContact],
        countryAddressContact: [this.worker.contactAddress.countryAddressContact],
      }),
      contactData: this.fb.group({
        phoneWork: [this.worker.contactData.phoneWork],
        emailWork: [this.worker.contactData.emailWork],
        phonePrivate: [this.worker.contactData.phonePrivate],
        emailPrivate: [this.worker.contactData.emailPrivate],
        linkedIn: [this.worker.contactData.linkedIn],
        facebook: [this.worker.contactData.facebook],
      }),
      bankData: this.fb.group({
        bank: [this.worker.bankData.bank],
        bankCode: [this.worker.bankData.bankCode],
        bankAccountNumber: [this.worker.bankData.bankAccountNumber],
        iban: [this.worker.bankData.iban],
        swift: [this.worker.bankData.swift],
        healthInsurance: [this.worker.bankData.healthInsurance],
      }),
      contractData: this.fb.group({
        contractType: [this.worker.contractData.contractType],
        dateOfCooperation: [this.worker.contractData.dateOfCooperation],
        capacity: [this.worker.contractData.capacity],
        capacityOther: [this.worker.contractData.capacityOther],
        salary: [this.worker.contractData.salary],
        limitation: [this.worker.contractData.limitation],
        fixSalaryAmount: [this.worker.contractData.fixSalaryAmount],
        salaryPerHour: [this.worker.contractData.salaryPerHour],
        graduatedFixSalary: [this.worker.contractData.graduatedFixSalary],
        salaries: this.fb.array([
        ]),
        fixVariableSalary: [this.worker.contractData.fixVariableSalary],
        variablePart: [this.worker.contractData.variablePart],
        dateLimitation: [this.worker.contractData.dateLimitation],
        position: [this.worker.contractData.position],
        team: [this.worker.contractData.team],
        seat: [this.worker.contractData.seat],
        manager: [this.worker.contractData.manager],
        costCenter: [this.worker.contractData.costCenter],
        activeTradingLicence: [this.worker.contractData.activeTradingLicence],
        exEmployer: [this.worker.contractData.exEmployer],
        student: [this.worker.contractData.student]
      }),
    })
  }

  // this.updateWorkerForm = new FormGroup({
  //   'firstName': new FormControl(this.worker.firstName, Validators.required),
  //   'lastName': new FormControl(this.worker.lastName, Validators.required),
  // });

  onSubmit() {
    this.store.dispatch(new WorkerActions.UpdateWorker(<Worker>this.updateWorkerForm.value));
  }

  createSalary(): FormGroup {
    return this.fb.group({
      salaryChangeDate: [''],
      salaryChange: ['']
    });
  }

  addSalary(): void {
    this.salaries = this.updateWorkerForm.get('contractData').get('salaries') as FormArray;
    this.salaries.push(this.createSalary());
  }

  deleteSalary(index: number) {
    console.log('test');
    (<FormArray>this.updateWorkerForm.get('contractData').get('salaries')).removeAt(index);
  }

  onClose() {
    //this.store.dispatch(new WorkerActions.SetWorkerListState(WorkerStatus.Ready))
  }
}

