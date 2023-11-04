import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted:boolean = false
  showModal:boolean = false
  message:string = ''

  options:any = {}
  optionSelected:string=''

  feedform: FormGroup = this.fb.group({
    type: [''],
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
    solar_system :  ['',[Validators.min(0), Validators.max(1)]],
    idUser :  [0]
  })

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  //Check the form for errors 
  checkFormError(){
    return this.feedform.controls
  }


  resetForm(){
    this.submitted=false
    this.feedform.reset()
  }

  //send form
  send(){
    this.feedform.controls['type'].setValue(this.optionSelected)
    this.submitted=true
    if(this.feedform.get('solar_system').value === true &&  this.feedform.get('distance').value>130){
      this.message="La distanza dal sole è maggiore di 130 UA, il campo sistema solare non può essere selezionata"
      this.feedform.controls['solar_system'].setValue(false)
    }else{
      this.feedform.controls['idUser'].setValue(localStorage.getItem("idUser"))
      this.dataService.addData(this.feedform.value)

      this.message="Dati inviati correttamente"

      this.submitted=false
      this.resetForm()
    }
    this.showModal=true
  }






  showOptions = false;

  toggleOptionsList() {
    this.showOptions = !this.showOptions;
  }

  selectOption(option: string) {
    this.optionSelected = option;
    this.showOptions = false;
  }
















  ngOnInit(): void {
    //obtain options from db
    this.options = this.dataService.getOptions()
  }

}
