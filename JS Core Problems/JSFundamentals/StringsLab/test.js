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
console.log(escapeHtml('<div>'));
function scoreToHTMLTable([scoreJSON]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th>\n";
    let arr = JSON.parse(scoreJSON);
    console.log(arr);
}
scoreToHTMLTable([`[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]`]);
