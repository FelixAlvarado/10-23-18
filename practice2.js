var reconstructQueue = function(people) {
    if(people.length === 0) return [];
    people = people.sort((a,b) => a[1] - b[1]);
    let result = [];
    result.push(people.shift());
    while(people.length > 0){
        let current = people.shift();
        let count = 0;
        for(let i = 0; i < result.length; i++){
                let currentEl = result[i];
                if(currentEl[0] >= current[0]){
                    count += 1;
                }
                
                if(count > current[1]){
                      result = result.slice(0,i).concat([current], result.slice(i, result.length));
                    break;
                } 
            if (result[i+1] && count === current[1] && current[0] <= result[i + 1][0]){
                    result = result.slice(0,i + 1).concat([current], result.slice(i + 1, result.length));
                    break;
                }
            if(i === result.length - 1){
                result.push(current);
                break;
            }

        }
        
    }
    return result; 
};


//did better solutions
var reconstructQueue = function(people) {
    var ret = []
    console.log(people);
 people.sort((a,b) => {
     if(b[0] != a[0]) return (b[0]-a[0])
     else return a[1]-b[1]
 })
 console.log(people);
 for(var obj of people){
     ret.splice(obj[1], 0, obj)
 }
 return ret
};