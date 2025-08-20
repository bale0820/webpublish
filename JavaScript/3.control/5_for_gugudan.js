/**
 * 구구단 출력
 */



let count = 2;
for (let i = 1; i <= 9; i++) {
    let rows = '';
    for (let j = 2; j < 10; j++) {
        // process.stdout.write(j.toString());
        rows += `${j}*${i}= ${i * j}\t`
    }
    console.log(rows);
}





/**
 * 
 **
 *** 
 ****
 *****
 */
for (let i = 1; i <= 5; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        // process.stdout.write(j.toString());
        output += '🍏';
    }
    console.log(output);
}


/**
 * 초록사과 찍기, 3행 줄만 빨간사과 출력
 */
for (let i = 1; i <= 5; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        if (i === 3) {
            output += '🍎';
        } else {
            output += '🍏';
        }
    }
    console.log(output);
}

