var name = "bbadc";
var map = new Map();
var flag = false;
var names = name.split("");
for (item of names) {
    if (!map.has(item) === true) {
        map.set(item, 1)
    } else {
        map.set(item, map.get(item) + 1)
    }
}

//map.forEach((key)=> console.log("Your key:" +key +"  Value:" +map.get(key)) )
var temp = "";
for (const [key, value] of [...map.entries()].sort()) {
   temp=temp+key+value;
}
console.log(temp);


// var stringDemo="Mahadev S, Kammar";
// var stringDemoSplit=stringDemo.split(",");
// for(item of stringDemoSplit){
//     console.log(item);
// }


// var demoMap=new Map();
// demoMap.set(1,"Mahdev");
// demoMap.set(2,"omkar");
// for (const [key, value] of demoMap) {
//    console.log("Key:" +key +" Value:" +value);
//  }