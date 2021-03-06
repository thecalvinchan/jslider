/*
by Calvin Chan
http://www.thecalvinchan.com
*/

$(document).ready(
function() {

    var imageString = $('#images').html();
    console.log(imageString);
    $('#thumbnails').html(imageString);
    var numImages = 0;
    $('#slideshow img').each(function(){numImages++;}).hide().first().show();
    $('#thumbnails img').eq(0).css({'border':'5px solid #6699FF','margin':'0px'});
    $('#slideshowcontainer').append('<div id="picnavleft" class="picnav"><a href="#" class="arrows">&lt;</a></div><div id="picnavright" class="picnav"><a href="#" class="arrows">&gt;</a></div>');

    var heightImage = $('#slideshow img').height();
    var heightNav = $('.arrows').eq(0).height();
    var paddingOffset = Math.floor((heightImage-heightNav)/2);
    var heightAdjusted = heightImage-paddingOffset;
    $('.picnav').css({'margin-top':paddingOffset});

    var curPicIndex = 0
    $('#picnavright').click(
        function()
        {
            $('#slideshow img').eq(curPicIndex).hide("slide", {direction: "left"}, 700);
            $('#thumbnails img').eq(curPicIndex).css({'border':'none','margin':'5px'});
            if (curPicIndex < numImages-1)
                $('#slideshow img').eq(++curPicIndex).show("slide", {direction: "right"}, 700);
            else
            {
                curPicIndex=0;
                $('#slideshow img').eq(curPicIndex).show("slide", {direction: "right"}, 700);
            }
            $('#thumbnails img').eq(curPicIndex).css({'border':'5px solid #6699FF','margin':'0px'});
            $('#thumbnails').scrollLeft(curPicIndex * 114);
        }
    );

    $('#picnavleft').click(
        function()
        {
            $('#slideshow img').eq(curPicIndex).hide("slide", {direction: "right"}, 700);
            $('#thumbnails img').eq(curPicIndex).css({'border':'none','margin':'5px'});
            if (curPicIndex > 0)
                $('#slideshow img').eq(--curPicIndex).show("slide", {direction: "left"}, 700);
            else
            {
                curPicIndex=numImages-1;
                $('#slideshow img').eq(curPicIndex).show("slide", {direction: "left"}, 700);
            }
            $('#thumbnails img').eq(curPicIndex).css({'border':'5px solid #6699FF','margin':'0px'});
            $('#thumbnails').scrollLeft(curPicIndex * 114);
        }
    );

    $('#thumbnails img').click(
        function()
        {
            if (curPicIndex!=$(this).index())
            {
                if (curPicIndex<$(this).index())
                {
                    $('#slideshow img').eq(curPicIndex).hide("slide", {direction: "left"}, 700);
                    $('#thumbnails img').eq(curPicIndex).css({'border':'none','margin':'5px'});
                    curPicIndex = $(this).index();
                    $('#slideshow img').eq(curPicIndex).show("slide", {direction: "right"}, 700);
                    $('#thumbnails img').eq(curPicIndex).css({'border':'5px solid #6699FF','margin':'0px'});
                }
                else
                {
                    $('#slideshow img').eq(curPicIndex).hide("slide", {direction: "right"}, 700);
                    $('#thumbnails img').eq(curPicIndex).css({'border':'none','margin':'5px'});
                    curPicIndex = $(this).index();
                    $('#slideshow img').eq(curPicIndex).show("slide", {direction: "left"}, 700);
                    $('#thumbnails img').eq(curPicIndex).css({'border':'5px solid #6699FF','margin':'0px'});
                }
            }
        }
    );
}
);
	
