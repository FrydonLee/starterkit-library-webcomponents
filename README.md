# starterkit-library-webcomponents

Starter kit monorepo of web components.
Include lerna, open-wc and storybook.

# Start

Change in package.json of lerna, the section

```
"repository": {
  "type": "git",
  "url": "https://github.com/frydonlee/starterkit-library-webcomponents.git"
}
```

in terminal :

```
lerna-botstrap
cd storybook
npm install
```

# New Component

```
cd .\webcomponents
npm init @open-wc
```

# Publish Packages

<your_token> : github token, created in :
settings>developer settings>Personal Access Token

<your_name> : your githib name, example : @frydonlee

<component_name> : the name of component,
aka the name of the folder inside webcomponents

<url_repository> : url of the repository, es : https://github.com/frydonlee/starterkit-library-webcomponents.git

###### First Configuration

1. add .npmrc whit this content:
   //npm.pkg.github.com/:_authToken=<your_token>
   <your_name>:registry=https://npm.pkg.github.com   
   P.S remenbar to add file on .gitignore
2. login to registry from console :
   npm login --registry=https://npm.pkg.github.com --scope=<your_name>
   login = <your_name>
   password = <your_token>
   mail = your mail

###### For every pachages

add on packages.json :
```
"name": "<your_name>/<component_name>", es : "name": "@frydonlee/webcomponent-one",

"publishConfig": {
"registry": "https://npm.pkg.github.com/"
},

"repository": {
"type": "git",
"url": "<url_repository>",
"directory": "webcomponents/<component_name>"
}
```
###### Publish

push changes   
lerna publish

###### In case of version problem

lerna version --force-publish

