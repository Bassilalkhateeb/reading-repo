# Ch 10 & Ch 11
## Ch 10 : CSS
### CSS allows you to create rules that specify how the content of an element should appear. For example, you can specify that the background of the page is cream, all paragraphs should appear in gray using the Arial typeface, or that all level one headings should be in a blue, italic, Times typeface.
* ### Understanding CSS: Thinking Inside the Box
### The key to understanding how CSS works is to imagine that there is an invisible box around every HTML element.
* ### BLOCK & INLINE ELEMENTS:
### There is a difference between block level and inline elements and how browsers display them.
### •	Block level elements look like they start on a new line.
### Examples include the <h1>- <h6>, <p> and <div> elements.
### •	Inline elements flow within the text and do not start on a newline.
### Examples include <b>, <i>, <img>, <em> and <span>.
### CSS allows you to create rules that control the way that each individual box (and the contents of that box) is presented.
### CSS Associates Style rules with HTML elements
### P {
###     Font-family: Arial;}
### P is called selector. 
### Font-family: Arial;} : is called decleration.
### This rule indicates that all <p> elements should be shown in the Arial typeface.

### Selectors indicate which element the rule applies to. The same rule can apply to more than one element if you separate the element names with commas.

### Declarations indicate how the elements referred to in the selector should be styled. Declarations are split into two parts (a property and a value), and are separated by a colon



### CSS Properties Affect How Elements Are Displayed

### h1, h2, h3 {
###                    font-family: Arial;
###                    color: yellow;}

### This rule indicates that all <h1>,<h2> and <h3> elementsshould be shown in the Arial
### typeface, in a yellow color.

### Properties indicate the aspects of the element you want to change. For example, color, font, width, height and border.

### Values specify the settings you want to use for the chosen properties. For example, if you want to specify a color property then the value is the color you want the text in these elements to be.

### Using External CSS
### <link>
### The element can be used in an HTML document to tell the browser where to find the CSS file used to style the page. It is an empty element (meaning it does not need a closing tag), and it lives inside the element. It should use three attributes:
### •	herf : This specifies the path to the CSS file (which is often placed in a folder called css or styles)
### •	type : This attribute specifies the type of document being linked to. The value should be text/css.
### •	rel : This specifies the relationship between the HTML page and the file it is linked to. The value should be stylesheet when linking to a CSS file.

### An HTML page can use more than one CSS style sheet. To do this it could have a element for every CSS file it uses. For example, some authors use one CSS file to control the presentation (such as fonts and colors) and a second to control the layout.

### Using Internal CSS
### <style>
### You can also include CSS rules within an HTML page by placing them inside a element of the page.
### The <style> element should use the type attribute to indicate that the styles are specified in
### CSS. The value should be text/css.





### CSS Selectors
### •	There are many different types of CSS selector that allow you to target rules to specific elements in an HTML document.
### •	CSS selectors are case sensitive, so they must match element names and attribute values exactly


### Universal Selector: Applies to all elements in the document: Example :* {} Targets all elements on the page.
### Type Selector: Matches element names: Example: h1, h2, h3 Targets the <h1>, <h2> and <h3>elements
### And many more examples in Duckett book Html and Css page 238.

### Why use External Style Sheets?
### •	All of your web pages can share the same style sheet. This is achieved by using the element on each HTML page of your site to link to the same CSS document. This means that the same code does not need to be repeated in every page (which results in less code and smaller HTML pages). Therefore, once the user has downloaded the CSS stylesheet, the rest of the site will load faster. If you want to make a change to how your site appears, you only need to edit the one CSS file and all of your pages will be updated. For example, you can change the style of every <h1> element by altering  the one CSS style sheet, rather than changing the CSS rules on every page. The HTML code will be easier to read and edit because it does not have lots of CSS rules in the same document. It is generally considered good practice to have the content of the site separated from the rules that determine how it appears.

### Conclusion:
### •	CSS treats each HTML element as if it appears inside its own box and uses rules to indicate how that element should look.
### •	 Rules are made up of selectors (that specify the elements the rule applies to) and declarations (that indicate what these elements should look like).
### •	 Different types of selectors allow you to target your rules at different elements. 
### •	 Declarations are made up of two parts: the properties of the element that you want to change, and the values of those properties. For example, the font-family property sets the choice of font, and the value arial specifies Arial as the preferred typeface. 
### •	 CSS rules usually appear in a separate document, although they may appear within an HTML page. 





### Ch 11 :  Color

### Foreground Color
### •	Color : The color property allows you to specify the color of text inside an element. You can specify any color in CSS in one of three ways:
### o	rgb values These express colors in terms of how much red, green and blue are used to make it up For example: rgb(100,100,90)
### o	hex codes These are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. For example: #ee3e80
### o	color names There are 147 predefined color names that are recognized by browsers. For example: DarkCyan
### Background Color:
### •	background-color : CSS treats each HTML element as if it appears in a box, and the background-color property sets the color of the background for that box.

### •	You can specify your choice of background color in the same three ways you can specify foreground colors: RGB values, hex codes, and color names (covered on the next page). If you do not specify a background color, then the background is transparent. By default, most browser windows have a white background, but browser users can set a background color for their windows, so if you want to be sure that the background is white you can use the background-color property on the element.

### Understanding Colors:
### •	Every color on a computer screen is created by mixing amounts of red, green, and blue. To find the color you want, you can use a color picker.


### Contrast
### •	When picking foreground and background colors, it is important to ensure that there is enough contrast for the text to be legible. (duckett book html and css page 253).


### CSS3: Opacity
### •	opacity, rgba : CSS3 introduces the opacity property which allows you to specify the opacity of an element and any of its child elements. The value is a number between 0.0 and 1.0 (so a value of 0.5 is 50% opacity and 0.15 is 15% opacity). The CSS3 rgba property allows you to specify a color, just like you would with an RGB value, but adds a fourth value to indicate opacity. This value is known as an alpha value and is a number between 0.0 and 1.0 (so a value of 0.5 is 50% opacity and 0.15 is 15% opacity). The rgba value will only affect the element on which it is applied (not child elements).







### CSS3: HSL Colors
### •	CSS3 introduces an entirely new and intuitive way to specify colors using hue, saturation, and lightness values.
### •	hue Hue is the colloquial idea of color. In HSL colors, hue is often represented as a color circle where the angle represents the color, although it may also be shown as a slider with values from 0 to 360.
### •	saturation Saturation is the amount of gray in a color. Saturation is represented as a percentage. 100% is full saturation and 0% is a shade of gray.
### •	lightness Lightness is the amount of white (lightness) or black (darkness) in a color. Lightness is represented as a percentage. 0% lightness is black, 100% lightness is white, and 50% lightness is normal. Lightness is sometimes referred to as luminosity.

### CSS3: HSL & HSLA
### •	hsl, hsla: The hsl color property has been introduced in CSS3 as an alternative way to specify colors. The value of the property starts with the letters hsl, followed by individual values inside parentheses for:
### o	hue This is expressed as an angle (between 0 and 360 degrees).
### o	saturation This is expressed as a percentage.
### o	lightness This is expressed as a percentage with 0% being white, 50% being normal, and 100% being black.
### •	The hsla color property allows you to specify color properties using hue, saturation, and lightness as above, and adds a fourth value which represents transparency (just like the rgba property). The a stands for:
### o	alpha This is expressed as a number between 0 and 1.0. For example, 0.5 represents 50% transparency, and 0.75 represents 75% transparency.


### **Conclusion**

### •	Color not only brings your site to life, but also helps convey the mood and evokes reactions.
### •	There are three ways to specify colors in CSS: RGB values, hex codes, and color names. 
### •	Color pickers can help you find the color you want. 
### •	It is important to ensure that there is enough contrast between any text and the background color (otherwise people will not be able to read your content).
### •	CSS3 has introduced an extra value for RGB colors to indicate opacity. It is known as RGBA. 
### •	CSS3 also allows you to specify colors as HSL values, with an optional opacity value. It is known as HSLA.
