var pixelart = 
[
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, "green", "green", 0, 0, "green", "green", 0],
        ["green", "green", "green", "green", "green", "green", "green", 0],
        ["green", "green", 0, "black", "green", 0, "black", 0],
        ["green", "green", "green", "green", "green", "green", "green", 0],
        ["blue", "green", "brown", "brown", "brown", "brown", "brown", 0],
        ["blue", "green", "green", "green", "green", "green", "green", 0],
        ["blue", "blue", "blue", "blue", "blue", "blue", "blue", 0]
    ],
    [
        [0, "#424242", "#424242", 0, 0, 0, 0, "#424242"],
        [0, 0, "#FFEB3B", "#FF9800", 0, 0, 0, "#FF9800"],
        [0, 0, 0, "#FFF100", "#FFF100", "#FFF100", "#FFF100", "#FF9800"],
        ["#FF9600", "#FF9600", 0, "#FFF100", "black", "#FFF100", "#FFF100", "black"],
        ["#FF9600", "#FF9600", 0, "#FF2104", "#FFF100", "#FFF100", "#FFF100", "#FF9800"],
        [0, "#C76D00", 0, "#FFF100", "#FF9800", "#FF9800", "#FF9800", 0],
        [0, "#C76D00", "#FFF100", "#FF9600", "#FFF100", "#FF9600", "#FFF100", 0],
        [0, 0, "#FFF100", "#FF9600", "#C76D00", "#C76D00", "#FF9600", 0]
    ],
    [
        ["#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5", "#42A5F5"],
        ["#42A5F5", "#42A5F5", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#42A5F5", "#42A5F5"],
        ["#42A5F5", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#42A5F5"],
        ["#42A5F5", "#F48FB1", "#F8BBD0", "#000000", "#F8BBD0", "#000000", "#F8BBD0", "#42A5F5"],
        ["#F48FB1", "#F8BBD0", "#F8BBD0", "#1A237E", "#F8BBD0", "#1A237E", "#F8BBD0", "#42A5F5"],
        ["#F48FB1", "#F48FB1", "#F06292", "#F8BBD0", "#F8BBD0", "#F8BBD0", "#F06292", "#F48FB1"],
        ["#42A5F5", "#AD1457", "#F48FB1", "#F48FB1", "#F8BBD0", "#F8BBD0", "#AD1457", "#42A5F5"],
        ["#4CA649", "#AD1457", "#C2185B", "#C2185B", "#4CA649", "#AD1457", "#C2185B", "#4CA649"]
    ]
]
var pix1 = ''
var pix2 = ''
var pix3 = ''
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
            pix1 += `<div class="pixel" style="background-color: ${pixelart[0][i][j]};"></div>`
        }
    }
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
            pix2 += `<div class="pixel" style="background-color: ${pixelart[1][i][j]};"></div>`
        }
    }
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
            pix3 += `<div class="pixel" style="background-color: ${pixelart[2][i][j]};"></div>`
        }
    }
$('.canvas1').html(pix1)
$('.canvas2').html(pix2)
$('.canvas3').html(pix3)