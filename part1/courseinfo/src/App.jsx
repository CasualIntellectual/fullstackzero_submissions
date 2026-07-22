const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.information[0].part} exercises={props.information[0].exercises}/>
      <Part part={props.information[1].part} exercises={props.information[1].exercises}/>
      <Part part={props.information[2].part} exercises={props.information[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.information[0].exercises + 
          props.information[1].exercises + props.information[2].exercises}
      </p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  
  const information = [
    {part: 'Fundamentals of React', exercises : 10},
    {part: 'Using props to pass data', exercises : 7},
    {part: 'State of a component', exercises : 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content information={information}/>
      <Total information={information}/>
    </div>
  )
}

export default App

