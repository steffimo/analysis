---
author: Stefanie Motzokan
framework: Vue.js
---
# A simple internet of things showcase - analyse frontend

## Requirements

- [NodeJS and npm](https://www.npmjs.com/get-npm)
- used IDE: IntelliJ (Maven integrated) with Plugin for .vue
- nice to have: [vue-devtools](https://github.com/vuejs/vue-devtools)

## Preperations

update vue.config.js to your Azure components\
maybe update App.vue to your GithubPage URL
```
npm install
```
## Running
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and deploys to the GitHub Page
Following could be used as a Shell-Skript to deploy
```
# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/steffimo/analysis.git master:gh-pages
```

### Customize configuration
There's a GitHub Action for this repository reacting on pushing to the repository, so there will be a automatic build and deploy process for the GitHub Page