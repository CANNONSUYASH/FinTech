import { Component, OnInit } from '@angular/core';
import { AssignService } from 'src/app/assign.service';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs-compat/operator/map';
import { take,tap } from 'rxjs/operators';  
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  user$;
  table$;
  getTable$;
  data;
  id;

  ngForm = new FormGroup({
    countryname: new FormControl('', Validators.required,)
  });

  constructor(
    assignmentService: AssignService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router ) { 

    this.user$ = assignmentService.getAssignment();
  
  
  
  }  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.productService.get(this.id)!=null){
      this.table$ = this.productService.get(this.id)
      
      .subscribe(res =>{
       const id = res.payload.key;
       const data = res.payload.val();
 
       this.table$ =  data
     
     return this.table$;

    })

    }
    }
  
   save(table){
     if(this.id) this.productService.updateProduct(this.id, this.table$)
     else this.productService.create(table);
     this.router.navigate(['admin/products'])
      console.log(table);

   }




}
