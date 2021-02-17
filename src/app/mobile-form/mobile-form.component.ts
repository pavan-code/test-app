import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.css']
})
export class MobileFormComponent implements OnInit {
  formValue: any;

  constructor(private fb: FormBuilder) { }
  mobileForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }
  mobilesList = []
  createForm() {
    this.mobileForm = this.fb.group({
      mobiles : this.fb.array([
        this.fb.control('')
      ], [Validators.minLength(1), Validators.required])
    })
  }
  get mobiles() {
    return this.mobileForm.get('mobiles') as FormArray;
  }
  addNewMobile() {
    this.mobiles.push(this.fb.control(''));
  }
  removeNumber(index: number) {    
    this.mobiles.removeAt(index);
  }
  submit() {
    this.formValue = this.mobileForm.value;
    let count = 0;
    for(let mobile of this.mobiles.controls) {
      let key = 'phoneNumber' + count;
      let obj = {
        'phoneNumber' : mobile.value
      }
      this.mobilesList.push(obj);
      count += 1;
    }
    console.log(this.mobilesList);
    
  }

}
