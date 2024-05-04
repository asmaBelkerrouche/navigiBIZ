import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SignUpUser from "./pages/Account/SignUpUser";
import SignUpCompany from "./pages/Account/SignUpCompany";
import SignUpCompany2 from "./pages/Account/SignUpCompany2";
import SignUpCompany3 from "./pages/Account/SignUpCompany3";
import SignUp from "./pages/Account/SignUp";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Rating from "./components/Rating";

import Search from "./pages/Search";

// import SearchDdn from "./pages/SearchDdn";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route> */}
      
      <Route index element={<Home />} />
      <Route path="/Search" element={<Search />}></Route>
   
      
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUpUser" element={<SignUpUser />} />
      <Route path="/SignUpCompany" element={<SignUpCompany />} />
      <Route path="/SignUpCompany2" element={<SignUpCompany2 />} />
      <Route path="/SignUpCompany3" element={<SignUpCompany3 />} />
    </Route>
  )
);

function App() {
  return (
    <div className="h-full">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
