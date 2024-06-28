import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/core/models/usuario.model';

const USER_INFO = 'userInfo';

@Component({
  selector: 'app-finalizar-cadastro',
  templateUrl: './finalizar-cadastro.component.html',
  styleUrls: ['./finalizar-cadastro.component.css']
})

export class FinalizarCadastroComponent implements OnInit {
  
  usuario !: Usuario;

  constructor() {}

  ngOnInit(): void {
    
    const userInfo : string | null = localStorage.getItem(USER_INFO);

    if(userInfo != null) {
      this.usuario = JSON.parse(userInfo);
    }

  }


}
