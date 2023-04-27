import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    username: ['admin', [Validators.required]],
    password: ['admin', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private service: UserService) {}

  submit() {
    if (!this.form.valid) return;
    const { password, username } = this.form.value;

    this.service
      .getUser(username!, password!)
      .subscribe((response) => console.log(response));
  }
}
