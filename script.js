function filterByTeam() {
    let input = document.getElementById("searchBox");
    let word = input.value.toLowerCase();
    let tables = document.querySelectorAll(".nbaSchedule");
    for (table of tables) {
        let rows = document.querySelectorAll("tbody tr");
        doFilter(rows, 1, word);
    }
}

function filterByBrodcaster() {
    let input = document.getElementById("select_broadcasters");
    let word = input.value.toLowerCase();
    let tables = document.querySelectorAll(".nbaSchedule");
    for (table of tables) {
        let rows = document.querySelectorAll("tbody tr");
        doFilter(rows, 2, word);
        check();
    }
}
function check() {
    var val = document.getElementById('select_broadcasters').value;
    if (val == 'beIN' || val == 'NBA TV' || val == 'NBA League Pass') {
    } else {
        window.location.reload();
    }
}


function doFilter(rows, column, word) {
    /* Loop through all table rows and hide rows
       that have cells that don't match the search query.
     */
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[column];
        let txtValue = td.innerText;
        if (txtValue.toLowerCase().indexOf(word) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
