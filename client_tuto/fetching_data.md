
### Fetch data from API 

### install axios 
npm i axios 

in Dashboard.js 

import React from "react";
import axios from 'axios';

export default class DashboardPage extends React.Component {
    state = {
        persons: [],
        showDialog:false,
        name:''
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    render() {
        return (
            <div className="page-container">
                <h3>Dashboard Page</h3>
                {
                    this.state.persons.map(person=>(
                        <li key={person._id}>{person.name}</li>
                    ))
                }
            </div>
        )
    }
}