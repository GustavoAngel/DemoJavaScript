
// function resultado(params = []) {
    
//     params.sort()
    
//     var array =[];
//     var resultado = [];
//     for (let index = 0; index <= params[params.length-1]; index++) {
//         array.push(index);
       
//     }
//     if (params[99]==98) {
//         array.push(100);
//     }
//     for (const key in array) {
//         if (resultado[key]===undefined) {
//             resultado[key]=0;
//         }
//         for (const item of params) {
//             if (item===array[key]) {
//                 resultado[key]+=1;
//             }
//         }
//     }
    
//     return resultado;
// }


// function name2(arr) {
//     // var counts = Array(100).fill(0);
    
//     // arr.forEach(item => 
//     //     {
//     //         ++counts[item];
//     //     }
//     //     );
//     // return counts;
// }

// // console.log('====================================');
// // console.log(name2([112, 42, 83, 119],
// //     [56, 125, 56, 49]
// //     [15, 78, 101, 43]
// //     [62, 98, 114, 108]));
// // console.log('====================================');


 
// // Javascript Program to find minimum number of '(' or ')'
// // must be added to make Parentheses string valid.
 
// // Function to return required minimum number
function minParentheses( p)
{
 
   // maintain balance of string
    var bal = 0;
    var ans = 0;
 
    for (var i = 0; i < p.length; ++i) {
       
        bal += p[i] == '(' ? 1 : -1;
        //   It is guaranteed bal >= -1
        if (bal == -1) {
            ans += 1;
            bal += 1;
        }
    }
 
    return bal + ans;
}
 
var p = "())))))";
 
//Function to print required answer
console.log('====================================');
console.log(minParentheses(p));
console.log('====================================');

// function maxHeight(wallPositions, wallHeights) {
//     var mud = 0
    
// for (i in wallPositions) {
//         if(wallPositions[i] < wallPositions[i+1]-1) {
//             height = abs(wallHeights[i+1]-wallHeights[i]);
//             gap = wallPositions[i+1] - wallPositions[i]-1;
//             temp = 0;
//             if (gap > height) {
//                 count = max(wallHeights[i+1], wallHeights[i])+1;
//                 gap_left = gap - height -1;
//                 temp = count + gap_left/2;
//             } else {
//                 temp = min(wallHeights[i+1], wallHeights[i])+gap;
//             mud = max(mud, temp)
// return Number(mud); 
//             }
//         }

// }
// }

 //console.log( maxHeight([1, 3, 7],[4, 3, 3]));
