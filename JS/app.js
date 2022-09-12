//Alert

const removeButton = document.getElementById('remove-btn');

removeButton.addEventListener('click', (e)=>{
    e.target.parentNode.remove();
});

// Send button

const sendButton = document.querySelector('.btn-send');
const userSearch = document.querySelector('.user-search');
const userMessage = document.querySelector('.user-message');

sendButton.addEventListener('click', ()=>{

    if(userSearch.value !== '' && userMessage.value !== ''){
    alert('Your data has been sent.');userSearch.value = '';
    userMessage.value = '';
    } else {
        alert('Missing information. Select a user and add a message.');
    }
});



//Traffic line chart

const trafficCanvas = document.getElementById('traffic-chart');

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

//Traffic bar chart

const dailyCanvas = document.getElementById("daily-chart");

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

//Mobile pie chart

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

const switchButtonEmail = document.querySelector('.toggle-circle');

const switchButtonProfile = document.querySelector('.toggle-circle-profile');

const checkboxOn = document.querySelector('.on');

const checkboxOnProfile = document.querySelector('.on-profile');

const checkboxOff = document.querySelector('.off');

const checkboxOffProfile = document.querySelector('.off-profile');

checkboxOff.addEventListener('click', (e)=>{

 switchButtonEmail.style.transform = 'translateX(0px)';
   
});

checkboxOn.addEventListener('click', (e)=>{

    switchButtonEmail.style.transform = 'translateX(-57px)';
   
});

checkboxOnProfile.addEventListener('click', (e)=>{

    switchButtonProfile.style.transform = 'translateX(-57px)';
   
});

checkboxOffProfile.addEventListener('click', (e)=>{

    switchButtonProfile.style.transform = 'translateX(0px)';
   
});