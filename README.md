There are no:-

[x] Code generators or minifiers

[x] Tools that combine multiple files into a single file, such as webpack

[x] Web template engines, both for HTML and CSS

[x] Any other tool that takes code or files, applies processing, and generates code or file(s) to include in the add-on

The directory structure of the project consists of:

1. An **`html`** folder for the template that shows up on clicking the extension.
2. An **`icon`** folder for the icon of the extension.
3. A mandatory **`manifest.json`** file.
4. A **`background.css`** file for styling the `DOM` element of scrolling up.
5. A **`content.js`** file for providing the core functionality of the extension.
