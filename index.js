// // In this challenge, you need to write JavaScript that provides 
// the following experience: when a user selects one of the thumbnail images using the mouse or keyboard, 
// that image should be displayed in the full-size image container at the top. U
// pdating the image should also update its alt attribute. 
// To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.

// // Some of the methods we discussed in the previous assignment might be helpful here, 
// but you should also use the jQuery docs and Google if you're not sure what to do here. 
// Researching on your own is a key skill, and it'll get easier with practice.



function imageDisplay() {

    //select thumbnail class, create click event handler, append each image to hero class
$('.thumbnail').on('click', function(event) {
    const imgSrc = $(this).find('img').attr('src');
    const imageAlt = $(this).find('img').attr('alt');

    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

});

} //end image display function

$(imageDisplay);//means that DOM is ready
