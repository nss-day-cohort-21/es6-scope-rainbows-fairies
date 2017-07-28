let fruit = "apple";

if (true){
	let fruit = "pear";
	let name = "brenda";
	console.log("fruit", fruit);
}

{
	var rainbow = {};
	var trolls = {};
	var weather = {};
}

{
	let colors= ["red", "blue", "green"];

	// var rainbow = {};

	rainbow.getRainbowColors = () => {
		return colors;
	}

	rainbow.addColors = (whichone) => {
		colors.push(whichone);
	}

	console.log("colors inside", colors);

	// var troll = {};
}


////// new page
{
	rainbow.addFairies = (who) => {
		console.log("fairies", who);
	}

	rainbow.pullColors = () => {
		return colors;
	}
}

//////////////new page


{
	// var weather = {};
	let weatherKinds = ["snow", "bad", "rain", "sunny"];

	weather.getWeatherKinds = () => {
		return weatherKinds;
	}

	weather.addKind = (whatkind) => {
		weatherKinds.push(whatkind);
	}

}




