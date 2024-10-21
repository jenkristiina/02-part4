import React from "react";

const Course = ({course}) => {
    const total = course.parts.reduce((acc, part) =>
    acc + part.exercises, 0)

  return (
    <>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <p key={`${part.name}${part.exercises}`}>
            {part.name} {part.exercises}
          </p>
        ))}
      </ul>
      <h3>Total exercises: {total}</h3>
    </>
  )
}

export default Course