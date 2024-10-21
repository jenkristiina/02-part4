
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

  /* Course: mikäli useampia palautettavavia komponentteja, muista merkit: <> ja </> ! Huomaa myös, että mäpätessä useampaa tietoa taulukosta ne erotellaan backtikkeihin sekä dollarimerkillä! (eli luodaan merkkijonot)

  const Course = ({course}) => {

    let total = 0;

    course.parts.forEach((part) => { // foreachilla käydään läpi course.parts taulukko ja lisätään total muuttujaan parts.exercises tiedot
      total += part.exercises;
    });
*/


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


export default App