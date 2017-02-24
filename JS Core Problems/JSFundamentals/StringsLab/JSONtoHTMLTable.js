function JSONToHTMLTable([json]) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    for (let key of Object.keys(arr[0]))
        html += `<th>${escapeHtml(key)}</th>`;
    html += "</tr>\n";

    for (let obj of arr) {
        html += "  <tr>";
        for(let item of obj){
            html+=`<th>${escapeHtml(obj.item)}</th>`;
        }
        html += "</tr>\n";

    }

        return html + "</table>";


    function escapeHtml(string) {
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    }
}
console.log(JSONToHTMLTable(['[{"X":5,"Y":7},{"X":2,"Y":4}]']));
