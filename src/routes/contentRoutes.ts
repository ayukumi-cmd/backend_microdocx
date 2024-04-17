// Import express, a minimal and flexible Node.js web application framework
// that provides a robust set of features for web and mobile applications.
import express, { Request, Response } from 'express';

// Import data and the ContentItem interface from the data module
// This data is used to mock the content items that the API will return.
import data, { ContentItem } from '../data';

// Create an instance of an express router
const router = express.Router();

// Define an API endpoint to get all content items
// This endpoint responds with the mock data when a GET request is made to '/'.
router.get('/', (req: Request, res: Response) => {
 res.json(data);
});

// Export the router
// This makes the router available for import in other parts of the application,
// specifically in the server setup where it's used to handle requests to '/api/content'.
export default router;