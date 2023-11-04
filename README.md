# Onboarding Platform

This is a platform for universities and students to organize online internships at a bank. Here, you can participate in
webinars, take courses, and find internship and career opportunities.

# note
JSON server with static data is used as a server, POST, PUT, DELETE are not serviced

## Available Scripts

In the project directory, you can use the following scripts:

### `yarn start`

Runs the app in development mode along with the JSON server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload when you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.\
Your app is ready to be deployed!

See the [Deployment](https://facebook.github.io/create-react-app/docs/deployment) section for more information.

## Installing and Running the Project with Docker

If you have Docker installed, you can download, build, and run the project in a single CLI command:

`docker pull 0beleg/onboarding_platform:json-server && docker pull 0beleg/onboarding_platform:app && curl -o docker-compose.yml https://raw.githubusercontent.com/a-beleg/onboarding_platform/main/docker-compose.yml && docker-compose up --build
`

## Learn More about the Author

For more information, you can visit my [Telegram bot](https://t.me/a_beleg_bot).
