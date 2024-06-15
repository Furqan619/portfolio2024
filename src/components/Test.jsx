import React, { useState } from 'react'

function Test() {
const[change, setChange] = useState(false)



  return (
    <div>
      <p className="cursor-pointer" onClick={()=>{setChange(!change)}}>{change?"True case":"False case"}</p>
    </div>
  )
}

export default Test
