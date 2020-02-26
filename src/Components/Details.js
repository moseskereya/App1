import React, { Component } from 'react';
import axios from "axios";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Single: []
         }
    }


    componentDidMount () {
        const Ap_Id = "ed3de50e";
        const Key = "ac0727b9ef7767420b1267545d421144";
        axios.get(`https://api.edamam.com/search?q=${this.props.match.params.label}&app_id=${Ap_Id}&app_key=${Key}`
        )
        .then(response =>{
            console.log(response.data.hits)
            this.setState({Single:response.data.hits})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render() { 
        return ( 
          <div className="Main2">
            {this.state.Single.map(item => 
            <div className="child" key={item.recipe.label}>
             <div className="details">
              <h4>{item.recipe.label}</h4>
              <img src={item.recipe.image} alt="img-recipe"/>
              <p>Food Source :{item.recipe.source}</p>
              <p>Yield : {item.recipe.yield}</p>
              <p>calories : {item.recipe.calories}</p>
              <p>Yield : {item.recipe.yield}</p>
             <p>ingredients : {item.recipe.ingredients.map(one => 
             <li key={one.id}>{one.text}</li>)}</p>
          </div>
         </div>
         )}
        </div>
         );
    }
}
 
export default Details;