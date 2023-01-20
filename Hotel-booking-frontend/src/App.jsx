import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React, { Suspense } from 'react'
// ####
import PrivateRoute from './components/PrivateRoute';
// Components
import Header from './components/Header';
import Home from './pages/Home';
// import Error from './pages/Error';
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
// import Dashboard from './pages/Dashboard';
// import SearchResult from './pages/SearchResult';
// import SingleHotel from './components/hotels/SingleHotel';
// import AddHotel from './components/hotels/AddHotel';
// import EditHotel from './components/hotels/EditHotel';
import Footer from './components/Footer';
import Seller from './components/Seller';
import Bookings from './components/Bookings';
import StripeCallback from './components/stripe/StripeCallback';
import StripeSuccess from "./components/stripe/StripeSuccess";
import StripeCancel from "./components/stripe/StripeCancel";
import { Space, Spin } from 'antd';

// import React lazy

const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const SearchResult = React.lazy(() => import('./pages/SearchResult'));
const AddHotel = React.lazy(() => import('./components/hotels/AddHotel'));
const EditHotel = React.lazy(() => import('./components/hotels/EditHotel'));
const SingleHotel = React.lazy(() => import('./components/hotels/SingleHotel'));

const Error = React.lazy(() => import('./pages/Error'));

// -------




// Functions

const goTop = () => window.scrollTo(0, 0, "smooth");

// -------------------------------------------------------------------- 

const App = () => {
  return (
    <>
    <button className='go--top--btn' onClick={ goTop }> ^ </button>
      <ToastContainer />
      <Header />

      <Suspense fallback={<Space size="large" className='text-center'> <Spin size="large" /> </Space>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard/bookings"
              element={
                  <Bookings />
              }
            />
            <Route
              path="/dashboard/seller"
              element={
                  <Seller />
              }
            />
          </Route>
          <Route path="/hotels/:id" element={<SingleHotel />} />
          <Route
            path="/hotels/new"
            element={
              <PrivateRoute>
                <AddHotel />
              </PrivateRoute>
            }
          />
          <Route
            path="/hotels/edit"
            element={
              <PrivateRoute>
                <EditHotel />
              </PrivateRoute>
            }
          />
          <Route
            path="/stripe/success/:hotelId"
            element={
              <PrivateRoute>
                <StripeSuccess />
              </PrivateRoute>
            }
          />
          <Route
            path="/stripe/cancel"
            element={
              <PrivateRoute>
                <StripeCancel />
              </PrivateRoute>
            }
          />
          <Route path="/search-result" element={<SearchResult />} />
          <Route
            path="/stripe/callback"
            element={
              <PrivateRoute>
                <StripeCallback />
              </PrivateRoute>
            }
          />
          

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
