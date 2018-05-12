function getTemp(): Promise<number> {
    return Promise.resolve(1);
}

getTemp()
.then(x => console.log(x));
