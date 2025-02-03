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
main reasons we use meta tags:\
**1. Character Encoding-**\
Defines the character set for the document.\
It ensures that special characters are displayed correctly on the page, particularly for non-English languages or special symbols.\
Example:
`<meta charset="UTF-8">`\
**2. Viewport Settings (Responsive Design)-**\
It helps control the layout on mobile devices and ensures the page is responsive. This meta tag adjusts the scaling of the webpage on mobile devices, so it appears correctly.\
Example:
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`\
**3. Search Engine Optimization (SEO)-**\
Provides information that can help search engines index and rank your page.\
`description` provides a short description of the page. This text may appear as a snippet in search results, the `keywords` tag can signal to search engines about the page's primary topics.\
Example:
```
<meta name="description" content="This is a short description of the webpage.">
<meta name="keywords" content="web design, HTML, SEO, meta tags">
```
**4.Content-Type and Language-**\
It specifies the language and content type of the page.\
Example:
```
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="language" content="English">
```
## Q-6 What are IDs and classes in HTML, and how do they differ?
**IDs in HTML**\
IDs are unique.\
Each page can have only one element with that ID.\
Each element can have only one ID.\
Each ID can have an unlimited amount of styles applied to it.\
ex- \
`<div id="header">unique element</div>`\
\
**classes in HTML**\
classes are not unique.\
Same Class can be used on multiple elements.\
Class naming is case sensitive.\
ex-
```
<div class="box">class-based element</div>
<div class="box">Tanother element with the same class</div>
```

