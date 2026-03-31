import { Component, input, signal } from '@angular/core';
import { FormBuscaService } from '../../../core/services/form-busca/form-busca.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  constructor(public formBuscaService: FormBuscaService) {}
}
