import Countries from "./components/countries";
import './App.css';

function App(props) {

  const countryList = props.countries?.map((country) => <Countries name={country.name} code={country.code} key={country.id}/>);

  return (
    <div className="App">
      <h1>Countries and thier codes</h1>
      <div className="country-list">
        <ul role="list">
          {countryList}
        </ul>
      </div>
    </div>
  );
}



export default App;