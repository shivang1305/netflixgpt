# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Features

- Login/Signup Page

  - Header
  - SignIn/SignUp Form
  - Redirect to Browse page

- Browse Page (after user authentication)

  - Header
  - Main Movie
    - Trailer in the background
    - Title in the description
    - Movie Suggestions
      - Movie Lists (Horizontal Scroll) \* N

- Netflix GPT Page
  - Search Bar
  - Movie Recommendations

## Done

- Create React App
- Configure Tailwind css
- Header
- Routing of the app
- Login/Register Form using Formik
- Form Validations using Yup
- Firebase setup
- Deploying the app to prod
- Implement signup and signin APIs from firebase
- Created Redux store
- Store the user data in the slice
- Implemented restricted routing based on user authentication
- Implemented Sign out API
- Update Profile API to update display name and photo of user
- Unsubscribed from onAuthChanged when the header component umounts
- Registered for TMDB, create an app & get access token
- Get data from TMDB now playing movies list API
- Browse Page which contains of movie title and movie background comps
- Movie trailer API called from TMDB and filetered the result for the trailer of movie.
- Main Container UI design
- Trailer autoplay feature is added from the youtube embedded
- Secondary Container UI design
- Calling movies list APIs for getting movies list of different categories
- Overlapping the secondary container on top of main container
- Custom hook for each different category movie API call
- Getting random movie from the movie list as the main movie to play its trailer.
- Saving all the movies data in the redux store and fetching the data into the UI from the store
- Made a the video autoplay in loop in the background of the browse page
- Add GPT search button in the header
- Make a toggle view of GPT search component
- Made the search bar and movie suggesrions component in GPT search view
- Add language support to gpt search page
- Show the content of the page in different languages (like english, hindi, spanish)
- Change the language with the help of redux store using config slice
- Integrated OpenAI API in the app and passed the query in the params
- Saved the openAI movie recommendations in the redux store
- Build the movie suggestions page UI using the data we saved in the redux store
- Move all the API keys to .env file
- Reduce the number of repetitive API calls each time the component re-renders in the browser.
- Memoize the API calls and check whether the data is present in the redux store or not.
- Based on this either make or prevent an API call.
