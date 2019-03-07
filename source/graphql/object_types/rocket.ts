import {
	GraphQLString,
	GraphQLObjectType
} from 'graphql'


//Define Field Types
const RocketFieldTypes = {
	rocket_id : {
		type : GraphQLString,
	},
	rocket_name : {
		type : GraphQLString
	},
	rocket_type : {
		type : GraphQLString
	}
}


// Define Rocket Obj
const RocketObj = {
	name : "Rocket",
	fields : () => (RocketFieldTypes)
}


// Create Rocket Type
const RocketType = new GraphQLObjectType(RocketObj)
export default RocketType