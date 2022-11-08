export default class Product {
   id: string;
   title: string;
   price: number;
   img: string;
   description: string;

   constructor(id: string , title: string, price: number, img: string, description: string) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.img = img;
      this.description = description;
   }
}

export class PromoteProduct {
   id: string | number;
   img: string;
   url?: string;
   description?: string;

   constructor(id: string | number, img: string, url: string, description: string) {
      this.id = id;
      this.img = img;
      this.url = url;
      this.description = description;
   }
}

