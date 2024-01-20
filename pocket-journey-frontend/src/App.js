import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HeroHome from "./components/HeroHome";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import BookingOptions from "./components/BookingOptions";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
     {/*  <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
         {/*  <Route path="/register" element={<Register />} /> */}
      {/*   </Routes>
      </BrowserRouter> */} 
      <HeroHome/>
      <BookingOptions/>
      <Footer/>
    </div>
  );
}

export default App;
