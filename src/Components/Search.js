import React, { Component } from 'react';
import axios from "axios"
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searched:[]
         }
    }

    getRecipe = (e) =>{
        e.preventDefault()
        const Ap_Id = "ed3de50e";
        const Key = "ac0727b9ef7767420b1267545d421144";
        const RecipeName = e.target.elements.RecipeName.value;
        axios.get(`https://api.edamam.com/search?q=${RecipeName}&app_id=${Ap_Id}&app_key=${Key}`)
        .then(response =>{
            console.log(response.data.hits)
            this.setState({searched:response.data.hits})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() { 
        return ( 
            <div>
              <div className="search">
                  <h3>Search recipe of your own favorite</h3><br/>
                <form onSubmit={this.getRecipe}>
                   <input type="text" name="RecipeName"/> 
                   <button type="submit">Search</button>
                </form>
                </div>
                <div className="Main2">
                {this.state.searched.map(item => 
                <div className="child" key={item.recipe.label}>
                 <div className="details">
                  <h4>{item.recipe.label}</h4>
                  <img src={item.recipe.image} alt="img-recipe"/>
                   <p>Food Source :{item.recipe.source}</p>
                   <p>Yield : {item.recipe.yield}</p>
                   <p>calories : {item.recipe.calories}</p>
                 </div>
             </div>
             )}
            </div>
            </div>
         );
    }
}
 
export default Search;