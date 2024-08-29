// Explain with code 
// Define an array with mixed data types: string, number, boolean, and another array (object).
var data = ["hello", 12, true, ["hello World"]];

// Loop through each element in the data array.
for (var i = 0; i < data.length; i++) {
    // Get the current element from the array.
    var element = data[i];

    // Check if the element is of type 'string'.
    if (typeof element === "string") {
        // Log the type and value of the element to the console.
        console.log("TypeOf " + typeof element + ">", element);
    }

    // Check if the element is of type 'number'.
    if (typeof element === "number") {
        // Log the type and value of the element to the console.
        console.log("TypeOf " + typeof element + ">", element);
    }

    // Check if the element is of type 'boolean'.
    if (typeof element === "boolean") {
        // Log the type and value of the element to the console.
        console.log("TypeOf " + typeof element + ">", element);
    }

    // Check if the element is of type 'object'.
    if (typeof element === "object") {
        // Log the type and value of the element to the console.
        console.log("TypeOf " + typeof element + ">", element);
    }
}

// The commented-out section below is a simplified version of the above loop, without logging the type.

// var data = ["hello", 12, true, ["hello World"]];

// Loop through each element in the data array.
// for (var i = 0; i < data.length; i++) {
//     var element = data[i];

//     // Check if the element is of type 'string' and log the value to the console.
//     if (typeof element === "string") {
//         console.log(element);
//     }

//     // Check if the element is of type 'number' and log the value to the console.
//     if (typeof element === "number") {
//         console.log(element);
//     }

//     // Check if the element is of type 'boolean' and log the value to the console.
//     if (typeof element === "boolean") {
//         console.log(element);
//     }

//     // Check if the element is of type 'object' and log the value to the console.
//     if (typeof element === "object") {
//         console.log(element);
//     }
// }


// var data = ["hello", 12, true, ["hello World"]];

// for (var i = 0; i < data.length; i++) {
//     var element = data[i];
//     if (typeof element === "string") {
//         console.log("TypeOf" + " " +typeof element +">",element)
//     }
//     if (typeof element === "number") {
//         console.log("TypeOf" + " " + typeof element +">",element)
//     }
//     if (typeof element === "boolean") {
//         console.log("TypeOf" + " " + typeof element +">",element)
//     }
//     if (typeof element === "object") {
//         console.log("TypeOf" + " " +typeof element +">",element)
//     }
// }

// var data = ["hello", 12, true, ["hello World"]];

// for (var i = 0; i < data.length; i++) {
//     var element = data[i];
//     if (typeof element === "string") {
//         console.log(element)
//     }
//     if (typeof element === "number") {
//         console.log(element)
//     }
//     if (typeof element === "boolean") {
//         console.log(element)
//     }
//     if (typeof element === "object") {
//         console.log(element)
//     }
// }

