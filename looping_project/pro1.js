{
let n = 5;

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
}
}

{
    let student = {
    name: "Krishna",
    age: 22,
    course: "BCA"
};

    for (let key in student) {
        console.log(key + " : " + student[key]);
    }
}

{
    let numbers = [10, 20, 30, 40];

    for (let num of numbers) {
        console.log(num);
    }
}

{
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 5);
}