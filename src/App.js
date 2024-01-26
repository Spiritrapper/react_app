import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  // 한번만 실행되고 마는 코드
  useEffect( () => { 
    console.log("i run only once") ;
  }, []);
  // 만약 검색을하면 오직 변화하는건 keyword만 되게 하는 컴포넌트
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes.", keyword)
    }
    
  }, [keyword]);
  useEffect(() => {
      console.log("i run when 'counter' changes.")
  }, [counter])
  useEffect(() => {
    console.log("i run when 'keyword & counter' changes.")
}, [keyword, counter])
  return (
    <div>
      <input 
      value = {keyword}
      onChange={onChange}
      type="text" placeholder="Search here.."/>
      <h1 >{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
