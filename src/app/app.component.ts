import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div style="padding:5px">
      <ul class="nav nav-tabs">
          <li routerLinkActive="active">
              <a routerLink="home">Home</a>
          </li>
          <li routerLinkActive="active">
              <a routerLink="employees">Employees</a>
          </li>
      </ul>
      <br/>
      <router-outlet></router-outlet>
  </div>
`,
  // template: `<list-employee></list-employee>
  //            `,
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
  title = 'AngularServices';
}
