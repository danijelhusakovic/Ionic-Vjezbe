import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ucenici',
  templateUrl: './ucenici.component.html'
})
export class UceniciComponent {
  @Input() uceniciList: string[] = [];
}