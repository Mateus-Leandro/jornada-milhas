import { Component, input, OnInit, signal, computed } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UnidadeFederativa } from '../../../../core/types/unidade-federativa';
import { UnidadeFederativaService } from '../../../../core/services/unidade-federativa/unidade-federativa.service';

@Component({
  selector: 'app-dropdown-uf',
  standalone: false,
  templateUrl: './dropdown-uf.html',
  styleUrl: './dropdown-uf.scss',
})
export class DropdownUf implements OnInit {
  label = input.required<string>();
  iconePrefix = input.required<string>();
  control = input.required<FormControl<string>>();

  unidadesFederativas = signal<UnidadeFederativa[]>([]);
  termoBusca = signal<string>('');

  constructor(private ufService: UnidadeFederativaService) {}

  opcoesFiltradas = computed(() => {
    const ufs = this.unidadesFederativas();
    const termo = this.termoBusca()?.toLowerCase() ?? '';

    if (!termo) {
      return ufs;
    }

    return ufs.filter((estado) => estado.nome.toLowerCase().includes(termo));
  });

  ngOnInit(): void {
    this.termoBusca.set(this.control().value ?? '');

    this.control().valueChanges.subscribe((value) => {
      this.termoBusca.set(value ?? '');
    });

    this.ufService.listar().subscribe((ufs) => {
      this.unidadesFederativas.set(ufs);
    });
  }
}
