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

// console.log(maxCharCount("javascript"));

function rep(str) 
{
    return str.replace(/ /g, "-");
}

// console.log(rep("i love js"));  

function anagrams(str1, str2)
{
    if(str1.length != str2.length)
        return false;
        
    let freq1 = {}
    let freq2 = {}
    for(let i=0; i<str1.length; i++)
    {
        let char = str1[i];
        if(freq1[char] === undefined)
        {
            freq1[char] = 1;
        }
        else
        freq1[char]++;
    }
    for(let i=0; i<str2.length; i++)
    {
        let char = str2[i];
        if(freq2[char] === undefined)
        {
            freq2[char] = 1;
        }
        else
        freq2[char]++;
    }

    for(let char in freq1)
    {
        if(freq1[char] !== freq2[char])
            return false;
    }
    return true
}

// console.log(anagrams("listen", "silent"));

function longest(str)
{
    let words = str.split(" ");
    let longest = '';

    for(let word of words)
    {
        if(word.length > longest.length)
            longest = word;
    }
    return longest
}

// console.log(longest("I am learning JavaScript today"));

function removeDuplicate(str)
{
    let freq = {}
    for(let i=0; i<str.length; i++)
    {
        let char = str[i]
        if(freq[char] === undefined)
        {
            freq[char] = 1
        }
        else
        freq[char]++;
    }
    const key = Object.keys(freq);
    return key.join("")
}

// console.log(removeDuplicate("fboeoivnqeofihefwbuofhweoinef")); 

function firstNonRepeating(str)
{
    let freq = {}
    for(let i=0; i<str.length; i++)
    {
        let char = str[i]
        if(freq[char] === undefined)
        {
            freq[char] = 1
        }
        else
        freq[char]++;
    }

    for(let char of str)
    {
        if(freq[char] == 1)
            return char;
    }

    return null;
}

console.log(firstNonRepeating("swiss"));
