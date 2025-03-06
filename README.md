# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Note to self - Use with GitHub Pages
1. Install the gh-pages package (ctrl+~ to open the terminal in VS Code)

    `npm install gh-pages --save-dev`

2. In the package.json file add these lines before "build": "vite build",

    `"predeploy": "npm run build",`
    `"deploy": "gh-pages -d dist",`

3. In the vite.config.js file add this line before plugins: [react()],

    `base: "/YOUR_REPOSITORY_NAME",`

Change YOUR_REPOSITORY_NAME to the name of your GitHub repository.

4. In terminal type

    `npm run deploy`

🎉 You now have a gh-pages branch in your repository and your app is deployed (you can check it under Settings -> Pages )

P.S. To update your app deployment, just run the `npm run deploy` command again.