import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  messageForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      phone: ['', [Validators.required, Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/)]],
      petName: ['', [Validators.required]],
      msg: ['', [Validators.required, Validators.minLength(30)]]
    })
  }

  sendMessage(): void {}

}
