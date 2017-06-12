import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  adres1:string = "ul.Spacerowa 5, Warszawa";
  adres2:string = "ul.Partyzantów 23, Gdańsk";
  adres3:string = "ul.Łączności 1, Elbląg";

  ngOnInit () {
  };
}


