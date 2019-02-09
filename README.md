## The Slap Game - Part 1

#### Objective:
Students will use javascript in order to interact with the DOM to create a dynamic webpage.

### Step 1 - GIT - Project Initialization

x1. Create a git repository named SlapGame
x2. Create the file index.html and a script file called game.js and a css file name game.css.
x3. Commit changes and push them back to GitHub.

### Step 2 - HTML - Create page layout and Slap button

x1. Link Bootstrap game.js and game.css to index.html.
x2. Add an image to the body with a width of 200px this is your "target"
x3. Add a button to the footer with the text "Slap"

### Step 3 - JS - Declare variables and write the Slap function

x1. Create a global variable: var health=100;
x2. Create a function: slap()
x  - Have the function reduce the health variable by 1.
x  - For now, have the function alert(health).
x  - Test the function by calling slap() at the end of the game.js file. 
x    - You should see an alert of 99 show on the screen.
x    - If this is working, remove the test to prevent popups on every page load.

### Step 4 - HTML - Link the Slap button to the Slap function

x1. On the slap button element, add the attribute onClick="slap()"
x  - If things are working properly you should be able to hit the slap button and see the
x  alert window with a decrease in health.
x2. To prevent having to show the targets health in popup, let's link the target's health directly to the user interface.
x3. Add a span element to the header for the target's health, example: 
```html
x<span>Health:<span id="health">--</span></span>
```
x - The id is important so we can call the element from JS easily.

### Step 5 - JS - Update the user interface

x1. We are now going to add a function to manipulate the user interface by using the DOM API.
x  - To do this, javascript is required.
x  - You should know by now that selectors are required in order to select specific elements inside the DOM.
x  - In this case, we will use the infamous "document.getElementById("WHATEVER-ID")";
x2. Add a function called update(). This will be responsible for updating the user interface whenever a value changes.
x  - Have the function set the "innerText" of the element with the id "health"
x3. Add a call to the update() function at the bottom of your js file. If it is working, you should see the target's health on the screen.
x  - There is no need to delete the call you just added, it is recommended so you always start off with populated values.
x4. If it is working, make sure you add a call to update at the end of the slap function. This way the screen is updated after every slap.


### Step 6 - HTML - Add the other buttons and stuff...

x1. Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
x  - Have the punch function decrease the target's health by 5, and kick by 10.
x  - Don't forget to call update inside each function.
x2. Declare 2 more variables 'name', and 'hits' where you initialized the health variable. 
x  -Name your target whatever you want, what datatype would a name be?
x  -Set the variable hits with a value of 0, every time the target is hit by a Slap, Punch, or Kick
x    this variable should be increased by 1.
x3. Add a placeholder for target name, and hits inside the header next to health.
x4. Wire everything up like you did for "Slap".

### Step 7 - Testing Time
x1. You should now have a functioning application. Test the following
  - In the panel header you should see an indicator for Health, Name, and Hits; their respective values should be 100, "Whatever Name       You Chose", and 0.
x  - Click the slap button, you should see the target health drop to 99 and hit count to 1.
x  - Click the punch button, you should see the target health drop to 94 and hit count to 2.
x  - Finally click the Kick button, you should see the target health drop to 84 and hit count to 3.
x  - Keep pressing buttons... What happens when the target has been hit for over 100 hit points? Why does this happen?

### Requirements   
x  - Visualization: 
x      - Current Health and Health Updates are visible while game is being played
x  - Functionality: 
x      - 3 Buttons to affect status in varying amounts


