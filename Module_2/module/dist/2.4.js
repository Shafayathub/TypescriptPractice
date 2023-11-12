"use strict";
{
    //
    // Function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("BD");
    const resGeneric = createArrayWithGeneric(true);
    const resGenericObj = createArrayWithGeneric({
        id: 1314,
        name: "MN",
    });
    console.log(resGenericObj);
    const addToCOurse = (student) => {
        const course = "Apollo Level 2.0";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addToCOurse({
        name: "Mr.X",
        email: "x@gmail.com",
        devType: "Next Level",
    });
    console.log(student1);
    //
}
