import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/layouts';
import { publicRoutes } from '~/routes';

function App() {
   return (
      <Router>
         <Routes>
            {publicRoutes.map((route, index) => {
               const Page = route.component;

               let Layout: any = DefaultLayout;
               if (route.layout) {
                  Layout = route.layout;
               } else if (route.layout === undefined) {
                  Layout = Fragment;
               }

               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
