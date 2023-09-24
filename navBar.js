// navigation bar for pages.
// include by using <div id="navbar"></div> 

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("navbar").innerHTML = `
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" style="margin-left: 30px;" href="index.html">
          <img style="border-radius: 50%;
          border: solid 1px black;
          width: 50px;
          height: 50px;" src="logo.png">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    <a class="nav-link" href="#">My Platform</a>
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