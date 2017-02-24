function scoreToHTMLTable([scoreJSON]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(scoreJSON);
    for (let obj of arr)
        html += `  <tr><td>${escapeHtml(obj['name'])}` +
            `</td><td>${obj['score']}</td></tr>\n`;
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

console.log(scoreToHTMLTable([`[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]`]));