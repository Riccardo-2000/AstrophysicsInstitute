import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted:boolean = false
  showModal:boolean = false
  message:string = ''

  options = {
    'pianeta': [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1] ,
    'stella': [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1] ,
    'asteroide': [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1] ,
    'meteora': [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0,] ,
    'U.F.O': [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0] 
  }

  optionSelected:string=''

  feedform: FormGroup = this.fb.group({
    datetime:  ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)]],
    hour_angle:  ['',[Validators.required, Validators.min(0), Validators.max(24)]],
    declination :  ['',[Validators.required, Validators.min(0), Validators.max(300000)]],
    temperature:  ['',[ Validators.min(0), Validators.max(90)]],
    mass :  ['',[Validators.min(0), Validators.max(300000) ]],
    radius :  ['',[Validators.min(0), Validators.max(100)]],
    harvard_class:  ['',[Validators.min(0), Validators.max(100)]],
    orbital_inclination:  ['',[Validators.min(0), Validators.max(180)]],
    albedo :  ['',[Validators.min(0), Validators.max(100)]],
    distance  :  ['',[Validators.min(0), Validators.max(5881413000000000)]],
    solar_system :  ['',[Validators.min(0), Validators.max(1)]]
  })

  constructor(private fb: FormBuilder) {}

  checkFormError(){
    return this.feedform.controls
  }

  getKey(option: any): string {
    // Funzione per ottenere la chiave dell'oggetto
    return Object.keys(option)[0];
  }

  resetForm(){
    this.submitted=false
    this.feedform.reset()
  }

  send(){
    this.submitted=true
    if(this.feedform.get('solar_system').value === true &&  this.feedform.get('distance').value>130){
      this.message="La distanza dal sole è maggiore di 130 UA, il campo sistema solare non può essere selezionata"
      this.feedform.controls['solar_system'].setValue(false)
    }else{
      this.message="Dati inviati correttamente"

      this.submitted=false
      this.resetForm()
    }
    this.showModal=true
  }

  ngOnInit(): void {
  }

}
