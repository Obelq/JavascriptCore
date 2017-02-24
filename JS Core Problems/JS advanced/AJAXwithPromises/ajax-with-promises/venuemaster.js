function attachEvents() {
    const kinveyAppId = "kid_BJ_Ke8hZg";
    const serviceUrlApp = "https://baas.kinvey.com/appdata/" + kinveyAppId+"/biggestCatches";
    const serviceUrlRpc = "https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=";
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = { "Authorization": "Basic " + base64auth };
    $("#getVenues").click(function (ev) {
       $.ajax({
           type: "POST",
           url: serviceUrlRpc+$("#venueDate").val(),
           headers: authHeaders
       }).then(function (data) {
           console.log(data)
       })
    });
}