import React from 'react';

import { Link } from "react-router-dom";

class Users extends React.Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    // To make an API request and gets its data in a variable we have to make an async call
    async componentDidMount() {
        try
        {
            const res = await fetch('https://api.github.com/users?since=0');
            const data = await res.json();

            this.setState({ users: data });
        }
        catch(e)
        {
            console.error(e);
        }
    }

    render() {
        const { users } = this.state;
        
        let tableRow = <tr><td colSpan="4" style={{ textAlign: "center" }}>No data found</td></tr>
        if( users.length > 0 )
        {
            tableRow = users.map((user, index) => 
                <tr key={index}>
                    <td>{ user.id }</td>
                    <td>{ user.login }</td>
                    <td>{ user.url }</td>
                    <td><Link to={`/user/${user.login}`}>Get Details</Link></td>
                </tr>
            );
        }

        return (
            <div>
                <h4>Github Users</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Github URL</th>
                            <th>User Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableRow }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users;