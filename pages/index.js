import { parseString } from "../javaScripts/parseString";

const Home = () => {
	return (
		<div className="w-screen h-screen">
			<Game />
		</div>
	);
};

export default Home;

const Game = (props) => {
	const mainText = parseString(
		"the quick brown fox jumps over the lazy dog",
		2
	);
	console.log(mainText);
	return (
		<div className="w-full h-full flex flex-col">
			<div className="h-full w-full bg-slate-500 p-4">{}</div>
		</div>
	);
};
