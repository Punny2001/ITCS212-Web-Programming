import React from 'react'
import styled from 'styled-components';

const MyForm = styled.form` 
                background-color: #F2F3F4; 
                text-align: left; 
                padding: 20px;
                `;

class Recipe extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            recipe: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changeObject) { 
        this.setState(changeObject);
    }

    render() {
        return (
        <div> 
            <br/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1>Explore Recipe</h1>
                <MyForm>
                    <label>Are you looking for something to cook?:  </label>
                    <input name="recipe" type="text" 
                    value={this.state.studentID} 
                    onChange={(e) => 
                        this.handleChange({ 
                        recipe: e.target.value})}/>
                    <button type="button">Go go!!</button> 
                </MyForm>
            </div>
        </div>
        )
    }
}
export default Recipe