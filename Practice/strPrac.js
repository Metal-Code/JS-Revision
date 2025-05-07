function rev(str){
    let result = "";
    for(let i=str.length-1; i>=0; i--)
    {
        result += str[i];
    }
    return result;
}

let str = "Ayush8wdhq09ofdb03e"
// console.log(rev(str));

function Alph(str)
{
    let counter = 0;
    while(str[counter] !== undefined)
    {
        counter++;
    }
    return counter;
}

// console.log(Alph(str));

function vowel(str)
{
    let counter = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u')
        {
            counter ++;
        }
    }
    return counter;
}
console.log(vowel(str));

function pal(str)
{
    let reversed = str.split("").reverse().join("");
    return reversed === str;
}

// console.log(pal("nitin"));

function maxCharCount(str)
{
    let freq = {}
    let maxChar = ''
    let maxCount = 0;
    for(let i=0; i<str.length; i++)
    {
        let char = str[i];
        if(freq[char] === undefined)
        {
            freq[char] = 1;
        }
        else
        freq[char]++;

        if(freq[char] > maxCount)
        {
            maxCount = freq[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxCharCount("javascript"));

function rep(str) 
{
    return str.replace(/ /g, "-");
}

console.log(rep("i love js"));  
