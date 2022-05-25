import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent   {

  // public subscribeForm: FormGroup;
  //   public email: FormControl;
  //   private unsubscribe = new Subject<void>();

  //   constructor(private databaseService: DatabaseService, private mailerService: MailerService, private http: HttpClient) { }

  //   ngOnInit() {
  //       this.createFormControls();
  //       this.createForm();
  //   }

  //   createFormControls() {
  //       this.email = new FormControl('', [
  //           Validators.required
  //       ]);
  //   }

  //   createForm() {
  //       this.subscribeForm = new FormGroup({
  //           email: this.email
  //       });
  //   }

  //   sendMail() {
  //       if (this.subscribeForm.valid) {
  //           this.http.post("link to the php file.", email).subscribe();
  //       }
  //   }

  //   ngOnDestroy(): void {
  //       this.unsubscribe.next();
  //       this.unsubscribe.complete();
  //   }
  // }

}
