import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Navigate } from "react-router-dom";
import { CreateForm } from "../components/CreateForm/CreateForm"
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { About } from "../pages/About/About";
import { Detail } from "../pages/Detail/Detail";
import { Catalogue } from "../pages/Catalogue/Catalogue";
import { Payment } from "../pages/Payment/Payment";
import { AuthProvider, useAuth } from "../pages/firebase/context";
import { Dashboard } from "../components/Admin/Dashboard";
import { LogIn } from "../pages/LogIn/LogIn";
import { Register } from "../pages/Register/Register";
import { ProductsList } from "../pages/Dashboard/ProductsList";
import { Admin } from "../pages/Admin/Admin";
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart";
import ProductsToEdit from "../components/EditProduct/ProductsToEdit";
import FormEdit from "../components/EditProduct/FormEdit";
import { Favorites } from "../pages/Favorites/Favorites";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Users } from "../components/Admin/Users";

export const AppRouter = () => {
  const { favorites } = useSelector((state) => state);
  
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
  
  useEffect(() => {
    favorites
      ? localStorage.setItem("favorites", JSON.stringify(favorites))
      : localStorage.setItem("favorites", []);
  }, [favorites]);
  
  return (
    <>
      <NavBar userLogged={userLogged}/>{/*asi mando el usuario a un compoenente*/}
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/createproduct" element={<CreateForm />} /> 
          <Route path="/editproduct" element={<ProductsToEdit/>}/> 
          <Route path="/editproduct/:id" element={<FormEdit/>}> </Route>
          <Route path="/about" element={<About />} />

          {/* ADMIN */}
          {/* //! Comento estas rutas con validación de usuario para poder usarlas más fácilmente. Después hay que reemplazar */}
          {/* <Route path="/dashboard" element={userLogged && userLogged.type == "Admin" ? <Dashboard />: <h1>TUKI</h1>}/> */} 
          {/* <Route path="/admin" element={userLogged && userLogged.type == "Admin" ? <Admin />: <h1>TUKI</h1>}/> */} 
          
          <Route path="/admin" element={<Navigate to="/admin/dashboard"/>}/>
          <Route path="/admin/dashboard" element={<><Admin/><Dashboard/></>}/>
          <Route path="/admin/products/list" element={<><Admin/><ProductsList /></>} />
          <Route path="/admin/users" element={<><Admin/><Users /></>} />
          <Route path="/admin/orders" element={<><Admin/><ProductsList /></>} />

          <Route path="/cart" element={<ShoppingCart/>}/>
          <Route path="/Login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </>
  );
};
