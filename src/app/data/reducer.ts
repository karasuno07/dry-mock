import Product, { PromoteProduct } from '~/models/product';
import User from '~/models/user';

const dataUsers: User[] = [
   {
      username: 'user1@gmail.com',
      password: '123456',

   },
   {
      username: 'user2@gmail.com',
      password: '123456',
   },   
];

const dataTech: Product[] = [
   {
      id: "1",
      title: 'SamSung Galaxy Z FLip 2022 ',
      img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "2",
      title: 'Iphone 14 Pro',
      img: 'https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "3",
      title: 'Vivo Y15S 2021',
      img: 'https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "4",
      title: 'Xiaomi Note 11',
      img: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-black-600x600.jpeg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "5",
      title: 'Oppo a57',
      img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "6",
      title: 'Nokia',
      img: 'https://cdn.tgdd.vn/Products/Images/42/270207/nokia-g21-t%C3%ADm-thum-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "7",
      title: 'Realme 9 Pro Plus',
      img: 'https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "8",
      title: 'Itel l650212 ',
      img: 'https://cdn.tgdd.vn/Products/Images/42/251897/itel-l6502-den-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "9",
      title: 'SamSung Galaxy Z FLip 2022 ',
      img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "10",
      title: 'Iphone 14 Pro',
      img: 'https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: "11",
      title: 'Vivo Y15S 2021',
      img: 'https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '12',
      title: 'Xiaomi Note 11',
      img: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-black-600x600.jpeg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '13',
      title: 'Oppo a57',
      img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '14',
      title: 'Nokia',
      img: 'https://cdn.tgdd.vn/Products/Images/42/270207/nokia-g21-t%C3%ADm-thum-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '15',
      title: 'Realme 9 Pro Plus',
      img: 'https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '16',
      title: 'Itel l650212 ',
      img: 'https://cdn.tgdd.vn/Products/Images/42/251897/itel-l6502-den-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '17',
      title: 'SamSung Galaxy Z FLip 2022 ',
      img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '18',
      title: 'Iphone 14 Pro',
      img: 'https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '19',
      title: 'Vivo Y15S 2021',
      img: 'https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '20',
      title: 'Xiaomi Note 11',
      img: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-black-600x600.jpeg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '21',
      title: 'Oppo a57',
      img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '22',
      title: 'Nokia',
      img: 'https://cdn.tgdd.vn/Products/Images/42/270207/nokia-g21-t%C3%ADm-thum-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '23',
      title: 'Realme 9 Pro Plus',
      img: 'https://cdn.tgdd.vn/Products/Images/42/255513/realme-9-pro-plus-5g-blue-thumb-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },
   {
      id: '24',
      title: 'Itel l650212 ',
      img: 'https://cdn.tgdd.vn/Products/Images/42/251897/itel-l6502-den-600x600.jpg',
      price: 2000000,
      description: "hello world, this is the new product"
   },

];
const dataCarousel: PromoteProduct[] = [
   {
      id: 1,
      img: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/12/Xiaomi-11i-Hypercharge-photoutils.com_.jpeg?resize=768%2C432&ssl=1',
   },
   {
      id: 2,
      img: 'https://www.sammobile.com/wp-content/uploads/2022/08/Galaxy-Z-Fold-4-23-1-1200x675.jpg',
   },
   {
      id: 3,
      img: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_Colors_09142021_big.jpg.large.jpg',
   },
   {
      id: 4,
      img: 'https://images.indianexpress.com/2018/08/759_1-4.jpg',
   },
];

export { dataTech, dataCarousel, dataUsers };
