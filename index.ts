import { Express, json, Request, Response, urlencoded } from "express";

const express = require( "express" );
require( "dotenv" ).config();

const app: Express = express();
const port = process.env.PORT;

app.use( urlencoded( { extended: false } ) ) // For allowing urlencoded format to be passed in the req.body
app.use( json() )  // For allowing json to be passed in the req.body
app.use( express.static(__dirname + '/public')) // For displaying static HTML pages

// GET Requests
app.get( "/hello", ( req: Request, res: Response ) => {
	res.send( `<img src="https://media4.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif" alt="Obi Wan Kenobi saying Hello There.">` );
} );

app.get( "/", ( req: Request, res: Response ) => {
	res.send( "First Express + Typescript Server" );
} );

// POST Requests
app.post( "/post-test", ( req, res ) => {
	console.log( req.body )
	const testInfo = {
		id: 0,
		info: "Post is working",
	}
	res.send( testInfo );
} )

app.listen( port, () => {
	console.log( `⚡️[server]: Server is running at http://localhost:${ port }` );
} );
