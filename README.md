# Student Registration Form

A simple web-based student registration form built using HTML, CSS, and vanilla JavaScript. This project was made to practice form handling, input validation, and dynamically updating a table using the DOM.

## About

This project lets a user fill in student details (name, email, password, age, department, gender) and register them. On successful registration, the student's Name, Email, and Department are added as a new row in a table, and the form fields are cleared for the next entry.

## Tech Used

- **HTML5** — form structure and table
- **CSS3** — custom styling (flexbox layout, hover/active button effects)
- **JavaScript (vanilla)** — form handling, validation, and DOM manipulation

## Files

```
├── index.html        # Page layout and form
├── style.css          # Styling
└── studentjava.js     # Registration logic
```

## How It Works

1. User fills in the form: Name, Email, Password, Confirm Password, Age, Department, Gender, and Terms checkbox.
2. On clicking "Register", the `register(event)` function runs:
   - Reads all input values using `document.getElementById()`
   - Checks that Name and Email are not empty (basic validation)
   - If valid, adds a new row to the `studentTable` with Name, Email, and Department using `insertRow()` / `insertCell()`
   - Clears the form fields for the next student
   - Prevents the default form submission with `event.preventDefault()`

## How to Run

No installation needed since it's plain HTML/CSS/JS.

1. Download/clone the files (keep all three in the same folder).
2. Open `index.html` in any browser.

## What I Learned

- Handling form submission and preventing page reload with `event.preventDefault()`
- Reading multiple input values with `document.getElementById()`
- Basic form validation before processing data
- Dynamically adding rows to an HTML table using `insertRow()` and `insertCell()`
- Resetting form fields after submission
- Styling a form with Flexbox in CSS

## Known Issues / Possible Improvements

- Password and Confirm Password fields are collected but not actually compared/validated against each other yet
- Age field uses `type="text"` instead of `type="number"`, so it doesn't restrict input to numbers
- No validation for the Gender radio buttons or Terms and Conditions checkbox in the JS (only marked `required` in HTML for gender)
- Registered data is not saved anywhere — refreshing the page clears the table
- Could add a "Delete" button per row to remove a registered student

## Author

Ketan — 2nd Year BE Software Engineering, Deakin University
