import { createRoot } from 'react-dom/client'
import "./index.css"
import Table from './pages/Table';
import Todo from './pages/Todo';
import Counter from './pages/Counter';
import CounterState from './pages/CounterState';
import Theme from './pages/Theme';

let Project = (props) => {
  console.log({ "title": props.title });

  return <div className="project">
    <img src="https://picsum.photos/200/300" alt="" />
    <h2>{props.title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam asperiores numquam rerum ratione voluptatibus dolor velit aspernatur error quae veniam facere, veritatis voluptatem impedit hic esse ut sequi cumque.</p>
  </div>
}


createRoot(document.getElementById('root')).render(
  <div>
    {/* <h1>Main</h1>
    <Table /> */}
    {/* <Todo /> */}
    {/* <Counter /> */}
    {/* <CounterState/> */}
    <Theme />

  </div>

)
