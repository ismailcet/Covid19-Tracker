import "./App.css";
import Header from "./Components/Header";
import CountryForm from "./Components/CountryForm";
import CountryData from "./Components/CountryData";
import CountryCharts from "./Components/CountryCharts";
import Footer from "./Components/Footer";
import MapChart from "./Components/MapChart";
function App() {
  return (
    <div>
      <Header />
      <CountryForm />
      <CountryData />
      <CountryCharts />
      <Footer />
      <MapChart />
    </div>
  );
}

export default App;
