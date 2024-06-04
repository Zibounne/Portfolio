import { Component } from '@angular/core';

import { Title } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})

export class ContactComponent {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Portfolio | Contact");
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    
    emailjs.sendForm(
      environment.emailjsServiceID, 
      environment.emailjsTemplateID, 
      e.target as HTMLFormElement, 
      environment.emailjsUserID)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        const confirmationMessage = document.getElementById('confirmationMessage');
        if (confirmationMessage) {
          confirmationMessage.classList.remove('hidden');
          confirmationMessage.classList.add('block');
        }
      }, (error) => {
        console.log(error.text);
      }); 
  }
  
}