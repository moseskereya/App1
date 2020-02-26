import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
// import Rotate from 'react-reveal/Rotate';
class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: []
          }
    }

    componentDidMount () {
        const Ap_Id = "ed3de50e";
        const Key = "ac0727b9ef7767420b1267545d421144";
        axios.get(`https://api.edamam.com/search?q=icecream&app_id=${Ap_Id}&app_key=${Key}`
        )
        .then(response =>{
            console.log(response.data.hits)
            this.setState({recipe:response.data.hits})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() { 
        return ( 
            <div className="Main">
             {this.state.recipe.map(item => 
             <div className="child" key={item.recipe.label}>
                 <div className="details">
                  <h4>{item.recipe.source}</h4>
                  <img src={item.recipe.image} alt="img-recipe"/>
                  <Link to = {`Details/${item.recipe.label}`}>
                     <p className="url">
                        {item.recipe.label} 
                     </p>
                  </Link>
                 </div>
             </div>
             )}
            </div>
         );
    }
}
 
export default Recipe;