import React from 'react'
import styled from 'styled-components';

const MyForm = styled.form`
    background-color: #F2F3F4;
    text-align: left;
    padding: 20px;
    margin-top: 15px;
`;

class Menu extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            food: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({food:event.target.value});
    }

    handleSubmit(event) {
        let APi_key = "0ab71af3c83147c0be8a163f2edf192c";
        let rooturl =
            "https://api.spoonacular.com/food/menuItems/search?apiKey=" +
            APi_key +
            "&query=" +
            this.state.food;
        console.log(rooturl);
        fetch(rooturl)
            .then((res) => res.json()) // Get JSON from the response
            .then((data) => {
                console.log(data);
                this.setState({
                    result: data.menuItems
                })
            })
            .catch((err) => console.log(err));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <br/>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h1>Explore Menu</h1>
                    <MyForm onSubmit={this.handleSubmit}>
                        Are you looking for food?:
                        <input name="Menu" type="text"
                         value = {this.state.food}
                         onChange={this.handleChange}/>
                        <button type="submit">Search</button> 
                    </MyForm>
                </div>
                <br/>
                <div style={{display:"flex", flexFlow:"row wrap", justifyContent:"center"}}>
                    {this.state.result&&this.state.result.map(data => {
                        return (
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <img src={data.image} width="312" height="231"></img>
                                <p>{data.title}</p>
                                <p>({data.restaurantChain})</p>
                            </div>
                        )
                    })}
                </div>                                        
            </div>
        )
    }
}

export default Menu