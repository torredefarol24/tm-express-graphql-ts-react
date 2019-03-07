import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLSchema
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