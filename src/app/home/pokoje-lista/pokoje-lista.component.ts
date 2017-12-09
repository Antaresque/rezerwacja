import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokoje-lista',
  templateUrl: './pokoje-lista.component.html',
  styleUrls: ['./pokoje-lista.component.css']
})
export class PokojeListaComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
