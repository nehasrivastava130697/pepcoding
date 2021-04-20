let obj ={
    name:"Neha",
    age:"23",
    address:{
        city:"Gurgaon",state:"Haryana"
    },
    friends:["pooja","aarti","nidhi","rinshu","roopa"],
    sayHi: function fn()
    {
        console.log("hello");
        return "How are you?";
    }
}
// console.log(obj.sayHi());
// console.log(obj['address']);
// console.log(obj['friends'].slice(1,3));

let karr = Object.keys(obj);
console.log(karr); //returns array of keys
for(let key in obj)
{
    console.log(key);//prints keys one by one
}
for(let key in obj)
{
    console.log(obj[key]);//prints values one by one
}
for(let i = 0;i<karr.length;i++)
{
    console.log(obj[karr[i]]);//prints values one by one     
}