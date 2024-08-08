
// interface Speech {
//     sayHi(name: string): string;
//     sayBye: (name: string) => string;
//   }
  
//   let sayStuff: Speech = {
//     sayHi: function (name: string) {
//       return `Hi ${name}`;
//     },
//     sayBye: (name: string) => `Bye ${name}`,
//   };

// console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
// console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg

// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//       return Math.PI * shape.radius! ** 2; non null insertion
//     }
//   }

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// type Human = { swim?: () => void; fly?: () => void };

// function isFish(pet: Fish | Bird): pet is Fish { spcifies the pet type
//     return (pet as Fish).swim !== undefined;
//   }

// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// // or, equivalently
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// // The predicate may need repeating for more complex examples
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });


// function move(animal: Fish | Bird | Human) {
//   if ("swim" in animal) {
//     animal;
//   } else {
//     animal;
//   }
// }
// function logValue(x: Date | string | number) {
//     if (x instanceof Date) {
//       console.log(x.toUTCString());

//     } else if (typeof x === "string") {
//       console.log(x.toUpperCase());

//     } else {
//       console.log(x);}
//   }


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