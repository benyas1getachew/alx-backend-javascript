<p align="center">
<img src="https://img.shields.io/badge/LINUX-darkgreen.svg"/>
<img src="https://img.shields.io/badge/Shell-ligthgreen.svg"/>
<img src="https://img.shields.io/badge/Emacs-purple.svg"/>
<img src="https://img.shields.io/badge/JavaScript-yellow.svg"/>
<img src="https://img.shields.io/badge/Markdown-black.svg"/><br>	
</p>

---

# 0x03. ES6 data manipulation

This project contains some tasks for learning how to use *`map`*, *`filter`* and *`reduce`* on arrays in Javascript language.

<p align="center">
  <img width="380"  
        src="https://miro.medium.com/max/1838/1*XCPNNcF9l8nliSJdVxNIGw.jpeg"
  >
</p>

# Getting Started :running:	
<div style="text-align: justify">

## Table of Contents
* [About](#about)
* [Resources](#resources-books)
* [Requirements](#requirements)
* [Files](#files-file_folder)
* [Tasks](#tasks)
* [Credits](#credits)

## About

* [Modern Javascript](https://intranet.hbtn.io/concepts/541) 

## Resources :books:
Read or watch:
	
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/80px-Google_2015_logo.svg.png)](https://www.google.com/search?q=javascript+data+manipulation&ei=uY7xYuWWN8awkvQPus2kuA4&oq=javascript+data+ma&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQhgM6BAgAEEc6BAgAEEM6BQgAEJECOggILhCABBDUAjoHCAAQgAQQCjoFCC4QgARKBAhBGABKBAhGGABQyQRYwR5g0yloAHACeACAAZUBiAGtB5IBAzAuOJgBAKABAcgBCMABAQ&sclient=gws-wiz)

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/70px-Logo_of_YouTube_%282015-2017%29.svg.png)](https://www.youtube.com/results?search_query=javascript+data+manipulation)

- **[Array](https://intranet.hbtn.io/rltoken/wwXCT3fq4IXd1I9uNI77ZA)** 
- **[Typed Array](https://intranet.hbtn.io/rltoken/vh-3p3KW641JOjcM13AQuQ)** 
- **[Set Data Structure](https://intranet.hbtn.io/rltoken/bTIxlT2dX7Ug7KMqQlbJ9w)** 
- **[Map Data Structure](https://intranet.hbtn.io/rltoken/qpMmznNSHZRf_oIWXa882Q)** 
- **[WeakMap](https://intranet.hbtn.io/rltoken/spKDkmTeDUOY5JGy96XL0g)** 
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements
### General
* All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: *` vi `*,  *` vim `*,  *` emacs `*,  *` Visual Studio Code `* 
* All files should end with a new line
* A *` README.md `* file, at the root of the folder of the project, is mandatory
* The code should use the  *` js `*  extension
* The code will be tested using  *` Jest `*  and the command  *` npm run test `* 
* The code will be verified against lint using ESLint
* The code needs to pass all the tests and lint. You can verify the entire project running  *` npm run full-test `* 
* All of functions must be exported

## More Info

## Setup
### Install NodeJS 12.11.x
(in your home directory): 
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

``` 
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint
in your project directory: 
* Install Jest using:  *` npm install --save-dev jest `* 
* Install Babel using:  *` npm install --save-dev babel-jest @babel/core @babel/preset-env `* 
* Install ESLint using:  *` npm install --save-dev eslint `*

## Configuration files

<details>
  <summary><h3>package.json :floppy_disk:</h3></summary>

```bash
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

```
</details>

<details>
  <summary><h3>babel.config.js :floppy_disk:</h3></summary>

```bash

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```
</details>

<details>
  <summary><h3>.eslintrc.js :floppy_disk:</h3></summary>

```bash

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```
</details>

### and…

Don’t forget to run   *` $ npm install `*   when you have the   *` package.json `*.

---

### Installation :computer:
	
- Clone this repository: `https://github.com/Alexoat76/holbertonschool-backend-javascript.git`	
- Access to directory: `cd 0x03-ES6_data_manipulation`
- `Compile` accord to `instructions` of each task.

## Files :file_folder:

### Tests :heavy_check_mark:

+ **[tests](./tests)**: Folder of test files. *`Provided by Holberton School`*.
		
---

## Tasks

+ [x] 0\. **Basic list of objects**

+ **[0-get_list_students.js](./0-get_list_students.js)**

Create a function named   *` getListStudents `*   that returns an array of objects. 
Each object should have three attributes:   *` id `*   (Number),   *` firstName `*   (String), and   *` location `*   (String). 
The array contains the following students in order: 
*  ` Guillaume ` , id:  ` 1 ` , in  ` San Francisco ` 
*  ` James ` , id:  ` 2 ` , in  ` Columbia ` 
*  ` Serena ` , id:  ` 5 ` , in  ` San Francisco `
 
```bash
$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

$ 
$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
$ 

```

+ [x] 1\. **More mapping**

+ **[1-get_list_student_ids.js](./1-get_list_student_ids.js)**

Create a function *` getListStudentIds `* that returns an array of ids from a list of object.
This function is taking one argument which is an array of objects - and this array is the same format as  *` getListStudents `*  from the previous task.
If the argument is not an array, the function is returning an empty array.
You must use the  *` map `* function on the array.
```bash
$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

$ 
$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
$ 

```
---

+ [X] 2\. **Filter**

+ **[2-get_students_by_loc.js](./2-get_students_by_loc.js)**

Create a function  *` getStudentsByLocation `*   that returns an array of objects who are located in a specific city.
It should accept a list of students (from  *` getListStudents `*  ) and a  *` city `*  (string) as parameters.
You must use the *` filter `* function on the array.

```bash
$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

$ 
$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
$ 

```
---

+ [x] 3\. **Reduce**

+ **[3-get_ids_sum.js](./3-get_ids_sum.js)**

Create a function *` getStudentIdsSum `* that returns the sum of all the student ids.
It should accept a list of students (from *` getListStudents `*) as a parameter. 
You must use the *` reduce `* function on the array. 
```bash
$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

$ 
$ npm run dev 3-main.js 
8
$ 

```
---

+ [x] 4\. **Combine**

+ **[4-update_grade_by_city.js](./4-update_grade_by_city.js)**

Create a function *` updateStudentGradeByCity `* that returns an array of students for a specific city with their new grade
It should accept a list of students (from *` getListStudents `* ), a *` city `*  (String), and *` newGrades `* (Array of “grade” objects) as parameters. 
 *` newGrades `*   is an array of objects with this format:
```
   {
    studentId: 31,
    grade: 78,
  }
```

If a student doesn’t have grade in   *` newGrades `*  , the final grade should be   *` N/A `*  .
You must use   *` filter `*   and   *` map `*   combined.

```bash
$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", 
[{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", 
[{ studentId: 5, grade: 97 }]));

$ 
$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
$ 

```
---

+ [x] 5\. **Typed Arrays**

+ **[5-typed_arrays.js](./5-typed_arrays.js)**

Create a function named  *` createInt8TypedArray `* that returns a new *` ArrayBuffer `*  with an *` Int8 `* value at a specific position.
It should accept three arguments: *` length `* (Number), *` position `* (Number), and *` value `* (Number).
If adding the value is not possible the error *` Position outside range `* should be thrown.

```bash
$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

$ 
$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
$ 

```
---

+ [x] 6\. **Set data structure**

+ **[6-set.js](./6-set.js)**

Create a function named   *` setFromArray `*   that returns a   *` Set `*   from an array.
It accepts an argument (Array, of any kind of element). 
```bash
$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

$ 
$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
$ 

```
---

+ [x] 7\. **More set data structure**

+ **[7-has_array_values.js](./7-has_array_values.js)**

Create a function named *` hasValuesFromArray `* that returns a boolean if all the elements in the array exist within the set.
It accepts two arguments: a  *` set `*   (Set) and an   *` array `*   (Array). 
```bash
$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

$ 
$ npm run dev 7-main.js 
true
false
false
$ 

```
---

+ [x] 8\. **Clean set**

+ **[8-clean_set.js](./8-clean_set.js)**

Create a function named *` cleanSet `* that returns a string of all the set values that start with a specific string ( *` startString `* ).
It accepts two arguments: a   *` set `*   (Set) and a   *` startString `*   (String). 
When a value starts with *` startString `* you only append the rest of the string. The string contains all the values of the set separated by  *` - `*. 

**Note** :

* If  *` startString `*  is of type undefined, the function will return an empty string.
* If  *` set `*  contains undefined elements, the function will skip these elements.

```bash
$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', , 'banana'])));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', , 'banana']), 'bon'));

$ 
$ npm run dev 8-main.js 
jovi-aparte-appetit


jovi-aparte
$ 

```
---

+ [x] 9\. **Map data structure**

+ **[9-groceries_list.js](./9-groceries_list.js)**

Create a function named  *` groceriesList `* that returns a map of groceries with the following items (name, quantity): 
```
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
```

Result:

```bash
$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

$ 
$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
$ 

```
---

+ [x] 10\. **More map data structure**

+ **[10-update_uniq_items.js](./10-update_uniq_items.js)**

Create a function named  *` updateUniqueItems `*   that returns an updated map for all items with initial quantity at 1.<br>
It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.<br>
For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map)<br>
the error   *` Cannot process `*   should be thrown.

```bash
$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

$ 
$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
$ 

```
---

+ [x] 10\. **Weak link data structure**

+ **[100-weak.js](./100-weak.js)**

Export a  *` const `*   instance of *` WeakMap `* and name it *` weakMap `*.
Export a new function named  *` queryAPI `*. It should accept an endpoint argument like so: 
```
   {
    protocol: 'http',
    name: 'getUsers',
  }
```
Track within the *` weakMap `* the number of times  *` queryAPI `* is called for each endpoint.
When the number of queries is >= 5 throw an error with the message  *` Endpoint load is high `*.

```bash
$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

$ 
$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
$ 

```
---

## Credits

## Author(s):blue_book:

Work is owned and maintained by 
	**`Alex Orland Arévalo Tribaldos`**  and credits for `group projects` are displayed in the respective `README.md` files.

<3915@holbertonstudents.com>
	
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/25px-Octicons-mark-github.svg.png)](https://github.com/Alexoat76)
[![M](https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/25px-Twitter_Bird.svg.png)](https://twitter.com/aoarevalot)
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/25px-LinkedIn_logo_initials.png)](https://www.linkedin.com/in/Alexoat76/)

## Acknowledgments :mega: 

### **`Holberton School`** (*providing guidance*)
	
This program was written as part of the curriculum for Holberton School.
Holberton School is a campus-based full-stack software engineering program
that prepares students for careers in the tech industry using project-based
peer learning. For more information,  please visit [this link](https://www.holbertonschool.com/).
![Brand](https://assets.website-files.com/6105315644a26f77912a1ada/610540e8b4cd6969794fe673_Holberton_School_logo-04-04.svg)
