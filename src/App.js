import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/Login";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarefas" element={<ListarTarefa />} />
      </Routes>
    </Router>
  );
}

export default App;
