# starterkit-library-webcomponents

Starter kit monorepo of web components.   
Include lerna, open-wc and storybook.

to start :

lerna-bbotstrap
cd storybook
    npm install

- add new componnet
cd .\webcomponents\
npm init @open-wc


- publish packages

1) add .npmrc file like :
//npm.pkg.github.com/:_authToken=<your_token>
@frydonlee:registry=https://npm.pkg.github.com

2) login 
npm login --registry=https://npm.pkg.github.com --scope=@frydonlee
login
password = <your_token>
mail

3) add on packages.json of every pachages :
A) "name": "@frydonlee/name-package",
B) "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  },
C)"repository": {
    "type": "git",
    "url": "git@github.com:frydonlee/starterkit-library-webcomponents.git",
    "directory": "webcomponents/webcomponent-one"
  }

push changes
lerna publish