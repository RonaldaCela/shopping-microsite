import { Component } from '@angular/core';

import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private ProductService : ProductService
  )
  {}

  ngOnInit() {
    this.getData().subscribe( data => {
      
    }
      );
  }


  title = 'shopping-microsite';

  getData() : Observable<any> {
    return this.ProductService.getData()
  }
}
