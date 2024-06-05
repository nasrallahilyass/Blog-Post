import React from 'react'

const Test = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await response.json()

  return (
    <div className='text-center'>
        <h1 className=' text-3xl'>We're testing API's</h1>
        <h1>{todo.title}</h1>
    </div>
  )
}

export default Test