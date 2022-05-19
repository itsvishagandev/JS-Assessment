let createBtn = document.getElementById('create-btn');

createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let row_Val = document.getElementById('table-row').value;    
    let cols_Val = document.getElementById('table-column').value;  
    createTable(row_Val,cols_Val);
});

function createTable(row_Val,cols_Val) {
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement("table");

    for (var i = 0; i < row_Val; i++) {
        // table row
        var row = document.createElement("tr");

        for (var j = 0; j < cols_Val; j++) {
        // table column
        var cols = document.createElement("td");
        var colsText = document.createTextNode("( " + (i+1) + ' , ' + (j+1) + " )");

        cols.appendChild(colsText);
        row.appendChild(cols);
        }

        //row added to end of table body
        table.appendChild(row);
    }
    body.appendChild(table);
}