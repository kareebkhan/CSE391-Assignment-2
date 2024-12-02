function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = document.getElementById('quote');
            quote.innerText = data.content;
        })
        .catch(error => {
            console.error('Error fetching random quote:', error);
        });
}



function changeColors(color) {
    const quoteContainer = document.getElementById('inner_q');
    const quote = document.getElementById('quote');

    quoteContainer.style.backgroundColor =  color;
    quote.style.color = 'white';
    quoteContainer.style.borderColor = color;

}

document.addEventListener('DOMContentLoaded', function () {
    getRandomQuote();

    document.getElementById('c1').addEventListener('click', () => {
        changeColors('#034c0d');
        getRandomQuote();
    });
    document.getElementById('c2').addEventListener('click', () => {
        changeColors('#bd0707');
        getRandomQuote();
    });
    document.getElementById('c3').addEventListener('click', () => {
        changeColors('rgb(255, 102, 0)');
        getRandomQuote();
    });
    document.getElementById('c4').addEventListener('click', () => {
        changeColors('#000000');
        getRandomQuote();
    });
});
function convert() {
    const weightInput = document.getElementById('weight');
    const conversionType = document.getElementById('conversionType').value;
    const resultParagraph = document.getElementById('result');
    const weight = parseFloat(weightInput.value);

    let convertedWeight = 0;

    if (conversionType === 'kgToLbs') {
        convertedWeight = weight * 2.20462; 
        resultParagraph.innerText = `${weight} kilograms is equal to ${convertedWeight.toFixed(4)} pounds.`; 
    } else if (conversionType === 'lbsToKg') {
        convertedWeight = weight / 2.20462; 
        resultParagraph.innerText = `${weight} pounds is equal to ${convertedWeight.toFixed(4)} kilograms.`; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const numbersInput = document.getElementById('numbers');

    numbersInput.addEventListener('input', calculate);

    function calculate() {
        const input = numbersInput.value;
        const numbers = input.split(',').map(Number);

        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        const reverse = [...numbers].reverse().join(', ');

        document.getElementById('max').innerText = `Max: ${max}`;
        document.getElementById('min').innerText = `Min: ${min}`;
        document.getElementById('sum').innerText = `Sum: ${sum}`;
        document.getElementById('average').innerText = `Average: ${average.toFixed(2)}`;
        document.getElementById('reverse').innerText = `Reverse Order: ${reverse}`;
    }

});
document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('textArea');
    const clearBtn = document.getElementById('clearBtn');
    const capitalizeBtn = document.getElementById('capitalizeBtn');
    const sortBtn = document.getElementById('sortBtn');
    const reverseBtn = document.getElementById('reverseBtn');
    let stripBlankBtn = document.getElementById('stripBlankBtn');
    const addNumbersBtn = document.getElementById('addNumbersBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');

    clearBtn.addEventListener('click', () => {
        textArea.value = '';
    });

    capitalizeBtn.addEventListener('click', () => {
        const lines = textArea.value.split('\n');
        const capitalizedLines = lines.map(line => {
            return line.toLowerCase() === line ? line.toUpperCase() : line.toLowerCase();
        });
        textArea.value = capitalizedLines.join('\n');
    });

    sortBtn.addEventListener('click', () => {
        const lines = textArea.value.split('\n');
        textArea.value = lines.sort().join('\n');
    });

    reverseBtn.addEventListener('click', () => {
        const lines = textArea.value.split('\n');
        textArea.value = lines.reverse().join('\n');
    });
    
    stripBlankBtn.addEventListener('click', () => {
        lines = textArea.value.split('\n').filter(line => line.trim() !== '');
        textArea.value = lines.join('\n');
        lines = textArea.value.split('\n').map(line => line.trim()); 
        textArea.value = lines.join('\n');
    });

    addNumbersBtn.addEventListener('click', () => {
        const lines = textArea.value.split('\n');
        textArea.value = lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    });

    shuffleBtn.addEventListener('click', () => {
        const lines = textArea.value.split('\n');
        for (let i = lines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lines[i], lines[j]] = [lines[j], lines[i]];
        }
        textArea.value = lines.join('\n');
    });
});