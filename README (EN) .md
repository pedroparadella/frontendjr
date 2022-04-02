Instructions:
- Go to https://github.com/CDirRyo/frontendjr and click on Code (green button).
- Download as a zip file and unzip it |or| Copy the url and type "git clone {url}" in cmd/git bash.
- Open the folder in an editor like VSCode |or| Use "cd" in cmd to enter the project's folder.
- If you don't have npm installed, download it on https://nodejs.org/en/ . Type "npm -v" to check if you already have it and which version.
- Type "npm install" in terminal (ctrl + ' to open) to install the dependencies and press enter.
- Type "npm start" to run and press enter.

Utility:
This app is used as a wishlist or list of games in discount.

Functionality:
- Clicking "Adicionar" opens a form where the user can type the title of a game and add the link to an image. Titles can't be repeated.
- On the card, the user can see the title chosen as well as the title found by the app. He can also see the price and be redirected to the store, choose to edit the card or delete it.
- If the user don't choose an image, a default one is displayed. Only the name is required.
- By clicking in "editar" the user opens the form where he can Edit the current card.
- The Search Bar works in real time, filtering the games on the list. The button to the right clears the search bar.
- Local Storage is used as a temporary replacement to a database, so the user can refresh the page and not lose their list.
- The website is fully responsive, keeping the design no matter the size of the screen.

Technologies:
- Javascript, HTML e CSS.
- React as a front-end framework/library.
- Axios to fetch data from the API.
- Sass as a css pre-processor.
- Framer-Motion to animate a few components.
- Git and GitHub for version control.
- Yarn and NPm as package managers.
- VSCode as code editor.

Improvement points:
- The API wasn't responding to requests from Brazil. After talking to their support, it seems to be working normally.
- The design could benefit from a design system.
- Code could be cleaner and more efficient.
- Could make Sass code even more efficient.
- Could have adopted a better system for organizing versions.
- Create a component to confirm deletion.
- Create a button to delete the whole list.
- Organize folders and files better.
- Better use of HTML for technical SEO.
- Button size could be more adequate for mobile.

