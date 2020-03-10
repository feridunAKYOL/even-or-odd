# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

* `index.html` and folder structure with empty files

## 1. Data & Log

* `data/strings.js` & `log.js`

## 2. Init (not finished!)

* The code in `init.js` that renders the current list for users is complete.
  * But the `renderList` DOM Component function is not!  you will need to write this
* `index.html` is complete, just waiting for the code behind it

## 3. User Story: `reset` (completed for you)

* A user can reset stat & see a cleared User Interface
* I wrote the code in `listeners/reset.js` & `handlers/reset.js`
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.

## 4. User Story: `save`

> * A user can add whatever he/she wants. each time the `input` is saved in the back. without clicking any button `evens` , `odds` or `nany` he cannot see anything .
> * I wrote `listener/save.js` &  `handlers/save.js`
> * The Handler function save the users input and also sort the inputs into 3 categories: `even` , `odd` and `not a number`.

## 5. User Story: `evens`

> * A user can see the even numbers. 
> * I wrote `listener/display-evens.js` &  `handlers/display-evens.js`
> * The Handler function shows the even numbers.

## 6. User Story: `odds`

> * A user can see the even numbers. 
> * I wrote `listener/display-odds.js` &  `handlers/display-odds.js`
> * The Handler function shows the odds numbers.

## 7. User Story: `nany`

> * A user can see inputs apart from numbers. 
> * I wrote `listener/display-nany.js` &  `handlers/display-nany.js`
> * The Handler function shows the inputs which are not a number.
