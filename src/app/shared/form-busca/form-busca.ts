import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(Modal, {
      width: '50%',
    });
  }
}
