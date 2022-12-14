export default class Product {
   id: string | number;
   title: string;
   price: number;
   img?: string;

   constructor(id: string | number, title: string, price: number, img: string) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.img = img;
   }
}

export class PromoteProduct {
   id: string | number;
   img?: string;
   url?: string;

   constructor(id: string | number, img: string, url: string) {
      this.id = id;
      this.img = img;
      this.url = url;
   }
}

