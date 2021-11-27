module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    
    //  per i packages di open-wc, basta la sola specifica di 
    //  "../../packages/webcomponents/**/stories/*.stories.@(js|jsx)"
    //  dato che :
    //  se di tipo javascript allora sarà preso in considerazione :
    //  ../../packages/webcomponents/stories/*.stories.@(js|jsx)
    //  se di tipo typecript allora sarà preso in considerazione :
    //  ../../packages/webcomponents/dist/stories/*.stories.@(js|jsx)
    // è quindi necessario fare il build in caso di typescript
    
    "../../packages/webcomponents/**/stories/*.stories.@(js|jsx)"
  
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}