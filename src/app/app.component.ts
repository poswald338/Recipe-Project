import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './recipes/recipe.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit{
  title = 'Angular-Course-Project'

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
