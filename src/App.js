import {useState, useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  // array 
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    // 버튼제출후 칸 비워주기 실행후 비우기
    setToDo("");
    // ex) food= [1,2,3,4]
    // [6, food] == [6, Array(4)] , [6,...food] == [6, 1, 2, 3, 4]
    setToDos((currentArray) => [toDo, ...currentArray])
    // setToDos((["hello"]) => ["bye bye", ...["hello"]]);
    //setToDos((["bye bye", "hello"]) => ["hello2", ...["bye bye"]]);
    console.log(toDo);

  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
      />
      <button >Add To Do</button>
      </form>
    </div>
  );
}

export default App;
