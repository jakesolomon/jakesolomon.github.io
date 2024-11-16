1. **Branch structure**

    Feature branch is for development.
    Master branch is for merging changes from Feature.
    Gh-pages branch is deployed to https://jakesolomon.github.io/

2. **Useful scripts**

    This project's dependencies are managed with npm.
    `npm run start` will start a local instance to localhost:8000
    `npm run deploy` will build to the gh-pages branch.

3. **Gatsby Resources**

    This project is built on Gatsby.

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

**Deploying to GH Pages**

This projects is deployed to jakesolomon.github.io using the gh-pages plugin.
To deploy, run `npm deploy`. This will build the gatsby project and push changes to the `gh-pages` branch,
which github is set to read from. When github detects changes pushed to this branch, it will automatically deploy.
