# Javascript Image to 2d Array Converter #

Turns a black-and-white image into a 2d array of booleans.
Useful for collision maps in games

### Example: ###
    
    //make array
    var img=document.images[0];
    var array=imageToMap(img);

    //get data at position
    array[x][y];   // returns true or false