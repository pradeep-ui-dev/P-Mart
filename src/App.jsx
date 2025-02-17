import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/layout/DefaultLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import HomePage from './components/pages/HomePage'
import ProductsLayout from './components/layout/ProductLayout'
import ProductsLanding from './components/pages/ProductsLanding'
import ProductByCategory from './components/shared/product/ProductByCategory'
import Cart from './components/pages/Cart'
import Page404 from './components/pages/Page404'
import InnerPageLayout from './components/layout/InnerPageLayout'
import CheckoutPage from './components/pages/Checkout'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<SignIn/>}></Route>
            <Route path="signin" element={<SignIn />} />
            <Route path='signup' element={<SignUp/>}/>
            

            <Route path='/' element={<InnerPageLayout/>}>
              <Route path='/checkout' element={<CheckoutPage/>}/>
              <Route path="*" element={<Page404 />} />
              <Route path="cart" element={<Cart />} />  
            </Route>

            <Route path='dashboard' element={<DashboardLayout/>}>
              <Route index element={<HomePage />}/>
                          
            </Route>

            <Route path="products" element={<ProductsLayout />}>
              <Route index element={<ProductsLanding />} />
              <Route path=":categoryParam" element={<ProductByCategory />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
