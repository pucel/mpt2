import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { AccordionModule } from 'primeng/accordion'
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@NgModule({
  imports: [
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    AccordionModule,
    FieldsetModule,
    ScrollPanelModule,
    ToastModule,
    TabMenuModule,

  ],
  exports: [
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    AccordionModule,
    FieldsetModule,
    ScrollPanelModule,
    ToastModule,
    TabMenuModule
  ]
})

export class primeNgModule { }
