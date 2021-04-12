/*Mobile navbar*/

function toggle(){
    var header = document.getElementById("header");
    var menuBtn = document.getElementById("toggle");
    var video = document.getElementById("paragraph-video");
    menuBtn.classList.toggle("open");
    header.classList.toggle("active");
    video.classList.toggle("video-active");

}

/*Dropdown, navbar*/
        function dropDownClick() {
            document.getElementById("dropdown").classList.toggle("navbar-Right__dropdown___show");
            event.preventDefault();
        }

        window.addEventListener("click", function(event) {
            if (!event.target.matches('#click')) {
                var dropdowns = document.getElementsByClassName("navbar-Right__dropdown");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('navbar-Right__dropdown___show')) {
                        openDropdown.classList.remove('navbar-Right__dropdown___show');
                    }
                }
            }
        });


        function dropDownClick2() {
            document.getElementById("dropdown2").classList.toggle("navbar-Right__dropdown___show2");
            event.preventDefault();
        }
        window.addEventListener("click", function(event) {
            if (!event.target.matches('#click2')) {
                var dropdowns = document.getElementsByClassName("navbar-Right__dropdown2");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('navbar-Right__dropdown___show2')) {
                        openDropdown.classList.remove('navbar-Right__dropdown___show2');
                    }
                }
            }
        });
        window.addEventListener("scroll", function() {
            var header = document.querySelector("header");
            header.classList.toggle("scrolling-active", window.scrollY > 0);
        
        })

       