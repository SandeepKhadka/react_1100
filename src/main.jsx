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
    <table>
      <thead>
        <th>Name</th>
        <th>Days</th>
        <th>Description</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr>
          <td>React</td>
          <td>10 days</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus ab a cupiditate, doloribus magni repellendus, exercitationem ipsam eius maiores suscipit, accusantium commodi molestias possimus delectus aliquid. Est, blanditiis iure.</td>
          <td><button type="button">Delete</button></td>
        </tr>
        <tr>
          <td>React</td>
          <td>10 days</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus ab a cupiditate, doloribus magni repellendus, exercitationem ipsam eius maiores suscipit, accusantium commodi molestias possimus delectus aliquid. Est, blanditiis iure.</td>
          <td><button type="button">Delete</button></td>
        </tr>
        <tr>
          <td>React</td>
          <td>10 days</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus ab a cupiditate, doloribus magni repellendus, exercitationem ipsam eius maiores suscipit, accusantium commodi molestias possimus delectus aliquid. Est, blanditiis iure.</td>
          <td><button type="button">Delete</button></td>
        </tr>
        <tr>
          <td>React</td>
          <td>10 days</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus ab a cupiditate, doloribus magni repellendus, exercitationem ipsam eius maiores suscipit, accusantium commodi molestias possimus delectus aliquid. Est, blanditiis iure.</td>
          <td><button type="button">Delete</button></td>
        </tr>
        <tr>
          <td>React</td>
          <td>10 days</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus ab a cupiditate, doloribus magni repellendus, exercitationem ipsam eius maiores suscipit, accusantium commodi molestias possimus delectus aliquid. Est, blanditiis iure.</td>
          <td><button type="button">Delete</button></td>
        </tr>
      </tbody>
    </table>
   

  </div>

)
