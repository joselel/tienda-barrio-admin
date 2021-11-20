import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email:string;

  constructor(public auth: AngularFireAuth,
              private firestore: AngularFirestore,
              private router: Router,) {
    this.auth.authState.subscribe(User =>{
      if (User) {
        this.email = User.email;
        console.log(this.email);
        this.getUser(this.email).subscribe(
          dat =>{
            if(dat.length != 0){
              //console.log(dat)
              // Swal.fire({
              //   icon: 'success',
              //   title: 'Inicio de sesión correcto',
              //   showConfirmButton: false,
              //   timer: 2000
              // })
              this.router.navigate(['/dashboard/inicio'])
            }else{
              console.log("error al iniciar sesion")
              Swal.fire({
                icon: 'error',
                title: 'No estas registrado en el sistema',
                showConfirmButton: false,
                timer: 2000
              })
              this.logout()
            }
          },
          err =>{
            console.log(err)

          })

      };
       });
  }

  async login() {
    const login =  await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     if(login){
       window.location.reload();
     }
   }

   async logout() {
    await this.auth.signOut();
    this.router.navigate(['/'])
  }

  getUser(email: string): Observable<any> {
    return this.firestore.collection('users', ref => ref.orderBy('FechaInicio', 'desc').where('email','==',email)).snapshotChanges();
  }

}
