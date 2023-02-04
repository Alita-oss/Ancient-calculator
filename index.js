window.onload = function() {
    console.log('Hello')
    const mainOptionsList = [
        {   
            name: 'palec',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 0.0254 * baseUnit;
            },
        },
        {
            name: 'loket',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 0.59 * baseUnit;
            },
        },
        {
            name: 'hon',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 1.25 * baseUnit;
            },
        },
        {
            name: 'sud',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 244 * baseUnit;
            },
        },
        {
            name: 'číška',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 1.45 * baseUnit;
            },
        },
        {
            name: 'vědro',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 56.6 * baseUnit;
            },
        },
        {
            name: 'máz',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 1.91 * baseUnit;
            },
        },
        {
            name: 'míle',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 1610 * baseUnit;
            },
        },
        {
            name: 'feet',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 30.48 * baseUnit;
            },
        },
        {
            name: 'yard',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 0.914 * baseUnit;
            },
        },     
    ];

    const modernOptions = {
        milimetr: 1000,
        centimetr: 100,
        metr: 1,
        kilometr: 0.001,
        mililitr: 1000,
        centilitr: 100,
        decilitr: 10,
        litr: 1,
        hektolitr: 0.01,
        centimetr_krychlový: 1000000,
        decimetr_krychlový: 1000,
        metr_krychlový: 1,
    };
    
    const numberInput = document.getElementById('numberInput');

    const onInput = (event) => {
        const userInput = event.target.value;
        const baseIndex = mainOptionsList.findIndex((x) => x.name == 'míle');

        for (const [key, value] of Object.entries(modernOptions)) {
            const result = document.getElementById(key);
            result.innerHTML = mainOptionsList[baseIndex].equation(userInput, value);
        }
    };

    const optionsFactory = (showAll = false) => {
        const baseIndex = mainOptionsList.findIndex((x) => x.name == 'míle');

        for (const [key, value] of Object.entries(modernOptions)) {
            const div = document.createElement('div');
            div.classList.add('content-box-row');

            const name = document.createElement('p');
            name.classList.add('content-box-number');
            name.innerHTML = key;

            const result = document.createElement('p');
            result.id = key;
            result.classList.add('content-box-row-color');
            result.innerHTML = mainOptionsList[baseIndex].equation(1, value);

            div.append(name, result);

            const parent = document.getElementById('optionsBox');
            parent.append(div);
        }      
    };

    optionsFactory();

    numberInput.addEventListener('input', onInput, false);
};