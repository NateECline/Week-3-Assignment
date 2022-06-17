//Question 1:
var ages=[3,9,23,64,2,8,28,93]
function aaaa(ages){
    var ages2 = [...ages]
    return ages2.pop()-ages2.shift()
} console.log(aaaa(ages))

function whyyy(ages){
    ages.push(72)
    return ages.pop()-ages.shift()
} console.log(whyyy(ages))

var avg = ages.reduce(
    (previousValue, currentValue) => previousValue + currentValue
    )/ages.length
    console.log(avg)

//Question 2:
var names=['Sam','Tommy','Tim','Sally','Buck','Bob']
var sum=names.reduce((previousValue, currentValue) => previousValue + currentValue)
var avg2=sum.length/names.length
console.log(avg2)

var names2=names
console.log(names2.join(' '))

//Question 3: .pop()

//Question 4: .shift()

//Question 5:
var namesLength=names.map(x=>x.length)
console.log(namesLength)


//Question 6: 

console.log(namesLength.reduce((previousValue, currentValue) => previousValue + currentValue))


//Question 7:
function catty(word, n){
    return word.repeat(n)
}
console.log(catty("Hello", 3))

//Question 8:
function fullName(firstName, lastName){
    return firstName+' '+lastName
}
console.log(fullName('Katt', 'Williams'))

//Question 9:
var nummies=[50, 100]
function moreThan100(a){
    b=a.reduce((previousValue, currentValue) => previousValue + currentValue)
    if(b>100){
       return true
    }
} console.log(moreThan100(nummies))

//Question 10:
var nuggets=[1, 3, 3, 7, 1]
var nuggos = nuggets.reduce((previousValue, currentValue) => previousValue + currentValue)/nuggets.length
    console.log(nuggos)

    //Question 11:
    var cease=[2, 2]
    var hello=[3,3]
    function whyRUDoingThisToMe(iCri, iDie){
        hElP=iCri.reduce((previousValue, currentValue) => previousValue + currentValue)/iCri.length
        mE=iDie.reduce((previousValue, currentValue) => previousValue + currentValue)/iDie.length
        if(hElP>mE){
            return true
        }
    }
    console.log(whyRUDoingThisToMe(hello, cease))

    //Question 12:
    isHotOutside = true
    moneyInPocket = 10.51
    function willBuyDrink(isHotOutside, moneyInPocket){
        if(isHotOutside&&moneyInPocket>10.50){
            return true
        }
    }
    console.log(willBuyDrink(isHotOutside, moneyInPocket))

    //Question 13:
    var whyme=true
    function yES(myNamejEff){
        if(myNamejEff===true){
        return 'why are we here'
        }
    }
    console.log(yES(whyme))//The function returns a string if the argument is true. I created this function because it flows with the rest of the assigment. 