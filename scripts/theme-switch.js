document.addEventListener("DOMContentLoaded", function () {
    var dragTheme = window.localStorage.getItem('checkbox');
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var checkbox = document.getElementById('checkbox');

    if (dragTheme === "false" || dragTheme === null) {
        darkModeToggle.classList.remove("dark-edition");
        window.localStorage.setItem('checkbox', false);
        checkbox.checked = false;
    } else if (dragTheme === "true") {
        window.localStorage.setItem('checkbox', true);
        checkbox.checked = true;
    }

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            darkModeToggle.classList.add("dark-edition");
            window.localStorage.setItem('checkbox', true);
        } else {
            darkModeToggle.classList.remove("dark-edition");
            window.localStorage.setItem('checkbox', false);
        }
    });
});