const pr = new Promise(resolve => {
	setTimeout(() => {
		resolve(['a', 'b', 'c']);
	}, 1000);
});

const sample = async () => {
	const [a, b, c] = await pr;
	console.log({ a, b, c });
};

sample().then(() => {
	console.log('DONE!!!');
});
