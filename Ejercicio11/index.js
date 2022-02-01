
const times = [60, 75, 79, 80, 55, 59];

function calcmedia (times){
    var suma = 0;
    var media;
    for (let i=0; i<times.length; i++){
        suma += times[i];
    }
    media = suma/times.length;
    return (media);
}
    
console.log ("times: " + times);

console.log ("media: " + calcmedia(times));

