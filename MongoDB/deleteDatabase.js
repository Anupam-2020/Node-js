const dbConnect = require('./mangodb');


const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany({name: 'note 57'});
    console.log(result);
    if(result.acknowledged) {
        console.log("record deleted")
    }
}

deleteData();