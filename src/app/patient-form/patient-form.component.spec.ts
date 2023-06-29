import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent {
  patient = {
    name: '',
    dob: '',
    gender: '',
    service: '',
    comments: ''
  };

  savePatient() {
    // Code to save the patient data to the backend
    console.log(this.patient);
    // Reset the form fields
    this.patient = {
      name: '',
      dob: '',
      gender: '',
      service: '',
      comments: ''
    };
  }
}