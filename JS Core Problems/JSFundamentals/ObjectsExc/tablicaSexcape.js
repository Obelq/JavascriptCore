function JSONToHTMLTable([json]) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;
    html += "</tr>\n";
    for (let i = 0; i < arr.length; i++) {
        html += "  <tr>";
        for (let key in arr[i]) {

            html+=`<td>${htmlEscape(arr[i][key])}</td>`;

        }
        html += "</tr>\n";
    }

        return html + "</table>";
        function htmlEscape(text) {
            text = new String(text);
            let map = {
                '"': '&quot;', '&': '&amp;',
                "'": '&#39;', '<': '&lt;', '>': '&gt;'
            };
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }

}
console.log(JSONToHTMLTable([`[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]`]));