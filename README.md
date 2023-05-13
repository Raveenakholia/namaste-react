# Namaste React 🚀 

# parcel
- Dev Build
- Local Server
- HMR- Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compressig
- Consistent Hashing
- Differential Building- Support older Browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking- remove unused code
- Different dev and prod build


# What is Emmet?
# Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, email designers type less, saving both keystrokes and time when building a campaign. Also, relying on Emmet’s autocompletion means fewer typos and missing tags, leading to more robust emails.

# Difference between library and framework?
# Frameworks provide ready-to-use tools, standards and templates for fast application development and libraries do not
# Frameworks control the calling of libraries for our code
# Library - A library is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.

# Framework- A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

# What is CDN and why do we use it?
# A CDN (content delivery network), also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery. The primary goal of a CDN is to improve web performance by reducing the time needed to send content and rich media to users.


# Why  React is called react?
# React is called React because it is a library that reacts to changes in data and updates the user interface accordingly. It was originally developed by Facebook and was released as an open-source project in 2013. The name "React" reflects its purpose of reacting to changes in data and rendering the appropriate changes in the user interface.

# What is cross origin in the script tag?
# The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

# Web pages often make requests to load resources on other servers. Here is where CORS comes in.

# A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. 

# What is difference between React and React DOM?
# React: React is a javascript library, designed for building better user interfaces.

# React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

# In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

# The Split
# Why did the React team decide to split React and React-DOM into two different libraries?

# Because React-DOM binds the idea of React to a web browser. And ideally, React has nothing to do with a browser or web for that matter. That’s why we’re seeing tools and frameworks like React-Native, React-Three being developed. These tools and frameworks don’t use React-DOM, but they do in fact use the idea behind React.

# What is difference between react.development.js and react.production.js via CDN?
# The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

# The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no hot reloading included. Source Maps might be included as separate files depending on your webpack devtool settings.


# what is difference between async and defer?
# Async allows your script to run as soon as it's loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading.



# ASSIGNMENT NO 2

# What is NPM ?
# NPM is a software registry that manages the packages
# npm is also a software Package Manager and Installer.
# Npm is free to use.
# Npm manages the packages for us.

# What is Parcel/Webpack? Why do we need it?
# Parcel and Webpack are the  bundlers used mostly for Javascript that helps to minify 
# and make the code so compact so that it becomes easier to send a request or receive the response from the server. We need it beacuse parcel and webpack will automatically install the necessary plugins and dev dependencies for us.

# What is .parcel-cache?
# Whenever we run our app, parcel will create its own cache folder that is .parcel-cache and stors the information about our project to reduce the time when we build our project.

# What is npx?
# NPX is used when we want to execute something in our code.
# NPX stands for Node Package eXecute. It is simply a npm package runner.
# It allows any developer to execute any Javascript package available on NPM registry without even installing it.

# What is different between dependencies and dev dependencies?
# Dependency is an object that contains the library, which your project requires for production environments and functioning effectively. devDependencies are those packages in the package.json file that you need only for project development purposes. Example- Babel, Webpack, etc

# What is Tree Shaking?
# Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

# It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

# In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

# What is Hot Module Replacement?
# Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.

# List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own word?
# Treeshaking
# HMR
# Caching
# Diagnostic
# Error Hnadling

# HMR (Hot Module Replacement) - It gives us automatic refresh while we make any changes in our code.
# Zero config - It requires Zero config  when we first time install it
# Treeshaking -  It removes the dead code from our project.

# What is .gitignore file?what should we add and not add in this file?
# .gitignore file is used to tell git that the in this file whatever is written do not push in the branch.
# we should add those packages in gitignore file that can be regenrate like node modules and dist folder
# we should not add those packages that cannot be regenrate like package.json, src folder


# What is the difference between package.json file and package-lock.json file?
# Package-lock.json file has the exact version of packages that are installed first time when we create the app and locking the dependency with the installed version but in package.json file packages can be updrade to min and major version and is a versioning file used to install the packages in your project.

# Why should I not modify package-lock.json file?
# It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency and thats why we should not modify this file

# What is node_modules? Is it good idea to push it on git?
# Node modules provide a way to re-use code in your Node application.The node_modules folder contains every installed dependency for your project. In most cases, you should not commit this folder into your version controlled repository. As you install more dependencies, the size of this folder will quickly grow.

# What is dist folder?
# The dist folder is where the compiled code is stored. After run the 'build' command (npx parcel 'build' index.html) in an application the 'dist' folder is automatically generated. The folder contains the build scripts of the application compressed and minified code. This folder actually gets deployed in the real application.

# What is browserlists?
# Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

## Note: Diff b/w `~` and `^` ?
# `~`version = 	Approximately equivalent to version, i.e., only accept new patch versions(`~`1.1.2)
#  `^`version =	Compatible with version, i.e., accept new minor and patch versions(`^`2.1.3)
# version  =   Must match version exactly(2.1.3)


# Food Ordering App


*  Header
* - Logo
* - Nav Items  
* Body
* -Search
* - Restraunt Container
*   Rest Card
*     - image, Name of the res, cuisines, delivery time , Star Rating
*
* Footer
* -copyright
* -link
* -address
* -contact
