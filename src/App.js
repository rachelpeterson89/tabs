import React, { useState } from 'react';
import DisplayTabs from './components/DisplayTabs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ tabs, setTabs ] = useState([

    {
      name: "Tab 1",
      isSelected: true
    },
    {
      name: "Tab 2",
      isSelected: false
    },
    {
      name: "Tab 3",
      isSelected: false
    }

  ])

  const toggleTab = (idx) => {
    tabs.forEach(( tab, i ) => {
      let updateTab = tab;

      if( idx === i ) {
        updateTab.isSelected = true;
      } else {
        tab.isSelected = false;
      }
      setTabs(
        [...tabs.slice(0,i),updateTab].concat(tabs.slice(i+1))
      );

    })
  }

  return (
    <div className="col-6 vh-100 mx-auto my-5">
      
      <div className="p-2 d-flex justify-content-start">
        {
          tabs.map( ( tab, i ) => {
            return <DisplayTabs
              key={i}
              idx={i}
              name={tab.name}
              isSelected={tab.isSelected}
              toggleTab={toggleTab}
            />
          })
        }
      </div>
      <div className="p-2 ml-2 h-25 border rounded">
          {
            tabs.map(( tab, i ) => {
              return tab.isSelected ? <h2 className="m-4">{ tab.name } content is showing here.</h2> : null
            })
          }
      </div>
    </div>
  );
}

export default App;