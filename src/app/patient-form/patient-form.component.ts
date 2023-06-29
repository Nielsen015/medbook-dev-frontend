import { Component } from '@angular/core';
import { DateFormatPipe } from '../date-format.pipe';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
  providers: [DateFormatPipe]
})
export class PatientFormComponent {

}

