# Booking.com inline SVG icon system 

This inline SVG icon system is powered by NPM and Grunt.  The grunt file runs tasks to process a folder of individual SVG icon files and couputs a single definitions file <def> based on the contents of the folder.  It also processes PNG versions of the SVG files at 16x16 and 32x32.

## How to install NPM, Grunt and the grunt file and resources

1. Install Node on your computer (if not already running): https://nodejs.org/en/
2. Create a folder on your computer like 'icons' or similar.
3. Clone or download this repo https://github.com/johnasp/Inline-SVG-system-with-Defs into the folder you created in step 2 above. 
4. Install all the project dependencie with this command:  `npm -install`

## How to run the process 
1. Open terminal and navigate to the project folder.  TIP - I type `cd` in terminal and then locate the folder in Finder and drap and drop this folder into terminal which adds the full path in terminal so you dont need to type it all in. 
![Change directory in terminal helper](http://www.giphy.com/gifs/1ivFoS8IBcTnp877Mc "Change directory in terminal helper instructions")
2. Type `grunt`  The process should now run and create a folder called 'build' in your root folder.  This will contain the 'defs' file for both the primary and secondary icon sets.  It will also contain a folder called 'png' which will contain PNG files used for fallbacks. 

### How to add a new icon to the set

1. Open Sketch
2. Install the Sketch SVGO compressor plugin https://www.sketchapp.com/extensions/plugins/svgo-compressor/
3. Open the new icon in Sketch and ensure it is placed within an artboard
3. Select that artboard then click 'make exportable'.  In export settting select 'SVG' and click the 'export selected' button. The SVGO plugin will automatically clean and compress the SVG output code.  
5. Choose the folder which contains the existing icons for where to save the file to.   
![Sketch export setting panel](https://res.cloudinary.com/john73/image/upload/v1549892107/export-settings_z3gzsh.png "Export setting panel")