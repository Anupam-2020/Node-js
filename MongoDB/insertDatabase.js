const dbConnect = require('./mangodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert([
        { name: 'note 5', brand: 'Vivo', categoty: 'smart phone'},
        {name:'max 1', brand: 'micromax', price: 200, category: 'mobile phone'}
]);
    if(result.acknowledged) {
        console.log("data inserted");
    }

    // console.log(result);
}

insert();