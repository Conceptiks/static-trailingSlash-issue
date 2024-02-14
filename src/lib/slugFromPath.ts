export const slugFromPath = (path: string) => {
	const substring = path.substring(path.indexOf('/content/') + 9);
	return substring;
};
