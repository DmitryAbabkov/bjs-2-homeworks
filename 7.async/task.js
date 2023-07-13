class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time == undefined || callback == undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		const res = this.alarmCollection.find(item => item.time === time);
		if (res) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});

	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => {
			return item.time !== time;
		});
	}

	getCurrentFormattedTime() {
		const today = new Date();
		let hourse = today.getHours();
		let minutes = today.getMinutes();


		if (hourse < 10) {
			hourse = '0' + hourse;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		let res = `${hourse}:${minutes}`;
		return res;

	}

	start() {
		if (this.intervalId != undefined) {
			return;
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((item) => {
					if ((this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
						item.canCall = false;
						item.callback();
					}
				});
			});

		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}