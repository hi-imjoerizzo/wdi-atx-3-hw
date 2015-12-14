# Sass, SCSS and Less

### Learning Objectives

* Explain the difference between Sass and SCSS
* List the reasons why we would want to use Sass
* Install Sass
* List the ways you can compile a Sass template
* Describe what Compass is and why it's useful
* Describe the difference between Sass and Less

## Review

- CSS selectors
   * .class1 .class2
   * .class1.class2
   * .class1 p
- CSS shorthand
   * margin/padding
   * font
   * background
- Making CSS more maintainable
  * Linking multiple files 
  * @import rule 
  * Being generous with comments 

Downsides to CSS so far: 
- Difficult to keep DRY
- Separating code into multiple files increases HTTP requests
- Verbose syntax, especially with vendor prefixes
- Difficult to reuse code 

## Sass 

From the [Sass website](http://sass-lang.com/):
> CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

Sass is an extension of CSS with a fully CSS-compatible syntax, it helps keep large stylesheets well-organized. Sass uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties. 

#### SCSS

[SCSS (Sassy CSS)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) came along about 3 years after Sass was introduced. It aimed to close the gap between CSS and Sass by bringing a more CSS style friendly syntax. 

> SCSS was introduced in part as an answer to Less, which allowed developers to get started with it much quicker than Sass, since having to adapt to a new syntax and way of writing CSS was a barrier to some. 

The Sass compiler knows how to parse the CSS file based on the file extension. SCSS files have a `.scss` extension while files using the original Sass syntax have the `.sass` extension.

### Sass vs SCSS

We'll mostly be sticking with SCSS since it's easier to get started and mirrors the CSS syntax we already know and love.

##### Sass: Indentation is very important and each tab means something very specific. Sass omits semicolons for newlines and tabs for curly braces. 

```sass
/* Sass files */
.element-a
    color: hotpink

    .element-b
        float: left
```

```css
/* Compiled output */
.element-a {
    color: hotpink;
}

.element-a .element-b {
    float: left;
}
```

##### Everything that works in CSS works in SCSS

Since the syntax of SCSS mirrors CSS almost exactly, you can start using Sass immediately with an existing project and slowly start migrating CSS to SCSS as time permits. It also allows developers new to Sass the ability to be productive early on. 

### Install Sass

1. Open up the Terminal
2. Check whether or not you have Sass installed by running the command ```$ sass -v```
3. If you **don't** have Sass installed then run the command: ```$ gem install sass```

### Compile Sass templates

In order for our applications to use the CSS we've written in our files, we need to first compile the Sass/SCSS into plain CSS with the `sass` command. 

For a **SCSS** file (`.scss`): 

``` $ sass input.scss output.css```

For a **Sass** file (`.sass`):

``` $ sass input.sass output.css```

##### Automatically compile Sass files on save

It gets annoying fast when we have to run the `sass` command everytime we make an edit to our Sass file. Luckily, we can run the `sass` command with an additional flag to tell Sass to monitor a particular file or directory and automatically generate a new CSS file everytime there's an edit. 

```$ sass --watch assets/stylesheets ```

### Working with SCSS

The following summaries and examples can be found in the [Sass documentation](http://sass-lang.com/guide).

#### Variables 

Variables allow us to store and reuse colors, font stacks or anything else we might want to reuse. Sass uses the `$` to make something a variable. 

```css
/* styles.scss */
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

```css
/* styles.css */
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

#### Nesting

Sass allows CSS rules to be nested within one another. The inner rule then only applies within the outer rule’s selector. The ability to nest our CSS selectors gives our styles more organization and makes it easier to read with a visual heirarchy. 

```css
/* styles.scss */
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

```css
/* styles.css */
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

#### Importing other SCSS files as partials

Sass has support for partials, which are snippets of CSS code that can be included into other CSS files. This helps us to modularize our code and keep it maintainable also. We haven't had to deal with CSS files that span hundreds of lines yet, but in the future it's definitely a possibility for you. 

Partials start with an underscore, and that informs the Sass compiler to not generate a CSS file for it. 

```css
/* _reset.scss */
html,
body,
ul,
ol {
   margin: 0;
   padding: 0;
}
```

```css
/* styles.scss */
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

```css
/* styles.css */
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

##### Importing SCSS vs CSS 

There's a big difference in importing CSS and SCSS files. When the processor sees a CSS file extension, it leaves the file the same and uses the traditional [CSS import rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@import). This means another HTTP request is made on the client for the content, whereas the Sass compiler will include the content and combine it into the requesting file during compilation, saving a roundtrip to the server. 

#### Mixins

Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site.

```css
/* styles.scss */
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

@mixin large-text {
   font: 20px Helvetica, sans-serif;
}

.box { @include border-radius(10px); }
```

```css
/* styles.css */
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

#### Extend/Inheritance 

Using `@extend` lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY.

```css
/* styles.scss */
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

```css
/* styles.css */
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

## Exercise 

**20 min**

Take a look at either the [Brook & Lyn](https://github.com/ga-students/wdi-atx-3-hw/tree/master/w01/d03) or [Singlebrook](https://github.com/ga-students/wdi-atx-3-hw/tree/master/w01/d04) homework. 

Let's redo the CSS file you have to make use of Sass. Take advantage of variables, nesting, and any other feature of Sass you can to make the code more maintanable. 

### Compass

[Compass](http://compass-style.org/) is a CSS Authoring Framework built on top of Sass. Although not a direct comparison, you can kind of think of it as Rails to Ruby. Compass gives us additional rules and functionality we can use to write CSS faster. An important thing to keep in mind is that even though it's built on top of Sass, Compass comes with its own compiler that you have to use. 

```css
/* styles.scss */
@import "compass/css3";
 
.opacity-example {
  background: red;
  width: 40px;
  height: 40px;
  float: left;
}
 
#opacity-10 {
  @include opacity(0.1);
}
 
#opacity-20 {
  @include opacity(0.2);
}
 
#opacity-50 {
  @include opacity(0.5);
}
 
#opaque {
  @include opaque;
}
 
#transparent {
  @include transparent;
}
```

```css
/* styles.css */
.opacity-example {
  background: red;
  width: 40px;
  height: 40px;
  float: left;
}
 
#opacity-10 {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=10);
  opacity: 0.1;
}
 
#opacity-20 {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=20);
  opacity: 0.2;
}
 
#opacity-50 {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
}
 
#opaque {
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}
 
#transparent {
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
}
```

Reference: http://compass-style.org/examples/compass/css3/opacity

## Exercise

**Pair Exercise - 10 min** 

Take a look at the [examples on the Compass website](http://compass-style.org/examples/). Take a few minutes to look through some of them. Be sure to flip the tabs between `SCSS` and `CSS` to see not just the code you would write, but the generated code after compiling with Compass also. 

## Less

http://lesscss.org/

