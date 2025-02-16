# map-app
# Hamilton Tourist Spots 
## Introduction
Hamilton is known for its beautiful parks, scenic waterfalls, and diverse restaurants. This project is a web application that helps tourists and locals explore these attractions using an interactive map. The application displays 15 popular locations, categorized into parks, museums, and restaurants. Users can filter locations, add new spots, find their own location, and get directions to any of the listed places.

This project integrates the Google Maps API, Geolocation API, and Geocoding API to provide an easy-to-use experience. The interface is styled with Bootstrap to ensure a clean and mobile-friendly design.

## Project Goals
The main objectives of this project are:
1. To integrate a web mapping service (Google Maps API).
2. To use the Geolocation API to track the user’s location.
3. To use a Geocoding API to convert addresses into GPS coordinates.
4. To implement Bootstrap styling for a modern and responsive layout.

## Features
### Interactive Map with Tourist Spots
The homepage prominently features a Google Map displaying 15 locations (parks, museums, and restaurants). Each marker represents a tourist spot, and clicking it opens an info window with details such as name and address.
### Filtering System
Users can filter locations using three buttons:
- Show only parks
- Show only museums
- Show only restaurants
### User Location Feature
A "Find My Location" button places a marker at the user’s current position.
The user’s location is displayed using a unique marker icon to differentiate it from the other locations.
## Adding New Locations
Users can add a new tourist spot using a form.
#### The form includes:
- An address input (converted into GPS coordinates using Geocoding API).
- A category dropdown (Parks, Museums, Restaurants).
- A submit button that places a new marker on the map.
- The new marker follows the same format as the default markers and appears in filtered views accordingly.
## Getting Directions
- Users can get directions from their current location to any tourist spot.
- This feature is designed for ease of use, allowing users to select a destination from a dropdown instead of manually typing addresses.
## Styled with Bootstrap & Responsive Design
All buttons, forms, and interface elements are styled using Bootstrap.
The application is mobile-friendly and adjusts dynamically to different screen sizes.
#### Responsive changes:
- The map resizes for smaller screens.
- Buttons and menus rearrange for mobile users.
- Form elements adjust for better usability on different devices.
## Technology Used
- Google Maps API – To display the map and markers.
- Geolocation API – To find and display the user’s location.
- Geocoding API – To convert addresses into coordinates for added markers.
- Bootstrap – For styling and making the app responsive.
- JavaScript, HTML, CSS – For structuring and developing the application.

## Conclusion
This project is a simple but practical web application that helps users explore Hamilton’s tourist attractions in an interactive way. By integrating mapping services, filtering, geolocation, and responsive design, the application provides a user-friendly experience.