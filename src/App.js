import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MyOrders from './views/MyOrders';
import AddEditOrder from './views/AddEditOrder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyOrders/>
  },
  {
    path: "/AddEditOrder",
    element: <AddEditOrder/>
  }
])

function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
