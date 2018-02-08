//const MongoClient = require('mongodb').MongoClient;
//const MongoClient = require('mongodb').ObjectID;
//意義同上方程式
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();//取得目前系統的ObjectID
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{//TodoApp是這次的Collection名稱
    if(err){
        return console.log('Unable to connect to MongoDB server');//return 是為了讓err發生時不會繼續往下跑
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server'); 

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complete: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Nora',
        age: 63,
        location: 'Taipei'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));

        console.log(result.ops[0]._id.getTimestamp());//_id中有包含Timestamp資訊
    });


    client.close();
});