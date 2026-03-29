import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBuscaService } from '../../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {
  constructor(
    public dialog: MatDialog,
    public formBuscaService: FormBuscaService,
    private fb: FormBuilder,
  ) {}

  openDialog() {
    this.dialog.open(Modal, {
      width: '50%',
    });
  }
}
