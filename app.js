var xhr = new XMLHttpRequest;
var r;
var defaultOutput1="<tr>" +
                            "<th>Art ID</th>" +
                            "<th>Tab Name</th>" +
                            "<th>Art Title</th>" +
                            "<th>Artist</th>" +
                            "<th>Location</th>" +
                            "</tr>";

 var defaultOutput2="<tr>" +
                            "<th>ID Number</th>" +
                            "<th>Address</th>" +
                            "<th>Community</th>" +
                            "<th>Permit Number</th>" +
                            "<th>Sticker Number</th>" +
                            "<th>Location</th>" +
                            "</tr>";

 var defaultOutput3="<tr>" +
                            "<th>Sector</th>" +
                            "<th>Community Name</th>" +
                            "<th>Category</th>" +
                            "<th>Sub Category</th>" +
                            "<th># of Event</th>" +
                            "<th>Date</th>" +
                            "<th>Location</th>" +
                            "</tr>";

var defaultOutput4="<tr>" +
                            "<th>Permit Number</th>" +
                            "<th>Current Status</th>" +
                            "<th>Permit Type</th>" +
                            "<th>Original Address</th>" +
                            "<th>Community Name</th>" +
                            "<th>Location</th>" +
                            "</tr>";

function getData1() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("displaydatasets").innerHTML = xhr.responseText;
            setTimeout(loadData1(), 1000)
        }
    };
    xhr.open("GET", "data1.html", true);
    xhr.send();
}

function getData2() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("displaydatasets").innerHTML = xhr.responseText;
            setTimeout(loadData2(), 1000)
        }
    };
    xhr.open("GET", "data2.html", true);
    xhr.send();
}

function getData3() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("displaydatasets").innerHTML = xhr.responseText;
            setTimeout(loadData3(), 1000)
        }
    };
    xhr.open("GET", "data3.html", true);
    xhr.send();
}

function getData4() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("displaydatasets").innerHTML = xhr.responseText;
            setTimeout(loadData4(), 1000)
        }
    };
    xhr.open("GET", "data4.html", true);
    xhr.send();
}

function loadData1() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/2kp2-hsy7.json", true);
    xhr.send();
}

function loadData2() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/jwn6-r58y.json", true);
    xhr.send();
}

function loadData3() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
    xhr.send();
}

function loadData4() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
    xhr.send();
}

function searchData1ArtID(art_id) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Art ID<br>";
    var output = defaultOutput1;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.art_id.toUpperCase().startsWith(art_id.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.art_id + "</td>" +
                        "<td>" + obj.tab_name + "</td>" +
                        "<td>" + obj.title + "</td>" +
                        "<td>" + obj.artist + "</td>" ;
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData1TabName(tab_name) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Tab Name<br>";
    var output = defaultOutput1;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.tab_name.toUpperCase().startsWith(tab_name.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            console.log(position);
            output += "<tr><td>" + obj.art_id + "</td>" +
                        "<td>" + obj.tab_name + "</td>" +
                        "<td>" + obj.title + "</td>" +
                        "<td>" + obj.artist + "</td>" ;
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData1ArtTitle(title) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Art Title<br>";
    var output = defaultOutput1;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.title.toUpperCase().startsWith(title.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.art_id + "</td>" +
                        "<td>" + obj.tab_name + "</td>" +
                        "<td>" + obj.title + "</td>" +
                        "<td>" + obj.artist + "</td>" ;
             var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData1Artist(artist) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Artist<br>";
    var output = defaultOutput1;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.artist.toUpperCase().startsWith(artist.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.art_id + "</td>" +
                        "<td>" + obj.tab_name + "</td>" +
                        "<td>" + obj.title + "</td>" +
                        "<td>" + obj.artist + "</td>" ;
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData2ID(id) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by ID Number<br>";
    var output = defaultOutput2;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.id.toUpperCase().startsWith(id.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.id + "</td>" +
                        "<td>" + obj.address + "</td>" +
                        "<td>" + obj.community + "</td>" +
                        "<td>" + obj.permitnumber + "</td>" +
                        "<td>" + obj.stickernumber + "</td>" ;
                        "<td>" + obj.ward + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";            
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}


function searchData2Address(address) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Address<br>";
    var output = defaultOutput2;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.address.toUpperCase().startsWith(address.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.id + "</td>" +
                        "<td>" + obj.address + "</td>" +
                        "<td>" + obj.community + "</td>" +
                        "<td>" + obj.permitnumber + "</td>" +
                        "<td>" + obj.stickernumber + "</td>" +
                        "<td>" + obj.ward + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}


function searchData2Community(community) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Community<br>";
    var output = defaultOutput2;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.community.toUpperCase().startsWith(community.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.id + "</td>" +
                        "<td>" + obj.address + "</td>" +
                        "<td>" + obj.community + "</td>" +
                        "<td>" + obj.permitnumber + "</td>" +
                        "<td>" + obj.stickernumber + "</td>" +
                        "<td>" + obj.ward + "</td>";
             var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}


function searchData2Permitnumber(permitnumber) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Permit Number<br>";
    var output = defaultOutput2;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.permitnumber.toUpperCase().startsWith(permitnumber.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.id + "</td>" +
                        "<td>" + obj.address + "</td>" +
                        "<td>" + obj.community + "</td>" +
                        "<td>" + obj.permitnumber + "</td>" +
                        "<td>" + obj.stickernumber + "</td>" +
                        "<td>" + obj.ward + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData3Sector(sector) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Sector<br>";
    var output = defaultOutput3;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.sector.toUpperCase().startsWith(sector.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.sector + "</td>" +
                        "<td>" + obj.community_name + "</td>" +
                        "<td>" + obj.group_category + "</td>" +
                        "<td>" + obj.category + "</td>" +
                        "<td>" + obj.count + "</td>" +
                        "<td>" + obj.date.split('T')[0] + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";   
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData3CommunityName(community_name) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Community Name<br>";
    var output = defaultOutput3;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.community_name.toUpperCase().startsWith(community_name.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.sector + "</td>" +
                        "<td>" + obj.community_name + "</td>" +
                        "<td>" + obj.group_category + "</td>" +
                        "<td>" + obj.category + "</td>" +
                        "<td>" + obj.count + "</td>" +
                        "<td>" + obj.date.split('T')[0] + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";             
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData3Category(group_category) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Category<br>";
    var output = defaultOutput3;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.group_category.toUpperCase().startsWith(group_category.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.sector + "</td>" +
                        "<td>" + obj.community_name + "</td>" +
                        "<td>" + obj.group_category + "</td>" +
                        "<td>" + obj.category + "</td>" +
                        "<td>" + obj.count + "</td>" +
                        "<td>" + obj.date.split('T')[0] + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData3Dates(date) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Date<br>";
    var output = defaultOutput3;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.date.split('T')[0].toUpperCase().startsWith(date.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.sector + "</td>" +
                        "<td>" + obj.community_name + "</td>" +
                        "<td>" + obj.group_category + "</td>" +
                        "<td>" + obj.category + "</td>" +
                        "<td>" + obj.count + "</td>" +
                        "<td>" + obj.date.split('T')[0] + "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";            
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData4PermitNum(permitnum) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Permit Number<br>";
    var output = defaultOutput4;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.permitnum.toUpperCase().startsWith(permitnum.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.permitnum + "</td>" +
                        "<td>" + obj.statuscurrent + "</td>" +
                        "<td>" + obj.permittype + "</td>" +
                        "<td>" + obj.totalsqft + "</td>" +
                        "<td>" + obj.communityname+ "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";            
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData4PermitType(permittype) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Permit Type<br>";
    var output = defaultOutput4;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.permittype.toUpperCase().startsWith(permittype.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.permitnum + "</td>" +
                        "<td>" + obj.statuscurrent + "</td>" +
                        "<td>" + obj.permittype + "</td>" +
                        "<td>" + obj.totalsqft + "</td>" +
                        "<td>" + obj.communityname+ "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";           
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData4Status(statuscurrent) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Current Status<br>";
    var output = defaultOutput4;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.statuscurrent.toUpperCase().startsWith(statuscurrent.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.permitnum + "</td>" +
                        "<td>" + obj.statuscurrent + "</td>" +
                        "<td>" + obj.permittype + "</td>" +
                        "<td>" + obj.totalsqft + "</td>" +
                        "<td>" + obj.communityname+ "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";           
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}

function searchData4Address(originaladdress) {
    document.getElementById("searchinfo2").style.visibility = "visible";
    document.getElementById("searchinfo2").innerHTML = "Search by Original Address<br>";
    var output = defaultOutput4;

    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        if (obj.originaladdress.toUpperCase().startsWith(originaladdress.toUpperCase())) {
            var position=obj.latitude + "," + obj.longitude;
            output += "<tr><td>" + obj.permitnum + "</td>" +
                        "<td>" + obj.statuscurrent + "</td>" +
                        "<td>" + obj.permittype + "</td>" +
                        "<td>" + obj.originaladdress + "</td>" +
                        "<td>" + obj.communityname+ "</td>";
            var map="<a href=https://www.google.ca/maps/place/"+position+" target=_blank>Click here for a map</a>";
            output+="<td>" + map + "</td></tr>";           
        }
    }
    document.getElementById("searchresults").innerHTML = output;
}
