import React from 'react';
import User from './components/User';
import Users from './components/Users';

// import NavBar from './components/NavBar';

// For routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {

	render() {
		
		const linkStyle = {
			marginTop: '10px',
			width: '50%',
			display: 'flex',
			justifyContent: 'space-around',
		}

		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<ul className="nav navbar-nav" style={ linkStyle }>
								<Link to="/"><li className="active">Home</li></Link>
								<Link to="/users"><li>Github Users</li></Link>
							</ul>
						</div>
					</nav>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route path="/users" component={Users}></Route>
						<Route path="/user/:username" component={User}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

const Home = () => (
	<div>
		<h4>Home</h4>
	</div>
);

export default App;
