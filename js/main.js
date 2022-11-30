const dailyBtn = document.querySelector('.daily');
const weeklyBtn = document.querySelector('.weekly');
const monthlyBtn = document.querySelector('.monthly');
const comparison = document.querySelectorAll('.comparison');
const currentTimes = document.querySelectorAll('.current-time');
const previousTimes = document.querySelectorAll('.previous-time');
let dailyCurrentTimes;
let dailyPreviousTimes;
let weeklyCurrentTimes;
let weeklyPreviousTimes;
let monthlyCurrentTimes;
let monthlyPreviousTimes;

fetch('./data.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		dailyCurrentTimes = data.map((el) => el.timeframes.daily.current);
		dailyPreviousTimes = data.map((el) => el.timeframes.daily.previous);
		weeklyCurrentTimes = data.map((el) => el.timeframes.weekly.current);
		weeklyPreviousTimes = data.map((el) => el.timeframes.weekly.previous);
		monthlyCurrentTimes = data.map((el) => el.timeframes.monthly.current);
		monthlyPreviousTimes = data.map((el) => el.timeframes.monthly.previous);
	})
	.catch(function (err) {
		console.log(err);
	});

const dailyData = () => {
	comparison.forEach((statement) => {
		statement.textContent = 'Yesterday';
	});

	for (let i = 0; i < currentTimes.length; i++) {
		currentTimes[i].textContent = dailyCurrentTimes[i];
		previousTimes[i].textContent = dailyPreviousTimes[i];
	}
};

const weeklyData = () => {
	comparison.forEach((statement) => {
		statement.textContent = 'Last week';
	});

	for (let i = 0; i < currentTimes.length; i++) {
		currentTimes[i].textContent = weeklyCurrentTimes[i];
		previousTimes[i].textContent = weeklyPreviousTimes[i];
	}
};

const monthlyData = () => {
	comparison.forEach((statement) => {
		statement.textContent = 'Last month';
	});

	for (let i = 0; i < currentTimes.length; i++) {
		currentTimes[i].textContent = monthlyCurrentTimes[i];
		previousTimes[i].textContent = monthlyPreviousTimes[i];
	}
};

dailyBtn.addEventListener('click', dailyData);
weeklyBtn.addEventListener('click', weeklyData);
monthlyBtn.addEventListener('click', monthlyData);
