import { Component, HostListener, OnInit } from '@angular/core';
import { RedirectService } from 'src/core/services/redirect/redirect.service';

@Component({
  selector: 'app-home-content-cuidador',
  templateUrl: './home-content-cuidador.component.html',
  styleUrls: ['./home-content-cuidador.component.css']
})
export class HomeContentCuidadorComponent implements OnInit {

  firstListColsNum !: number;

  constructor(private _redirectService: RedirectService) {}

  ngOnInit(): void {
    this.reConfiguraGrid();
  }

  redirect(path: string) {
    this._redirectService.redirect(path);
  }

  @HostListener("window:resize", []) reConfiguraGrid() {
    if(window.innerWidth <= 720){
      this.firstListColsNum = 1;
    }else{
      this.firstListColsNum = 2;
    }
  }

}
