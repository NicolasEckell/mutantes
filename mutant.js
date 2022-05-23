const allEqual = (arr) => arr.every((v) => v === arr[0]);

const initializeMutantArray = (arr) => {
	return arr.map((v) => Array.from(v));
};

const isAnyMutant = (rows, cols, cross) => {
	if (Array.isArray(rows) && rows.length > 0 && allEqual(rows)) return true;
	if (Array.isArray(cols) && cols.length > 0 && allEqual(cols)) return true;
	if (Array.isArray(cross) && cross.length > 0 && allEqual(cross))
		return true;

	return false;
};

const getRowArray = (arr, startPos, index, chunk) => {
	let data = [...arr[index].slice(startPos, chunk)];
	if (data.length < chunk) return [];
	return data;
};

const getDiagonalArray = (arr, startRow, startColumn) => {
	let data = [];

	try {
		if (
			arr[startRow][startColumn] === undefined ||
			arr[startRow + 1][startColumn + 1] === undefined ||
			arr[startRow + 2][startColumn + 2] === undefined ||
			arr[startRow + 3][startColumn + 3] === undefined
		)
			return data;
	} catch (e) {
		return data;
	}

	data.push(arr[startRow][startColumn]);
	data.push(arr[startRow + 1][startColumn + 1]);
	data.push(arr[startRow + 2][startColumn + 2]);
	data.push(arr[startRow + 3][startColumn + 3]);
	return data;
};

const getColumnArray = (arr, startRow, startColumn) => {
	let data = [];
	try {
		if (
			arr[startRow][startColumn] === undefined ||
			arr[startRow + 1][startColumn] === undefined ||
			arr[startRow + 2][startColumn] === undefined ||
			arr[startRow + 3][startColumn] === undefined
		)
			return data;
	} catch (e) {
		return data;
	}

	data.push(arr[startRow][startColumn]);
	data.push(arr[startRow + 1][startColumn]);
	data.push(arr[startRow + 2][startColumn]);
	data.push(arr[startRow + 3][startColumn]);
	return data;
};

const isMutant = (arr) => {
	if (!Array.isArray(arr)) return false;
	data = initializeMutantArray(arr);
	let N = data.length;
	let chunk = 4;

	// console.log(data);

	for (let i = 0; i < N; i++) {
		let M = data[i].length;
		for (let j = 0; j < M; j++) {
			const rows = getRowArray(arr, j, i, chunk);
			const cols = getColumnArray(data, i, j);
			const diagonals = getDiagonalArray(arr, i, j);
			if (isAnyMutant(rows, cols, diagonals)) {
				return true;
			}
		}
	}

	return false;
};

let dna = ["TTGCGA", "CAGTGC", "TTATGT", "AGAAAG", "CCCCTA", "TCACTG"];
console.log(isMutant(dna) ? "Es mutante" : "No es mutante");

dna = ["ATGCAA", "CAGTGC", "TTATGT", "AGATGG", "CCCATA", "TCACTG"];
console.log(isMutant(dna) ? "Es mutante" : "No es mutante");
