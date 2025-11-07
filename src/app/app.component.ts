import { Component } from '@angular/core';
import { UceniciComponent } from './ucenici/ucenici.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [UceniciComponent],
})
export class AppComponent {
  ucenici = ['Ragnar', 'Bjorn', 'Loki'];
}
