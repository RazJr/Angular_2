import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public tituloEmpresa:string='RJ';

  public NavbarTitulos: Array<string> = ['Home','About','Shop','Blog','Contact'];

  constructor() { }

  ngOnInit(): void {
  }

}
