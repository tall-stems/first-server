const fs = require( 'fs' )

// ReadFile is asynchronous, thus the need for a callback function.
// Typically, this is preferred, so we don't block the rest of the server from continuing it's work.
fs.readFile( "./fs-practice/hello.txt", ( err, data ) => {
	if ( err ) {
		console.log( "error: ", err )
	}
	console.log( "read file (async): ", data.toString() )
} )

// ReadFileSync is synchronous in that the code waits here until it"s done reading the file.
const file = fs.readFileSync( "./fs-practice/hello.txt" );
console.log( "read file (sync): ", file.toString() )

// APPEND text to an already existing file
// fs.appendFile( "./fs-practice/hello.txt",
// 	"appendFile can add text to the end of your file",
// 	err => {
// 		if ( err ) {
// 			console.log( { err } )
// 		}
// 	} )

// WRITE / CREATE a new file
// fs.writeFile( "./fs-practice/new-text.txt", "Can write text to a newly created file", err => {
// 	if ( err ) {
// 		console.log( { err } )
// 	}
// } )

// DELETE a file
// fs.unlink("./fs-practice/new-text.txt", err => {
// 		if ( err ) {
// 			console.log( { err } )
// 		}
// 	})
