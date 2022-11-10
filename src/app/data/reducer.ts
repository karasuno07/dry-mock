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
      price: 35000000,
      description: " hello world, this is the new product"
   },
   {
      id: "2",
      title: 'Iphone 14 Pro',
      img: 'https://cdn.tgdd.vn/Products/Images/42/289691/iphone-14-pro-vang-thumb-600x600.jpg',
      price: 30000000,
      description: "Properties of Flexbox Of course there is no better site than CSS Tricks for the complete visual guide of flexbox. As Material UI uses Flexbox under the hood for their Grid, you should at least know a few key properties. Using the flex-grow property, you can specify a unitless value (like 2,2,4,4) to proportionally scale the widths of the items or have one item take up the remaining space. flex-basis accepts more normal width values (33%, 100px) to use as the default column width before applying flex-grow properties. Material UI uses flex-basis and max-width to set the widths of the columns this way with the below breakpoint properties. In all honesty, Flexbox is just more confusing than CSS Grid properties, which can specify column widths a bit more expressively with the grid-template-columns prop.So how does Material UI Grid compare to Flexbox?Material UI Grid's grid uses Flexbox under the hood. The properties of Flexbox are used as properties of the Grid, so you can control the component as if it were a flexbox. Additionally, Material UI's Grid also provides helpers for spacing, responsive design, and fitting a 12 column layout. To see all the properites of Grid, check out the Grid API or look at the bottom of the Grid source code to see prop types.Now for the tricky part: using breakpoints as props to the Grid, we can specify how many columns we want that component to take up, for each of the breakpoints. We'll explain this in our responsive design section. First let's look at the breakpoint values."
   },
   {
      id: "3",
      title: 'Vivo Y15S 2021',
      img: 'https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg',
      price: 7000000,
      description: "hello world, this is the new product"
   },
   {
      id: "4",
      title: 'Xiaomi Note 11',
      img: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-black-600x600.jpeg',
      price: 8500000,
      description: "hello world, this is the new product"
   },
   {
      id: "5",
      title: 'Oppo a57',
      img: 'https://cdn.tgdd.vn/Products/Images/42/282090/oppo-a57-xanh-thumb-1-600x600.jpg',
      price: 8000000,
      description: "hello world, this is the new product"
   },
   {
      id: "6",
      title: 'Nokia',
      img: 'https://cdn.tgdd.vn/Products/Images/42/270207/nokia-g21-t%C3%ADm-thum-600x600.jpg',
      price: 1000000,
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
