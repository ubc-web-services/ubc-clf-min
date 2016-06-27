# ubc-clf-min
A version of the standard CLF distribution with all unused css removed from a basic page template.

## Usage
### 1. Install Node.js and Grunt 
1. If node.js is not installed, https://docs.npmjs.com/getting-started/installing-node
2. Update Node Pakage Manager (npm) by running: 
    `sudo npm install npm -g`
3. Install grunt: 
    `npm install -g grunt-cli`

### 2. Clone the repo and install dependencies
1. Make a local copy of the git repo (using github app, etc)
2. Using terminal or your cli, navigate to the repo and then into either the full-width or standard directory. 
3. Run npm to install the necessary packages: 
    `npm install`

### 3. Run Grunt
1. Run grunt: 
    `grunt`

## Description
There are two grunt tasks kicked off every time `grunt` is run: browsersync and watch. Browsersync opens the currently selected html file in a localhost environment,usually localhost:3000, and the Browsersync application at localhost:3001. The watch task updates your html with any updated css.

The other optional tasks are
1. uncss
2. cssmin
3. criticalcss
4. lesslint
5. csslint
6. imagemin
7. optimize (runs uncss and cssmin)
8. lint (runs csslint and lesslint)

### Tasks
#### Uncss
https://www.npmjs.com/package/grunt-uncss
Uncss scans the compares the used css selectors used in an associated html file and strips all unused selectors. It then saves the stripped css file to the 'uncompressed' directory. For details, refer to gruntfile.js.

#### Cssmin
https://www.npmjs.com/package/grunt-contrib-cssmin
Cssmin minifies the css files in the 'uncompressed' directory and resaves them into the 'release' directory.

#### Criticalcss
https://www.npmjs.com/package/grunt-criticalcss

#### Lesslint
https://www.npmjs.com/package/grunt-lesslint

#### Csslint
https://www.npmjs.com/package/grunt-contrib-csslint

#### Imagemin
https://www.npmjs.com/package/grunt-contrib-imagemin