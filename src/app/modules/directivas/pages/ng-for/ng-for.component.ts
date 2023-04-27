import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
carros : string[] = [
  "Toyota", "Mazda","Nissan", "Mitsubishi", "Audi","BMW"
]

}
