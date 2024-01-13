// AUTHOR: ANSAL MUHAMMED
// STUDENT ID: 100881383
// ICE1: GitHub Initial Commit

// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var shopngLst = document.getElementById('shoppingList');

// ADD NEW ITEM TO END OF LIST
// Create element
var nwElmnt = document.createElement('li');
// Create text node
var newText = document.createTextNode('new item at the end');
// Add text node to element
nwElmnt.appendChild(newText);
// Add element to end of list
shopngLst.appendChild(nwElmnt);

// ADD NEW ITEM START OF LIST
// Create element
var nwElmntStrt = document.createElement('li');
// Create text node
var nwTxtStrt = document.createTextNode('new item at the start');
// Add text node to element
nwElmntStrt.appendChild(nwTxtStrt);
// Add element to start of list
shopngLst.insertBefore(nwElmntStrt, shopngLst.firstChild);

// All <li> elements
var LstItms = document.querySelectorAll('#shoppingList li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Loop through elements
for (var i = 0; i < LstItms.length; i++) {
    // Change class to cool
    LstItms[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var heading = document.querySelector('h2');
// No. of <li> elements
var itemCount = LstItms.length;
// Content
var cntent = 'Buy groceries - ' + itemCount + ' items';
// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = cntent;
