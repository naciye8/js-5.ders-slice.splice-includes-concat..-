const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
  ];
  
  const inventors = [
    ["Albert Einstein", 1879],
    ["Isaac Newton", 1643],
    ["Galileo Galilei", 1564],
    ["Marie Curie"], // 1867
    ["Johannes Kepler", 1571],
    ["Nicolaus Copernicus", 1473],
    ["Max Planck", 1858],
    ["Katherine Blodgett"], // 1898
    ["Ada Lovelace", 1815],
    ["Sarah E. Goode", 1855],
    ["Lise Meitner", 1878],
    ["Hanna Hammarström", 1729],
  ]; // 1829
  
  const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "pogostick",
  ];
  
  /*console.log(data)
  console.log(data.length)
  console.log(data[14])
  console.log(data[data.length-1])
  console.log(data[Math.round(data.length/2)])*/
  /*
  console.log(inventors[0][1])
  console.log(inventors[1][1])
  ​
  inventors[1] = ["Farabi", 1643]
  console.log(inventors[3])
  inventors[3][1]=1867
  ​
  inventors[inventors.length-1][1] = 1829
  console.log(inventors)*/
  
  let stringVal =
    "build with Visual Studio Code, anywhere, anytime, entirely in your browser";
  console.log(stringVal.length)
  
    let newArray = stringVal.split("")
    console.log(newArray.length);
    
    let newString = newArray.join();
    //console.log(newString)
    
    newString = newArray.join(" ");
    //console.log(newString)
    
    newString = newArray.join(" ### ");
    //console.log(newString)
  
    // büyükharf ve sonuna nokta
  
    newString = stringVal.split("")[0].toUpperCase()
    //console.log(newString)
  
  
    newArray = stringVal.split("");
    newArray[newArray.length] = "...";
    newArray[0] = newArray[0].toUpperCase();
  
    //newString = newArray.toString()  // virgül ile birleştirir
    newString = newArray.join("")
    console.log(newString)
  

    
    function stringToUpperCase(strParam) {
        // let firstLetter = strParam.split("")[0].toUpperCase()
        // let lasLetter = strParam.split("")[strParam.length-1]
  
        let newArray = strParam.split("");
        newArray[newArray.length] = "...";
        newArray[0] = newArray[0].toUpperCase();
        let newString = newArray.join("");
        //return newArray.join("");
        return newString;
      }
    let soru = "galiba return kullanmamıza izin vermiyor bu kullanım şeklinde değil mi hocam"
  
  //console.log(stringToUpperCase(stringVal))
  //console.log(stringToUpperCase(soru))

//concat methodu
  const firstList=[1,2,3];
  const secondList=[4,5,6];
  const thirdlist=firstList.concat(secondList);
  console.log(thirdlist)

  //push methodu (mevcut arrayin sonuna ekleme yapiyor)

  secondList.push(7,8,'mer')//seklinde arrttirilabilir istedigimiz kadar//
  console.log(secondList)

  //pop methodu (sondan teker teker siliyor)

  secondList.pop()
  console.log(secondList)


  //idexOf (bir elementin index numarasini veriyot)
   let indexNumber=secondList.indexOf("mer")//mer ogesinin index numarsini ogrenme
   console.log(indexNumber)
   secondList[-1]=8


   let lastIndexNumber=data.lastIndexOf("car");
   console.log(lastIndexNumber)

//includes 
console.log(data.includes("truck"));//true
console.log(data.includes("truk"));//false

const numbers=[1,2,3,4,5,6,7,8,9,0];
// let yeniNumbers=numbers.slice(1,3)
// console.log(yeniNumbers)
// yeniNumbers=numbers.slice(5)//verdigin numaradan sonrasini aliyor . hic birsey vermezsek hepsini aliyor
// console.log(yeniNumbers)






//yeniNumbers=numbers.splice(1,3)
/*yeniNumbers=numbers.splice(3,4,22,33,44)
console.log(yeniNumbers)
console.log(numbers)


let firstItems=[1,2,3]
let secondItems=[4,5,6]
//let thirdItems=[firstItems]// [[1,2,3]] array icerisinde[[]]
//let thirdItems=[...firstItems]// [1,2,3] arraysiz[]
let thirdItems=[...firstItems, ...secondItems,...firstItems];//[1,2,3,4,5,6,1,2,3]
//console.log(thirdItems)

firstItems.shift()
console.log(firstItems);

firstItems.unshift(-1)
console.log(firstItems)

let var1=firstItems.unshift(-1)
console.log(var1)

let val="  naciye       "
console.log(val.trim()) //yapilan bosluklari kaldirir


thirdItems.push('c','f','k')
let sorted=thirdItems.sort()
console.log(sorted)
console.log(thirdItems)*/


//bir fonksiyon parametre olaran array alacak icerisinde hoslanmadigimiz bir terim/eleman olursa cikarip, arrayi bize geri verecek.


function filterMenu(menu,value) {
    if(menu.includes(value)){
        let indexNum=menu.indexOf(value); //4
        menu.splice(indexNum,1,) //4 numara(brokoli) dan baslayarak bir oge sil.
        //filterMenu(menu,value) butun brokolileri silmek icin
        return menu;
    }
}

let menuList=["corba","pacanga","lahmacun","patlican","brokoli","brokoli","kofte","kunefe","sutlac"];
let istenmeyen="brokoli"
let filtredMenu = filterMenu(menuList,istenmeyen)
console.log(filtredMenu);





