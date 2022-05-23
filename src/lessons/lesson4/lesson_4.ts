console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

let pendPromise = new Promise(() => {
    console.log('Promise is created')
});
console.log('Lesson 4 task 01: ', pendPromise)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let resPromise = new Promise((resolve) => {
    resolve('Promise Data')
});
console.log('Lesson 4 task 02', resPromise)
resPromise.then(data => console.log('Lesson 4 task 02: ', data))

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

let rejPromise = new Promise((resolve, reject) => {
    reject('Promise Error')
});
console.log('Lesson 4 task 03', rejPromise)
rejPromise.catch(data => console.log('Lesson 4 task 03: ', data))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let threeSecPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise Data')
    }, 3000)
});
console.log(threeSecPromise)
threeSecPromise.then(data => console.log('Lesson 4 task 04: ', data))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type HandlePromisePropsType = {
    promise: null | Promise<any>,
    resolve: null | Function,
    reject: null | Function,
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}

const handlePromise: HandlePromisePropsType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}

export const createPromise = () => {
    handlePromise.promise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    });
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('Lesson 4 task 5: Success');
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('Lesson 4 task 5: Error')
}

// @ts-ignore
window.testObj = handlePromise


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

let myProm = new Promise((resolve) => {
    return setTimeout(() => {
        resolve('My name is')
    }, 1000)
})

let onSuccess = (param: string) => {
    return param + ' Denis'
}


let print = (param: string) => {
    console.log('Lesson 4 task 06: ', param)
}

myProm
    .then((resolve) => {
        return onSuccess(resolve as string)
    })
    .then(res => {
        print(res)
    })

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let firstPromise = new Promise((resolve) => {
    return setTimeout(() => {
        resolve({name: 'Anna'})
    }, 2000)
})

let secondPromise = new Promise((resolve) => {
    return setTimeout(() => {
        resolve({age: 16})
    }, 3000)
})

let thirdPromise = new Promise((resolve) => {
    return setTimeout(() => {
        resolve({city: ''})
    }, 4000)
})

Promise.all([firstPromise, secondPromise, thirdPromise])
    .then(data => {
        const result = Object.assign(data[0], data[1], data[2])
        console.log('Lesson 4 task 07: ', result)
    })

// just a plug
export default () => {};