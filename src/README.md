Shopping cart

About:
This project is mimicking a shopping cart with complete discount option.

How to add items:
To add items simply create another object in the items array in src/app.js

Problems:
I couldn't find a way to display multiple items so for now we 
need to manually change the object we want to send in app.js in app.get('').

I tried to pass in two arguments to the updateTotal function in src/views/index.hbs 
but i can't find a way to pass in more then one argument in HTML to Javascript so i created 
a discount object in the Javascript side for test purposes.
