import { PokojeService } from './../_core/pokoje/pokoje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dane: any = [];

  constructor(private pokoje: PokojeService) { }

  ngOnInit() {
    this.pokoje.get().subscribe(res => this.dane = res.json());
  }

}
