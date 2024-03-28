import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Test','Aarsh'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.formbiddenEmails)
      }),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
       (value) => console.log(value)
    );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username':'Max',
        'email':'max@gmail.com',
      },
      'gender':'male',
      'hobbies':[]
    });

    this.signupForm.patchValue({
      'userData': {
        'username':'Anna'
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm);
    //if we do not wish to reset the whole form when we click the submit button in this below case we wanna keep the gender
    this.signupForm.get('userData').reset({
      username: '',
      email: ''
    });
    this.signupForm.get('hobbies').reset([]);
    
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  //custom validator
  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if( this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}; //custom error code
    }
    return null;
  }

  //async validator
  formbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() =>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
