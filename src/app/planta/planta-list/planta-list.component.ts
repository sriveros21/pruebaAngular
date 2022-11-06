import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  constructor(private plantService: PlantaService) { }

  getPlantas(): void {
    this.plantService.getPlants().subscribe((plantas) => {
      this.plantas=plantas;
    })
  }

  getNumberIntPlantas():number{
    let interiorCount = this.plantas.filter(planta=>{return planta.tipo.includes('Interior')}).length;
    return interiorCount;
  }

  getNumberExtPlantas():number{
    let exteriorCount = this.plantas.filter(planta=>{return planta.tipo.includes('Exterior')}).length;
    return exteriorCount;
  }
  ngOnInit() {
    this.getPlantas();
    this.getNumberIntPlantas();
  }

}
