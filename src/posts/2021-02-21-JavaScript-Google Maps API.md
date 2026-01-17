---
title: 【JS】Google Maps API
date: 2021-02-21
tags: ["javaScript"]
---
#
## 應用程式介面(Application Programming Interface)
#
<!--more-->
#
* 簡稱API。
#
* 應用程式提供的服務，用來接收或傳送資料給應用程式。例如 :

    * [Heroku](https://www.heroku.com/)，主機服務。

    * [GoogleMap](https://cloud.google.com/)，地圖導覽服務。

    * [Firebase](https://firebase.google.com/)，資料庫服務
#
-----------------------------------------------
#
## Google Map API
#
1. 在Google雲端平台創建一個帳戶(需綁定一張信用卡)。(不會自動收取費用，除非手動升級)
#
2. 在雲端平台上建立一個專案。
#
3. 點擊"地圖管理"→"CREATE NEW MAP ID"，新建一個ID。
#
4. 點擊"地圖樣式"→"CREATE NEW MAP STYLE"，新建一個地圖樣式。
#
5. 點擊"解決方案建構工具"→"將程式碼複製到剪貼簿"。
#
6. 貼到編輯器上，開始建置地圖。
#
-----------------------------------------------
#
### 初始化地圖
#
* 以夢時代為顯示中心。
#
```js
// <-----html----->
div#map
  script(src="https://maps.googleapis.com/maps/api/js?key={{{API金鑰}}}&callback=initMap&libraries=&v=weekly" defer)

// <-----css----->
#map
  height: 100%

html,body
  height: 100%
  margin: 0
  padding: 0

// <-----js----->
function initMap(){
//初始化
   const map = new google.maps.Map(document.getElementById("map"), {
  //新增一張地圖
    zoom: 15,
    //縮放距離1~22
    center:{lat: 22.5948959,lng: 120.3048485},
    //起始中心點位置
  });
}
```
#
-----------------------------------------------
#
### 建立一個Marker
#
* 建立夢時代marker。
#
```js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
  });
  const marker = new google.maps.Marker({
  //新增一個marker
    position: {lat: 22.5948959,lng: 120.3048485},
    //marker的座標位置
    map: map,
    //顯示在哪張地圖上
    title: "Dream Mall"
    //marker的位置名稱
  });
};
```
#
-----------------------------------------------
#
### 利用for迴圈建立多個Marker
#
* 建立台鋁MLD以及夢時代marker。
#
```js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
  });
  let markers = [
    {
      position:{lat: 22.5948959,lng: 120.3048485},
      map: map,
      title: "Dream Mall"
    },
    {
      position:{lat: 22.6029083,lng: 120.301739},
      map: map,
      title: "MLD"
    },
  ]
  for(let i=0;i<markers.length;i++){
    let marker = new google.maps.Marker(markers[i]);
  }
};
```
#
-----------------------------------------------
#
### 利用for迴圈建立多個Marker + ajax
#
* 建立高雄所有輕軌站marker。
#
```js
// <-----js----->
function initMap(){
  const map = new google.maps.Map(
    document.getElementById("map"), 
    {
    zoom: 13,
    center: {lat: 22.5985275,lng: 120.3237249}
    }
  );
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://data.kcg.gov.tw/dataset/f4375239-af26-40f6-8394-d942f3ecf753/resource/ad36b1f2-8a2c-4491-a516-da607bd96c39/download/light-rail-station.json");
  xhr.send(null);
  xhr.onload = function(){
    let data = JSON.parse(xhr.responseText);
    for(let i=0 ; i<data.length ; i++){
      let lng = data[i].Longitude;
      let lat = data[i].Latitude;
      let title = data[i]["車站中文名稱"];
      let markers = new google.maps.Marker(
        {
          position: {lng: lng,lat: lat},
          map: map,
          title: title
        }
      )
    }
  }
};
```
#
-----------------------------------------------
#
### 自訂marker樣式
#
```js
// <-----js----->
function initMap(){
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {lat: 22.5985275,lng: 120.3237249},
  });
  const marker = new google.maps.Marker({
    position: {lat: 22.5985275,lng: 120.3237249},
    map: map,
    title: "住家",
    //marker樣式
    icon: "https://i.imgur.com/7ZAeTg4.png"
  })
};
```
#
-----------------------------------------------
#
### 套用styles樣式
#
* [SNAZZY MAPS](https://snazzymaps.com/)網站，有提供許多Google Maps的樣式，可以拿來套用。
#
```js
// <-----js----->
function initMap(){
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center:{lat: 22.5948959,lng: 120.3048485},
    //設定樣式
    styles:[
      {
        "elementType": "labels",
        "stylers": [{"visibility": "off"},{"color": "#f49f53"}]
      },
      {
        "featureType": "landscape",
        "stylers": [{"color": "#f9ddc5"},{"lightness": -7}]
      },
      {
        "featureType": "road",
        "stylers": [{"color": "#813033"},{"lightness": 43}]
      },
      {
        "featureType": "poi.business",
        "stylers": [{"color": "#645c20"},{"lightness": 38}]
      },
      {
        "featureType": "water",
        "stylers": [{"color": "#1994bf"},{"saturation": -69},{"gamma": 0.99},{"lightness": 43}]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#f19f53"},{"weight": 1.3},{"visibility": "on"},{"lightness": 16}]
      },
      {
        "featureType": "poi.business"
      },
      {
        "featureType": "poi.park",
        "stylers": [{"color": "#645c20"},{"lightness": 39}]
      },
      {
        "featureType": "poi.school",
        "stylers": [{"color": "#a95521"},{"lightness": 35}]
      },
      {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#813033"},{"lightness": 38},{"visibility": "off"}]
      },
      {
        "elementType": "labels"
      },
      {
        "featureType": "poi.sports_complex",
        "stylers": [{"color": "#9e5916"},{"lightness": 32}]
      },
      {
        "featureType": "poi.government",
        "stylers": [{"color": "#9e5916"},{"lightness": 46}]
      },
      {
        "featureType": "transit.station",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit.line",
        "stylers": [{"color": "#813033"},{"lightness": 22}]
      },
      {
        "featureType": "transit",
        "stylers": [{"lightness": 38}]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [{"color": "#f19f53"},{"lightness": -10}]
      },
    ]
  });
};
```