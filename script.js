function firstWord(s) {
    if (!s) return '';

 
    if (!s.includes(' ')) 
		return s;


    return s.slice(0, s.indexOf(' '));
}



// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
