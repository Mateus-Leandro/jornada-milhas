import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {
  formGroup: FormGroup;
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.formGroup = this.fb.group({
      origem: [''],
      destino: [''],
    });
  }

  openDialog() {
    this.dialog.open(Modal, {
      width: '50%',
    });
  }

  trocarOrigemDestino() {
    const auxiliarOrigem = this.origem?.value || '';

    this.origem?.setValue(this?.destino?.value || '');
    this.destino?.setValue(auxiliarOrigem);
  }

  get origem() {
    return this.formGroup.get('origem');
  }

  get destino() {
    return this.formGroup.get('destino');
  }
}
