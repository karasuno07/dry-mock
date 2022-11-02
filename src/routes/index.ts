import config from '~/config';
import { Route } from '~/models/route';
import { HomePage, ShopPage, CartPage } from '~/pages';
import Login from '~/pages/Login';

const publicRoutes: Route[] = [
   Route.defaultLayout(config.routes.home, HomePage),
   Route.defaultLayout(config.routes.shop, ShopPage),
   Route.defaultLayout(config.routes.cart, CartPage),
   Route.withoutLayout(config.routes.login, Login),
];

const securedRoutes: Route[] = [];

export { publicRoutes, securedRoutes };

const routes = [...publicRoutes, ...securedRoutes];

export default routes;
