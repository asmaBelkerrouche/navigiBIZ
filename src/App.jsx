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
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Footer />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUpUser" element={<SignUpUser />} />
      <Route path="/SignUpCompany" element={<SignUpCompany />} />
      <Route path="/SignUpCompany2" element={<SignUpCompany2 />} />
      <Route path="/SignUpCompany3" element={<SignUpCompany3 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
  
}
// const App = () => {
//   return (
//     <Nav/>
//   )
// }

export default App;
