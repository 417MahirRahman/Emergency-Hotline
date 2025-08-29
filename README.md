1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: i. getElementById returns a single and unique element
ii. getElementsByClassName makes a HTML collection which class-name are same
iii. querySelector returns the first-match element
iv. querySelectorAll makes a NodeList and return all matches elements

2.How do you create and insert a new element into the DOM?
Ans: To create a new element in the DOM, I will use document.createElement() and store it in a variable. After that I will insert that element in the body of the DOM by using document.body.appendChild(variable_name).

3.What is Event Bubbling and how does it work?
Ans: Event Bubbling is a process that starts from a target element of the child then moves upward through the parent element untill reaches the root.
For example by clicking a button inside a <div> the click event will first happen on the button and then on the div and then on the body.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a process that helps us by attaching one event listener to the parent. As a result we don't need to add event listener to all the child elements of the parent.
The benefits of using event delegation is it saves memory as we don't need to create many event listener for all the child element.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: i. preventDefault() stops the browser from default behaviour like Form Submission.
ii. stopPropagation() stops Event Bubbling.
