export class Route {
   path: string;
   component: (props: any) => JSX.Element;
   layout: ((props: any) => JSX.Element) | null | undefined;

   constructor(
      path: string,
      component: () => JSX.Element,
      layout: ((props: any) => JSX.Element) | null | undefined
   ) {
      this.path = path;
      this.component = component;
      this.layout = layout;
   }

   static defaultLayout(path: string, component: () => JSX.Element) {
      return new Route(path, component, null);
   }

   static withLayout(
      path: string,
      component: () => JSX.Element,
      layout: ((props: any) => JSX.Element) | null | undefined
   ) {
      return new Route(path, component, layout);
   }

   static withoutLayout(path: string, component: () => JSX.Element) {
      return new Route(path, component, undefined);
   }
}
