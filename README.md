# Javascript

Sometimes it's important to go back to the basics concepts so you can get a better understanding of what you use or why and how you use it, and at the end of the day be more efficient.

## Objects
An object is a collection of related `data` and/or `functionality`.

In the file: `./pages/Objects.html` I'm trying to understand and use all the ways to use Objects in JS (It's like a cheatsheet for me).

To test the use of User and Article Objects, run: `npm start` or `npm run dev`.

### Object literal
Use it to manipulate a structured and related (`key-value`) data set.

### Constructors
Allows you to create a prototype (JS object). Useful when you want to create more than one object with the same properties and methods.

## The App 
In the other part of the application I am using and testing differents JS features such as: modules, export, import, async functions with Promises, ...

To run the app:
- Install: `npm install`.
- Copy content of the file `db_sample.json` and paste it in a new file named `db.json`.
- Run the json db server: `npm run db`.
- Load article's categories: `node ./services/loadCategories`.
- Run the project server: `npm run serve`.