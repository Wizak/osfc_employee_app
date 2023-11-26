export const getDocUrl = (url) => {
	const src = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
	return `${src}#zoom=auto&scrollbar=0&view=FitH&toolbar=0&navpanes=0`;
};
