
let previewPic = document.querySelector("#preview-pic");

previewPic.addEventListener("click", function (e) {
  if(e.target.tagName === "IMG") {
    var overlay = document.createElement('div');
    overlay.id = "overlay";
    overlay.innerHTML += `<iframe id="test" src="https://www.youtube-nocookie.com/embed/uY92He86pew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.body.appendChild(overlay);
    document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.querySelector("main").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.querySelector("footer").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.querySelector("header").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.querySelector("figure#portrait-figure").style.backgroundColor = "rgba(0, 0, 0, 0.7)";  
  }
});

document.querySelector('body').addEventListener("click", function(e) {
  if(e.target.tagName !== "IMG") {
    if (overlay.id.length > 0) {
      document.querySelector("body").style.backgroundColor = "#fff";
      document.querySelector("main").style.backgroundColor = "#eee";
      document.querySelector("footer").style.backgroundColor = "#fff";
      document.querySelector("header").style.backgroundColor = "#eee";
      document.querySelector("figure#portrait-figure").style.backgroundColor = "#333";  
      overlay.parentNode.removeChild(overlay);
    }
  }
});
