const placesData = {

    camping: [

        {
            name:"Knuckles Mountain Range",
            lat:7.4625,
            lng:80.8000,
            image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            desc:"Mountain camping with rivers, forests and amazing views."
        },

        {
            name:"Horton Plains",
            lat:6.8000,
            lng:80.8000,
            image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            desc:"Cool climate camping near waterfalls and nature trails."
        },

        {
            name:"Wilpattu Camping",
            lat:8.5000,
            lng:80.0000,
            image:"https://images.unsplash.com/photo-1516426122078-c23e76319801",
            desc:"Wild camping experience close to nature."
        }

    ],


    hiking:[

        {
            name:"Ella Trails",
            lat:6.8667,
            lng:81.0466,
            image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            desc:"Mountain hiking adventure."
        },


        {
            name:"Adam's Peak",
            lat:6.8096,
            lng:80.4994,
            image:"https://images.unsplash.com/photo-1528127269322-539801943592",
            desc:"Famous sunrise hiking adventure."
        }

    ],



    wildlife:[

        {
            name:"Yala National Park",
            lat:6.3725,
            lng:81.5211,
            image:"https://images.unsplash.com/photo-1516426122078-c23e76319801",
            desc:"Safari adventure with elephants and leopards."
        },


        {
            name:"Udawalawe National Park",
            lat:6.4758,
            lng:80.8889,
            image:"https://images.unsplash.com/photo-1549366021-9f761d450615",
            desc:"Best place to see elephants."
        }

    ]

};



let selectedPlace = "";

let selectedData = null;

let map;



function showPlaces(type){


    let container = document.getElementById("places");


    container.innerHTML="";



    placesData[type].forEach(place=>{


        container.innerHTML += `

        <div class="place-card" onclick="selectPlace('${place.name}')">


        <img src="${place.image}">


        <h3>
        ${place.name}
        </h3>


        <p>
        ${place.desc}
        </p>


        </div>

        `;


    });


}







function selectPlace(name){


    Object.values(placesData).forEach(category=>{


        category.forEach(place=>{


            if(place.name === name){


                selectedPlace = place.name;

                selectedData = place;


            }


        });


    });



    alert(selectedPlace+" selected");


    showMap();

    getWeather();


}







function showMap(){


    if(map){

        map.remove();

    }



    map = L.map("map").setView(

        [
            selectedData.lat,
            selectedData.lng
        ],

        10

    );



    L.tileLayer(

        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",

        {

        attribution:"© OpenStreetMap"

        }

    ).addTo(map);




    L.marker(

        [
            selectedData.lat,
            selectedData.lng
        ]

    )

    .addTo(map)

    .bindPopup(selectedPlace)

    .openPopup();


}







function generatePlan(){


    let days = document.getElementById("days").value;

    let people = document.getElementById("people").value;



    if(selectedData == null){

        alert("Please select a destination!");

        return;

    }



    if(days=="" || people==""){

        alert("Enter days and people!");

        return;

    }



    let budget = days * people * 5000;



    document.getElementById("budgetResult").innerHTML =

    `
    Estimated Budget:
    <br>
    Rs. ${budget.toLocaleString()}
    `;



    document.getElementById("result").innerHTML =


    `

    <h2>
    Peak.lk Adventure Plan
    </h2>


    <br>


    <b>Destination:</b>
    ${selectedPlace}


    <br><br>


    <b>Duration:</b>
    ${days} Days


    <br><br>


    <b>Travel Group:</b>
    ${people} People


    <br><br>


    Day 1:
    Travel and setup adventure.


    <br><br>


    Day 2:
    Explore nature and activities.


    <br><br>


    Final Day:
    Return safely.



    `;


}







async function getWeather(){


    document.getElementById("weatherResult").innerHTML =
    "Loading weather...";



    let url =

    `https://api.open-meteo.com/v1/forecast?latitude=${selectedData.lat}&longitude=${selectedData.lng}&current_weather=true`;



    let response = await fetch(url);


    let data = await response.json();




    document.getElementById("weatherResult").innerHTML =


    `

    🌡 Temperature:
    ${data.current_weather.temperature} °C

    <br>

    💨 Wind:
    ${data.current_weather.windspeed} km/h

    `;


}








function downloadPDF(){


    if(selectedData === null){

        alert("Please select destination first!");

        return;

    }



    let plan = document.getElementById("result").innerHTML;



    if(plan.trim()===""){

        alert("Generate trip plan first!");

        return;

    }



    let days = document.getElementById("days").value;

    let people = document.getElementById("people").value;


    let budget = days * people * 5000;



    let pdfWindow = window.open("","_blank");



    pdfWindow.document.write(`


    <html>

    <head>


    <title>
    Peak.lk Trip Plan
    </title>



    <style>


    body{

    font-family:Arial;

    padding:40px;

    color:#17221c;

    }



    img{

    width:100%;

    height:250px;

    object-fit:cover;

    border-radius:15px;

    }



    .box{

    background:#f4f3ee;

    padding:25px;

    margin-top:20px;

    border-radius:15px;

    line-height:1.8;

    }



    </style>


    </head>


    <body>



    <h1>
    ▲ PEAK.LK
    </h1>


    <h2>
    Adventure Trip Plan
    </h2>



    <img src="${selectedData.image}">



    <div class="box">


    ${plan}


    <br><br>


    <b>Budget:</b>

    Rs. ${budget.toLocaleString()}



    <br><br>


    <b>Weather:</b>

    ${document.getElementById("weatherResult").innerHTML}



    </div>




    </body>


    </html>



    `);



    pdfWindow.document.close();



    setTimeout(()=>{


        pdfWindow.print();


    },700);



}