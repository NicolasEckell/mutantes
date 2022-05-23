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

	// console.log(data);

	for (let i = 0; i < N; i++) {
		let M = data[i].length;
		for (let j = 0; j < M; j++) {
			const rows = getRowArray(data, j, i, chunk);
			const cols = getColumnArray(data, i, j, chunk);
			const diagonals = getDiagonalArray(data, i, j, chunk);
			if (isAnyMutant(rows, cols, diagonals)) {
				return true;
			}
		}
	}

	return false;
};

let dna = ["TTGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCACTA", "TCACTG"];
console.log(isMutant(dna) ? "Es mutante" : "No es mutante");

dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAAG", "CCACTA", "TCACTG"];
console.log(isMutant(dna) ? "Es mutante" : "No es mutante");

dna = ["TTGCGT", "CAGTGT", "TTATGA", "AGAAAT", "CCACTA", "TCTTTT"];
console.log(isMutant(dna) ? "Es mutante" : "No es mutante");

dna = ["ATGCAA", "CAGTGC", "TTATGT", "AGATGG", "CCCATA", "TCACTG"];
console.log(isMutant(dna) ? "Es mutante" : "No es mutante");
