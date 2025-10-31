import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images = [
      'imgi_1_poert1.png',
      'imgi_2_port2.png',
      'imgi_3_port3.png',
      'imgi_1_poert1.png',
      'imgi_2_port2.png',
      'imgi_3_port3.png'
  ]

  selectedImage=''
  lightboxVisisble=false ;

  openImg(img :string){
    this.selectedImage = img
    this.lightboxVisisble = true
  }
  closeImg(){
    this.lightboxVisisble = false
  }
}
