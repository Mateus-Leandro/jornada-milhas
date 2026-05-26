import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../../../core/services/form-busca/form-busca.service';
import { Companhia } from '../../../../../core/types/companhias';
import { CompanhiaService } from '../../../../../core/services/companhia/companhia.service';

@Component({
  selector: 'app-companhias',
  standalone: false,
  templateUrl: './companhias.html',
  styleUrl: './companhias.scss',
})
export class Companhias implements OnInit {
  companhias: Companhia[] = [];
  selecionadas: Companhia[] = [];

  companhiasControl: FormControl<number[] | null>;

  constructor(
    private companhiaService: CompanhiaService,
    private formBuscaService: FormBuscaService,
    private cdr: ChangeDetectorRef,
  ) {
    this.companhiasControl = this.formBuscaService.obterControle<number[] | null>('companhias');
  }

  ngOnInit(): void {
    this.companhiaService.listar().subscribe((res) => {
      this.companhias = res;
      this.cdr.detectChanges();
    });

    this.companhiasControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.selecionadas = [];
      }
    });
  }

  alternarCompanhia(companhia: Companhia, checked: boolean): void {
    if (!checked) {
      this.selecionadas = this.selecionadas.filter((comp) => comp != companhia);
    } else {
      this.selecionadas.push(companhia);
    }
    this.formBuscaService.formBusca.patchValue({
      companhias: this.selecionadas.map((comp) => comp.id),
    });
  }

  companhiaSelecionada(companhia: Companhia): boolean {
    return this.selecionadas.includes(companhia);
  }
}
