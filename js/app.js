document.addEventListener("DOMContentLoaded", function() {
    var counter = 0;
    var next = document.getElementById("nextPicture");
    var prev = document.getElementById("prevPicture");
    var ul = document.getElementById("chairsImg");
    var li = ul.children;
    console.log(li);
    li[0].style.display = 'block';

    next.addEventListener('click', function() {

        li[counter].style.display = 'none';
        counter++;
        if (counter >= li.length) counter = li.length - 1;
        li[counter].style.display = 'block';

    });

    prev.addEventListener('click', function() {


        li[counter].style.display = 'none';
        counter--;
        if (counter < 0) counter = 0;
        li[counter].style.display = 'block';


    });

});

document.addEventListener("DOMContentLoaded", function() {
    var oFirmie = document.querySelector(".dropdownMenu");
    var content = document.querySelector(".contentDropdownMenu");
    oFirmie.addEventListener("mouseover", function() {
        content.classList.add("visibility");

    });

    oFirmie.addEventListener("mouseout", function() {
        content.classList.remove("visibility");

    });

    var blocks = document.querySelectorAll(".col-3");
    var names = document.querySelectorAll(".opis");

    for (var i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("mouseover", function() {
            this.firstElementChild.classList.add('invisibility');
        });
    }
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("mouseout", function() {
            this.firstElementChild.classList.remove('invisibility');
        });
    }




});
