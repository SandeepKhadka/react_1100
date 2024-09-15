import { createRoot } from 'react-dom/client'
import "./index.css"

let Project = (props) => {
  console.log({"title" : props.title} );
  
  return <div className="project">
    <img src="https://picsum.photos/200/300" alt="" />
    <h2>{props.title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam asperiores numquam rerum ratione voluptatibus dolor velit aspernatur error quae veniam facere, veritatis voluptatem impedit hic esse ut sequi cumque.</p>
  </div>
}


createRoot(document.getElementById('root')).render(
  <div>
    <h1>Projects</h1>
    <div className='projects'>
      <Project title = "Git"/>
      <Project title = "react"/>
      <Project title = "html"/>
      <Project title = "css"/> 
     
    </div>

  </div>

)
