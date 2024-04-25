
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

export default class App extends Component {
  

  render() {
    const  router = createBrowserRouter([
      {path : "/business",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="business"/>
    </div></>
      },
      {path : "/entertainment",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="entertainment"/>
    </div></>
      },
      {path : "/genral",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="genral"/>
    </div></>
      },
      {path : "/health",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="health"/>
    </div></>
      },
      {path : "/science",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="science"/>
    </div></>
      },
      {path : "/sports",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="sports"/>
    </div></>
      },
      {path : "/technology",
      element:<><div>
      <Navbar/>
      <News pageSize={6} country="in" category="technology"/>
    </div></>
      }
      
    ])
    return (
      
      <>
        <RouterProvider router={router}/>
             </>
    )
  }
}
