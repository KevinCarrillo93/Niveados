import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { CreateForm } from "../components/CreateForm/CreateForm"
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { About } from "../pages/About/About";
import { Detail } from "../pages/Detail/Detail";
import { Catalogue } from "../pages/Catalogue/Catalogue";
import { Payment } from "../pages/Payment/Payment";
import { AuthProvider, useAuth } from "../pages/firebase/context";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { LogIn } from "../pages/LogIn/LogIn";
import { Register } from "../pages/Register/Register";
import { ProductsList } from "../pages/Dashboard/ProductsList";
import { Admin } from "../pages/Dashboard/Admin";
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart";
import ProductsToEdit from "../components/EditProduct/ProductsToEdit";
import FormEdit from "../components/EditProduct/FormEdit";

export const AppRouter = () => {

  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
  
  return (
    <>
      <NavBar userLogged={userLogged}/>{/*asi mando el usuario a un compoenente*/}
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/createproduct" element={<CreateForm />} /> 
          <Route path="/editproduct" element={<ProductsToEdit/>}/> 
          <Route path="/editproduct/:id" element={<FormEdit/>}> </Route>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={userLogged && userLogged.type == "Admin" ? <Dashboard />: <h1>TUKI</h1> /*CAMBIEN TUKI POR ERROR COMPONENT O HOME */}/>
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/admin" element={userLogged && userLogged.type == "Admin" ? <Admin />: <h1>TUKI</h1> /*CAMBIEN TUKI POR ERROR COMPONENT O HOME */}/> 
          <Route path="/cart" element={<ShoppingCart/>}/>
          <Route path="/Login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </>
  );
};
