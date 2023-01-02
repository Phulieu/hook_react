import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


const order = [100,200,300];
const courses = [
  {
    id: 1,
    name: "HTML,CSS"
  },
  {
    id: 2,
    name: "JavaScript"
  },
  {
    id: 3,
    name: "React Native"
  }
];
function App() {

  // const [counter,setCounter] = useState(()=>{
  //   const total = order.reduce((total,cur)=>total+cur);
  //   return total;
  // });
  // const handleIncrease = ()=>{
  //   setCounter(counter+1);
  // }
  // return (
  //   <div className="App">
  //       <h1>{counter}</h1>
  //       <button onClick = {handleIncrease}>Increase</button>
  //   </div>
  // );

  //Two-way binding for radio button

  // const [checked,setChecked] = useState(1)
  
  // const handleSubmit = ()=>{
  //   console.log({id: checked});
  // }

  // return (
  //   <div>
  //     {courses.map(course=> (
  //       <div key = {course.id}>
  //           <input 
  //             type = "radio"
  //             checked = {checked===course.id}
  //             onChange = {()=>setChecked(course.id)}
  //           />
  //           {course.name}
  //       </div>
  //     ))}

  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // )

  //CheckBox
  // const [checked,setChecked] = useState([])
  
  // console.log(checked);
  // const onCheck = (id)=>
  //   setChecked(prev => {
  //     if(checked.includes(id)) {
  //       return checked.filter(item=>item !=id);
  //     }

  //     else {
  //       return [...prev,id];
  //     }
  //   });
  

  // const handleSubmit = ()=>{
  //   console.log({id: checked});
  // }

  // return (
  //   <div>
  //     {courses.map(course=> (
  //       <div key = {course.id}>
  //           <input 
  //             type = "checkbox"
  //             checked = {checked.includes(course.id)}
  //             onChange = {() =>onCheck(course.id)}
  //           />
  //           {course.name}
  //       </div>
  //     ))}

  //     <button onClick={handleSubmit}>Register</button>
  //   </div>
  // )
   
  //TO DO list

   const [job,setJob] = useState("");
   const [jobs,setJobs] = useState(()=>{
    const storageJob = JSON.parse(localStorage.getItem("job"));
    return storageJob ?? [];
   });
  
   const handleSubmit = () => {
    setJobs(prev => {
      const newjobs = [...prev,job];
      const jsonJobs = JSON.stringify(newjobs);

      localStorage.setItem("job",jsonJobs);
      return newjobs;
    });
    setJob("");
   };

 
   return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
  

}

export default App;
