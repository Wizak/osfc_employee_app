export const randomChoiceElements = (arr = [], min = 3, max  = 10) => {
	const count = Math.floor(Math.random() * (max - min + 1)) + min;
	const actualCount = Math.min(count, arr.length);

	const randomElements = [];
	for (let i = 0; i < actualCount; i++) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		randomElements.push(arr.splice(randomIndex, 1)[0]);
	}

	return randomElements;
};