Live Character Counter – Detailed Description
This project is a simple Live Character Counter created using HTML for the structure, CSS for styling, and JavaScript for functionality. It’s divided into three files:

1 exp4.html → Contains the layout and content
2 exp4.css → Contains all the styling rules
3 exp4.js → Contains the script for live character counting

HTML (exp4.html)
The HTML layout is clean and minimal. It includes:

1 A heading <h1> with the text Live Character Counter
2 A <textarea> where the user can type text
3 A <div> that shows the live character count, with a <span> inside to update the number dynamically

CSS (exp4.css)
The CSS file gives the page a neat look and user-friendly design.

Basic Styling
1 The body has a light gray background, some margin for spacing, and a clean sans-serif font
2 The <h1> heading is styled with a dark text color for contrast

Textarea
1 Full-width box with padding for comfortable typing
2 Rounded corners and a light gray border
3 The border color changes to blue when focused, giving clear visual feedback
4 Resize option is disabled for consistency

Counter
1 The counter text is small and placed below the textarea
2 The label (Characters:) is gray
3 The live number <span> is bold and blue for emphasis

JavaScript (exp4.js)
The JavaScript file adds interactivity by updating the character count in real-time.

1 It selects the textarea and the counter span using getElementById
2 An input event listener is added to the textarea
3 Every time the user types, deletes, or pastes text, the script updates the counter with the current number of characters
