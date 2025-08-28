### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

<!-- Answer:  -->
getElementByID: When a particular element contain an ID, it can be access through document object method named getElementByID. It returns the specific and single element of that ID, as ID is an unique term for an individual element. 

getElementsByClassName: When a particular or multiple elements have a specific class, those elements can be accessed through document object method named getElementsByClassName. It returns a HTMLCollection, like an array and that HTMLCollection can be iterated by using for loop and forOf loop also. It helps to set a specific attribute for a specific class that change the multiple elements content or design at the same time.

querySelector: To access any elements inside DOM, querySelector and querySelectorAll may help as it can fetch element or contents through id, class, tag, and attribute also. But querySelector returns only the first element if it finds multiple elements with the same class or tag or attribute.

querySelectorAll: To access any elements inside DOM, querySelector and querySelectorAll may help as it can fetch element or contents through id, class, tag, and attribute also. In DOM object method querySelectorAll returns all the elements as a NodeList against the respective class or tag or attribute as per user requirements. The NodeList can be iterated through forEach, for loop, forOf loop also.

2. How do you **create and insert a new element into the DOM**?

<!-- Answer -->
By using createElement() method of document object we can create a new element - for example, document.createElement("div") will create a new div inside HTML tree.

By using appendChild() method of document object we can insert the created element inside a specific tag by using getElementById or getElementByClassName or querySelectorAll.

3. What is **Event Bubbling** and how does it work?

<!-- Answer -->
Event Bubbling is the a process that encounters when an event occurs on a particular element and runs through it and after that it propagates to its own parents and so on in a synchronous manner. It is basically can be treated as bottom up approach or bubble up method.

4. What is **Event Delegation** in JavaScript? Why is it useful?

<!-- Answer -->
Event Delegation is a process that is based on event bubbling and it helps to add a single event listener to the common parent instead of adding multiple child elements. As we add event listener to multiple child of a common parent, multiple bubbling will occur.
Event Delegation helps to prevent memory loss as it's not required to iterate through all the child and add event listener for all that child elements. Rather we can add to their parent component or element and it helps to reduce memory uses and executes faster. Also if we append a new child inside the parent element, we should not add event listener for that specific child as the parent have shared its own event through it's all child.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answer -->
preventDefault(): This method is used to prevent default properties of form tag or stop link navigation of anchor tag when it is clicked.
stopPropagation(): The method that is used to stop event bubbling to child through its parents.