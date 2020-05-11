import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 usuarioArray: Usuario []=[

 ];

 selectedUsuario: Usuario = new Usuario();

 add(){
   this.selectedUsuario.id=this.usuarioArray.length + 1;
   this.usuarioArray.push(this.selectedUsuario);
   this.selectedUsuario=new Usuario();
 }

 clean(){
  this.selectedUsuario=new Usuario();
}
}
