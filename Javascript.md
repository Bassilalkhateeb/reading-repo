## Here is my summary of what I read about JavaScript & jQuery :
### So javascript is about making web pages more interactive and interesting, and user-friendly.
### what is a script ?
### A script is a series of instructions that a computer can follow to achieve a goal.
### You could compare scripts to any of the following:
* ### RECIPES
* ### HANDBOOKS
* ### MANUALS 
### A script is made of instructions that computer can follow step by step
### A script can run different section of the code depending on the situation around.
### WRITING A SCRIPT:
 ### To write a script, you need to first state your goal and then list the tasks that need to be completed in order to achieve it.
### Start with the big picture of what you want to achieve, and break that down into smaller steps. 1: DEFINE THE GOAL First, you need to define the task you want to achieve. You can think of this as a puzzle for the computer to solve. 2: DESIGN THE SCRIPT To design a script you split the goal out into a series of tasks that are going to be involved in solving this puzzle. This can be represented using a flowchart. You can then write down individual steps that the computer needs to perform in order to complete each individual task (and any information it needs to perform the task), rather like writing a recipe that it can follow. 3: CODE EACH STEP Each of the steps needs to be written in a programming language that the compu ter understands. In our case, this is JavaScript.
### Designing a script tasks 
### You need to learn to "think" like a computer because they solve tasks in different ways than you or I might approach them.
### DEFINING A GOAL & DESIGNING THE SCRIPT
### The first thing you should do is detail your goals for the script (what you want it to achieve):
### Next, break it into a series of tasks that have to be performed in order to achieve the goals:
### SKETCHING OUT THE TASKS IN A FLOWCHART Often scripts will need to perform different tasks in different situations. You can use flowcharts to work out how the tasks fit together. The flowcharts show the paths between each step.
### Arrows show how the script moves from one task to the next. The different shapes represent diff€rent types of tasks. In some places there are decisions which cause the code to follow different paths.


### The conclusion :
### A script is a series of instructions that the computer can follow in order to achieve a goal.
 ### Each time the script runs, it might only use a subset of all the instructions. 
### Computers approach tasks in a different way than humans, so your instructions must let the computer solve the task prggrammatically. 
### To approach writing a script, break down your goal into a series of tasks and then work out each step needed to complete that task (a flowchart can help).
### EXPRESSIONS
### An expression evaluates into (results in) a single value. Broadly speaking there are two types of expressions.
### •	EXPRESSIONS THAT JUST ASSIGN A VALUE TO A VARIABLE
### In order for a variable to be useful, it needs to be given a value. As you have seen, this is done using the assignment operator (the equals sign).
### •	EXPRESSIONS THAT USE TWO OR MORE VALUES TO RETURN A SINGLE VALUE
#### You can perform operations on any number of individual values (see next page) to determine a single value.
### OPERATORS
### Expressions rely on things called operators; they allow programmers to create a single value from one or more values.
* ### ASSIGNMENT OPERATORS Assign a value to a variable
* ### ARITHMETIC OPERATORS (+ , - , * ,++) Perform basic math
* ### STRING OPERATORS Combine two strings (greeting= 'Hi 1 + 'Mol ly';) The value of greeting is now Hi Molly.
* ### COMPARISON OPERATORS Compare two values and return true or false
* ### LOGICAL OPERATORS Combine expressions and return true or false

## ARITHMETIC OPERATORS
* ### Addition   +   Adds one value to another
* ### Subtraction -   Subtracts one value from another
* ### Division /  Divides two values
* ### MULTIPLICATION  * Multiplies two values using an asterisk
* ### INCREMENT ++  Adds one to the current number
* ### DECREMENT --  Subtracts one from the current number
* ### MODULUS %  Divides two values and returns the remainder.

### ORDER OF EXECUTION Several arithmetic operations can be performed in one expression, but it is important to understand how the result will be calculated. Multiplication and division are performed before addition or subtraction. This can affect the number that you expect to see. To illustrate this effect, look at the following examples.
### Here the numbers are calculated left to right, so the total is 16: total = 2 + 4 + 10; But in the following.example the total is 42 (not 60): total = 2 + 4 * 10; This is because multiplication and division happen before addition and subtraction.
### To change the order in which operations are performed, place the calculation you want done first inside parentheses. So for the following, the total is 60: total = (2 + 4) * 10; The parentheses indicate that the 2 is added to the 4, and then the resulting figure is multiplied by10.
### This example demonstrates how mathematical operators are used with numbers to calculate the combined values of two costs. The first couple of lines create two variables: one to store the subtotal of the order, the other to hold the cost of shipping the order; so the variables are named accordingly: subtotal and shipping. On the third line, the total is calculated by adding together these two values. This demonstrates how the mathematical operators can use variables that represent numbers. (That is, the numbers do not need to be written explicitly into the code.)

* #### var subtotal (13 + 1) * 5; II Subtotal is 70 
* #### var shipping 0.5 * (13 + 1) ; II Shipping is 7 
* #### var total subtotal + shipping ; II Total is 77 
* #### var el Sub document .getElementByid(' subtotal ') ; elSub .textContent =subtotal ;
* #### var elShip = document .getElement Byid('shi ppi ng ') ; elShip.textContent =shipping; 
* #### var elTotal = document .getElementByid('total '); elTotal .textContent =total;

### The remaining six lines of code write the results to the screen.
* #### Subtotal: $70 
* #### Shipping: $7 
* #### Grandtotal: $77
### STRING OPERATOR
### There is just one string operator: the + symbol. It is used to join the strings on either side of it.
### There are many occasions where you may need to join two or more strings to create a single value. Programmers call the process of joining together two or more strings to create one new string concatenation.
### For example, you might have a first and last name in two separate variables and want to join them to show a full name. In this example, the variable called full Name would hold the string 'Ivy Stone'.
* ### var firstName = 'Ivy ' ; 
* ### var lastName = ' Stone' ; 
* ### var ful l Name = f irstName + l astName ;
#### MIXING NUMBERS AND STRINGS TOGETHER
#### When you place quotes around a number, it is a string (not a numeric data type), and you cannot perform addition operations on strings.
* ### var costl = '7'; 
* ### var cost2 = '9 ' ;
* ### var total = costl + cost2;
#### You would end up with a string saying '79'.
#### If you try to add a numeric data type to a string, then the number becomes part of the string, e.g., adding a house number to a street name:
* ### var number = 12;
* ### var street= 'Ivy Road'; 
* ### var add = number + street;
### You would end up with a string saying '12Ivy Road' .


### If you try to use any of the other arithmetic operators on a string, then the value that results is usually a value called NaN. This means "not a number."
* ### var scor e= ' seven ';
* ### var score2 = ' nine'; 
* ### var total = score * score2;
### You would end up with the value NaN.
### This example will display a personalized welcome message on the page.
### The first line creates a variable called greeting, which stores the message for the user. Here the greeting is the word Howdy.
### The second line creates a variable that stores the name of the user. The variable is called name, and the user in this case is Molly.
### The personal welcome message is created by concatenating (or joining) these two variables, adding an exclamation mark, and storing them in a new variable called welcome Message.
* ### var greeting= 'Howdy ';
* ### var name= 'Mol ly' ;
* ### var welcomeMessage = greeting+ name+ '!';
* ### var el = document.getElementByld('greeting');
* ### el .textContent = welcomeMessage;
### the result Howdy Molly!
