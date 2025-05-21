import React, { createContext, useState } from 'react'

export const todocontext = createContext(null);

const Wrapper = (props) => {
    
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam karle chal", isCompleted: false },
  ]);

  return (
    <todocontext.Provider value={[todos, settodos]}>
        {props.children}
    </todocontext.Provider>
  )
}

export default Wrapper