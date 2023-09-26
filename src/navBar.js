// navigation bar for pages.
// include by using <div id="navbar"></div> 

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("navbar").innerHTML = `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
        <img id="brand-image" style="border-radius: 50%;
        transition: transform 1s ease-in-out;
        margin-left: 30px;
        margin-right: 30px;
        border: solid 1px black;
        width: 50px;
        height: 50px;" src="images/logo.png">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="platform.html">My Platform</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="form.html">Your Voice</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    `;

});
