# Booking.com inline SVG icon system 

This is an inline SVG icon build system powered by NPM and Grunt.  The grunt file processes a folder of individual SVG icon files and couputs a single definitions file <def> based on the contents of the folder.  It also generates PNG versions of the SVG files at 16x16 and 32x32.

## Node JS and Grunt setup  

* Install [Node JS](https://nodejs.org/en/) on your computer (if not already installed).  Check if it has by typing this `node -v`.  If a version is not returned you need to install it.
* Install Grunt CLI as global: `sudo npm install -g grunt-cli`
* Navigate to the root folder where you normally store your projects.
* Open terminal and navigate to the folder above.  TIP - I type `cd` in terminal and then locate the folder in Finder and drag and drop this folder into terminal which adds the full path so you dont need to type it all in. ![Change directory in terminal helper](cd.gif "Change directory in terminal helper instructions")
* Paste and enter this in terminal to clone the build files : `git clone https://github.com/johnasp/Inline-SVG-system-with-Defs.git`
* You will see a new folder callled 'Inline-SVG'.  Navigate into this folder by typing `cd inline-svg`


## Run the build process

1. Type the following to run the build process `grunt`

The process should now run and create a folder called 'build' in your folder.  This will contain the 'defs' file for both the primary and secondary icon sets.  It will also contain a folder called 'png' which will contain the PNG files used for fallbacks. 

![folder.png](folder.png)

## How to add a new icon to the set

1. Open Sketch
2. Install the Sketch SVGO compressor plugin https://www.sketchapp.com/extensions/plugins/svgo-compressor/
3. Open the new icon in Sketch and ensure it is placed within an artboard
3. Select that artboard then click 'make exportable'.  In export settting select 'SVG' and click the 'export selected' button. The SVGO plugin will automatically clean and compress the SVG output code.  
5. Choose the folder which contains the existing icons for where to save the file to.   
![Sketch export setting panel](export-settings.png "Export setting panel")
6. Run the build process above to add the icon to the definitions file and create the PNG fallbacks.

