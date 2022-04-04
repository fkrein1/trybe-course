import logo from './logo.svg';
import './App.css';

const ListOfTaks = ['assistir mais um video do youtube', 'meditar', 'freeletics', 'trybe', 'alguma coisa da caedu'];

const Task = (value) => <ul> { value.map((task) => <li>{task}</li>) } </ul>;


function App() {
  return Task(ListOfTaks);
}

export default App;
