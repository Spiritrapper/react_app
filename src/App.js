import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // array 초기화 [] 설정
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
        setCoins(json);
        setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        })
  }, []);
  const inputHandle = (event) => setMoney(event.target.value);
  const setChange = (event) => setResult(event.target.value);
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      <input onChange={inputHandle} value={money} placeholder="Type money" />
      <br></br>
      {loading  ? <strong>Loading...</strong>:  
      
      <select onChange={setChange}>
      <option value="0"> Select your coin!</option>      
      {coins.map((coin, index) => (
        <option key={index} value={coin.quotes.USD.price}>
      <li key={coin.id}>
        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>
        </option>
        ))}        
      </select>}
     <div>
     <h2>You can get {result == 0 ? "0" : money / result} coins</h2>
     </div>
    </div>
  );
}

export default App;
