
var ptp = [
	{ name: 'A', value: 429},
	{ name: 'B', value: 880},
	{ name: 'C', value: 771},
	{ name: 'D', value: 527},
	{ name: 'E', value: 186},
	{ name: 'F', value: 312},
	{ name: 'G', value: 474},
	{ name: 'H', value: 593},
	{ name: 'I', value: 49},
	{ name: 'J', value: 273},
	{ name: 'K', value: 327},
	{ name: 'L', value: 437},
	{ name: 'M', value: 958},
	{ name: 'N', value: 186},
	{ name: 'O', value: 171},
	{ name: 'P', value: 481},
	{ name: 'Q', value: 24},
	{ name: 'R', value: 571},
	{ name: 'S', value: 876}, 
	{ name: 'T', value: 338},
	{ name: 'U', value: 27},
	{ name: 'V', value: 162},
	{ name: 'W', value: 528},
	{ name: 'X', value: 1},
	{ name: 'Y', value: 43},
	{ name: 'Z', value: 61}
];

var sortedPTP = ptp.sort(function(a, b){
	return a.value - b.value;
});

sortedPTP.reverse();

var t = ptp.map(function(x){
	return x.value;
})

var total = t.reduce(function(a, b) {
	return a + b;
},1);


var recruiters = [
	{name:'Recruiter 1', value:0, letters:[]},
	{name:'Recruiter 2', value:0, letters:[]},
	{name:'Recruiter 3', value:0, letters:[]},
	{name:'Recruiter 4', value:0, letters:[]}
]


console.log(total);
console.log(total/recruiters.length);


	var i = -1;
	var extra = [];

function assignLetter(letter){
	var val = letter.value;
	for (var r in recruiters){
		if ((recruiters[r].value + letter.value) <= total/recruiters.length){
			recruiters[r].value += val;
			recruiters[r].letters.push(letter);
			return true;
		}
	}
}

function sortLet(letters){

	i++;
	if (letters.length == 0) return;

	var first = letters.shift();
	//var last = letters.pop();
	var left = letters;

	console.log("%s : %d : %d\%", first.name, first.value, (first.value/total) * 100);
	//console.log("%s : %d : %d\%", last.name, last.value, (last.value/total) * 100);

	if (!assignLetter(first)) extra.push(first);
	//if (!assignLetter(last)) extra.push(last);

	sortLet(left);
		
}

sortLet(ptp);

for (var r in recruiters){
	console.group('%s', recruiters[r].name);
		console.log(recruiters[r].value);
		console.log("%.2f", recruiters[r].value/total * 100);
		recruiters[r].letters.sort(function(a,b){
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
		var letts = recruiters[r].letters.map(function(x){return x.name}).join(', ');
			console.log(letts)
	console.groupEnd();
}

console.log(extra.map(function(x){return x.name + ": " + x.value}).join(', '));

