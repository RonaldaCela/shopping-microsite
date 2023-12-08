import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  API = "https://test.dev.al/test/";
  constructor(
    private http: HttpClient
  ) {}

  getData(): Observable<any> {
    return this.http.get(`${this.API}`)
  }

}
