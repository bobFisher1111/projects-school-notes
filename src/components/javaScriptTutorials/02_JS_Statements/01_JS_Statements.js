/*
    - JavaScript Statements:
        - Definitions:
            - Statements: are instructions executed by computer. A JavaScript program is a list
                of programming statements

        - JavaScript Statement is composted of:
            - Values:
            - Operators:
            - Expressions:
            - Keywords:
            - Comments:
        
        - Statements Executed:
            - They are executed one by one, in same order as written
        
        - Semicolons(;):
            - Semiconols seperate JavaScript Statements
            - Examples:
                let a, b, c; // declare 3 variables
                a = 5; // assign value to a
                b = 3; // assign value to b
                c = a  + b; // assign sum of a & b to c

        - JavaScript White Spaces:
            - JavaScript ignores multiple spaces, you can add white space to your script 
                making it more readable
            - Good practice to add space around operators:
                ( ... )
                = 
                +
                -
                *
                /
            - Example:
              let x = y + z;

        - Line Lenght & Line Breaks:
            - Line Lenght:
                - Avoid lines longer than 80 characters
            - Line Break:
                - If it dosn't fit on one line, break after operator

        - JavaScript Code Blocks:
            - Statements are grouped together in code blocks, inside curly {...}
            - Purpose, execute code that belongs together
            - Example:
                const myFunction = () => {
                    const getData = localStorage.getIt('data');
                    getData = getData.value;
                    return getData;
                }

        - Keywords:
            - var:
                - declares a variable
            - let:
                - declars a block variable
            - const:
                - declares a block constant
            - if:
                - marks a block of statements to be executed on a condition
            - switch:
                - marks a block of statements to be executed in different cases
            - for:
                - marks a block of statements to be executed in a loop
            - function:
                - declares a function
            - return:
                - exits a function
            - try:
                - implements error handling to a block of statements

*/
