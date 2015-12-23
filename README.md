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
3. Run npm to install the necesary packages: 
    `npm install`

### 3. Run Grunt
1. Run grunt: 
    `grunt`

## Description
There are two grunt tasks kicked off every time grunt is run: uncss and cssmin.

Uncss scans the compares the used css selectors used in an associated html file and strips all unused selectors. It then saves the stripped css file to the 'uncompressed' directory. For details, refer to gruntfile.js.

Cssmin minifies the css files in the 'uncompressed' directory and resaves them into the 'release' directory.
