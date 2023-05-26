let friends = parseInt (prompt("Enter total number of friends"));
let appetizer = parseInt (prompt("Enter the total appetizer bill"));
let main = parseInt (prompt("Enter the total main course bill"));
let dessert = parseInt (prompt("Enter the total dessert bill"));
let splitt = (appetizer + main + dessert) / friends;

document.write(`Per Person bill is ${splitt} TK`);