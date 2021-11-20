import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { finalize, takeLast } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2'
import { Timestamp } from 'firebase/firestore';


interface product{
  name:string;
  admission_date: Date;
  expiration_date: Date;
  image:{nameImg:string,urlImg:string};
  price_sale: number;
  purchase_price:number;
  sales:number;
  sotck:number
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  ganancia:number = 0;
  ProductForm!:FormGroup;
  archivo: any = [];
  prev: any;
  FileTemp: any;
  uploadPercent: Observable<number> = null;
  downloadURL: Observable<string>;
  load:boolean = false;

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private ProductService: ProductsService) { }

  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      admission_date: [Date(),Validators.required],
      expiration_date:"",
      // id: '',
      name: "",
      image: new FormGroup({
        nameImg: new FormControl(''),
        urlImg: new FormControl('')
      }),
      price_sale: ["",Validators.required],
      purchase_price: ["",Validators.required],
      sales: [0,Validators.required],
      stock: ["",Validators.required]
    })
  }

  submit() {
    if(this.ProductForm.valid){
      this.load = true;
      const id = Math.random().toString(36).substring(2);
      const file = this.FileTemp;
      const filetemp = this.FileTemp.type;
      const nameIMG = filetemp.split('/');
      const IMGname = `product_${id}`;
      const filePath = `products/product_${id}`;
      this.ProductForm.get('image').get('nameImg').setValue(IMGname + '.' + nameIMG[1]);
      this.ProductForm.get('expiration_date').setValue(Timestamp.fromDate(new Date(this.ProductForm.get('expiration_date').value)));
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges()
        .pipe(finalize(() =>
        {
         ref.getDownloadURL().subscribe(urlImg =>{
          this.ProductForm.get('image').get('urlImg').setValue(urlImg)

          this.ProductService.addProduct(this.ProductForm.value)
              .then(data =>
                {
                  if(data){
                    this.ProductForm.reset();
                    this.load = false;
                      Swal.fire({
                        icon: 'success',
                        title: 'El producto se agrego al inventario correctamente',
                        showConfirmButton: false,
                        timer: 2000
                      })
                  }
                })
              .catch(err => console.log("ocurrio un error"))
         })
        }))
        .subscribe();
      }else{
        console.log("El formulario esta incompleto")
      }
    }
    captureIMG(event:any) {
      let me = this;
      let file = event.target.files[0];
      this.FileTemp = file;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        me.prev = reader.result;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }

}
