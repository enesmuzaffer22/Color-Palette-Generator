function colorTone_dark_light() {
    var r, g, b;

    //random rgb values between 30 - 226
    r = Math.floor(Math.random() * (226 - 30)) + 30;
    g = Math.floor(Math.random() * (226 - 30)) + 30;
    b = Math.floor(Math.random() * (226 - 30)) + 30;
    
    /*
    
    Why between 30-226 ?

    Because; in this algorithm, We do addition and subtraction with "high" variable. So we leave 30-value margin on this value.
    
    */

    const rgb = [r, g, b];
    rgb.sort();

    var high = 40; //as i mentioned "high" variable
    var mid = 20;
    var low = 8;

    var rgb_dark_h = 0
    var rgb_dark_m = 0
    var rgb_dark_l = 0

    var h_flag = false;

    while(h_flag == false) {
        if((rgb[2] - high) >= 0) {
            rgb_dark_h = rgb[2] - high; //we checking value, can it be done.
            h_flag = true;
        }

        if(h_flag == false) {
            high -= 5;
        }
    }

    rgb_dark_m = rgb[1] - mid;
    rgb_dark_l = rgb[0] - low;

    rgb_dark_temp = [rgb_dark_l, rgb_dark_m, rgb_dark_h];

    h_flag = false;

    high = 40;
    mid = 20;
    low = 8;

    var rgb_light_h = 0
    var rgb_light_m = 0
    var rgb_light_l = 0

    while(h_flag == false) {
        if((rgb[2] + high) <= 255) {
            rgb_light_h = rgb[2] + high; //we checking value, can it be done.
            h_flag = true;
        }

        if(h_flag == false) {
            high -= 5;
        }
    }

    rgb_light_m = rgb[1] + mid;
    rgb_light_l = rgb[0] + low;

    rgb_light_temp = [rgb_light_l, rgb_light_m, rgb_light_h];

    var random1 = 0;
    var random2 = 0;
    var random3 = 0;

    while((random1 == random2) && (random2 == random3)) {
        random1 = Math.floor(Math.random() * 2);
        random2 = Math.floor(Math.random() * 2);
        random3 = Math.floor(Math.random() * 2);
    }

    rgb_color_dark = [0, 0, 0]; //random color dark
    rgb_color_light = [0, 0, 0]; //random color light
    rgb_color = [0, 0, 0]; //random color

    rgb_color_dark[random1] = rgb_dark_h;
    rgb_color_dark[random2] = rgb_dark_m;
    rgb_color_dark[random3] = rgb_dark_l;

    rgb_color_light[random1] = rgb_light_h;
    rgb_color_light[random2] = rgb_light_m; //we put the values to random indexes.
    rgb_color_light[random3] = rgb_light_l;

    rgb_color[random1] = rgb[2];
    rgb_color[random2] = rgb[1];
    rgb_color[random3] = rgb[0];

    var colorArrays = [rgb_color_dark, rgb_color, rgb_color_light]; //then we return the colors.

    return colorArrays;
}

function colorTone_dark() {
    /* same things as first function */

    var r, g, b;

    r = Math.floor(Math.random() * (226 - 30)) + 30;
    g = Math.floor(Math.random() * (226 - 30)) + 30;
    b = Math.floor(Math.random() * (226 - 30)) + 30;

    const rgb = [r, g, b];
    rgb.sort();

    var high = 40;
    var mid = 20;
    var low = 8;

    var rgb_dark_h = 0
    var rgb_dark_m = 0
    var rgb_dark_l = 0

    var h_flag = false;

    
    while(h_flag == false) {
        if((rgb[2] - high) >= 0) {
            rgb_dark_h = rgb[2] - high;
            h_flag = true;
        }

        if(h_flag == false) {
            high -= 5;
        }
    }

    rgb_dark_m = rgb[1] - mid;
    rgb_dark_l = rgb[0] - low;

    rgb_dark_temp = [rgb_dark_l, rgb_dark_m, rgb_dark_h];

    var random1 = 0;
    var random2 = 0;
    var random3 = 0;

    while((random1 == random2) && (random2 == random3)) {
        random1 = Math.floor(Math.random() * 3);
        random2 = Math.floor(Math.random() * 3);
        random3 = Math.floor(Math.random() * 3);
    }

    rgb_color_dark = [0, 0, 0]; //random color dark
    rgb_color = [0, 0, 0];

    rgb_color_dark[random1] = rgb_dark_h;
    rgb_color_dark[random2] = rgb_dark_m;
    rgb_color_dark[random3] = rgb_dark_l;

    rgb_color[random1] = rgb[2];
    rgb_color[random2] = rgb[1];
    rgb_color[random3] = rgb[0];

    var colorArrays = [rgb_color_dark, rgb_color];

    return colorArrays;
}

function colorTone_random() {
    /* same things as first function */

    var r, g, b;

    r = Math.floor(Math.random() * (226 - 30)) + 30;
    g = Math.floor(Math.random() * (226 - 30)) + 30;
    b = Math.floor(Math.random() * (226 - 30)) + 30;

    rgb_color = [0, 0, 0];

    rgb_color[0] = r;
    rgb_color[1] = g;   
    rgb_color[2] = b;

    return rgb_color;
}

function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16); //we recieve the params and convert to base of 16.
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b; //return hex code
}

function generate() {
    var randomFunc = Math.floor(Math.random() * 3); //we choosing random functions to create color combinations.

    switch(randomFunc) {
        case 0:
            console.log("1. kombinasyon: 1.renk(koyu) + 1.renk + 1.renk(açık) + 2.renk(koyu) + 2.renk");
            var colorArrays = colorTone_dark_light();

            var color = rgbToHex(colorArrays[0][0], colorArrays[0][1], colorArrays[0][2]);
            var element = document.getElementById("color1");
            element.style.backgroundColor = color;
            document.getElementById("color1_label").innerHTML = color;

            color = rgbToHex(colorArrays[1][0], colorArrays[1][1], colorArrays[1][2]);
            element = document.getElementById("color2");
            element.style.backgroundColor = color;
            document.getElementById("color2_label").innerHTML = color;
            
            color = rgbToHex(colorArrays[2][0], colorArrays[2][1], colorArrays[2][2]);
            element = document.getElementById("color3");
            element.style.backgroundColor = color;
            document.getElementById("color3_label").innerHTML = color;
            
            colorArrays = colorTone_dark();

            color = rgbToHex(colorArrays[0][0], colorArrays[0][1], colorArrays[0][2]);
            element = document.getElementById("color4");
            element.style.backgroundColor = color;
            document.getElementById("color4_label").innerHTML = color;
            
            color = rgbToHex(colorArrays[1][0], colorArrays[1][1], colorArrays[1][2]);
            element = document.getElementById("color5");
            element.style.backgroundColor = color;
            document.getElementById("color5_label").innerHTML = color;
            break;

        case 1:
            console.log("2. kombinasyon: 1.renk + 2.renk + 3.renk + 4.renk + 5.renk");
            var colorArrays = colorTone_random();

            var color = rgbToHex(colorArrays[0], colorArrays[1], colorArrays[2]);
            var element = document.getElementById("color1");
            element.style.backgroundColor = color;
            document.getElementById("color1_label").innerHTML = color;

            colorArrays = colorTone_random();

            color = rgbToHex(colorArrays[0], colorArrays[1], colorArrays[2]);
            element = document.getElementById("color2");
            element.style.backgroundColor = color;
            document.getElementById("color2_label").innerHTML = color;

            colorArrays = colorTone_random();

            color = rgbToHex(colorArrays[0], colorArrays[1], colorArrays[2]);
            element = document.getElementById("color3");
            element.style.backgroundColor = color;
            document.getElementById("color3_label").innerHTML = color;

            colorArrays = colorTone_random();

            color = rgbToHex(colorArrays[0], colorArrays[1], colorArrays[2]);
            element = document.getElementById("color4");
            element.style.backgroundColor = color;
            document.getElementById("color4_label").innerHTML = color;

            colorArrays = colorTone_random();

            color = rgbToHex(colorArrays[0], colorArrays[1], colorArrays[2]);
            element = document.getElementById("color5");
            element.style.backgroundColor = color;
            document.getElementById("color5_label").innerHTML = color;
            break;

        case 2:
            console.log("3. kombinasyon: 1.renk(koyu) + 1.renk + 2.renk(koyu) + 2.renk + 3.renk");
            var colorArrays = colorTone_dark();

            color = rgbToHex(colorArrays[0][0], colorArrays[0][1], colorArrays[0][2]);
            element = document.getElementById("color1");
            element.style.backgroundColor = color;
            document.getElementById("color1_label").innerHTML = color;
            
            color = rgbToHex(colorArrays[1][0], colorArrays[1][1], colorArrays[1][2]);
            element = document.getElementById("color2");
            element.style.backgroundColor = color;
            document.getElementById("color2_label").innerHTML = color;

            colorArrays = colorTone_dark();

            color = rgbToHex(colorArrays[0][0], colorArrays[0][1], colorArrays[0][2]);
            element = document.getElementById("color3");
            element.style.backgroundColor = color;
            document.getElementById("color3_label").innerHTML = color;
            
            color = rgbToHex(colorArrays[1][0], colorArrays[1][1], colorArrays[1][2]);
            element = document.getElementById("color4");
            element.style.backgroundColor = color;
            document.getElementById("color4_label").innerHTML = color;

            colorArrays = colorTone_random();

            color = rgbToHex(colorArrays[0], colorArrays[1], colorArrays[2]);
            element = document.getElementById("color5");
            element.style.backgroundColor = color;
            document.getElementById("color5_label").innerHTML = color;
            break;
    }
}

function info() {
    window.open("info.html", "_blank"); //we open info file in new tab.
}