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
    // toDo, ...currentArray 새로운 toDD 와 현재 저장된 toDo array
    setToDos((currentArray) => [toDo, ...currentArray])
    
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
      <hr />
      {/* toDos.map() == array.map() 각각array 요소(item)에 새로 실행 또는 바꿔서 갱신 */}
      {/*['there', 'are','you'].map((item)=> item.toUpperCase())
        3) ['THERE', 'ARE', 'YOU']*/}
        <ul>
      {toDos.map((item, index) =>
       <li key={index}>{item}</li>)} 
      </ul>
    </div>
  );
}

export default App;
