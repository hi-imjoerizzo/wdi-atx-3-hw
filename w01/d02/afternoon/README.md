# HTML

## Learning objectives
- Describe what a markup language is
- Describe the structure of an HTML element
- Describe the anatomy of an HTML web page
- Describe what semantic HTML is and why we use it
- List common HTML tags
- Explain the purpose of HTML attributes
- List 3 types of attributes that all HTML elements have
- Create a barebones HTML document
- Create HTML elements using tags and attributes
- Include images on a webpage
- Link from one webpage to another
- Create nested HTML elements
- Explain what happens with unrecognized/malformed tags
- BONUS: Additional tags that should be included when building webpages
- BONUS: List some basic form elements used for presenting or saving data

## What is HTML?
- History of HTML
    + Tim Berners Lee at CERN
    + Netscape Navigator, etc.
- Hyper Text Markup Language
    + What is a markup language?
- HTML is about structure and content
  - CSS is for style
  - JS is for behavior
- Why do we need HTML? If we don't use HTML for style or behavior, why not just use .txt docs or Word documents or something to display info?
  - HTML documents allow us to semantically "mark up" content and tell the browser what kind of content it is, and to identify it. It also allows us to include other nodes of content within our web pages.

## HTML elements, tags and attributes
- Elements are made up of tags and attributes
- Tags define the starting and ending points of the element
- Attributes describe other information about the element; qualities about it. They always go inside the opening tag.
- Certain elements only have opening tags, and not closing ones (<br>, <img>, <input>, <link>, etc.)
- Check out Mozilla docs and W3Fools
- Html, head, body, title, p, div, span, ul/ol, li, img, a
- Writing 'semantic' HTML means using the element that has the most appropriate meaning for the job you want to do. If you want a list of things, use a list element. If you are creating a nav bar, use a nav element.

## HTML Document Structure
- Doctypes
- `<html>` element
- `<head>` element
  + `title` element
- `<body>` element
- Element nesting

## Web Resources
- The web is made up of more than just HTML documents; it can contain other types of text files, images, videos, audio content, really anything
- By definition, all of these pieces of content can be accessed directly at their URLs
- Many times, we can include these pieces of content in our HTML documents (web pages) using certain HTML tags
  - How do we include images?
  - How do we include video/audio?
  - How do we include certain text files (CSS, JS)?
  - How do we include other HTML files?
- Absolute vs. relative paths

## Form Elements
  - The `form` tag
  - `input` tags
  - `textarea` tags
  - `select` and `option` tags

### Resources
- [HTML Element list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Global HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
- [Let's Talk About Semantics](http://html5doctor.com/lets-talk-about-semantics/)
- [Dive Into HTML5](http://diveintohtml5.info/)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
