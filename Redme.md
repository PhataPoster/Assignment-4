
1. getElementById get only one element by id. getElementsByClassName give many elements by class name (like a list). querySelector give first match of css selector, querySelectorAll give all match of css selector.

2. We create new element by document.createElement("div") and then set text or class. After that we insert by parent.appendChild(newElement) or parent.append(newElement).

3. Event Bubbling mean event go from inner element to outer element. When we click a button inside a div, first button get event then div then body.

4. Event Delegation is when we add one event listener in parent and handle child click by checking target. It is useful because less listener and work for new elements too.

5. preventDefault() stop browser default action (like link go to another page). stopPropagation() stop event bubble to parent.
