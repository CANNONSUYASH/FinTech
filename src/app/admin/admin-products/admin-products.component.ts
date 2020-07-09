import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
 

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  table$:any[];
  id;
  product:any[]
  subscription : Subscription;
  filteredProduct: any[];
  constructor(
    private productService:ProductService,
    private router: Router
    ) { 

    
      
   }
  ngOnDestroy(): void {

    this.subscription.unsubscribe();  

  }



  ngOnInit() {
    
    this.subscription = this.productService.getAll()
    .map(actions => {
     return actions.map(a => {

      const id = a.payload.key;
      const data = a.payload.val();

      return{id, data};
     
      })
   })
   .subscribe(result =>{
    this.filteredProduct=this.table$ = result;
    //  return this.filteredProduct;

  })
  
  }

  onDelete(id){
    console.log("Hello "+this.id)

    if(!confirm('Are sure want to delete this entry..?'))return;
    this.productService.Delete(id)

    this.router.navigate(['admin/products'])
  
    
  }

  filter(query: string){
    this.filteredProduct = (query)?
    this.table$.filter(p => p.data.countryname.toLowerCase().includes(query.toLowerCase())) :
    this.table$;  
  
  }


}
