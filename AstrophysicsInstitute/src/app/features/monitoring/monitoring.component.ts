import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  data: any[] = [];
  selectedData: any | null = null;

  options:any = {}

  constructor(private dataService: DataService) {}


  selectData(item: any, i:number) {
    this.selectedData = { "id": i , "item" : {...item} };
    console.log(this.selectedData)
  }

  updateData() {
    console.log(this.selectedData.item)
    if (this.selectedData.item.distance > 130 && this.selectedData.item.solar_system===true) {
      //stampa errore
    }else{
      this.dataService.updateData(this.selectedData);
      this.selectedData = null;
    }
  }

  deleteData(id: number) {
    this.dataService.deleteData(id);
    this.selectedData = null;
  }

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      this.data = data;
      console.log(data)
    });

    this.options = this.dataService.getOptions()
  }

}
