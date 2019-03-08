import React, { Component, Fragment } from 'react';
import GQL_TAG from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItems';


const LAUNCHES_QUERY = GQL_TAG`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

export default class Launches extends Component {
	render(){

		const loadingMsg = <p> Loading Data ... </p>
		const loadedErrorMsg = <p> Loading Failed. Check browser console</p>

		const loadedData = (items : any) => (
			<Fragment>
				<div className='row mt-32'>
					{
						items.map( (item:any)  => {
							return <LaunchItem key = {item.flight_number} launchData = {item} />
						})	
					}
				</div>
					
			</Fragment>
		)

		return (
			<Fragment>
				<h3> Launches Component</h3>

				<Query query={LAUNCHES_QUERY}>
					{
						({ loading, error, data}) => {
							if (loading){
								return loadingMsg
							}

							if (error) {
								console.log(`Launches Query Error: ${error}`)
								return loadedErrorMsg
							}

							// console.log(`Launches Query Data : ${JSON.stringify(data, null, 4)}`)
							return loadedData(data.launches)
						}
					}
				</Query>

			</Fragment>
		)
	}
}
