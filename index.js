window.onload = function() {
    const mainOptionsList = [
        {   
            name: 'palec',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 0.1 * baseUnit;
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
                return amount * 125 * baseUnit;
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
                return amount * 0.3048 * baseUnit;
            },
        },
        {
            name: 'yard',
            equation: (amount = 1, baseUnit = 1) => {
                return amount * 0.914 * baseUnit;
            },
        },     
    ];

    const modernOptionsLength = {
        milimetr: 1000,
        centimetr: 100,
        metr: 1,
        kilometr: 0.001,
    };

    const modernOptionsVolume = {
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
    let activeLengthUnit = 'palec';
    const ancientLengthInput = document.getElementById('ancientLengthInput');
    let userLengthInput = 1.0;

    const updateModernOptions = () => {
        const baseIndex = mainOptionsList.findIndex((x) => x.name == activeLengthUnit);

        for (const [key, value] of Object.entries(modernOptionsLength)) {
            const result = document.getElementById(key);
            result.innerHTML = mainOptionsList[baseIndex].equation(userLengthInput, value);
        }
    };

    const onInput = (event) => {
        const userInput = event.target.value;
        userLengthInput = userInput;
        updateModernOptions();
    };

    const ancientLengthClick = (event) => {
        const id = event.target.id;
        updateAncientLengthUnit(id);
        updateModernOptions();
    };

    const updateAncientLengthUnit = (newUnit) => {
        activeLengthUnit = newUnit;
        ancientLengthInput.value = newUnit;
    };

    const optionsFactory = (showAll = false) => {
        updateAncientLengthUnit('palec');
        const baseIndex = mainOptionsList.findIndex((x) => x.name == activeLengthUnit);
        const ancientLengthList = document.getElementById('ancientLengthOptions');


        // Builds initial modern options
        for (const [key, value] of Object.entries(modernOptionsLength)) {
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
        
        // Builds ancient options for select
        ['palec', 'loket', 'hon'].forEach((lengthUnit) => {
            const li = document.createElement('li');
            li.id = lengthUnit;
            li.innerHTML = lengthUnit;
            li.classList.add('ancient-options');
            li.addEventListener('click', ancientLengthClick, false);
            ancientLengthList.append(li);
        });
    };

    optionsFactory();

    numberInput.addEventListener('input', onInput, false);
};