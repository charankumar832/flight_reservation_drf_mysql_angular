import { Component } from '@angular/core';
import { Criteria } from '../../model/criteria';
import { LoginService } from '../../services/login.service';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-find-flight',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './find-flight.component.html',
  styleUrls:['./find-flight.component.css'],
})
export class FindFlightComponent {

  criteria:Criteria=new Criteria('','','');
  constructor(private loginService:LoginService, private service:ReservationService, private router:Router){}

  ngOnInit():void{
    this.loginService.login();
  }

  public onSubmit(){
    this.service.getFlights(this.criteria).subscribe((res:any)=>{
      console.log('Flightdata:',res);
      this.service.flightdata=res;
      this.router.navigate(['/displayFlights']);
    }, 
    (err:any)=> {
      console.error('Error Fetching flights',err);
      alert('Error Fecting flights! Check the console for detials');
    });
  }


}
