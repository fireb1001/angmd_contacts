import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'app/contacts.service';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  contacts: any[];

  constructor( private contactsServ: ContactsService, public dialog: MdDialog ) {  }

  ngOnInit() {
    this.contacts = this.contactsServ.getContacts().slice(0, 5);
  }

  add() {
    const dialogRef = this.dialog.open(AddContactDialogComponent);

    dialogRef.afterClosed().subscribe(contact => {
      if (contact) {
        this.contacts.push(contact);
      }
    });
  }

  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}

@Component({
  selector: 'app-add-contact-dialog',
  template: `
    <h1 md-dialog-title>Add contact</h1>
    <md-input-container>
      <input mdInput #contactName placeholder="Contact name">
    </md-input-container>
    <md-input-container>
      <input #contactNumber mdInput placeholder="Contact number"> 
    </md-input-container>
    <button md-raised-button color="primary" 
      (click)="dialogRef.close({ name: contactName.value, number: contactNumber.value})"> Save
    </button>
    <button md-raised-button (click)="dialogRef.close()">Close dialog</button>`
})

export class AddContactDialogComponent {
  constructor(
    public dialogRef: MdDialogRef<AddContactDialogComponent>) { }
}
