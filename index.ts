import { Express, Request, Response } from "express";

const express = require( "express" );
require( "dotenv" ).config();

const app: Express = express();
const port = process.env.PORT;

app.get( "/hello", ( req: Request, res: Response ) => {
  res.send( `<img src="https://media4.giphy.com/media/xTiIzJSKB4l7xTouE8/giphy.gif" alt="Obi Wan Kenobi saying Hello There.">` );
} );

app.get( "/", ( req: Request, res: Response ) => {
  res.send( "First Express + Typescript Server" );
} );

app.listen( port, () => {
  console.log( `⚡️[server]: Server is running at http://localhost:${ port }` );
} );
