import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-ucenici',
    templateUrl: './ucenici.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class UceniciComponent {
    @Input() uceniciList: string[] = [];
}