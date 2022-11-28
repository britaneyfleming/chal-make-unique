// Write your solution below:
function makeUnique(str) {
    let arr = str.split('')
    let result = []
    for(let i = 0; i < arr.length; i++){
        if (!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
return result.join('')
}

console.log(makeUnique ('helloworld'))
console.log(makeUnique('iwanttoclimbmountain'))


const makeUnique2 = (str) => {
    let set = new Set(str.split(''))
    return Array.from(set).join('')
}
console.log(makeUnique2('hellouniverse'))