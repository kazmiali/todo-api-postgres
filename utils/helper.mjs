export function convertStringToBool(myValue) {
	if (myValue !== 'false' && myValue !== 'true') return true;

	const isTrueSet = String(myValue).toLowerCase() === 'true';

	console.log('isTrueSet', isTrueSet);
	return isTrueSet;
}
