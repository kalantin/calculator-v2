const btns = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const action = [];
let number = '';
let sign = '';
let summary;
const task = (e) => {
	const target = e.target.textContent;
	if (target === '+' || target === '-' || target === '*' || target === '/') {
		if (sign !== '') {
			if (number !== '') {
				score();
			}
			sign = target;
			number = '';
		} else {
			if (number !== '') {
				action.push(number);
			}
			result.textContent = action[0];
			sign = target;
			number = '';
		}
	} else if (target === 'Clear') {
		action.length = 0;
		number = '';
		sign = '';
		summary = '';
		result.textContent = 0;
	} else if (target === '=') {
		if (number !== '') {
			score();
		}
	} else if (target === '<=') {
		const sliceNumber = number.slice(0, number.length - 1);
		number = sliceNumber;
		if (summary !== '') {
			result.textContent = summary;
		} else {
			result.textContent = number;
		}
	} else {
		if (sign === '') {
			action.length = 0;
			summary = ''
		}
		number += target;
		result.textContent = number;
	}
};

const print = (summary) => {
	result.textContent = summary;
	action.length = 0;
	action.push(summary);
	sign = '';
};
const score = () => {
	action.push(number);
	number = '';
	switch (sign) {
		case '+':
			summary = parseFloat(action[0]) + parseFloat(action[1]);
			print(summary);
			break;
		case '-':
			summary = parseFloat(action[0]) - parseFloat(action[1]);
			print(summary);
			break;
		case '*':
			summary = parseFloat(action[0]) * parseFloat(action[1]);
			print(summary);
			break;
		case '/':
			summary = parseFloat(action[0]) / parseFloat(action[1]);
			print(summary);
			break;
	}
};

btns.forEach((el) => {
	el.addEventListener('click', task);
});
