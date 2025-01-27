import React from 'react'

function QuestionsList({question, options, handleClick}) {

  return (
    <>
    <h2>{question}</h2>
    <ul className='ul1'>
        {
            options.map((option)=>{
                return(
                    <div key={option}>
                    <li onClick={()=>handleClick(option)}>{option}</li>
                    </div>
                )
            })
        }
    </ul>
    </>
  )
}

export default QuestionsList;
