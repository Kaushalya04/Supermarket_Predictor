async function predict() {


    const data = {

        Age: document.getElementById("Age").value,

        Gender: document.getElementById("Gender").value,

        "Monthly_Income_(LKR)":
        document.getElementById("Monthly_Income_(LKR)").value,

        Family_Size:
        document.getElementById("Family_Size").value,

        Residential_Area:
        document.getElementById("Residential_Area").value,

        "Budget_(LKR)":
        document.getElementById("Budget_(LKR)").value,

        Frequency:
        document.getElementById("Frequency").value,

        Transport:
        document.getElementById("Transport").value

    };

    try {

        let response = await fetch("/predict", {
            method:"POST",
            headers:{

                "Content-Type":"application/json"

            },
            body:JSON.stringify(data)

        });

        let result = await response.json();

        if(result.error){
            document.getElementById("result").innerHTML =
            "❌ " + result.error;

        }

        else{
            document.getElementById("result").innerHTML =

            "🛒 Recommended Supermarket: " 
            + result.prediction;


            // Prediction History
            let table = document.getElementById("historyTable");
            if(table){
                let row = table.insertRow();
                row.innerHTML = `

                <td>${data.Age}</td>

                <td>${data.Gender}</td>

                <td>${data["Monthly_Income_(LKR)"]}</td>

                <td>🛒 ${result.prediction}</td>

                `;


            }
        }
    }

    catch(error){

        document.getElementById("result").innerHTML =

        "❌ Prediction Error";
        console.log(error);

    }

}

// Scroll Button Function
function scrollToPrediction(){

    document.getElementById("prediction").scrollIntoView({

        behavior:"smooth"

    });

}

// Model Performance Chart
const chartElement = document.getElementById("modelChart");

if(chartElement){

    new Chart(chartElement,{
        type:"bar",
        data:{

            labels:[

                "Decision Tree",

                "KNN",

                "Logistic Regression",

                "SVM"

            ],

            datasets:[{
                label:"Accuracy (%)",
                data:[

                    19.61,

                    23.53,

                    19.61,

                    24.51

                ]

            }]


        },

        options:{
            responsive:true,
            scales:{
                y:{


                    beginAtZero:true,


                    max:30


                }

            }

        }
    });

}


// Supermarket Preference Chart
const supermarketCanvas = 
document.getElementById("supermarketChart");

if(supermarketCanvas){
    new Chart(supermarketCanvas,{
        type:"doughnut",
        data:{

            labels:[

                "Keells",

                "Cargills Food City",

                "Arpico",

                "Sathosa",

                "Other"
             ],


            datasets:[{
                label:"Customer Preference",

                data:[


                    30,

                    25,

                    20,

                    15,

                    10


                ]

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    position:"bottom"


                }

            }



        }
    });

}