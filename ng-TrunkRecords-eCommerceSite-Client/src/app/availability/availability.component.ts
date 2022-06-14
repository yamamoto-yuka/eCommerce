import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
})
export class AvailabilityComponent implements OnInit {
  @Input() inStock: boolean = true;
  constructor() {}
  ngOnInit(): void {}
}
