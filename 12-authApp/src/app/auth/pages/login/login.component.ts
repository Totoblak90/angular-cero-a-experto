import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['tobias@tobias.com', [Validators.required, Validators.email]],
    password: ['password', [Validators.required, Validators.minLength(6)]]
  })

  siHayError!: string;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() { 

    this.authService.login( this.miFormulario.controls.email.value , this.miFormulario.controls.password.value)
      .subscribe(
        ok => {
          if (ok === true) {
            this.router.navigateByUrl('/dashboard')
          } else {
             Swal.fire('Error', ok, 'error')
          }

        }
      )
  }
}
