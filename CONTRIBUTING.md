# Contribution Guide

## Project Structure

```
-- config           // Variable runtime configuration settings
-- modules          // This is home to the AngularJS logic, each subfolder is a logical module
--**                // The containing folder for the specific logical module
--**-- client       // Client-side code related to the specific module
--**-- server       // Server-side code related to the specific module
-- public           // Contains all static front-end files used by the app
---- lib            // External libraries introduced by Bower (mostly for the front-end)
---- dist           // The final application package for distribution
-- scripts          // Helper scripts
-- bower.json       // Bower's module declaration
-- package.json     // NodeJS's module declaration
-- server.js        // The entry point for NodeJS server
```

Refer to [http://meanjs.org/docs.html#folders](http://meanjs.org/docs.html#folders)
for reference.
