import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema,
	GraphQLInt
} from 'graphql';
import axios from 'axios';
import LaunchType from './object_types/launch';
import RocketType from './object_types/rocket';


// Define Root Fields
const RootFields = {
	launches : {
		type : new GraphQLList(LaunchType),
		resolve(parent:any, args:any){
			return axios.get("https://api.spacexdata.com/v3/launches").then( resp => resp.data);
		}
	},
	launch : {
		type : LaunchType,
		args : {
			flight_number : {
				type : GraphQLInt
			}
		},
		resolve(parent:any, args:any){
			return axios.get("https://api.spacexdata.com/v3/launches/" + args.flight_number).then( resp => resp.data);
		}
	},
	rockets : {
		type : new GraphQLList(RocketType),
		resolve (parent:any, args:any){
			return axios.get("https://api.spacexdata.com/v3/rockets").then(resp => resp.data)
		}
	},
	rocket : {
		type : RocketType,
		args : {
			id : {
				type : GraphQLInt
			}
		},
		resolve(parent:any, args:any){
			return axios.get("https://api.spacexdata.com/v3/rockets/" + args.id).then(resp => resp.data);
		}
	}
}


// Define Root Obj Type
const RootType = {
	name : "RootQueryType",
	fields : RootFields
}


// Create Root Obj
const RootQuery = new GraphQLObjectType(RootType)


// Define Root Schema Opts 
const rootSchemaOpts = { 
	query : RootQuery 
}


// Creat Root Schema
const RootSchema = new GraphQLSchema(rootSchemaOpts)
export default RootSchema