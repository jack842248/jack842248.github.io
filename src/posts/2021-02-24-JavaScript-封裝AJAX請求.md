---
title: 【JS】封裝AJAX請求
date: 2021-02-24
tags: ["javaScript"]
---
#
## 建立Promise 
#
<!--more-->
#
1.  **Promise** 是一個函式物件，需要用函式來建構。

    *  **PromiseState**  : 狀態。

    *  **PromiseValue**  : 回傳的值。

2. 需要帶入兩個參數 **resolve**  : 成功， **reject**  : 失敗。

3. 在 **非同步事件* 之後才會執行結果。

4. 需要用 **.then()**  : 顯示成功的結果， **catch()**  : 顯示失敗的結果。
#
```js
function promiseFn(item){  //1.
  return new Promise((resolve,reject)=>{  //2.
    setTimeout(()=>{  //3.
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{  //4.
    console.log(res);
  })
  .catch((rej)=>{  //4.
    console.log(rej);
  })
```
#
* 用.then(第一個參數接收resolve,第二的參數接收reject)。
#
```js
function promiseFn(item){
  return new Promise((resolve,reject)=>{ 
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{ 
    console.log(res);
  },(rej)=>{ 
    console.log(rej);
  })
```
#
-----------------------------------------------
#
## Promise chain
#
* 串聯多個 **promise** ，若有其中 **.then()** 不成立，則直接跳至 **.catch()** 。
#
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{  
    console.log("一號成功");  //一號成功
    return promiseFn(2)
  })
  .then((res)=>{
    console.log("二號成功");  //二號成功
    return promiseFn(3)
  })
  .then((res)=>{
    console.log("三號成功");  //三號成功
    return promiseFn(0);
  })
  .then((res)=>{
    console.log("四號成功");
  })
  .catch((rej)=>{  
    console.log("失敗");  //一號成功
  })
```
#
* 使用 **.then()** 來顯示，失敗或是成功的結果。
#
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}
promiseFn(1)
  .then((res)=>{  
    console.log("一號成功");  //一號成功
    return promiseFn(2)
  },(rej)=>{  
    console.log("一號失敗");
    return promiseFn(2)
  })

  .then((res)=>{  
    console.log("二號成功");  //二號成功
    return promiseFn(3)
  },(rej)=>{  
    console.log("二號失敗");
    return promiseFn(3)
  })

  .then((res)=>{  
    console.log("三號成功");  //三號成功
    return promiseFn(0)
  },(rej)=>{  
    console.log("三號失敗");
    return promiseFn(0)
  })

  .then((res)=>{  
    console.log("四號成功");  
  },(rej)=>{  
    console.log("四號失敗");  //四號失敗
  })
```
#
-----------------------------------------------
#
## Promise.all
#
* 將全部使用陣列方式帶入參數，如果全部都成功執行後，才會執行接下來要執行的的結果，
#
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.all([
  promiseFn(1),
  promiseFn(2),
  promiseFn(3)
])
.then((res)=>{
  console.log(res);  //["成功","成功","成功"]
})
```
#
* 若其中有失敗的結果，則直接跳至.catch()。
#
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.all([
  promiseFn(1),
  promiseFn(2),
  promiseFn(0)
])
.then((res)=>{
  console.log(res);
})
.catch((rej)=>{
  console.log(rej);  //失敗
})
```
#
-----------------------------------------------
#
## Promise.race
#
* 將全部都成功執行後，才執行接下來要執行的的動作，但只執行最快完的成功。
#
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.race([
  promiseFn(1),
  promiseFn(2),
  promiseFn(3)
])
.then((res)=>{
  console.log(res);  //成功
})
```
#
* 若最快完成的是失敗，則後續的成功不會顯示。
#
```js
function promiseFn(item){  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{  
      if(item){
        resolve("成功");  
      }else{
        reject("失敗");
      }
    },1000)
  })
}

Promise.race([
  promiseFn(0),
  promiseFn(2),
  promiseFn(3)
])
.then((res)=>{
  console.log(res);  
})
.catch((rej)=>{
  console.log(rej);  //失敗
})
```
#
-----------------------------------------------
#
## 使用Random User API取得假人頭資料
#
* 取得資料[假人頭資料](https://randomuser.me/)範例。
#
```js
let url = "https://randomuser.me/api/";
$.ajax({
  url: url,
}).done(function(data){
  let name = `${data.results[0].name.title} ${data.results[0].name.first}`;
  //名字
  let sex = `${data.results[0].gender}`;
  //性別(male:男人、female:女人)
  let age = `${data.results[0].dob.age}`;
  //年齡
  let born = `${data.results[0].dob.date}`;
  //出生日期
  let telePhone = `${data.results[0].cell}`;
  //電話號碼
  let cellPhone = `${data.results[0].phone}`;
  //手機號碼
  let email = `${data.results[0].email}`;
  //信箱
  let address = `${data.results[0].location.street.number} ${data.results[0].location.street.name} ${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.country}`;
  //地址
  let src = `${data.results[0].picture.large}`;
  //大頭貼
})
```
#
-----------------------------------------------
#
## 取得相同資料
#
1. 先取得資料裡的seed[序號]。

2. 將序號代入在https://randomuser.me/api/?seed=[序號]。

3. 載入https://randomuser.me/api/?seed=[序號]。
#
```js
/** jQuery方法 **/
let url = "https://randomuser.me/api/";
$.ajax({
  url: url,
}).done(function(data){
  let seed = data.info.seed;
  console.log(seed);
  $.ajax({
    url: `${url}?seed=${seed}`,
  }).done(function(data){
    let seed = data.info.seed;
    console.log(seed);
  })
});

/** axios方法 **/
let url = "https://randomuser.me/api/";
axios.get(url)
  .then((data1)=>{
    let seed1 = data1.data.info.seed;
    console.log(seed1);
    return axios.get(`${url}?seed=${seed1}`)
      .then((data2)=>{
        let seed2 = data2.data.info.seed;
        console.log(seed2);
      })
  })
```