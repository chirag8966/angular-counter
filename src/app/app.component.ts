import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Counter App';
  count = 0;


  increaseCount(): void {
    this.count += 1;
  }

  decreaseCount(): void {
    if (this.count !== 0 ) {
      this.count -= 1;
    }
  }

  // this is the arrow function syntax
  // both syntax are absolutely fine just keep consistency
  resetCount = () => {
    this.count = 0;
  }
}
