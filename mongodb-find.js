const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{//TodoApp是這次的Collection名稱
    if(err){
        return console.log('Unable to connect to MongoDB server');//return 是為了讓err發生時不會繼續往下跑
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server'); 

    //find查詢全部
    db.collection('Todos').find().toArray().then((docs)=>{
        console.log('[Todos]');
        console.log(JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });

    //find加上查詢條件
    db.collection('Todos').find({complete:false}).toArray().then((docs)=>{
        console.log('[Not Complete]');
        console.log(JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });

    //find查詢特定_id
    db.collection('Todos').find({
        _id:new ObjectID('5a7a8ae93c8ca861e067872e') //_id不是字串，是ObjectID
    }).toArray().then((docs)=>{
        console.log('[_id:5a7a8ae93c8ca861e067872e]');
        console.log(JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });

    //find查詢出的筆數
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Total count: ${count}`);
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });


    db.collection('Users').find({location:'Taipei'}).toArray().then((docs)=>{
        console.log('[Users in Taipei]');
        console.log(JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });



    //client.close();
});