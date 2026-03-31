import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-quantidade',
  standalone: false,
  templateUrl: './seletor-quantidade.html',
  styleUrl: './seletor-quantidade.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorQuantidade),
      multi: true,
    },
  ],
})
export class SeletorQuantidade implements ControlValueAccessor {
  valor = signal<number>(0);
  isDisabled = signal<boolean>(false);

  onChange = (val: number) => {};
  onTouch = () => {};

  incrementar() {
    if (this.isDisabled()) return;

    this.valor.update((v) => v + 1);
    this.onChange(this.valor());
    this.onTouch();
  }

  decrementar() {
    if (this.isDisabled()) return;

    if (this.valor() > 0) {
      this.valor.update((v) => v - 1);
      this.onChange(this.valor());
      this.onTouch();
    }
  }

  writeValue(val: number): void {
    this.valor.set(val ?? 0);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
