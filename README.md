# Travel Budget Planner

Travel Budget Planner is a simple web app that helps users estimate how much a trip will cost. The user enters trip details such as destination, number of days, number of travelers, hotel cost, food cost, transportation cost, activity cost, and extra budget percentage. The app then calculates the full travel budget and displays a clear cost breakdown.

This project was built as part of a travel tools collection. It connects well with a packing list project because both apps help users prepare for a trip.

## Features

- Enter a travel destination
- Enter number of days
- Enter number of travelers
- Add hotel cost per night
- Add food cost per person per day
- Add transportation cost
- Add activity cost
- Add extra emergency budget percentage
- Calculate total trip cost
- Calculate cost per person
- Calculate daily average cost
- Show category totals
- Display Budget / Standard / Expensive label
- Show visual spending bars
- Validate user input
- Save latest trip using localStorage
- Load saved trip when the page opens
- Reset form and results
- Print budget summary
- Responsive layout for desktop and mobile

## How It Works

The user fills out the trip form and clicks the Calculate Budget button.

The app calculates:

- Hotel total
- Food total
- Transportation total
- Activities total
- Extra budget amount
- Total trip cost
- Cost per person
- Daily average cost

The app also uses the cost per person to classify the trip as:

- Budget
- Standard
- Expensive

## Example

Input:

```text
Destination: Boston
Days: 3
Travelers: 2
Hotel Cost Per Night: $150
Food Cost Per Person Per Day: $40
Transportation: $120
Activities: $200
Extra Budget: 10%

Output:

Hotel Total: $450.00
Food Total: $240.00
Transportation: $120.00
Activities: $200.00
Extra Budget: $101.00
Total Trip Cost: $1,111.00
Cost Per Person: $555.50
Daily Average: $370.33
Budget Level: Standard
Technologies Used
HTML
CSS
JavaScript
localStorage
Git
GitHub
Project Structure
Travel-Budget-Planner/
│
├── index.html
├── style.css
├── script.js
└── README.md
What I Learned

While building this project, I practiced:

Creating a form with multiple input fields
Reading form values with JavaScript
Converting input values into numbers
Writing calculation functions
Updating the page dynamically
Using helper functions to organize JavaScript
Validating user input
Formatting numbers as currency
Using localStorage to save browser data
Creating visual progress bars
Adding reset and print functionality
Making a responsive layout with CSS
Main JavaScript Concepts Used
getElementById
addEventListener
Form submit handling
event.preventDefault()
Objects
Functions
Conditional statements
Number()
toLocaleString()
localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
DOM updates with textContent
CSS width updates with JavaScript
Future Improvements

Possible future upgrades:

Add currency selection
Add dark mode
Add trip notes
Add export to PDF
Add multiple saved trips
Add pie chart or chart library
Add airfare cost field
Add rental car cost field
Add tax and fee percentage
Add travel budget comparison between destinations
AI Usage Note

The project idea, README structure, and some planning guidance were assisted by AI. The code was built step by step manually as part of the learning process.

Author

Created by Om Bhagat.