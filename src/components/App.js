
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs.js'


const App = () => {
  
  const tabs = [
    {
      title: "Apple",
      content: "An Apple a day keep the doctor away."
    },
    {
      title: "Orange",
      content: "Oranges are citrus fruits."
    },
    {
      title: "Mango",
      content: "Mango is a seasonal friut of summer."
    }
  ]
  
  return (
    <div>
        <Tabs tabs={tabs}/>
    </div>
  )
}

export default App
