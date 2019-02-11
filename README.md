# Booking.com inline SVG icon system 

An inline SVG icon build system powered by NPM and Grunt.  The grunt process creates a definition <def> file from a set of svg icon files contained in a folder.  It also generates PNG versions of the SVG files at 16x16 and 32x32.

## Installation and operating instructions

1. Install [Node JS](https://nodejs.org/en/) on your computer (if not already installed).  Check if it has by typing this `node -v`.  If a version is not returned you need to install it.
2. Install Grunt CLI as global: `sudo npm install -g grunt-cli`
3. Navigate to the root folder where you normally store your projects.
4. Open terminal and navigate to the folder above.  TIP - I type `cd` in terminal and then locate the folder in Finder and drag and drop this folder into terminal which adds the full path so you dont need to type it all in. ![Change directory in terminal helper](cd.gif "Change directory in terminal helper instructions")
5. Paste and enter this in terminal to clone the build files : `git clone https://github.com/johnasp/Inline-SVG-system-with-Defs.git`
6. You will see a new folder callled 'Inline-SVG'.  Navigate into this folder by typing `cd inline-svg`
7. Kick off the build process with `grunt`

The process should now run and create a sub-folder called 'build'.  This will contain the definitions SVG file for both the primary and secondary icon sets. 

It will also contain a folder called 'png' which contains the PNG fallback files at 16x16 and 32x32 resolutions.  (This can be changed as needed by modifying gruntfile.js accordingly)

![folder.png](folder.png)

## How to add a new icon to the set

> NB - Ensure the grunt build process is running before performing these steps and the _watch_ process is running.  The purpose of this is to automatically kick off the build whenver a new icon is added or modified.  

1. Open Sketch
2. Install the [Sketch SVGO compressor plugin](https://www.sketchapp.com/extensions/plugins/svgo-compressor/) 
3. Create a new artboard and name this accordingly using hyphens where required.  Make the name meaningful and within naming conventions as the name you enter will form the name of the identifier used in the HTML and CSS.

3. Select that artboard then click 'make exportable'. 
4. In export settting select 'SVG' and click the 'export selected' button. The SVGO plugin will automatically clean and compress the SVG output code.
![Sketch export setting panel](export-settings.png "Export setting panel")
5. If the new is icon is to be part of the primart icon set (which is likely), save it to the following folder _bcars-icons/primary

6. Keep your eye on the terminal window when save the icon file to the path.  You will see the build process kick off automatically as the folder is being 'watched' for any changes.  It will be rebuild all the definition files and PNG folders so they automatically contain the new icon you have just added.
![Sketch](sketch.gif)

