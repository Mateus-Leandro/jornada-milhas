import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  adultos = signal<number>(0);
  criancas = signal<number>(0);
  bebes = signal<number>(0);
}
