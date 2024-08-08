function move(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req1 = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req1.url, req1.method);
// const req2 = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req2.url, req2.method);
// let statuse: "success" | "error" = "success";
// statuse = "error";
// interface Person{
//     id: number,
//     name: string
// }
// interface Employee extends Person{
//     role: string
// }
// const some_one: Employee = {
//     id: 1,
//     name: 'Tuttu',
//     role: 'Developer',
// }
// TYPE ALISA
// type NumberOrString = number | string;
// type Obj = {
//     firstName: string,
//     lastName?: string
// }
// type Result = "success" | "error"
// const sum = (a: number | string, b: number | string): number | string => {
//     if(typeof a === 'number' && typeof b === 'number'){
//         return a + b
//     }else{
//         return a.toString() + b.toString()
//     }
// }
// console.log(sum(1, 2));
// console.log(sum('1', 2));
// function combineNames(obj:{firstName: string, lastName?: string}): String{
//     if (obj.lastName) {
//         return String(obj.firstName + " " + obj.lastName);
//     } else {
//         return String(obj.firstName);
//     }
// }
// console.log(combineNames({firstName: "Tuttu", lastName:"Afreedi"}));
// function greeting(name: string, date: Date){
//     console.log(`Hello ${name}, today is ${date.toDateString()}!`);
// }
// greeting("Tuttu", new Date)
// function sum(a: number, b: number) : number {
//     return Number(a + b)
// }
// console.log(sum(1, 2))
// console.log(sum(1, 2).toExponential())
