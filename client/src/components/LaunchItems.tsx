import React from 'react';


const LaunchItem = (props:any) => {

	const { flight_number, launch_date_local, mission_name } = props.launchData;

	const portion = (
		<div className = 'col-md-6'>
			<h1> {mission_name} </h1>
			<p> Date : {launch_date_local}</p>
			<p> Flight : <strong> {flight_number}</strong></p>
		</div>	
	)

	return portion
}

export default LaunchItem