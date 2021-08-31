let $ = function (id) { return document.getElementById(id); };

function preloadImages(imageArray, elementId) {
    let i = 0;
    let el = $(elementId);

    function toggleImages() {
        el.src = imageArray[i];
        i = (i + 1) % imageArray.length;
    }

    setInterval(toggleImages, 3000);
}


