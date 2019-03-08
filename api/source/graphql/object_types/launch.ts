import {
	GraphQLObjectType, 
	GraphQLInt, 
	GraphQLString, 
	GraphQLBoolean
} from 'graphql'
import RocketType from './rocket'


// Define Field Types
const LaunchFieldTypes = {
	flight_number : {
		type : GraphQLInt
	},
	mission_name : {
		type : GraphQLString
	},
	launch_year : {
		type : GraphQLString
	},
	launch_date_local : {
		type : GraphQLString
	},
	launch_success : {
		type : GraphQLBoolean
	},
	rocket : {
		type : RocketType
	}
}


// Define Launch Obj
const LaunchObj = {
	name : "Launch",
	fields : () => (LaunchFieldTypes)
}

// Create Launch Type
const LaunchType = new GraphQLObjectType(LaunchObj)
export default LaunchType