import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/app.scss';
import { lazy, Suspense } from 'react';
const Dashboard=lazy(()=>import('./pages/dashboard')) 
const Transactions=lazy(()=>import('./pages/Transactions')) 
const Customers=lazy(()=>import('./pages/Customers')) 
const Products=lazy(()=>import('./pages/Products')) 


const Loader = lazy(() => import('./components/loader'));



const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transactions />} />



            {/*Charts*/}


            {/*Apps*/}



          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
