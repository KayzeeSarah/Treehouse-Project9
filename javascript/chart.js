var main = document.getElementById('mainChart');
var dailyTraffic = document.getElementById('dTrafficChart');
var mobileUsers = document.getElementById('mUsersChart');
var timeButtons = document.querySelector('.time-buttons');
var button = document.querySelectorAll('.time-buttons button');

function monthly () {
  button[3].focus();
  var chart = new Chart(main, {
      type: 'line',
      data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12"],
        datasets: [{
          data: ["3000","3500","2500","3500","4000","3000","3500", "4500","5000","4000","5500","6000"]
        }]
      },
      options: {
    legend: {
      display: false,
    }
  }
  });
}

monthly();

timeButtons.addEventListener('click', function(e) {
const button = e.target;
if(button.textContent == "Hourly") {
  var chart = new Chart(main, {
      type: 'line',
      data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],
        datasets: [{
          data: ["10","8","11","15","6","7","6","13","9","10","16","17","12","10","8","5","9","7","6","10","16","19","13","15"]
        }]
      },
      options: {
    legend: {
      display: false,
    }
  }
  });
} else if (button.textContent == "Daily") {
  var chart = new Chart(main, {
      type: 'line',
      data: {
        labels: ["1","2","3","4","5","6","7"],
        datasets: [{
          data: ["90","100","120","115","125","130","135"]
        }]
      },
      options: {
    legend: {
      display: false,
    }
  }
  });
} else if (button.textContent == "Weekly") {
  var chart = new Chart(main, {
      type: 'line',
      data: {
        labels: ["1-7","8-14","15-21","22-28","29-3"],
        datasets: [{
          data: ["820","900","730","1100","1450"]
        }]
      },
      options: {
    legend: {
      display: false,
    }
  }
  });
} else if (button.textContent == "Monthly") {
  monthly();
}
});

var myBarChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
      labels: ["S","M","T","W","T","F","S"],
      datasets: [{
        data: ["90","110","120","115","125","130","135"],
        backgroundColor: ["#C7F8FF","#7AEEFF","#62BECC","#5FB8C6","#026F7F","#026270","#305D63"]
      }]
    },
    options: {
      legend: {
        display: false,
      }
    }
});


var myDoughnutChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
      labels: ["Mobile","Tablet","Desktop"],
      datasets: [{
        data: ["70","10","20"],
        backgroundColor: ["#E4C1BE","#E19C97","#CC737F"]
      }]
    },
    options: {
      legend: {
        position: 'right'
      }
    }
});
