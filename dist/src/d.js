"use strict";
function getTemp() {
    return Promise.resolve(1);
}
getTemp()
    .then(x => console.log(x));
