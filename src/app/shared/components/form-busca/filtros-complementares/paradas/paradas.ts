import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../../../core/services/form-busca/form-busca.service';
interface OpcoesDeParada {
  display: string;
  value: string;
}
@Component({
  selector: 'app-paradas',
  standalone: false,
  templateUrl: './paradas.html',
  styleUrl: './paradas.scss',
})
export class Paradas implements OnInit {
  opcoesSelecionadas: OpcoesDeParada | null = null;
  opcoes: OpcoesDeParada[] = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];
  conexoesControl: FormControl<number | null>;

  constructor(private formBuscaService: FormBuscaService) {
    this.conexoesControl = this.formBuscaService.obterControle<number>('conexoes');
  }

  ngOnInit(): void {
    this.conexoesControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.opcoesSelecionadas = null;
      }
    });
  }

  alternarParada(opcao: OpcoesDeParada, checked: boolean) {
    if (!checked) {
      this.opcoesSelecionadas = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null,
      });
      return;
    }
    this.opcoesSelecionadas = opcao;
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value),
    });
  }

  paradaSelecionada(opcao: OpcoesDeParada): boolean {
    return this.opcoesSelecionadas === opcao;
  }

  incluirParada(opcao: OpcoesDeParada): boolean {
    if (!this.opcoesSelecionadas) {
      return false;
    }

    return this.opcoesSelecionadas.value > opcao.value;
  }
}
