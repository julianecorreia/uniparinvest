import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Acao} from './acao.model';
import {AcaoService} from '../../service/acao.service';

@Component({
  selector: 'app-tickers',
  imports: [],
  templateUrl: './tickers.html',
  styleUrl: './tickers.css'
})
export class Tickers implements OnInit {

  dataSource = new MatTableDataSource<Acao>([]);

  constructor(private acoesService: AcaoService) {
  }

  ngOnInit(): void {
    this.buscarAcoes();
  }

  private buscarAcoes() {
    this.acoesService.getAll().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        console.log(JSON.stringify(res));
      },
      error: () => alert('Erro ao buscar a lista de ações.')
      }
    );
  }
}
