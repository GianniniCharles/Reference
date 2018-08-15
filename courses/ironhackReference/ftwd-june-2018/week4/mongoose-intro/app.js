const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/example-db-mongoose-intro');


const Schema   = mongoose.Schema;
const catSchema = new Schema({
  name : {type: String, unique: true},
  color: {type: String, required: true, enum: ['gray', 'black', 'white', 'spotted']},
  age  :{type:Number, default: 0},
  owners: [String], // this makes it an array of strings
  shelterID: Schema.Types.ObjectId
});

const Cat = mongoose.model('Cat', catSchema);

// forEach over all the cats and print their names
// Cat.find()
// .then((allTheCats)=>{
//     allTheCats.forEach((cat)=>{
//         console.log(cat.name);
//     })
// });


//find all cats who have an age registered in the DB

// Cat.find({age: {$exists: true}})
// .then((allTheCats)=>{
//     console.log(allTheCats);
// });


// Cat.findById("5b3e3561cd43148094a5c8f5")
// .then((theCat)=>{
//     console.log(theCat);
// })
// .catch((err)=>{
//     console.log(err);
// })





// this creates a document in the cats collection

//this one doesnt work because hello is not a number
// const blah = new Cat({
//     name: "unChillCat",
//     color: 'blue',
//     age: "hello"
// });


// this one works because all values are correct types
// const other = new Cat({
//     name: "unChillCat",
//     color: 'blue',
//     age: 7
// });


// this saves the document to the database

// blah.save()
// .then((response) => {
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// });


// this will create and save the new cat all in one function without having to call .save() afterward
// Cat.create({name: 'fatCat', color: 'gray', age: 2})
// .then((theCat)=>{

// })
// .catch((theError)=>{

// })





// this is a preview for using mongoose in the routes of an express app
// app.get('/cats-with-ages', (req, res, next)=>{
// Cat.find({age: {$exists: true}})
// .then((catsWithAges)=>{

//     res.render('catsPage', {catsWithAges});
// });
// })


// Cat.findByIdAndUpdate("5b3e319107d6337f99c49e06", {
//     age: 1,
//     color: "spotted"
// })
// .then((response)=>{
//     console.log("yeah! it worked!")
        // console.log(response);
// })
// .catch((err)=>{
//     console.log("no! it didnt work")
// })



// Cat.updateOne({name: "Demetrius"}  , {
//     age: 2,
//     color: "gray"
// })
// .then((theCat)=>{
//     console.log("it worked")
//     console.log(theCat);
// })
// .catch((err)=>{
//     console.log(err);
// })




// Cat.updateMany({age: {$exists: false}},  {
//     age: 2,
//     color: 'spotted'
// })
// .then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log(err);
// })



// Cat.deleteOne({name: 'fatCat'})
// .then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Cat.findByIdAndRemove("5b3e4264956f9184802bad6b")
// .then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log(err);
// })


Cat.deleteMany({color: {$exists: false}})
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log(err);
})


