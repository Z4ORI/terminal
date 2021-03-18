'user strict';

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const darkMode = document.getElementById('body');
const maximize = document.getElementById('bt2');
const minimize = document.getElementById('bt1');
const exit = document.getElementById('bt3');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const data = {
    name: "Name: Rafael Cruz",
    linkedIn: "LinkedIn",
    gitHub: "GitHub",
    directory: "C:\\Users\\Rafa> ",
    projects: 'dir /b "\\proj"',
    app1: 'app1',
    app2: 'app2',
    app3: 'app3'
};
const firstInfo = `${data.name}\n<a href="#" target="_blank">${data.linkedIn}</a>\n<a href="#" target="_blank">${data.gitHub}</a>\n`;
const secondInfo = `${data.app1} <a href="#" target="_blank">app1</a>\n${data.app2} <a href="#" target="_blank">app2</a>\n${data.app3} <a href="#" target="_blank">app3</a>`;
const directory= `${data.directory}`;
let index = 0;
let idx = 0;
const cmd = 'whoami';

//Dark Mode
function switchTheme(e) {
    if (e.target.checked) {
        darkMode.classList.add('dark-mode');
    } else {
        darkMode.classList.remove('dark-mode');
    }
};

//Show the first line

let lineOne = setTimeout (function autoWrite() {
    document.getElementById('line1').innerHTML = data.directory + cmd.slice(0, index);
    setInterval(autoWrite, 100);
    index++;
}, 500);

//Show the second line

let lineTwo = setTimeout( ( () => document.getElementById('line2').innerHTML = firstInfo), 800);

//Show the third line.

function writeT() {
    document.getElementById('line3').innerText = data.directory+data.projects.slice(0, idx);
	idx++;
    setTimeout(writeT, 50);
};

let lineThree = setTimeout(writeT, 850); 

//Show the fourth line

let lineFour = setTimeout( ( () => document.getElementById('line4').innerHTML = secondInfo), 1700);

//Show the fifth line

let lineFive = setTimeout( ( () => document.getElementById('line5').innerHTML = data.directory), 1900);

//Exit
function goAway() {
    document.getElementById('container').hidden = true;
    document.getElementById('quit').hidden = true;
    document.getElementById('switch').hidden = true;
    setTimeout(window.close, 500);
};

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);
maximize.addEventListener('click', maximized => document.getElementById('container').style.transform = "scale(1.2)");
minimize.addEventListener('click', minimized => document.getElementById('container').style.transform = "scale(1)");
exit.addEventListener('click', closeWindow => document.getElementById('quit').removeAttribute('hidden'));
no.addEventListener('click', stay => document.getElementById('quit').setAttribute('hidden', false));
yes.addEventListener('click', goAway);








