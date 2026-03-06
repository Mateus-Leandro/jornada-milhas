import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  src = input<string>('');
  alt = input<string>('');
}
