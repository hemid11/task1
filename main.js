// function getFirst(arr, n = 1) {
//     return arr.slice(0, n);
// }
// console.log(getFirst([1, 73, 99, 20]));
// console.log(getFirst([1, 73, 99, 20], 2));
// console.log(getFirst([1, 73, 99, 20], 0));
// console.log(getFirst([1, 73, 99, 20], 4));




// function join(arr, delimiter) {
//     return arr.join(delimiter);
// }
// console.log(join([1, 73, 99, 20], "*"));
// console.log(join([1, 73, 99, 20], "/"));




// function convert(str) {
//     let convertedStr = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === char.toUpperCase()) {
//             convertedStr += char.toLowerCase();
//         } else {
//             convertedStr += char.toUpperCase();
//         }
//     }
//     return convertedStr;
// }
// console.log(convert('saLamNecesen'));




// function clear(arr) {
//     return arr.filter(element => {
//         return element !== false && element !== undefined && element !== '' && element !== 0 && element !== null;
//     });
// }
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]));




// function clearDuplicate(arr) {
//     return [...new Set(arr)];
// }
// console.log(clearDuplicate([1, 2, 1, 2, 3]));
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));




// function isEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));





// function mergeArrays(arr1, arr2, char) {
//     const mergedArray = arr1.concat(arr2);
//     return mergedArray.join(char);
// }
// console.log(mergeArrays([1, 2], [3, 4], '*'));





// const students = [
//     { name: 'Eli', surname: 'Necefzade', age: 22, point: 85 },
//     { name: 'Hemid', surname: 'Ismayilzade', age: 20, point: 75 },
//     { name: 'Orxan', surname: 'Sultanov', age: 21, point: 90 }
// ];
// students.sort((a, b) => b.age - a.age);
// console.log(students);






// const students = [
//     { name: 'Eli', surname: 'Necefzade', age: 22, point: 85 },
//     { name: 'Hemid', surname: 'Ismayilzade', age: 20, point: 75 },
//     { name: 'Orxan', surname: 'Sultanov', age: 21, point: 90 }
// ];students.sort((a, b) => a.point - b.point);
// console.log(students);



// function getExtremeStudents(students) {
//     students.sort((a, b) => a.point - b.point);
//     const lowestPoint = students[0].name;
//     const highestPoint = students[students.length - 1].name;
//     return [lowestPoint, highestPoint];
// }
// const students = [
//     { name: 'Eli', surname: 'Necefzade', age: 22, point: 85 },
//     { name: 'Hemid', surname: 'Ismayilzade', age: 20, point: 95 },
//     { name: 'Orxan', surname: 'Sultanov', age: 21, point: 90 }]
// console.log(getExtremeStudents(students));
