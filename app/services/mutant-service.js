const allEqual = (arr) => arr.every((v) => v === arr[0]);

const initializeMutantArray = (arr) => {
	return arr.map((v) => Array.from(v));
};

const isArrayMutant = (arr) => {
	return Array.isArray(arr) && arr.length > 0 && allEqual(arr);
};

const getRowArray = (arr, startPos, index, chunk) => {
	let data = [...arr[index].slice(startPos, startPos + chunk)];
	if (data.length < chunk) return [];
	return data;
};

const getColumnArray = (arr, startRow, startColumn, chunk) => {
	let data = [];
	let N = arr.length;
	if (startRow + chunk >= N) return data;

	for (let i = 0; i < chunk; i++) {
		data.push(arr[startRow + i][startColumn]);
	}

	return data;
};

const getDiagonalArray = (arr, startRow, startColumn, chunk) => {
	let data = [];
	let N = arr.length;
	if (startRow + chunk >= N) return data;
	let M = arr[startRow + chunk].length;
	if (startColumn + chunk >= M) return data;

	for (let i = 0; i < chunk; i++) {
		data.push(arr[startRow + i][startColumn + i]);
	}
	return data;
};

const isMutant = (arr) => {
	if (!Array.isArray(arr)) return false;
	data = initializeMutantArray(arr);
	let N = data.length;
	let chunk = 4;

	for (let i = 0; i < N; i++) {
		let M = data[i].length;
		for (let j = 0; j < M; j++) {
			if(isArrayMutant(getRowArray(data, j, i, chunk))) return true;
			if(isArrayMutant(getColumnArray(data, j, i, chunk))) return true;
			if(isArrayMutant(getDiagonalArray(data, j, i, chunk))) return true;
		}
	}

	return false;
};

module.exports.isMutant = isMutant;