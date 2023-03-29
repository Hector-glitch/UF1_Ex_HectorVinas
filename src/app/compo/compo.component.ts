import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-compo',
  templateUrl: './compo.component.html',
  styleUrls: ['./compo.component.css']
})
export class CompoComponent {
constructor(private http:HttpClient) {
  this.http.post('http://localhost:3070/examen', {}).subscribe(response => {
    console.log('Esxrit');
  }, error => {
    console.log('Error: ', error);
  });
}
}
