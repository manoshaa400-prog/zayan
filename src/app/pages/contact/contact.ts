import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
userName: string = '';
  userPhone: string = '';
  userEmail: string = '';

  salonName: string = '';
  salonLocation: string = '';
  salonDescription: string = '';

  salons: any[] = [];

  submitRequest() {

    if (!this.userName || !this.salonName) {
      alert('Please fill required fields');
      return;
    }

    const newSalon = {
      ownerName: this.userName,
      ownerPhone: this.userPhone,
      ownerEmail: this.userEmail,

      name: this.salonName,
      location: this.salonLocation,
      description: this.salonDescription,

      rating: 0,
      services: [],
      stylists: [],
      img: 'assets/default-salon.jpg'
    };

    this.salons.push(newSalon);

    // حفظ مؤقت (بدون backend)
    localStorage.setItem('userSalons', JSON.stringify(this.salons));

    alert('Your salon has been submitted successfully 🎉');

    this.clearForm();
  }

  clearForm() {
    this.userName = '';
    this.userPhone = '';
    this.userEmail = '';
    this.salonName = '';
    this.salonLocation = '';
    this.salonDescription = '';
  }

}
