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