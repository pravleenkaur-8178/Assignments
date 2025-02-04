## Q-1 What is the use of float property? Which property is the better alternative to it?
The float property is used in CSS to position elements. It specifies whether an element should float to the left, right, or not at all.\
ex- here, an image is floated to the right.
```
img  {
  float: right;
}
```
**Better alternatives:**\
***CSS Flexbox***\
CSS Flexbox, short for the Flexible Box Layout module, is useful for aligning items efficiently, distributing space within a container, even when their sizes are dynamic or unknown.\
Flexbox eliminates the need for floats or complex positioning.\
Flexbox is supported in all modern browsers.\
It’s great for mobile screens and responsive content for dynamic layouts and webapps.

***CSS Grid:***\
It is a CSS property that offers a grid-based layout system, with rows and columns, making it easier to design web pages without floats and positioning. \
CSS Grid is even more advanced and allows us to create complex two-dimensional layouts (both rows and columns).

## Q-2 Explain the difference between absolute and relative positions.
**Relative positions**\
Relative Position is a CSS technique that adjusts an element from its normal position.\
When we set the top, right, bottom, and left properties of an element with relative positioning, it moves from its original location.\
*syntax:* `position: relative;`

\
**Absolute positions**\
Absolute Position is another CSS technique that adjusts an element’s position relative to its parent.\
If no parent element is present, the document body is used as the parent.\
*syntax:* `position: absolute;`

## Q-3 What are the different types of CSS Selectors?
**Attribute Selectors**
These selectors target elements based on their attributes or the value of an attribute.\
ex-
```
input[type="text"] {
  border: 2px solid gray;
}
```
This applies the style to all <input> elements with the attribute type="text".\
\
**Basic Selectors**
These are the most fundamental types of selectors used to target HTML elements.

*Universal Selector* (*): Targets all elements in the document.
```
* {
  color: red;
}
```

*Type Selector:* Targets elements by their HTML tag name.
```
p {
  font-size: 16px;
}
```
*Class Selector (.)*: Targets elements with a specific class attribute.
```
.my-class {
  background-color: yellow;
}
```
*ID Selector (#):* Targets an element with a specific ID attribute.
```
#my-id {
  margin-top: 20px;
}
```
\
**Grouping Selectors**
Group multiple selectors together to apply the same style to different elements.
```
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```
**Combinator Selectors**
These selectors target elements based on their relationships with other elements.

*Descendant Selector*: Targets an element that is a descendant of another element.
```
div p {
  color: blue;
}
```
*Child Selector (>):* Targets an element that is a direct child of another element.
```
ul > li {
  list-style-type: square;
}
```
*Adjacent Sibling Selector (+):* Targets an element that is the next sibling of another element.
```
h1 + p {
  margin-top: 10px;
}
```
*General Sibling Selector (~):* Targets all elements that are siblings (following elements in the same parent) of a specific element.
```
h1 ~ p {
  color: green;
}
```
**Pseudo-classes**
Pseudo-classes are used to target elements in specific states or conditions.
ex:

*:hover:*

`button:hover { background-color: gray; }`\
Applies when a button is hovered over by the user.

**Pseudo-elements**
Pseudo-elements are used to style specific parts of an element, like the content before or after it.
ex:

*::before:*

`p::before { content: "Note: "; font-weight: bold; }`\
Adds "Note: " before the content of each <p> element.

## Q-4 How are inline and block elements different from each other?
**Block Elements**
Block elements occupy the full width available, with the next element appearing on a new line below them.\
common block elements : `<div>, <p>, <section>`,etc.\
ex:
```
<div>block element.</div>
<div>another block element.</div>
```
**Inline Elements**
Inline elements take up width as their content requires. They do not start on a new line.
common inline elements: `<span>, <img>`, etc.\
ex:
```
<span>inline element.</span>
<span>another inline element.</span>
```
 
