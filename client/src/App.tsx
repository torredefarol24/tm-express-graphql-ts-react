import React from "react";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {LHOST_GQL_URL, HEROKU_GQL_URL} from './keys/vars'
import Launches from './components/Launches';


const ap_client = new ApolloClient({
	uri : LHOST_GQL_URL
})


export interface Props{}
interface State{}


class App extends React.Component<Props, State> {
	render() {
		return (
			<ApolloProvider client={ap_client}>
				<div className='container'>
					<h1> React Express Graphql (TS) Travis App</h1>
					<Launches> </Launches>
				</div>
			</ApolloProvider>

		);
	}
}

export default App;
