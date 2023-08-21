import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  onExercice1Click(){
    console.log("Évènement lié avec grand succès");
  }

  onExercice2Click(){
    console.log("clic");
  }
}
