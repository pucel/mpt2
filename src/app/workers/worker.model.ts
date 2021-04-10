export interface Worker {
  _id?: string;
  mainData: {
    firstName: string;
    lastName: string;
    middleName: string;
    gender: string;
    dateOfBirth: Date;
    citizenship: string;
    country: string;
    bornNumber: string;
  },
  address: {
    street: string;
    city: string;
    zip: string;
    countryAddress: string;
  },
  contactAddress: {
    streetContact: string;
    cityContact: string;
    zipContact: string;
    countryAddressContact: string;
  },
  contactData: {
    phoneWork: string;
    emailWork: string;
    phonePrivate: string;
    emailPrivate: string;
    linkedIn: string;
    facebook: string;
  },
  bankData: {
    bank: string;
    bankCode: string;
    bankAccountNumber: string;
    iban: string;
    swift: string;
    healthInsurance: string;
  },
  contractData: {
    contractType: string;
    dateOfCooperation: string;
    capacity: string;
    capacityOther: string;
    salary: string;
    limitation: string;
    fixSalaryAmount: string;
    salaryPerHour: string;
    graduatedFixSalary: string;
    salaries: {
      salaryChange: string;
      salaryChangeDate: string;
    },
    // salaryChangeFrom: string;
    // graduatedSalaryChange: string;
    fixVariableSalary: string;
    variablePart: string;
    dateLimitation: string;
    position: string;
    team: string;
    seat: string;
    manager: string;
    costCenter: string;
    activeTradingLicence: string;
    exEmployer: string;
    student: string;
  }
}


