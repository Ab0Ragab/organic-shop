import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';
import { AuthService } from './shared/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Oshop';
  
  constructor(private userService: UserService,private authService: AuthService, router: Router) {
    authService.user$.subscribe(user => {
     if(!user) return;

     userService.save(user);
       
       let returnUrl = localStorage.getItem('returnUrl');
       if(!returnUrl) return;
       
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);     
   
    });
  }
}
