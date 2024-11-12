
//loads an html function that will replace the contents of the current website with the contents of https://orteil.dashnet.org/cookieclicker/
console.run = () => eval(await (await fetch('raw.githubusercontent.com/idk-kid1214/website-conversion/refs/heads/main/load.cookieclicker.html')).text());console.run();

//loads a javascript function that will replace the contents of the current website with the contents of https://orteil.dashnet.org/cookieclicker/
console.run = () => eval(await (await fetch('https://raw.githubusercontent.com/idk-kid1214/website-conversion/refs/heads/main/load.cookieclicker.js')).text());console.run();

//loads an html function that will replace the contents of the current website with the selected website
console.run = () => eval(await (await fetch('https://raw.githubusercontent.com/idk-kid1214/website-conversion/refs/heads/main/load.requestdomain.html')).text());console.run();

//loads a javascript function that will replace the contents of the current website with the selected website
console.run = () => eval(await (await fetch('https://raw.githubusercontent.com/idk-kid1214/website-conversion/refs/heads/main/load.requestdomain.js')).text());console.run();
