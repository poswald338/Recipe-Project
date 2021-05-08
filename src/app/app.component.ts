import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Course-Project'
  loadedFeature = 'recipe';

  onNavigate(feature: string) { //where user navigates to
    this.loadedFeature = feature;
  }
}
