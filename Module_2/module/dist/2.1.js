"use strict";
{
    //
    // type assertion
    let anything;
    anything = "Apollo level 2";
    //   (anything as string).
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `string input retuirn ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram(5);
    const result2 = kgToGram("5");
    console.log(result1, result2);
    const user1 = {
        name: "Anonymous",
        age: 30,
        address: "Unknown",
    };
    const user2 = {
        name: "Anonymous",
        age: 30,
        address: "Unknown",
        role: "CEO",
    };
    const roll = [1, 2, 3];
    const add = (num1, num2) => {
        return num1 + num2;
    };
    //
}
