
function loadHTML(id, file, callback) {
  fetch(file)
    .then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load " + file);
      }
      return res.text();
    })
    .then(function (data) {
      var container = document.getElementById(id);

      if (!container) {
        throw new Error("Element not found: " + id);
      }

      container.innerHTML = data;

      var scripts = Array.from(container.querySelectorAll("script"));

      scripts.forEach(function (oldScript) {
        var newScript = document.createElement("script");

        Array.from(oldScript.attributes).forEach(function (attr) {
          newScript.setAttribute(attr.name, attr.value);
        });

        newScript.textContent = oldScript.textContent;
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });

      if (callback) callback();
    })
    .catch(function (error) {
      console.error("Error loading " + file + ":", error);
    });
}

loadHTML("header", "headers.html");
loadHTML("menu", "menu.html");
loadHTML("supportbox", "support-box.html");

loadHTML("sidebar", "sidebar.html", function () {
  var script = document.createElement("script");
  script.src = "data/banners.js?v=" + new Date().getTime();
  document.body.appendChild(script);
});

loadHTML("footer", "footer.html");
