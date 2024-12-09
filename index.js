let school = [
    {
        name:"NBR",
        phone:"+77777777777",
        student:[
            {
                aty:"satybaldy",
                top:"24/8",
                progree:"85",
                lessons:"2"
            },
            {
                aty:"qaisar",
                top:"24/5",
                progree:"92",
                lessons:"3"
            },
            {
                aty:"meiyr",
                top:"24/8",
                progree:"89",
                lessons:"4"
            },
            {
                aty:"talgat",
                top:"24/6",
                progree:"84",
                lessons:"2"
            },
            {
                aty:"astbek",
                top:"24/8",
                progree:"90",
                lessons:"3"
            }
        ]
    }
]
console.log(school);

schoolname = prompt("zhana aty zhazynyz:")
schoolphone = prompt("zhana nomer zhazynyz:")

school.forEach(function(element){
    let su = prompt("atyn koru:")
        if(element == "aty"){
            console.log(element.name);
        }else if(element == "top"){
            console.log(element.top);
        }else if(element == "bal"){
            console.loge(element.progree*1.1);
        }
        }
)

let qos = prompt("qadai areket koru/qosu")
if(qos == "koru"){
    console.log(school);
}else if(qos == "qosu"){
    let adam = {
        ...school,
        name: prompt("atyndy zha"),
        top: prompt("top zha"),
        progree: +prompt("natizhe zha"),
        lessons: prompt("zha")
    }
    console.log(adam);
}else{
    alert("qate zhadyniz")
}
let suraq = prompt("1,2,3,4,5,6  depbac:")
if(suraq == "1"){
    alert(schoolname)
}else if(suraq == "2"){
    alert(schoolphone)
}else if(suraq == "3"){
    alert(element.aty)
}else if(suraq == "4"){
    alert(element.top)
}else if (element == "5"){
    alert(element.lessons)
}else if(suraq == "6"){
    alert("Сау болыңыз!")
}
