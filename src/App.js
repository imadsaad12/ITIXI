import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./components/Login/index"
import Home from "./components/Home/index"
import Details from "./components/Details/index"
function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/home' element={<Home />} />
     <Route path='/details' element={<Details />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
