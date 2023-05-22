import { BrowserRouter } from "react-router-dom";
import GlobalRoute from "./navigation/GlobalRoute";
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/js/dist/collapse'
import './app.scss'

function App() {
  return (
    <BrowserRouter>
      <GlobalRoute />
    </BrowserRouter>
  );
}

export default App;
