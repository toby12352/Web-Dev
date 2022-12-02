# Assignment 2

**Assignment and Code Blog Entry due at 11:59pm on Monday 10/26/2020**<br/>
**Demo due by 11:59pm on Monday 11/9/2020**

The goals of this assignment are to exercise your CSS skills and to give you practice at making a coded page match a set of provided mocks, which is a common task for a web developer.

Here, you are provided with an un-styled `index.html` file, an empty `style.css` file, and a set of mocks (actually screenshots) in the `mocks/` directory.  Your task is to implement styles in `style.css` that make your rendered `index.html` page match the mocks as closely as possible.

A few important things to note about the design that may not be clear in the static mocks:

* The Google Fonts stylesheet for the font families you should use for the page ("Roboto" and "Roboto Slab") is already included in the HTML.  These are the only fonts needed by the page.

* The layout is somewhat responsive, in that the posts wrap as the size of the browser viewport changes.

* The location of the "sell something" button does not change relative to the viewport, even as the page is scrolled.

* There are some hover interactions on the page:

  * The colors of the button to update the filters change on hover.

  * All links except the site title are underlined on hover.

  * The "sell something" button grows slightly on hover.

* The appearance of the checkboxes and the "City" selector is just the browser's default.  You don't have to apply any special styles to these elements.

Again, your goal is to match the mocks as closely as possible.  I'll show some tools in class that will help you do this.  Don't worry, however, if you don't get things like madding, margins, etc. exactly right.

One other thing to note is that the page incorporates several icons from the Font Awesome icon library. This library is incorporated as a 3rd-party CSS file, and the icons are placed into the page using `<i>` elements whose HTML classes indicate which icon to display what icon style to use (e.g. `fas`, `fa-plus`). It would be best not to use these Font Awesome-specific classes to apply your own styles to the page.

## Code Blog

Add an entry to your Code Blog reflecting on your experience with this assignment and publish the new entry.  Here are some questions you could answer (though these aren't the only ones):

* What was challenging about the assignment, and what specific kinds of problems did you have.  How did you solve those problems?

* What did you learn from the assignment?  Were there any special insights you had?  What did you find that you already knew?

* What kinds of resources were helpful for completing the assignment?  Specific websites?  Lectures?  The class Piazza forum?  The TAs?  How did you use each of these resources?

* What are one or two things you had to Google to complete the assignment?

## Submission

As always, we'll be using GitHub Classroom for this assignment, and you will submit your assignment via GitHub.  Just make sure your completed files are committed and pushed by the assignment's deadline to the main/master branch of the GitHub repo that was created for you by GitHub Classroom.  A good way to check whether your files are safely submitted is to look at the master branch your assignment repo on the github.com website (i.e. https://github.com/osu-cs290-f20/assignment-2-YourGitHubUsername/). If your changes show up there, you can consider your files submitted.

In addition to submitting your assignment via GitHub, you must submit the URL to your code blog entry (e.g. http://web.engr.oregonstate.edu/~YOUR_ONID_ID/cs290/blog.html) via Canvas by the due date specified above.  Make sure to submit your code blog URL on Canvas even if it hasn't changed from the one you submitted for previous assignments.

## Grading criteria

This assignment will be graded by inspecting the `index.html` page rendered using your `style.css` file and by comparing your CSS code in `style.css` to the master CSS code that was used to generate the mocks.  It is important to note that many style effects can be achieved in different ways using CSS.  For this reason, we will mainly be checking your CSS to see the specific values (color, size, etc.) you used for various properties and to judge the quality of your CSS code.

Only changes to `style.css` will be considered when grading this assignment.  Any changes you make to `index.html` will be ignored.

The assignment is worth 100 points total:

* Color: 15 points
  * 15 points: colors for all elements match the mocks

* Text: 15 points
  * 5 points: font faces for all parts of the page (approximately) match the mocks
  * 5 points: text alignment and indentation matches the mocks
  * 5 points: all text sizes and weights match the mocks

* Layout: 25 points
  * 10 points: sizes of major components (header, sidebar, buttons, posts, etc.) (approximately) match the mocks
  * 10 points: box sizes (margins, padding, borders) (approximately) matches the mocks
  * 5 points: relative locations of components (buttons, posts, etc.) (approximately) match the mocks

* Details: 35 points
  * 20 points: hover effects match mocks and descriptions above
  * 10 points: posts wrap as the viewport size changes
  * 5 points: static appearance (excluding interaction) of the button to sell something matches the mocks

* Code style: 10 points
  * 5 points: white space and new lines are used appropriately for CSS readability
  * 5 points: CSS selectors maintain low complexity (i.e. they're only as specific as they need to be)

In addition to your programming assignment grade, you will receive a pass/fail grade for your code blog entry, included in the code blog portion of your grade.
