import React from 'react'
import BoardColumnComponent from './boardColumnComponent/BoardColumnComponent'
import AddColumnComponent from './addColumnComponent/AddColumnComponent'

const MainComponent = () => {
  return (
    <div className='flex gap-6 p-6 pb-[50px] min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-96px)]'>
      <BoardColumnComponent />
      <BoardColumnComponent />
      <BoardColumnComponent />
      <AddColumnComponent />
    </div>
  )
}

export default MainComponent