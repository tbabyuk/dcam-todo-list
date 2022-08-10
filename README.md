# To Do List

See it live: [To Do List](https://gleeful-otter-2bfdcc.netlify.app/)

## Description
A simple to-do app that allows user to add new to-do items, delete existing items, set priority status of each item, and filter items based on a query.

## Background & Process
Although this is one of those "cliche" portfolio projects, I thought it was important to do nevertheless as it has functionality that can be applied to many other, more complex projects. The most important of these were adding an item to the DOM, removing it from the DOM, as well as filtering a list of items.

## Technologies
The current version of this project was done with:
* HTML
* CSS
* Bootstrap
* JavaScript

## State of Completion
Completed.

## Learning Lessons & Challenges
### Filtering Items
The biggest challenge in this project was the filtering functionality for the to-do items. First of all, the to-do items were an HTML Collection, which had to be converted to an Array in order to use the forEach method on them. To achieve this, I used the Array.from() method. After that, I had to compare the text content of each to-do item against the user query and apply a .hidden class when the two don't match. Neat logic!


## Summary
A nice little project with some important and recurring coding concepts. The filtering functionality was especially tricky but fun to implement!




