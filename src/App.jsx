import Course from "./Course"


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Tässä nähdään että lisäys toimii',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
        />
      ))}
    </div>
  )
}

export default App









/*
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Tässä testi että toimii myös tietoa lisätessä!',
        exercises: 50,
        id: 4
      }
    ]
  }
  */

  /* MAPPING METHOD:
  
  Course: mikäli useampia palautettavavia komponentteja, muista merkit: <> ja </> ! Huomaa myös, että mäpätessä useampaa tietoa taulukosta ne erotellaan backtikkeihin sekä dollarimerkillä! (eli luodaan merkkijonot)

  const Course = ({course}) => {

    let total = 0;

    course.parts.forEach((part) => { // foreachilla käydään läpi course.parts taulukko ja lisätään total muuttujaan parts.exercises tiedot
      total += part.exercises;
    });
    */

    /* REDUCE METHOD:
    const Course = ({course}) => {
      const total = course.parts.reduce((acc, part) => acc + part.exercises, 0);

    // Tässä acc tarkoittaa kertynyttä arvoa ja part sitä osaa mitä käsitellään. Lopun 0 ilmoittaa acc:n lähtöarvon johon sitten part.exercises arvot lisätään

    return (
      <>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <p key={`${part.name}${part.exercises}`}>
          {part.name} {part.exercises}</p>
        ))}
      </ul>
      <h3>Total exercises: {total}</h3>
      </>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
*/