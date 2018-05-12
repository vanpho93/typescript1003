function copyString(str: string): string {
    return str;
}

function copyNumber(num: number): number {
    return num;
}

// function copy<T>(x: T): T {
//     return x;
// }

function copy(x: any) {
    return x;
}

(copy('x') as string).length;
(<string>copy('x')).length;
