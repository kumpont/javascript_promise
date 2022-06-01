// Import stylesheets
import './style.css';

const connect = true;
const url1 = 'kong.dev/file1.json';
const url2 = 'kong.dev/file2.json';
const url3 = 'kong.dev/file3.json';
const url4 = 'kong.dev/file4.json';
const url5 = 'kong.dev/file5.json';
function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log(`downloading... ${url}`);
    setTimeout(() => {
      if (connect) {
        resolve(`download ${url} conpleted`);
      } else {
        reject(`download ${url} failed`);
      }
    }, 3000);
  });
}

// downloading(url1)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log(`download finished`)
//   })

// downloading(url1).then(function (result) {
//   console.log(result);
//   downloading(url2).then(function (result) {
//     console.log(result);
//     downloading(url3).then(function (result) {
//       console.log(result);
//     });
//   });
// });

downloading(url1)
  .then((result) => {
    console.log(result);
    return downloading(url2);
  })
  .then((result) => {
    console.log(result);
    return downloading(url3);
  })
  .then((result) => {
    console.log(result);
    return downloading(url4);
  })
  .then((result) => {
    console.log(result);
    return downloading(url5);
  })
  .then((result) => {
    console.log(result);
  });
