export const pipeChecker = (
	element: string,
	x: number,
	y: number,
	index: number,
	currentLevel: number,
	map: string
) => {
	if (x === 0 && y !== 0 && ['┓', '┛', '┳', '┫', '┻', '━', '╸'].includes(element)) {
		return true;
	}
	if (y === 0 && ['┗', '┛', '┣', '┫', '┻', '┃', '╹'].includes(element)) {
		return true;
	}
	if (y !== 0 && map[index + 1] === '\n' && ['┗', '┏', '┣', '┳', '┻', '━', '╺'].includes(element)) {
		return true;
	}
	if (
		((y === 7 && currentLevel === 1) ||
			(y === 19 && currentLevel === 2) ||
			(y === 49 && currentLevel === 3)) &&
		['┓', '┏', '┣', '┳', '┫', '┃', '╻'].includes(element)
	) {
		return true;
	}
	if (
		(map[index + 1] === '╋' && !['┗', '┏', '┣', '┳', '┻', '━', '╺'].includes(element)) ||
		(map[index - 1] === '╋' && !['┓', '┛', '┻', '┳', '┫', '━', '╸'].includes(element)) ||
		(currentLevel === 1 && map[index + 9] === '╋' && !['┓', '┏', '┳', '┣', '┫', '┃', '╻'].includes(element)) ||
		(currentLevel === 1 && map[index - 9] === '╋' && !['┗', '┛', '┻', '┣', '┫', '┃', '╹'].includes(element)) ||
    (currentLevel === 2 && map[index + 24] === '╋' && !['┗', '┏', '┣', '┳', '┻', '━', '╺'].includes(element)) ||
		(currentLevel === 2 && map[index - 24] === '╋' && !['┓', '┛', '┻', '┳', '┫', '━', '╸'].includes(element)) ||
    (currentLevel === 3 && map[index + 50] === '╋' && !['┓', '┏', '┳', '┣', '┫', '┃', '╻'].includes(element)) ||
		(currentLevel === 3 && map[index - 50] === '╋' && !['┗', '┛', '┻', '┣', '┫', '┃', '╹'].includes(element))
	) {
		return true;
	}
  if(
    (element === '╸' && !['╋', '━', '┳', '┣', '┻'].includes(map[index - 1])) ||
    (element === '╺' && !['╋', '━', '┳', '┫', '┻'].includes(map[index + 1])) ||
    (element === '╻' && !['╋', '┃', '┣', '┫', '┳'].includes(map[index - 9])) ||
    (element === '╹' && !['╋', '━', '┳', '┣', '┻'].includes(map[index + 9])) 
  ){
    return true;
  }
  else 
  {
		return false;
	}
};
