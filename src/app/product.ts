    export class Product {  
        id: number;  
        name: string;  
        price: number ;
        img:any;		
        
        constructor(id: number, Name: string, Price: number,Image:any) {  
            this.id = id;  
            this.name = Name;  
            this.price = Price; 
            this.img=Image;			
        }  
    }  
