import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-hotels',
  templateUrl: './explore-hotels.component.html',
  styleUrls: ['./explore-hotels.component.scss']
})
export class ExploreHotelsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  checkHotelsDetails(itemName: string){

    this.router.navigate(['/detalle-hoteles'], {queryParams: { name: itemName}});

  }

}
