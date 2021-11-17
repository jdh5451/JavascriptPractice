const vowels=["a","e","i","o","u"];
const consonants=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

function getVowelSubstrings(str){
    let results=[];
    let indices=[];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())) indices.push(i);
    }
    for(let i=0;i<indices.length;i++){
        for(let j=0;j<indices.length;j++){
            if(i==j){
                if(!(results.includes(str[i])))results.push(str[i]);
            }
            else{
                if(!(results.includes(str.substring(i,j))))results.push(str.substring(i,j));
            }
        }
    }

    return results.sort;
}

function getConsonantSubstrings(str){
    let results=[];
    let indices=[];

    for(let i=0;i<str.length;i++){
        if(consonants.includes(str[i].toLowerCase())) indices.push(i);
    }

    for(let i=0;i<indices.length;i++){
        for(let j=0;j<indices.length;j++){
            if(i==j){
                if(!(results.includes(str[i])))results.push(str[i]);
            }
            else{
                if(!(results.includes(str.substring(i,j))))results.push(str.substring(i,j));
            }
        }
    }

    return results.sort;
}

function redundant(str){
    return ()=>str;
}
