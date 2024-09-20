
# Railway Line Segment Viewer

This project is a web-based application built with React that allows users to view and manage railway line segments on a map. Users can select, save, and view segments in different colors. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Interactive map with selectable railway lines.
- Save and manage railway line segments.
- View saved segments with distinct colors on the map.

## Demo

You can check out the live version of the app here: [Railway Line Segment Viewer](https://railway-app-ashy.vercel.app/)

## Getting Started

### Prerequisites

You need to have the following installed:

- **Node.js** (version >= 14)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

### Running the App

To run the app locally in development mode, run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will see any lint errors in the console.

### Building the App

To create a production build, run:

```bash
npm run build
```

This will build the app for production in the `build` folder. The app is optimized for the best performance.

## Deployment

You can deploy this app for free using the following platforms:

### 1. Vercel

To deploy using Vercel:

1. Sign up on [Vercel](https://vercel.com).
2. Connect your GitHub repository to Vercel.
3. Click on **Deploy**.

The app is automatically deployed and available at a unique URL, which will also be updated with every new commit pushed to GitHub.

### 2. Netlify

To deploy using Netlify:

1. Sign up on [Netlify](https://www.netlify.com/).
2. Connect your GitHub repository.
3. Configure the **build command** as `npm run build` and **publish directory** as `build/`.
4. Click **Deploy**.

### 3. GitHub Pages

If you want to deploy this app using GitHub Pages:

1. Install the `gh-pages` package:
    ```bash
    npm install gh-pages --save-dev
    ```

2. Add the following to your `package.json`:
    ```json
    {
      "homepage": "https://yourusername.github.io/your-repo-name",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }
    ```

3. Run the following command to deploy:
    ```bash
    npm run deploy
    ```

4. Access your app at: `https://yourusername.github.io/your-repo-name`.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
