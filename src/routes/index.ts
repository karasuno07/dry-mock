import config from '~/config';
import { Route } from '~/models/route';
import { HomePage, ShopPage, CartPage, DetailPage} from '~/pages';
import Login from '~/pages/Login';
import Register from '~/pages/Register';


const publicRoutes: Route[] = [
   Route.defaultLayout(config.routes.home, HomePage),
   Route.defaultLayout(config.routes.shop, ShopPage),
   Route.defaultLayout(config.routes.cart, CartPage),
   Route.defaultLayout(config.routes.detail, DetailPage),
   Route.withoutLayout(config.routes.login, Login),
   Route.withoutLayout(config.routes.register, Register),
];

const securedRoutes: Route[] = [];

export { publicRoutes, securedRoutes };

const routes = [...publicRoutes, ...securedRoutes];

export default routes;
