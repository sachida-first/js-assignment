const hello = {
    word: "Hello :",
};

(function() {
    hello.speak = function (name) {
        return (hello.word + " " + name);
    }
}());

const GoodBye = {
    word: "GoodBye :",
};

(function(){
    GoodBye.speak= function(name){
        return(GoodBye.word+ " "+ name);
    }
}());


(function(){
    var names = ["jofs","jord","yang","mayang","hwai"];
    for(var i=0; i<names.length; i++){
        var firstLatter = names[i].charAt(0);
        if(firstLatter === "j"){
            console.log(GoodBye.speak(names[i]));
        }else{
            console.log(hello.speak(names[i]));
            
        }
    }
}());