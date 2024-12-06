Project Overview
This web application allows users to select cricket players for their team while adhering to a coin limit. Players are displayed in a card layout, where users can choose players and add them to their selected team. Users can manage their selection, see their available coins, and even remove players from the selection.

Technologies Used
React – A JavaScript library for building user interfaces.
Vite – A fast build tool for React development.
ESLint – To ensure consistent code quality.
CSS – For styling the components based on Figma designs.
Key Features
1. Player Selection and Management
Users can browse through a list of cricket players, each with their details (name, country, role, batting/bowling type, and price).
Players can be added to the selected team, provided the user has enough coins.
The number of selected players is displayed, and users can remove players from their selection.
2. Coin Management System
Users begin with 0 coins and can increase their coin balance by clicking the "Increase Coin" button in the banner.
Player selection is restricted by the available coins, ensuring the user cannot exceed their budget.
Notifications via React Toastify alert users about insufficient funds or duplicate player selections.
3. Interactive UI with Figma Design
The app is styled to match the Figma design, providing a professional and sleek interface.
Players are displayed in a card layout with clear details, and the UI features buttons for toggling between available and selected players.