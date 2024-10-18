import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
public contador =0;
public contador2 =0;
  constructor(private router: Router) { }

  adicionar() {
    if(this.contador===100000000000){
      this.contador=0;
    }else{
      this.contador++;
    }
  }
  retirar() {
    if(this.contador2===100000000000){
      this.contador2=0;
    }else{
      this.contador2++;
    }
  }
}
