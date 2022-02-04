import React from 'react'
import styled from 'styled-components';

const MyForm = styled.form` 
                background-color: #F2F3F4; 
                text-align: left; 
                padding: 20px;
                margin-top: 15px
                `;

class Menu extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            food: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
        this.setState({food:event.target.value});
    }

    render() {
        return (
        <div> 
            <br/>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1>Explore Menu</h1>
                <MyForm>
                    <label>Are you looking for food?:  </label>
                    <input name="food" type="text" 
                    value={this.state.food} 
                    onChange={(e) => 
                        this.handleChange({ 
                        food: e.target.value})}/>
                    <button type="button">Search</button> 
                </MyForm>
            </div>
        </div>
        )
    }
}
export default Menu