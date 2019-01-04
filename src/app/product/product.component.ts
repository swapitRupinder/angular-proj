import { Component, OnInit } from '@angular/core';
import { SliderType } from 'igniteui-angular'; 
import { Product } from '../product';  

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

     public data = [  
    new Product(1, 'Jeans1', 150,'assets/images/banner1.jpg'),  
    new Product(2, 'Jeans2', 250,'assets/images/banner1.jpg'),  
    new Product(3, 'Jeans3', 350,'assets/images/banner1.jpg'),  
    new Product(4, 'Jeans4', 450,'assets/images/banner1.jpg'),  
    new Product(5, 'Jeans5', 550,'assets/images/banner1.jpg'),  
    new Product(6, 'Jeans6', 650,'assets/images/banner1.jpg'),  
    new Product(7, 'Jeans7', 750,'assets/images/banner1.jpg'),  
    new Product(8, 'Jeans8', 900,'assets/images/banner1.jpg')  
  ];  
  
  
  

 constructor() { }

 public sliderType = SliderType;  
    public Filterdata: any = {};  
      
    ngOnInit() {  
    // data is same which we declare above  
    this.Filterdata = this.data;  
    }  
      
    public MinRangeValue = Math.min.apply(Math, this.data.map(function (item) { return item.price; }));  
      
    public MaxRangeValue = Math.max.apply(Math, this.data.map(function (item) { return item.price; }));  
      
    SliderChange(val: any): void {  
        this.Filterdata = this.data.filter(obj => obj.price >= val.lower && obj.price <= val.upper);  
    }  

}

  







    