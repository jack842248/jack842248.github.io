---
title: 【JS】原型與建構函式
date: 2021-03-06
tags: ["javaScript"]
---
#
## 原型(Prototype)
#
<!--more-->
#
* 純值可用**建構式**繼承在原型下。
#
* 原型可利用**建構函式**新增屬性。
#
* 原型有向上查找屬性的功能，而且屬性是**共用**的。
#
* 原型鍊:
#
|建構式|原型(上層)|原型(上上層)|
|---|---|---|
|new Object()|---|Object|
|new Array()|Array|Object|
|new Number()|Number|Object|
|new String()|String|Object|
|new Boolean()|Boolean|Object|
#
```js
var a = [1 , 2 , 3];
var b = [4 , 5 , 6];
a.__proto__.getLast = function(){
  //在上層[Array]原型上，新增[getLast]屬性
  return this[this.length - 1]
  //回傳[最後一項]陣列
}
console.log(b.getLast());  //6
//因為a、b都是在[Array]原型底下，所有都可以使用[getLast]屬性
```
#
-----------------------------------------------
#
### 自訂義原型物件 : 
#
* \_\_proto\_\_ : 是原型的上層。
#
* prototype : 是原型裡的函式。
#
```js
/** 建構[狗]原型 **/
function Dog(name,color,size){
  //使用建構函式，建構[Dog]原型
  this.name = name;
  this.color = color;
  this.size = size;
}
var Bibi = new Dog("比比","棕色","小型");
//純值[Bibi]使用建構式，繼承在[Dog]原型底下，並帶入屬性的值

Dog.prototype.bark = function(){
  //在[Dog]原型函式裡，新增[bark]屬性
  return this.name + "吠叫";
}
console.log(Bibi.name,Bibi.color,Bibi.size);  //"比比"  //"棕色"  //"小型"
console.log(Bibi.bark());  //"比比吠叫"

/** 自定義日期 **/
var date = new Date();
//date本身是一個函數
//所以date有許多prototype(函式)可以使用
Date.prototype.getToday = function(){
  //Date物件裡的函式中新增屬性
  var dd = this.getDate();
  //使用date裡的屬性getDate賦予到dd
  var mm = this.getMonth()+1;
  //getMonth屬性，取道的值是從0開始所以要+1
  var yyyy = this.getFullYear();
  return yyyy+"/"+mm+"/"+dd;
  //將結果組成想要的字串，然後回傳
}
console.log(date.getToday());  //2021/1/28
```
#
-----------------------------------------------
#
### 自訂義原型層 : 
#
* 使用**Object.create()**，讓物件繼承到原型下，覆蓋 ***constructor*** 。
#
* 使用 **call()** 將原型帶入另一個**函式建構式**。
#
```js
function Animal(kingdom,family){
  //使用建構函式建立[Animal]原型
  this.kingdom = kingdom;
  this.family = family;
}
function Dog(name,color,size){
  Animal.call(this,"動物界","犬科");
  //讓[Dog]原型物件，傳入[Animal]原型裡，並帶兩個值到[Animal]參數裡
  this.name = name;
  this.color = color;
  this.size = size;
}
Dog.prototype = Object.create(Animal.prototype);
//讓[Dog]原型，繼承在[Animal]原型下
Animal.prototype.move = function(){
  //在[Animal]原型裡函式，新增[move]屬性
  return this.name + "移動";
}
var Bibi = new Dog("比比","棕色","小型");
Dog.prototype.bark = function(){
  return this.name + "吠叫";
}
Dog.prototype.constructor = Dog;
//將原本[狗]的函式加回到[狗]原型

console.log(Bibi.kingdom,Bibi.family);  //"動物界"  //"犬科"
console.log(Bibi.move());  //比比移動
```
#
-----------------------------------------------
#
### 統整建構原型鍊 : 
#
|Bibi|Dog原型|Animal原型|Object原型|function原型|
|---|---|---|---|---|
||name|比比|||
||color|棕色|||
||size|小型|||
||kingdom|動物界|||
||family|犬科|||
||function bark(){...}|吠叫|||
||constructor|function Dog(){...}|||
||\_\_proto\_\_|Animal|||
|||function move(){...}|移動||
|||constructor|function Animal(){...}||
|||\_\_proto\_\_|Object||
||||constructor|function Object(){...}|
||||\_\_proto\_\_|null|
#
>以下驗證結果:
>
> * Bibi.__proto__ === Dog.prototype
> * Bibi.__proto__.__proto__ === Animal.prototype
> * Bibi.__proto__.__proto__.__proto__ === Object.prototype
> * Bibi.__proto__.__proto__.__proto__.__proto__ === null
> * Object.prototype.constructor === Object
> * Animal.prototype.constructor === Animal
> * Dog.prototype.constructor === Dog
> * Dog.prototype.bark === Bibi.bark
> * Animal.prototype.move === Bibi.move