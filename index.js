window.onload = function() {
    console.log('Hello')
    const mainOptionsList = [
        { 
            name: 'palec',
            equation: (amount = 1, metry = 1) => {
                return amount * 0.0254 * metry;
            },
        }
    ];

    const modernOptions = {
        milimetr: 1000,
        centimetr: 100,
        metr: 1,
        kilometr: 0.001,
    };
    

    const optionsFactory = (showAll = false) => {
    // for (let i = 0; i == 4; i++) {

    // }

        for (const [key, value] of Object.entries(modernOptions)) {
            const div = document.createElement('div');
            div.classList.add('content-box-row');

            const name = document.createElement('p');
            name.classList.add('content-box-number');
            name.innerHTML = key;

            const result = document.createElement('p');
            result.classList.add('content-box-row-color');
            result.innerHTML = mainOptionsList[0].equation(1, value);

            div.append(name, result);

            const parent = document.getElementById('optionsBox');
            parent.append(div);
        }

        
    };

    optionsFactory();
};