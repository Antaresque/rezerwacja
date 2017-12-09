import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

}
 