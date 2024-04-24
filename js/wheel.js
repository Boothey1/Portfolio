var legends = ["Bangalore", "Fuse", "Ash", "Mad Maggie", "Ballistic", "Pathfinder", "Wraith", "Octane", "Revenant", "Horizon", "Valkyrie", "Bloodhound", "Crypto", "Seer", "Vantage", "Catalyst", "Caustic", "Rampart", "Wattson", "Conduit", "Gibraltar", "Lifeline", "Loba", "Mirage", "Newcastle"];

let wheel = document.getElementById('picker');
let spinning = false;

// Dynamically generate legend names and set rotation
legends.forEach((legend, index) => {
    let nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = legend;
    nameElement.style.transform = `rotate(${(360 / legends.length) * index}deg) translateY(-150px) rotate(${-(360 / legends.length) * index}deg)`;
    wheel.appendChild(nameElement);
});

function spinWheel() {
    if (!spinning) {
        spinning = true;
        let randomAngle = Math.floor(Math.random() * 360) + 1440;
        wheel.style.transform = `rotate(${randomAngle}deg)`;
        setTimeout(() => {
            spinning = false;
            updateSelectedLegend();
        }, 3000);
    }
}

function updateSelectedLegend() {
    let names = document.getElementsByClassName('name');
    let angle = 360 - (parseInt(wheel.style.transform.split('(')[1]) % 360);
    let selectedLegendIndex = Math.floor((angle % 360) / (360 / legends.length));
    alert("Selected Legend: " + legends[selectedLegendIndex]);
}
