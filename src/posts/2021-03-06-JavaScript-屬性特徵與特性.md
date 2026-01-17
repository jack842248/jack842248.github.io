---
title: 【JS】屬性特徵與特性
date: 2021-02-13
tags: ["javaScript"]
---
#
## Object.defineProperty()
#
<!--more-->
#
* 可以調整物件裡的屬性特徵。
#
|帶入的值|名稱|中文|預設值|例如|
|---|---|---|---|---|
|物件|Object||---|
|屬性|\"Attributes\"||---|
|參數a|value|屬性的值|---|
|參數b|writable|可否寫入|true|賦予(=)|
|參數c|configurable|可否被刪除|true|delete|
|參數d|enumerable|可否被列舉|true|for...in|
#
```js
var obj1 = {
  name:"蘋果",
  amount:100
}
Object.defineProperty(obj1 , "name" , {
  value: "香蕉",
  writable: true,
  configurable: true,
  enumerable: true
});
//var obj1 = {
//  name:"香蕉",
//  amount:100
//}

/** 如果writable: false **/
obj1.name = "鳳梨";
//無法修改，但不會出錯
//但是可以寫入子層屬性

/** 如果configurable: false **/
delete obj1.name;
//無法刪除，但不會出錯

/** 如果enumerable: false **/
for(var key in obj1){
  console.log(key);  //"amount"
}
```
#
> Object.defineProperty()，只能做到淺層保護。
#
-----------------------------------------------
#
## Object.preventExtensions、Object.seal、Object.freeze
#
* 可以調整物件本身特性。
#
* 以下三種方式可查看物件特性 : 

    * 使用 **Object.isExtensible()** 會回傳【是否可被擴充】。

    * 使用 **Object.isSealed()** 會回傳【是否被封裝】。

    * 使用 **Object.isFrozen()** 會回傳【是否被凍結】。
#
|方法|Object.preventExtensions()|Object.seal()|Object.freeze()|
|---|---|---|---|
|新增屬性|不行|不行|不行|
|刪除屬性|可以|不行|不行|
|修改屬性|可以|可以|不行|
|新增物件裡的屬性|可以|可以|可以|
|調整屬性的特徵|可以|不行|不行|
|以下檢查回傳|
|是否可被擴充|false|false|false|
|是否被封裝|false|true|true|
|是否被凍結|false|false|true|
|以下屬性特徵|
|可否寫入|true|true|false|
|可否被刪除|true|false|false|
|可否被列舉|true|true|true|
-----------------------------------------------
#
### 修改自定義原型的屬性特徵
#
* 自訂原型的屬性，預設是可以被列舉的。若要修改 : 

    1. 使用**for...in**可以列舉出所有物件屬性。(範例一)

    2. 使用**Object.hasOwnProperty()**，會回傳該原型的屬性是否存在。(範例二)

    3. 使用**Object.getOwnPropertyDescriptor()**，查看物件裡的屬性特徵。(範例三)

    4. 在建構函式時，使用**Object.defineProperty()**，可調整屬性特徵。
#
```js
function Dog(name,color){
  this.name = name;
  this.color = color;
};
var Bibi = new Dog("比比","棕色");
Dog.prototype.size = "小型";

/** 範例一 **/
for(key in Bibi){
  console.log(key);  //"name"  //"color"  //"size"
}

/** 範例二 **/
console.log(Bibi.hasOwnProperty("name"));  //true
console.log(Bibi.hasOwnProperty("size"));  //false

/** 範例三 **/
console.log(Object.getOwnPropertyDescriptor(Bibi.__proto__,"size"));
//Object{
//  configurable: ture,
//  enumerable: ture,  //是否可被列舉:可以
//  value: "小型",
//  writable: true
//}

/** 範例四 **/
function Dog(name,color){
  this.name = name;
  this.color = color;
  Object.defineProperty(Dog.prototype,"size",{
    enumerable: false
  });
};

/** 篩選掉不在物件裡的屬性 **/
for(const key in Bibi){
  if(Bibi.hasOwnProperty(key)){
    console.log(key);
  }
}
```
#
> 原生原型屬性特徵，預設是不可被列舉的。
#
-----------------------------------------------
#
## Getter、Setter
#
* 直接在物件裡面新增**方法**來改變值。

    * set 存值的方法，可傳入參數，。

    * get 取值的方法，不會傳入參數。
#
* 若物件被**凍結(freeze)**，***set***無法改變屬性。
#
* 若使用 **嚴格模式(use strict)** ，set、get都無法使用。
#
```js
//** 值直接寫在物件實字 **/
var wallet = {
  total: 100,
  set save(price){
    this.total = this.total + price / 2;
    //100 + (300/2);
  },
  get save(price){
    return this.total / 2;
  }
}
wallet.save = 300;
console.log(wallet.save);  //125

//** 在調整屬性時增加 **/
var wallet = {
  total: 100
};
Object.defineProperty(wallet,"save",{
  configurable: true,
  enumerable: true,
  set: function(price){
    this.total = this.total + price / 2;
  },
  get: function(){
    return this.total / 2;
  }
});
wallet.save = 300;
console.log(wallet);  //125

/** 進階範例一 **/
var a = [1,2,3];
Object.defineProperty(Array.prototype,"Getlast",{
  get: function(){
    return this[this.length - 1];
  }
});
console.log(a.Getlast);  //3
```