const {provider} = require ('../../datBase');

module.exports = async (req, res) => {
    try {
        const {city, metres, street, price} = req.body;
        const query = `INSERT INTO houses(square, city, street, price) VALUES(?, ?, ?, ?)`;

        await provider.promise().query(query, [city, metres, street, price]);

        res.redirect('houses');
    } 
    catch (e) {
        res.json(e.message);
    }
};
