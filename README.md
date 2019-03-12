# Booking.com inline SVG icon system 

An inline SVG icon build system powered by NPM and Grunt.  The grunt tasks buil a definition <def> file from a set of svg icon files contained in a folder.  It also generates PNG icons at 16x16 and 32x32 which are used for legacy browser support. 

## Initial setup

1. Install [Node JS](https://nodejs.org/en/) on your computer (if not already installed).  Type `node -v` to check.  If a version is not returned you need to install it.
2. Open terminal and install Grunt CLI as global: 
`sudo npm install -g grunt-cli`
3. Navigate to the root folder where you normally store your projects.
TIP - I type `cd` and locate the folder in Finder, then drag and drop the folder into terminal.  This adds the full path to the folder so you dont need to type it all in. 
![Change directory in terminal helper](img/cd.gif "Change directory in terminal helper instructions")
4. Clone the build files:  
`git clone https://github.com/johnasp/bui-Inline-SVG.git`
5. Navigate into this new new sub-folder by typing `cd bui-inline-svg`
6. Install build dependencies 
`npm install --save-dev`

## Build the icons

1. Run the icon build process by typing 
`grunt`

> The process should now run and create a sub-folder called 'build'.  This will contain the definitions SVG file for both the primary and secondary icon sets.  It will also contain a folder called 'png' which contains the PNG fallback files at 16x16 and 32x32 resolutions.  (This can be changed as needed by modifying gruntfile.js accordingly)

![folder.png](img/folder.png)  

## How to add a new icon(s) to the set

Install these two Sketch plugins first:

* [Sketch SVGO compressor plugin](https://www.sketchapp.com/extensions/plugins/svgo-compressor/)
* [Sketch icons plugin](https://sketchicons.com/)

1. Open Sketch.
2. Import the new SVG icon(s) into sketch using the Sketch Icons plugin. `Plugins -> Sketch Icons -> Replace icons...`  Untick 'Convert to symbol' in the options and the hit 'continue' button and browse to the folder where you have your SVG icons. 
3. You will now see your icons in your Sketch document each icon on its own artboard.  If necessary, rename the artboard so its meaningful and within naming conventions as the artboard name forms the name of the ID identifier in the HTML and CSS.
5. Select the artboard(s) containing the icon(s) and click 'make exportable'. 
6. In export settting select 'SVG' and click the 'export selected' button. _NB - The SVGO plugin will automatically clean and compress the SVG output code when you export it. _
6. If the new is icon is to be part of the primary icon set (which is likely), save it to the following folder `_bcars-icons/primary`

### Demo of steps above

![Import/export of SVG in Sketch](img/svg-import-export-demo.gif)

> Keep your eye on the terminal window when you save the icon file.  You will see the build process kick off automatically as the folder is being 'watched' for any changes.  It will rebuild all the definition files and PNG folders so they contain the new icon you have just added.  NB - Ensure the grunt build process is running before performing these steps.  It will not update the files if it isn't.

Sketch 

![Sketch](img/sketch.gif)


