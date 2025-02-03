## Q-1 What is HTML, and how is an HTML document structured?
  ***HTML:***\
HTML stands for Hyper Text Markup Language. \
It describes the structure of a webpage, using various tags which define the headings, paragraphs, links, images, and other content. \
***Structure of a HTML document:***
An HTML document is typically made up of the following components:\
`<!DOCTYPE html>:`
This declaration defines the document type and version of HTML (HTML5 here). \
`<html>:`
This is the root element of the HTML document.\
`<head>:`
Contains metadata about the document, such as the title, character encoding, external stylesheets, and scripts.\
`<title>:`
Specifies the title of the webpage, which appears in the browser tab.\
`<body>:`
Contains the actual content that will be displayed on the web page.\
example:

```
<!DOCTYPE html>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <p>content</p>
</body>
</html>
```

## Q-4 What is semantic HTML? List some semantic and non-semantic elements.
Semantic HTML refers to the use of HTML tags that clearly describe their meaning in both the structure and content of a web page.\
Using semantic HTML is beneficial for- \
*accessibility*, *Search Engine Optimization (SEO)*, and *maintainability*.\
**semantic elements examples-**\
`<article>` 	defines independent, self-contained content.\
`<footer>` 	defines a footer for a document or section.\
`<header>` 	specifies a header for a document or section.\
`<nav>` 	defines navigation links.\
**non-semantic elements examples-**\
`<div>` 	general container with no inherent meaning, used for grouping content together.\
`<span>` 	inline container used to apply styles or class to a portion of text.\

## Q-5 Why do we use meta tags?
Meta tags are used in the `<head>` section of an HTML document to provide metadata about the page. \
Metadata is data that describes other data and helps browsers, search engines, understand the content of a page.\
