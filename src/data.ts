// Define the interface for content items
// This interface describes the shape of the data for each content item.
export interface ContentItem {
  id: number;
  name: string;
  ispower: boolean;
  createdDate: string;
  avatarLogo: string;
  icon: string; // New property for the icon
 }
 
 // Define the mock data for content items
 // This array contains objects that conform to the ContentItem interface.
 const data: ContentItem[] = [
  { id: 1, name: 'Deliverables Sample', ispower: true, createdDate: '2023-04-15', avatarLogo: '🧑‍💻', icon: 'power.png' },
  { id: 2, name: 'Accounting', ispower: false, createdDate: '2023-03-21', avatarLogo: '👩‍🎨', icon: 'word.png' },
  { id: 3, name: 'Minutes of meeting', ispower: true, createdDate: '2023-02-10', avatarLogo: '🧑‍💻', icon: 'power.png' },
  { id: 4, name: 'Kick-off.pptx', ispower: false, createdDate: '2023-01-05', avatarLogo: '🧑‍💻', icon: 'power.png' },
  { id: 5, name: 'Saled Deck.pptx', ispower: true, createdDate: '2022-12-15', avatarLogo: '🧑‍💻', icon: 'word.png' },
  { id: 6, name: 'HR Report', ispower: false, createdDate: '2022-12-15', avatarLogo: '🧑‍💻', icon: 'power.png' },
 ];
 
 // Export the mock data
 // This makes the data available for import in other parts of the application,
 // specifically in the contentRoutes where it's used to mock API responses.
 export default data;