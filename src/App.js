import "./App.css";
import LandingPage from "./Modules or Pages/LandingPage";
import "bootstrap/css/bootstrap.min.css";
// if import does not contain relative path syntax it will auto find the folder from node modules

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
