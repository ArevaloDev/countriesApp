import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-isloading',
  templateUrl: './isloading.component.html',
  styleUrl: './isloading.component.css'
})
export class IsloadingComponent {

  @Input() isLoading:boolean = false;
}
