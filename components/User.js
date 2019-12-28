import React from 'react';

class User extends React.Component {
    constructor({match}) {
        super();

        this.state = {
            user: {},
            username: match.params.username
        }
    }

    // To make an API request and gets its data in a variable we have to make an async call
    async componentDidMount() {
        const {username} = this.state;

        try
        {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();

            this.setState({ user: data });
        }
        catch(e)
        {
            console.error(e);
        }
    }

    render() {
        const {user} = this.state;

        return (
            <div>
                <h4>User Details</h4>
                <div className="row">
                    <div className="col-md-2">
                        <img height="80" width="80" src={user.avatar_url} alt="avatar" />
                    </div>
                    <div className="col-md-10"></div>
                </div>
                <div className="row">
                    <div className="col-md-2">Id</div>
                    <div className="col-md-10">{user.id}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">Name</div>
                    <div className="col-md-10">{user.name}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">Username</div>
                    <div className="col-md-10">{user.login}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">Github URL</div>
                    <div className="col-md-10">{user.url}</div>
                </div>
            </div>
        )
    }
}

export default User;