// Import express, a minimal and flexible Node.js web application framework
// that provides a robust set of features for web and mobile applications.



import express from 'express';

// Import the content routes from the routes directory
// These routes handle requests related to content management.
import contentRoutes from './routes/contentRoutes';

// Create an instance of an express application
const app = express();
// Define the port on which the server will listen
const port = 3001;

// Enable CORS (Cross-Origin Resource Sharing)
// This middleware function adds the necessary headers to the response
// to allow cross-origin requests.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Use the content routes for requests to '/api/content'
// This means that any request to '/api/content' will be handled by the contentRoutes.
app.use('/api/content', contentRoutes);

// Start the server and listen on the specified port
// This function call starts the server and makes it listen for requests on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
