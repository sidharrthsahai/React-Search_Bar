## Search Bar

The search bar is a functionality wherein a user can click on the search bar and start typing a manager's name which can comprise of their first names or last names or both. The user can hover over it and click on any of the managers to select them. The user can also use the up and down arrow key to scroll up and down the list of managers and then press enter to select the desired manager. After selecting, the managers name gets placed in the input search bar and the scrollable list disappears. When searchbar is selected again, the list shows up again only to show the managers name which it curretly held. The searchbar also has a closing functionality at the right most end which can be clicked at any given time to clear all the input values and close the list eventually.

### Architecture

The source has a components folder which comprises of the main component SearchBar and its
corresponding styling and testing files.

The source also has a utilities folder containing the Helper file which includes the main
logic behind the manipulation of the JSON data received from the API.

A test file and a css file are also included wherein the testing has been done using the React Testing Library.

### SearchBar.js

This component initially makes an API call to the endpoint to get the list of managers and then
sends the data to the Helper component which filters out the required managers data, create a new
wrapper of JSON and sends it back to the Searchbar component.

This data is returned and rendered using the higher order map functionality as buttons so that this code
can be reused if a new manager is added to the JSON pack. (Reusability)

Upkey and Downkey have been used in this component to scroll the list up and down. On pressing the enter key, the selected manager's display name gets added into the search bar. (Accessibility)

6 States have been used to manipulate data using the useState hook. These are used to hide and show the manager scrollable list, inserting data into the list, removing data from the list, setting the search term and setting the search results.

### Helper.js

This is the main logic of the code where the acquired data is filtered for the displayName, email, initial first name letter, initial last name letter and the search key. A new wrapper of JSON is constructed with these fields and sent back to the SearchBar component.

### SearchBar.test.js (Testability)

The testing of the code has been done using the React Testing Library. The following functionality has been unit tested ->

Should check if the placeholder text is rendered correctly.
Should be able to type in the searchbar.
Should be able find the button display block when clicking the searchbar.
Should be able find all the 9 display buttons after clicking on the searchbar.
Should be able to get 2 elements after typing har.
Should be able to select the search value on click.
Should not be able to find the button block after a value has been selected.

### SearchBar.css

Contains all the styling classes for the divs and button.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
