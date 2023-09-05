import { Component, OnInit} from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [UserserviceService]
})
export class TaskComponent implements OnInit {

  profileForm = new UntypedFormGroup({
    title: new UntypedFormControl(''),
    body: new UntypedFormControl(''),
  });
  selectedRow: any;
  isSelected: Boolean;
  newpost: any;
  loading = false;
  eventsSubject: Subject<void> = new Subject<void>();

   constructor(private userservice: UserserviceService) {}

   ngOnInit(): void {}

   //De-selection of user
   clear(){
    this.eventsSubject.next();
    this.isSelected = false;
    this.profileForm.reset();
   }
 
   //POST method to submit form values
   onSubmit() {
    this.loading = true;
    this.newpost = this.profileForm.value;
    this.newpost['userId'] = this.selectedRow.id;
    this.userservice.postComments(this.newpost).subscribe({
      next: (data) => {
        this.eventsSubject.next(data.userId);
        this.isSelected = false;
        this.profileForm.reset();
    },
      error: (e) => alert("Oh!! Something went wrong!"),
      complete: () => { this.loading = false; alert('post success');}
     })
   }

   //Emit event on every row selection to show username in form.
   onSelectionChange(make: boolean, value: any ){
    this.isSelected = make;
    this.selectedRow = value.name;
  }

}
