import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CelestialBody } from '../interfaces/celestialBody';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //example
  private data: CelestialBody[] = [
    {
      type: "U.F.O",
      albedo: null,
      datetime: new Date("2023-11-03T11:30"),
      declination: 3,
      distance: null,
      harvard_class: null,
      hour_angle: 3,
      mass: null,
      orbital_inclination: null,
      radius: null,
      temperature: null,
      solar_system: false,
      idUser:555
    },
    {
      type: "pianeta",
      albedo: null,
      datetime: new Date("2023-01-03T11:30"),
      declination: 7,
      distance: null,
      harvard_class: null,
      hour_angle: 7,
      mass: null,
      orbital_inclination: null,
      radius: null,
      temperature: null,
      solar_system: false,
      idUser:1
    }
  ]; 

  private dataSubject = new BehaviorSubject<any[]>(this.data);
  data$ = this.dataSubject.asObservable();

  //celestial body options
  options = {
    'pianeta': {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_(remastered).jpg/260px-The_Blue_Marble_(remastered).jpg", "description": "In astronomia, corpo celeste che orbita attorno a una stella e non è in grado di produrre energia tramite fusione nucleare, la cui massa è sufficientemente grande da conferirgli forma sferoidale e la cui fascia orbitale è priva di eventuali corpi di dimensioni confrontabili o superiori; per gli antichi, qualsiasi corpo celeste da essi conosciuto che non occupasse una posizione fissa sulla sfera celeste", "value": [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1]},
    'stella': {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/4heic0516d.jpg/260px-4heic0516d.jpg", "description": "Una stella è un corpo celeste che brilla di luce visibile, propria. Si tratta di uno sferoide di plasma che attraverso processi di fusione nucleare nel proprio nucleo genera energia, irradiata nello spazio sotto forma di radiazione elettromagnetica (luminosità), flusso di particelle elementari (vento stellare) e neutrini.[2] Buona parte degli elementi chimici più pesanti dell'idrogeno e dell'elio vengono sintetizzati nei nuclei delle stelle tramite il processo di nucleosintesi.", "value":[1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]},
    'asteroide': {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/243_ida.jpg/290px-243_ida.jpg", "description": "Un asteroide è un piccolo corpo celeste simile per composizione ad un pianeta terrestre, generalmente privo di una forma sferica, di solito con un diametro inferiore al chilometro, anche se non mancano corpi di grandi dimensioni, giacché tecnicamente anche i corpi particolarmente massicci recentemente scoperti nel Sistema solare esterno sono da considerarsi tali.", "value":[1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1]},
    'meteora': {"url": "https://www.focus.it/images/2021/07/31/meteora-contro-terra_w630.jpg", "description": "In astronomia, il fenomeno luminoso dovuto a un meteoroide che attraversa l'atmosfera; stella cadente, filante.", "value":[1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0,]},
    'U.F.O': {"url": "https://cdn.ttgitalia.com/media/2023/09/38919_161_low.jpg", "description": "Un oggetto volante non identificato (OVNI) noto anche con gli acronimi inglesi UFO (Unidentified Flying Object o Unknown Flying Object) e UAP (Unidentified Aerial Phenomenon)[1] indica genericamente ogni fenomeno aereo le cui cause non possano facilmente o immediatamente essere individuate da un osservatore.", "value":[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]}
  }

  getOptions() {
    return this.options
  }


  addData(item: CelestialBody) {
    this.data.push(item);
    //this.dataSubject.next(this.data);
  }

  updateData(updatedItem: any) {
    const index = this.data.findIndex((item, i) => { return i === updatedItem.id });

    if (index >= 0) {
      this.data[index] = updatedItem.item;
      this.dataSubject.next(this.data);
    }
  }

  deleteData(id: number) {
    this.data = this.data.filter((item, i) => { return i !== id });
    this.dataSubject.next(this.data);
  }
}
