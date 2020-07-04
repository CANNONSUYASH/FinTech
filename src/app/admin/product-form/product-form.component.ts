import { Component, OnInit } from '@angular/core';
import { AssignService } from 'src/app/assign.service';
import { ProductService } from 'src/app/product.service';
import { MatRadioButton} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'; 
 
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  user$;
  table:{};
  constructor(
    assignmentService: AssignService,
    private productService: ProductService,
    private route: ActivatedRoute ) { 

    this.user$ = assignmentService.getAssignment();
    
    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.get(id).take(1).subscribe(p =>this.table = p );
      console.log("Suyash "+this.productService);
   }
 
   save(product){
     this.productService.create(product);
     console.log(product);
   }

}
