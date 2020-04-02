var colorConversion = require('./conversion.js');

//console.log(colorConversion.hex(process.argv[3], process.argv[4], process.argv[5]));
//console.log(colorConversion.rgb(process.argv[3]));
//console.log(colorConversion.hsl(process.argv[3]));



if(process.argv[2] === 'hex') {
    console.log(colorConversion.hsl(process.argv[3]));
    console.log("RGB: " + colorConversion.rgb(process.argv[3]));
} else if(process.argv[2] === 'rgb') {
    var rgbConvertedToHex = (colorConversion.hex(process.argv[3], process.argv[4], process.argv[5]));

    console.log("HEX: " + rgbConvertedToHex);
    console.log(colorConversion.hsl(rgbConvertedToHex));

}