import { Product } from './product';

export class ProductRepository{

    private products:Product[]=[
        {id:1,name:"IPhone 14",price:20000,imageUrl:"1.jpeg",description:"iyi telefon.",isActive:true,categoryId:1},
        {id:2,name:"IPhone 15",price:30000,imageUrl:"2.jpeg",description:"iyi telefon.",isActive:true,categoryId:1},
        {id:3,name:"IPhone 16",price:40000,imageUrl:"3.jpeg",description:"iyi telefon.",isActive:true,categoryId:3},
        {id:4,name:"IPhone 17",price:50000,imageUrl:"1.jpeg",description:"iyi telefon.",isActive:true,categoryId:2},
        {id:5,name:"IPhone 18",price:60000,imageUrl:"2.jpeg",description:"iyi telefon.",isActive:true,categoryId:2},
        {id:6,name:"IPhone 19",price:70000,imageUrl:"3.jpeg",description:"iyi telefon.",isActive:true,categoryId:3},
      ]
      getProducts(){
        return this.products.filter(p=>p.isActive)
      }
      getProductById(id:number){
        return this.products.find(p=>p.id==id)
      }
      getProductsByCategoryId(id:number){
        return this.products.filter(p=>p.categoryId==id)
      }
}