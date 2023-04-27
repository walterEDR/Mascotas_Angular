import { Component } from '@angular/core';
import { PAGE_NOT_FOUND } from 'src/app/constants/constants';

@Component({
  selector: 'app-nopage',
  templateUrl: './nopage.component.html',
  styleUrls: ['./nopage.component.scss']
})
export class NopageComponent {
  page_not_found : string = PAGE_NOT_FOUND;
}
