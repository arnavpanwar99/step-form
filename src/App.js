import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Details from './components/Details/Details';
import Address from './components/Address/Address';
import Payment from './components/Payment/Payment';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Details} />
				<Route path='/address' component={Address} />
				<Route path='/payment' component={Payment} />
				<Route path='*' component={()=>(<div>Can not get this route</div>)} />
			</Switch>
		</Router>
	);
}

export default App;
