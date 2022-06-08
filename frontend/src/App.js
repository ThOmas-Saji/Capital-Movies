import "./App.css";
import { BrowserRouter}  from 'react-router-dom'
import AllRoutes from "./components/AllRoutes/AllRoutes";

function App() {
  return <BrowserRouter>
  <AllRoutes/>
  </BrowserRouter>
}

export default App;
