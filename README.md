## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. **getElementById**
   - Selects a single element by it's id selector
  
2. **getElementsByClassName**
   - Selects all the element with the given class as a HTMLCollection
  
3. **querySelector**
   - Selects the first element matching any CSS selector
  
4. **querySelectorAll**
   - Selects all elements matching any CSS selector as NodeList
  
## 2. How do you create and insert a new element into the DOM?

1. **Create a new element**
   - With document.createElement('TAGNAME')
  
2. **Insert a new element**
   - Using appendChild()
  
## 3. What is Event Bubbling? And how does it work?

1. **Event Bubbling**
   - It means if we click or interact with a child element, it's parent element can also respond to that same event.
  
2. **How it works**
   - When an event occurs on a child element, then it triggers handler on that chlid element. After that bubbles up to parent elements, triggers their handlers one by one. It stops if event.stopPropagation() is used.
  
## 4. What is Event Delegation in JavaScript? Why is it useful?

1. **Event Delegation**
   - It is a technique where we attach a event listener to a parent element instead of multiple child elements. With the help of event.target, the parent can listen for events on it's childen.
  
2. **Why it is useful**
   - Handles dynamically added elements without any need of attaching new listeners and helps reduceing memory usage.
  
## 5. What is the difference between preventDefault() and stopPropagation() methods?

1. **preventDefault()**
   - Stops the browser's default behavior for an event. For example it can prevent a form submitting or a stop a link from navigating.
  
2. **stopPropagation**
   - Stops the event from bubbling up or down the DOM, preventing parent elements from triggering their event handlers.
