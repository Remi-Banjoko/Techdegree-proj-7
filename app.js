
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =    `<div class="alert-banner">
                            <p><strong>Alert:</strong> You have <strong>Unread</strong> messages</p>
                            <p class="alert-banner-close">x</p>
                            </div>
                           `

                           alertBanner.addEventListener('click', e => {
                            const element = e.target;
                            if (element.classList.contains("alert-banner-close")) {
                            alertBanner.style.display = "none"
                            }
                            });


 function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");

let email_toggle = document.getElementById("email");
email_toggle.checked = JSON.parse(window.localStorage.getItem('email_settings'));

let profile_toggle = document.getElementById("profile");
profile_toggle.checked = JSON.parse(window.localStorage.getItem('profile_settings'));

let timezone_dropdown = document.getElementById("timezone");
timezone_dropdown.selectedIndex = JSON.parse(window.localStorage.getItem('timezone_settings'));



saveButton.addEventListener('click', e => {
    
    const element = e.target;
    
    if (element.classList.contains("button-primary-save")) {
        
        window.localStorage.setItem('email_settings', JSON.stringify(email_toggle.checked));
        window.localStorage.setItem('profile_settings', JSON.stringify(profile_toggle.checked));
        window.localStorage.setItem('timezone_settings', JSON.stringify(timezone_dropdown.selectedIndex));

    }
});
    
cancelButton.addEventListener('click', e => {
    
    const element = e.target;
    
    if (element.classList.contains("button-disabled")) {
        
        window.localStorage.clear();
        email_toggle.checked = false;
        profile_toggle.checked= false;
        document.getElementById("timezone").selectedIndex = "0";
       
    }
});


const users = ['Victoria Chambers','Dale Byrd','Dawn Wood','Dan Oliver','Ash Ketchum','Remi Banjoko'];

const autocomplete = document.getElementById("userField");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
    
    let results = [];
    const userInput = this.value;
    resultsHTML.innerHTML = "";
    
    if (userInput.length > 0) {
      
        results = getResults(userInput);
      resultsHTML.style.display = "block";
      resultsHTML.style.position ="absolute";
      
      for (i = 0; i < results.length; i++) {
        resultsHTML.innerHTML += "<li class='search_results'>" + results[i] + "</li>";
      }
    
    }
  };

  function getResults(input) {
    const results = [];
    
    for (i = 0; i < users.length; i++) {
      if (input.toLowerCase() === users[i].slice(0, input.length).toLocaleLowerCase()) {
        results.push(users[i]);
      }
    }
    return results;
  }

  resultsHTML.onclick = function (event) {
    const setValue = event.target.innerText;
    autocomplete.value = setValue;
    this.innerHTML = "";
  };


const trafficNav = document.getElementById("traffic-nav");

trafficNav.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("hourly-tab")) {
        var tab = document.getElementById("hourly");
        tab.classList.toggle("nav-button");
        updateChart(trafficChart, trafficHourly);
    }
    
    else if (element.classList.contains("daily-tab")) {
        var tab = document.getElementById("daily");
        tab.classList.toggle("nav-button");
        updateChart(trafficChart, trafficDaily);
    }
    
    else if (element.classList.contains("weekly-tab")) {
        var tab = document.getElementById("weekly");
        tab.classList.toggle("nav-button");
        updateChart(trafficChart, trafficWeekly);
    }

    else if (element.classList.contains("monthly-tab")) {
        var tab = document.getElementById("monthly");
        tab.classList.toggle("nav-button");
        updateChart(trafficChart, trafficMonthly);
    }

});


    let trafficHourly = {
        labels: ["1", "2", "3", "4", "5", "6", "7",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [50, 120, 10, 4000, 70, 1750, 1250, 1850, 2250, 1500,
        2500] }]
        };

    let trafficDaily = { 
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
          data: [1000, 2000, 0, 1500, 100, 4, 300, 650, 250, 15,
            400],
        }]
    };

    let trafficWeekly = { 
        labels: ["1", "2", "3", "4"],
        datasets: [{
          data: [760, 200, 4000, 3000, 2000, 4, 300, 650, 250, 15,
            400],
        }]
    };

    let trafficMonthly = { 
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10" , "11", "12"],
        datasets: [{
          data: [10, 200, 90, 3500, 2100, 490, 700, 850, 3250, 115,
            2400, 3499],
        }]
    };

    const updateChart = (chart, newData) => {

            console.log( chart.data.labels);
            chart.data.labels = newData.labels;
            chart.data.datasets[0].data = newData.datasets[0].data;
            chart.update();

    }

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

    let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
        legend: {
        display: false
        }
        }
        };

        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
            });


            const dailyCanvas = document.getElementById("daily-chart");

            // data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
    };

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });


        const mobileCanvas = document.getElementById("mobile-chart");

        const mobileData = {
            labels: ["Desktop", "Tablet", "Phones"],
            datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
            ]
            }]
            };

            const mobileOptions = {
                aspectRatio: 1.9,
                plugins: {
                legend: {
                position: 'right',
                labels: {
                boxWidth: 20,
                fontStyle: 'bold'
                }
                }
                }
                };

                let mobileChart = new Chart(mobileCanvas, {
                    type: 'doughnut',
                    data: mobileData,
                    options: mobileOptions
                    });

                    const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {

        alert("Please fill out user and message fields before sending");
    } 
    
    else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } 
    
    else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } 
    
    else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});