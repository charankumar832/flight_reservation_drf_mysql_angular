import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirm-reservation',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './confirm-reservation.component.html',
  styleUrls:[ './confirm-reservation.component.css',],
})
export class ConfirmReservationComponent {
  reservationId: number = 0; // default value

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reservationId = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
  }
}
