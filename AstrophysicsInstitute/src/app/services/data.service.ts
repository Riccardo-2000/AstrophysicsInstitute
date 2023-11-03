import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any[] = [
    {
      type:"U.F.O",
      albedo:"",
      datetime:"2023-11-03T11:30",
      declination:3,
      distance:"",
      harvard_class:"",
      hour_angle:3,
      mass:"",
      orbital_inclination:"",
      radius: "",
      solar_system:"",
      temperature:""}
  ]; // Simula un array di oggetti registrati
  
  private dataSubject = new BehaviorSubject<any[]>(this.data);
  data$ = this.dataSubject.asObservable();

  options = {
    'pianeta': [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1] ,
    'stella': [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1] ,
    'asteroide': [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1] ,
    'meteora': [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0,] ,
    'U.F.O': [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0] 
  }

  getOptions(){
    return this.options
  }


  addData(item: any) {
    this.data.push(item);
    //this.dataSubject.next(this.data);
  }

  updateData(updatedItem: any) {
    const index = this.data.findIndex((item, i) => {return i === updatedItem.id});
    
    if (index >= 0) {
      console.log(this.data[index])
      console.log(updatedItem)
      this.data[index] = updatedItem.item;
      this.dataSubject.next(this.data);
    }
  }

  deleteData(id: number) {
    console.log(id)
    this.data = this.data.filter((item,i) =>{ 
      console.log(i,id)
      return i !== id});
     this.dataSubject.next(this.data);
  }
}
