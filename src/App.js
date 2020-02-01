import React, { Component } from 'react';
import './App.css';
import data from "./data/data";
import Card from './Card';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      properties:data.properties,
      property:data.properties[0]
    }
  }
  nextproperty = () => {
   const newIndex = this.state.property.index+1
   this.setState({
     property:data.properties[newIndex]
   })
  }
  prevproperty=()=>{
    const newIndex =this.state.property.index-1;
    this.setState({
      property:data.properties[newIndex]
    })
  }

    render(){
      const {properties,property}=this.state;  
  return( 
     <div className="App">
       <button
        onClick={()=> this.nextproperty()}
        disabled={property.index===data.properties.length-1}
        >Next
       </button>
       <button
         onClick={()=> this.prevproperty()}
         disabled={property.index===0}
       >Prev
       </button>
       <div className="page">
        <div className="col">
          <div className={`cards-slider active-slide-${property.index}`}>
            <div className="cards-slider-wrapper" style={{"transform": `translateX(-${property.index*(100/properties.length)}%)`
            }}>
              {
                properties.map(property => <Card key ={property._index} property={property}/>)
              }
            </div>
          </div>
          </div>
        
          </div>
   </div>
  );


  }
}

export default App;
