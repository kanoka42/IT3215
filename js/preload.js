let $ = function (id) { return document.getElementById(id); };
let imageMem = [];

function cycleImages(imageArray, elementId) {
    let i = 0;
    let el = $(elementId);

    function toggleImages() {
        el.src = imageArray[i];
        i = (i + 1) % imageArray.length;
    }

    setInterval(toggleImages, 3000);
}

function preloadImages(imageArray, elArray, index) {
    index = index || 0;

    if (imageArray && imageArray.length > index) {
        let img = new Image();

        img.onload = function () {
            preloadImages(imageArray, elArray, index + 1);
        }
        img.src = imageArray[index];

        // used to keep the image objects in memory.
        imageMem.push(img);
    }

    console.log(imageMem);
}
