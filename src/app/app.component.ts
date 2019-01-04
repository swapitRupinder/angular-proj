import { Component,OnInit } from '@angular/core';
import { ApiService } from "./api/api.service"
import { HttpClient } from '@angular/common/http';
import { MyNewInterface } from "./api/my-new-interface";
import { error } from 'util';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers:[ApiService]
})
/* export class AppComponent implements OnInit{
  title = 'app';

  _postsArray: MyNewInterface[];

  constructor(private apiSerivce: ApiService){}

  getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  ngOnInit(): void{
    this.getPosts();

  }
}
 */
 export class AppComponent implements OnInit {
  title = 'app';
  restItems: any;
  restItemsUrl = 'http://localhost/api.php';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
}