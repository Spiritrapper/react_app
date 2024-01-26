import {useState, useEffect} from "react";

function Hello(){

  /*function byFn(){
    console.log("bye :(")
  }
  function hiFn() {
    console.log("create :)")
    return byFn;
  }
  // [] 컴포넌트를 생성했다가 없앨때 사용 가능
  useEffect(hiFn, []);
  return <h1>Hello</h1>*/

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  },[]);
  return <h1>Hello</h1>


  /*useEffect(function(){
    console.log("hi :)");;
    return function(){
      console.log("bye :(")
    }
  },[])
  return <h1>Hello</h1>*/


  /* useEffect(() => {
    console("created :)")
    return ()=> console.log("destroyed")
  },[]) // [] 컴포넌트를 생성했다가 없앨때 사용 가능
  return <h1>Hello</h1> */
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/>:null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
