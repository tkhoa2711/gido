# Contribution Guide

## Project Structure

```
-- config           // Variable runtime configuration settings
---- env            // Configuration for different environments
---- lib            // Configuration for different libraries
---- app.js         // The main server app module
---- config.js      // Global config module
-- modules          // This is home to the AngularJS logic, each subfolder is a logical module
--**                // The containing folder for the specific logical module
--**-- client       // Client-side code related to the specific module
--**-- server       // Server-side code related to the specific module
---- core           // The module for our home page
---- user           // The module for user management
-- public           // Contains all static front-end files used by the app
---- lib            // External libraries introduced by Bower (mostly for the front-end)
---- dist           // The final application package for distribution
-- scripts          // Helper scripts
-- bower.json       // Bower's module declaration
-- package.json     // NodeJS's module declaration
-- gulpfile.js      // Configuration for task runner such as building, testing, etc
-- server.js        // The entry point for NodeJS server
```

Refer to [http://meanjs.org/docs.html#folders](http://meanjs.org/docs.html#folders)
for reference.

## Setup Development Environment

### Visual Studio Code

Install the following plugins:
- ESLint. It integrates `ESLint` into VS Code
- You may need to override default editor settings where its default
indentation size for JavaScript is 4 spaces. The same can be done for other
languages such as HTML, CSS.

```json
{
  "[javascript]": {
    "editor.detectIndentation": false,
    "editor.insertSpaces": true,
    "editor.tabSize": 2
  }
}
```
## Run The Project

The project can be executed with the following command in local/dev environment.
After that, the website is available at [http://localhost:3000](http://localhost:3000).

```
gulp
```
