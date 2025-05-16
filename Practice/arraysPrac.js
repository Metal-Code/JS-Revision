let arr = [1,2,3,4,5,6,7,8,9,10,5,6,2,8,11,35,24,72]
function arraySum(arr)
{
    let result = 0;
    for(let i=0; i<arr.length; i++)
    {
        result = result + arr[i];
    }
    return result;
}

// console.log(arraySum(arr));

function checks(arr,target)
{
    if(arr.length==0)
        return false;
    let exists = false;
    for(let i=0; i<arr.length; i++)
    {
        if(target == arr[i])
        {
            exists = true;
            return exists;
        }   
    }
    return false;
}

// console.log(checks(arr,6));


// Write a function that removes all duplicate elements from an array.

function removeDuplicate(arr)
{
    let freq = {}
    for(let i=0; i<arr.length; i++)
    {
        let el = arr[i];
        if(freq[el]===undefined)
        {
            freq[el] = 1;
        }
        else
        {
            freq[el]++;
        }
    }
    // console.log(freq);
    
    let temp = Object.keys(freq).map(Number)
    return temp
}

// console.log(removeDuplicate(arr));

function smallAndLarge(arr)
{
    if (arr.length === 0) return null;

    let small = arr[0];
    let large = arr[0];

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] < small)
        {
            small = arr[i];
        }
        if(arr[i] > large)
        {
            large = arr[i];
        }
    }
    return {smallest : small, largest : large}
}

// console.log(smallAndLarge(arr));

function avg(arr)
{
    let sum = 0;
    for(let i=0; i<arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum/arr.length;
}

// console.log(avg(arr));
let arr2 = [45,61,55,99]
function mergeTwoArrays(arr, arr2)
{
    let merged = [];
    for(let i=0; i<arr.length; i++)
    {
        merged[merged.length] = arr[i];
    }
    for(let i=0; i<arr2.length; i++)
    {
        merged[merged.length] = arr2[i];
    }
    return merged
}

// console.log(mergeTwoArrays(arr,arr2));

let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 }
];

function highestValue(arr, property)
{
    if(arr.length==0)
        return null;

    let maxObj = arr[0];
    for(let i=1; i<arr.length; i++)
    {
        if(arr[i][property] > maxObj[property])
        {
            maxObj = arr[i];
        }
    }
    return maxObj;
}

// console.log(highestValue(students, "marks"));

let nums = [4,3,2,7,8,2,3,1];
function diss(nums)
{
    nums.sort((a,b) => a-b)
    let result = [];
    let freq = {}
    for(let i=0; i<nums.length; i++)
    {
        let el = nums[i];
        if(freq[el]===undefined)
        {
            freq[el] = 1;
        }
        else
        {
            freq[el]++;
        }
    }
    let temp = (Object.keys(freq)).map(Number);
    // return temp;
    for(let i=0; i<temp.length; i++)
    {
        for(let j=i+1; j<temp.length; j++)
        {
            if((temp[i]++)!==temp[j])
                result.push(temp[i]++)
        }
    }
    return result;

}

// console.log(diss(nums));

function findWords(words) 
{
    let firstRow =  "qwertyuiop";
    let secondRow =  "asdfghjkl";
    let thirdRow = "zxcvbnm";
    let result = [];

    for (let word of words) 
    {
        let lowerWord = word.toLowerCase();
        if ([firstRow, secondRow, thirdRow].some(row =>
            [...lowerWord].every(ch => row.includes(ch))
        )) 
        {
            result.push(word);
        }
    }
    return result;
};

function findMaxConsecutiveOnes(nums) 
{
    let counter = 0;
    let currentCounter = 0;
    for(let i = 0; i<nums.length; i++)
    {
        if(nums[i]===1)
        {
            currentCounter++;
            if(currentCounter > counter)
            {
                counter = currentCounter;
            }
        }
        else
        {
            currentCounter = 0;
        }
    }
    return counter;
};



function thirdMax(nums) 
{
    nums.sort((a, b) => b - a);
    let freq = {};
    for(let i = 0; i < nums.length; i++)
    {
        let temp = nums[i];
        if(freq[temp] === undefined)
        {
            freq[temp] = 1;
        }
        else
        {
            freq[temp]++;
        }
    }
    const keys = Object.keys(freq).map(Number); 
    keys.sort((a, b) => b - a);
    if(keys.length < 3) return keys[0];
    else return keys[2];
};

function majorityElement(nums) 
{
    let freq = {};
    for(let i=0 ;i<nums.length; i++)
    {
        let temp = nums[i];
        if(freq[temp]===undefined)
        {
            freq[temp] = 1;
        }
        else
        {
            freq[temp]++;
        }
    }    
    for(let i in freq)
    {
        if(freq[i] > (nums.length)/2)
        return parseInt(i);
    }
};
