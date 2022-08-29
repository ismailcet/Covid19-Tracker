import "./App.css";
import Header from "./Components/Header";
import CountryForm from "./Components/CountryForm";
import CountryData from "./Components/CountryData";
import CountryCharts from "./Components/CountryCharts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CountryForm />
      <CountryData />
      <CountryCharts />
      <Footer />
    </div>
  );
}

export default App;
