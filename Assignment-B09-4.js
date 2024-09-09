function password(obj) {
    if(Object.keys(obj).length!==3 || obj.birthYear.toString().length!==4)
        return "Invalid";
    const newSiteName=obj.siteName.charAt(0).toUpperCase() +  obj.siteName.slice(1).toLowerCase();
    return newSiteName+"#"+obj.name+"@"+obj.birthYear;
}

const object= { name: "rahat", birthYear: 2000, siteName: "Facebook" }
console.log(password(object));