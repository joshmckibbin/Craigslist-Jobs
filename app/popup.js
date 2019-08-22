function parseXml(xml){
    //$(xml).find("item").slice(0,localStorage["entry_qty"]).each(function(){
    $(xml).find("item").each(function(){
        var title = $(this).find("title").first().text(),
        description = $(this).find("description").text(),
        link = $(this).find("link").text();
        
        description = description.replace(" [...]","...");
        description = description + "<a href=\""+link+"\" target=\"_blank\">View Full Listing</a>";
        
        $("#main-content").append("<div class=\"entry\"><h2><a href=\"" + link + "\" target=\"_blank\">" + title + "</a></h2><p>" + description + "</p></div>");
    });
    
    /* Slide description on h2 click */
    $(".entry h2 a").click(function(e){
        $('.entry p').not($(this).parent().siblings("p")).slideUp();
        $(this).css('color','rgb(13,68,110)').parent().siblings("p").slideToggle();
        e.preventDefault();
    });    
}

function failXml(){
    $("#main-content").append("<p>Error loading xml file.</p>");
}

$(function(){
    var type = localStorage["job_type"];
    var country = localStorage["country"];
    var city = localStorage["city"];
    switch(country){
        case "US":
        switch(city){
            // Major US Cites
            case "lasvegas":
            cityname = "las vegas";
            break;
            case "losangeles":
            cityname = "los angeles";
            break;
            case "newyork":
            cityname = "new york";
            break;
            case "orangecounty":
            cityname = "orange county";
            break;
            case "sandiego":
            cityname = "san diego";
            break;
            case "sfbay":
            cityname = "SF bay";
            break;
            case "washingtondc":
            cityname = "washington, DC";
            break;

            // Alabama
            case "bham":
            cityname = "birmingham";
            break;
            case "columbusga":
            cityname = "columbus, GA";
            break;
            case "shoals":
            cityname = "florence";
            break;

            // Arizona
            case "fayar":
            cityname = "fayetteville";
            break;
            case "fortsmith":
            cityname = "fort smith";
            break;

            // Arkansas
            case "showlow":
            cityname = "show low";
            break;
            case "sierravista":
            cityname = "sierra vista";
            break;
            case "littlerock":
            cityname = "little rock";
            break;

            // California
            case "goldcountry":
            cityname = "gold country";
            break;
            case "inlandempire":
            cityname = "inland empire";
            break;
            case "palmsprings":
            cityname = "palm springs";
            break;
            case "slo":
            cityname = "san luis";
            break;
            case "santabarbara":
            cityname = "santa barbara";
            break;
            case "santamaria":
            cityname = "santa maria";
            break;
            case "yubasutter":
            cityname = "yuba-sutter";
            break;

            // Colorado
            case "cosprings":
            cityname = "colorado springs";
            break;
            case "eastco":
            cityname = "eastern colorado";
            break;
            case "fortcollins":
            cityname = "fort collins";
            break;
            case "rockies":
            cityname = "high rockies";
            break;
            case "westslope":
            cityname = "western slope";
            break;

            // Connecticut
            case "newlondon":
            cityname = "eastern CT";
            break;
            case "newhaven":
            cityname = "new haven";
            break;
            case "nwct":
            cityname = "northwest CT";
            break;

            // Florida
            case "keys":
            cityname = "florida keys";
            break;
            case "fortlauderdale":
            cityname = "fort lauderdale";
            break;
            case "fortmyers":
            cityname = "fort myers";
            break;
            case "cfl":
            cityname = "heartland florida";
            break;
            case "lakecity":
            cityname = "north central FL";
            break;
            case "panamacity":
            cityname = "panama city";
            break;
            case "miami":
            cityname = "south florida";
            break;
            case "spacecoast":
            cityname = "space coast";
            break;
            case "staugustine":
            cityname = "st augustine";
            break;
            case "treasure":
            cityname = "treasure coast";
            break;
            case "westpalmbeach":
            cityname = "west palm beach";
            break;

            // Georgia
            case "albanyga":
            cityname = "albany";
            break;
            case "athensga":
            cityname = "athens";
            break;
            case "columbusga":
            cityname = "columbus";
            break;
            case "nwga":
            cityname = "northwest GA";
            break;

            // Idaho
            case "eastidaho":
            cityname = "east idaho";
            break;

            // Illinois
            case "bn":
            cityname = "bloomington";
            break;
            case "lasalle":
            cityname = "la salle";
            break;
            case "springfieldil":
            cityname = "springfield";
            break;
            case "carbondale":
            cityname = "southern IL";
            break;
            case "quincy":
            cityname = "western IL";
            break;

            // Indiana
            case "fortwayne":
            cityname = "fort wayne";
            break;
            case "tippecanoe":
            cityname = "lafayette";
            break;
            case "richmondin":
            cityname = "richmond";
            break;
            case "southbend":
            cityname = "south bend";
            break;
            case "terrehaute":
            cityname = "terrehaute";
            break;

            // Iowa
            case "cedarrapids":
            cityname = "fort wayne";
            break;
            case "desmoines":
            cityname = "des moines";
            break;
            case "fortdodge":
            cityname = "fort dodge";
            break;
            case "iowacity":
            cityname = "iowa city";
            break;
            case "masoncity":
            cityname = "mason city";
            break;
            case "quadcities":
            cityname = "quad cities";
            break;
            case "siouxcity":
            cityname = "sioux city";
            break;
            case "ottumwa":
            cityname = "southeast IA";
            break;

            // kansas
            case "ksu":
            cityname = "manhattan";
            break;
            case "nwks":
            cityname = "northwest KS";
            break;
            case "seks":
            cityname = "southeast KS";
            break;
            case "swks":
            cityname = "southwest KS";
            break;

            // kentucky
            case "bgky":
            cityname = "bowling green";
            break;
            case "eastky":
            cityname = "eastern KY";
            break;
            case "westky":
            cityname = "western ky";
            break;

            // louisiana
            case "batonrouge":
            cityname = "baton rouge";
            break;
            case "cenla":
            cityname = "central louisiana";
            break;
            case "lakecharles":
            cityname = "lake charles";
            break;
            case "neworleans":
            cityname = "new orleans";
            break;

            // maryland
            case "easternshore":
            cityname = "eastern shore";
            break;
            case "smd":
            cityname = "southern MD";
            break;
            case "westmd":
            cityname = "western MD";
            break;

            // mass
            case "westernmass":
            cityname = "western massachusetts";
            break;

            // michigan
            case "centralmich":
            cityname = "central michigan";
            break;
            case "jxn":
            cityname = "jackson";
            break;
            case "monroemi":
            cityname = "monroe";
            break;
            case "nmi":
            cityname = "northern michigan";
            break;
            case "swmi":
            cityname = "southwest michigan";
            break;
            case "up":
            cityname = "upper peninsula";
            break;

            // minnesota
            case "rmn":
            cityname = "rochester";
            break;
            case "marshall":
            cityname = "southwest MN";
            break;
            case "stcloud":
            cityname = "st cloud";
            break;

            // mississippi
            case "northmiss":
            cityname = "north mississippi";
            break;
            case "natchez":
            cityname = "southwest MS";
            break;

            // missouri
            case "columbiamo":
            cityname = "columbia";
            break;
            case "loz":
            cityname = "lake of the ozarks";
            break;
            case "semo":
            cityname = "southeast MO";
            break;

            // new hampshire
            case "nh":
            cityname = "new hampshire";
            break;

            // new jersey
            case "cnj":
            cityname = "central NJ";
            break;
            case "newjersey":
            cityname = "north jersey";
            break;

            // north carolina
            case "eastnc":
            cityname = "eastern NC";
            break;
            case "onslow":
            cityname = "jacksonville";
            break;

            // north dakota
            case "nd":
            cityname = "north dakota";
            break;

            // ohio
            case "akroncanton":
            cityname = "akron / canton";
            break;
            case "athensohio":
            cityname = "athens";
            break;
            case "limaohio":
            cityname = "lima";
            break;

            // oklahoma
            case "enid":
            cityname = "northwest OK";
            break;

            // pennsylvania
            case "pennstate":
            cityname = "state college";
            break;

            // s carolina
            case "florencesc":
            cityname = "florence";
            break;

            // s dakota
            case "nesd":
            cityname = "northeast SD";
            break;
            case "csd":
            cityname = "central SD";
            break;
            case "sd":
            cityname = "south dakota";
            break;

            // tennessee
            case "jacksontn":
            cityname = "jackson";
            break;

            // texas
            case "nacogdoches":
            cityname = "deep east TX";
            break;
            case "bigbend":
            cityname = "southwest TX";
            break;
            case "easttexas":
            cityname = "east TX";
            break;

            // virginia
            case "norfolk":
            cityname = "hampton roads";
            break;
            case "blacksburg":
            cityname = "new river valley";
            break;
            case "swva":
            cityname = "southwest VA";
            break;

            // washington
            case "kpr":
            cityname = "kennewick";
            break;

            // w virginia
            case "martinsburg":
            cityname = "eastern panhandle";
            break;
            case "wheeling":
            cityname = "northern panhandle";
            break;
            case "swv":
            cityname = "southern WV";
            break;
            case "wv":
            cityname = "west virginia";
            break;
            case "charlestonwv":
            cityname = "charleston";
            break;

            // washington
            case "northernwi":
            cityname = "northern WI";
            break;

            // territories
            case "virgin":
            cityname = "US virgin islands";
            break;

            // Default
            default:
            cityname = city;
        } // end US City Switch
        break;
        
        case "Canada":
        switch(city){
            // Alberta
            case "ftmcmurray":
            cityname = "Ft. McMurray";
            break;
            case "hat":
            cityname = "Medicine Hat";
            break;
            case "peace":
            cityname = "peace river country";
            break;
            case "reddeer":
            cityname = "red deer";
            break;
            
            // British Columbia
            case "comoxvalley":
            cityname = "comox valley";
            break;
            case "abbotsford":
            cityname = "fraser valley";
            break;
            case "kelowna":
            cityname = "kelowna / okangan";
            break;
            case "cranbrook":
            cityname = "kootenays";
            break;
            case "princegeorge":
            cityname = "prince george";
            break;
            case "skeens":
            cityname = "skeena-bulkley";
            break;
            case "sunshine":
            cityname = "sunshine coast";
            break;
            case "":
            cityname = "";
            break;
            
            // New Brunswick
            case "newbrunswick":
            cityname = "new brunswick";
            break;
            
            // Newfoundland and Labrador
            case "newfoundland":
            cityname = "st. john's";
            break;
            
            // Ontario
            case "brantford":
            cityname = "brantford-woodstock";
            break;
            case "chatham":
            cityname = "chatham-kent";
            break;
            case "hamilton":
            cityname = "hamilton-burlington";
            break;
            case "kitchener":
            cityname = "kitchener-waterloo-cambridge";
            break;
            case "londonon":
            cityname = "london";
            break;
            case "ottawa":
            cityname = "ottawa-hull-gatineau";
            break;
            case "owensound":
            cityname = "owen sound";
            break;
            case "soo":
            cityname = "sault ste marie";
            break;
            case "thunderbay":
            cityname = "thunder bay";
            break;
            
            // Prince Edward Island
            case "pei":
            cityname = "prince edward island";
            break;
            
            // Quebec
            case "quebec":
            cityname = "quebec city";
            break;
            case "troisrivieres":
            cityname = "trois-rivieres";
            break;
            
            // Default
            default:
            cityname = city;
        } // end Canada city switch
        break;
    }

    if(!city){ // If no location has been selected, show the options page...
        window.location = "options.html";
    }else{ // Otherwise...
        /*switch(country){
            case "US":
            var preurl = "http://"+city+".craigslist.org/";
            break;
            case "Canada":
            var preurl = "http://"+city+".en.craigslist.ca/";
            break;
        }*/
        var keywords = localStorage["keywords"];
        var kw = keywords.replace(" ", "+");

        var preurl = "https://"+city+".craigslist.org/";

        $("#title").html(cityname+" Jobs:");
        $('#search form').attr('action',preurl+'search/'+type);

        if (kw != "") {
            var url = preurl+"search/"+type+"?format=rss&query="+kw;
        } else {
            var url = preurl+"search/"+type+"?format=rss";
        }
        
        $.ajax({
            type: "GET",
            async: true,
            //url: preurl+type+"/search?format=rss",
	        url: url,
            dataType: "xml"
        })
        .done(parseXml)
        .fail(failXml);
    }
});