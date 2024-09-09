// If a given string has either x, replace x by y. if the given string has X, replace it by Y.


function replaceXWithY(str) {
    // Replace all occurrences of 'x' with 'y'
    let result = str.replace(/x/g, 'y');
    
    // Replace all occurrences of 'X' with 'Y'
    result = result.replace(/X/g, 'Y');
    
    return result;
}

// Example usage
console.log(replaceXWithY("Example X-ray and xylophone")); // Output: "Eyample Y-ray and yylophone"
