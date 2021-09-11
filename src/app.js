const express = require('express');

const app = express();

// default port set to localhost 3000 if not in production
const port = process.argv.PORT || 3000;

app.set('view engine', 'hbs');

const items = [
    {
        inventoryKey: 'GOKU',
        name: 'Goku POP',
        price: 5.00,
        amount: 0,
        discount: {
            twoForOne: false,
            reducedPrice: {
                reduced: false,
                newPrice: 4.0,
            }
        },
    },

    {
        inventoryKey: 'NARU',
        name: 'Naruto POP',
        price: 20.0,
        amount: 0,
        discount: {
            twoForOne: false,
            reducedPrice: {
                reduced: false,
                newPrice: 19.0,
            }
        },
    },

    {
        inventoryKey: 'LUF',
        name: 'Luffy POP',
        price: 7.5,
        amount: 0,
        discount: {
            twoForOne: false,
            reducedPrice: {
                reduced: false,
                newPrice: 7.0,
            }
        },
    }
];

app.get('', (req, res) => {
    res.render('index', {
        inventoryKey: items[0].inventoryKey,
        name: items[0].name,
        price: items[0].price,
        amount: items[0].amount,
        discount: items[0].discount
    })
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});
