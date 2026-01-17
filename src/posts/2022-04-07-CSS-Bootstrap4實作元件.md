---
title: 【CSS】Bootstrap4實作元件
date: 2022-04-07
tags: ["css"]
---
#
## 提示訊息(Alert)
#
<!--more-->
#
```html
<div class="alert alert-{color} alert-dismissible show">
   提示訊息
  <button type="button" class="close" data-dismiss="alert">
    <span>&times;</span>
  </button>
</div>
```
#
`點擊Ｘ關閉效果，需載入bootstrap的js`
#
-----------------------------------------------
#
## 小徽章(Badge)
#
```html
<a href="#" class="badge badge-{color}">文字內容</a>
```
#
```html
<span class="badge badge-{color}">文字內容</span>
```
#
`加.badge-pill可以讓徽章更圓潤`
#
-----------------------------------------------
#
## 麵包屑(Breakcrumb)
#
```html
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">首頁</a></li>
  <li class="breadcrumb-item"><a href="#">圖書館</a></li>
  <li class="breadcrumb-item active">資料</li>
</ol>
```
#
```html
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">首頁</a>
  <a class="breadcrumb-item" href="#">圖書館</a>
  <a class="breadcrumb-item active" href="#">資料</a>
</nav>
```
#
`修改分隔符號.breadcrumb-item::before{content:"/"}`
#
-----------------------------------------------
#
## 按鈕(Button)
#
```html
<button type="button" class="btn btn-{color} btn-{size}">按鈕</button>
```
#
```html
<a class="btn btn-{color} btn-{size}" href="#">連結按鈕</a>
```
#
```html
<input class="btn btn-{color} btn-{size}" type="button" value="按鈕">
```
#
`{size}可填sm、lg、block(撐滿容器)，.disabled不能點擊狀態`
#
-----------------------------------------------
#
## 按鈕群組(Button Group)
#
```html
<div class="btn-group btn-group-{size}">
  <button type="button" class="btn btn-{color}">按鈕1</button>
  <button type="button" class="btn btn-{color}">按鈕2</button>
  <button type="button" class="btn btn-{color}">按鈕3</button>
</div>
```
#
-----------------------------------------------
#
## 卡片(Card)
#
#### 一般卡片結構
#
```html
<div class="card" style="width:{size}">
  <img src="..." class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">標題</h5>
    <p class="card-text">內容文字</p>
    <a href="#" class="btn btn-{color}">按鈕</a>
  </div>
</div>
```
#
`.card有border可用來包裹物件可加入h-100撐開高度，.card-body有padding`
#
#### 頁籤卡片結構
#
```html
<div class="card">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">頁籤一</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">頁籤二</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">頁籤三</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">標題</h5>
    <p class="card-text">內容文字</p>
    <a href="#" class="btn btn-{color}">按鈕</a>
  </div>
</div>
```
#
`增加.active樣式表示正在哪個頁籤上`
#
#### 卡片群組
#
```html
<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">標題</h5>
      <p class="card-text">內容文字</p>
    </div>
  </div>
</div>
```
#
`.card-group可更換成.card-deck或.card-column(瀑布流)`
#
-----------------------------------------------
#
## 輪播(Carousel)
#
```html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item carousel-height bg-cover active" style="background-image:url(...)"></div>
    <div class="carousel-item carousel-height bg-cover" style="background-image:url(...)"></div>
    <div class="carousel-item carousel-height bg-cover" style="background-image:url(...)"></div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```
#
```css
.bg-cover{
  background-size: cover;
  background-position: center center;
}
.carousel-height{
  height: 450px;
}
```
#
`.active預設輪播項目`
#
`在.carousel加入.data-interval="1000"每1秒跳下一張`
#
`在.carousel加入.data-wrap="false"跳到最後一張時不會再跳回第一張`
#
```js
$(".carousel").carousel({
  interval: 1000,
  wrap: false
});
```
#
-----------------------------------------------
#
## 折疊(Collapse)
#
```html
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#one">折疊ㄧ</button>
    </div>
    <div id="one" class="collapse show" data-parent="#accordionExample">
      <div class="card-body">內容文字1</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#two">折疊二</button>
    </div>
    <div id="two" class="collapse" data-parent="#accordionExample">
      <div class="card-body">內容文字2</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#three">折疊三</button>
    </div>
    <div id="three" class="collapse" data-parent="#accordionExample">
      <div class="card-body">內容文字3</div>
    </div>
  </div>
</div>
```
#
`.show預設展開內容`
#
-----------------------------------------------
#
## 下拉選單(Dropdown)
#
```html
<div class="dropdown">
  <button class="btn btn-{color} dropdown-toggle" type="button" data-toggle="dropdown">下拉標題</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">項目一</a>
    <a class="dropdown-item" href="#">項目二</a>
    <a class="dropdown-item" href="#">項目三</a>
  </div>
</div>
```
#
-----------------------------------------------
#
## 表單(Forms)
#
```html
<form>
  <div class="form-row">
    <div class="col">
      <label for="firstname">姓</label>
      <input type="text" class="form-control" id="firstname" placeholder="請輸入姓氏">
    </div>
    <div class="col">
      <label for="lastname">名</label>
      <input type="text" class="form-control" id="lastname" placeholder="請輸入名字">
    </div>
  </div>
  <div class="form-group">
    <label for="email">聯絡信箱</label>
    <input type="email" class="form-control" id="email" placeholder="請輸入電子信箱">
  </div>
  <div class="form-group">
    <label for="phone">聯絡電話</label>
    <input type="tel" class="form-control" id="phone" placeholder="請輸入手機號碼">
  </div>
  <div class="form-group">
    <label for="question">問題類型</label>
    <select class="form-control" id="question">
      <option>選項一</option>
      <option>選項二</option>
      <option>選項三</option>
    </select>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">核選方塊</label>
  </div>
  <div class="form-group">
    <label for="content">內容訊息</label>
    <textarea class="form-control" id="content" rows="3"></textarea>
  </div>
</form>
```
#
-----------------------------------------------
#
## 聯絡表單(Forms)
#
```html
<form>
  <div class="form-row">
    <div class="col">
      <label for="firstname">姓</label>
      <input type="text" class="form-control form-control-{size}" id="firstname" placeholder="請輸入姓氏">
    </div>
    <div class="col">
      <label for="lastname">名</label>
      <input type="text" class="form-control form-control-{size}" id="lastname" placeholder="請輸入名字">
    </div>
  </div>
  <div class="form-group">
    <label for="email">聯絡信箱</label>
    <input type="email" class="form-control form-control-{size}" id="email" placeholder="請輸入電子信箱">
  </div>
  <div class="form-group">
    <label for="phone">聯絡電話</label>
    <input type="tel" class="form-control form-control-{size}" id="phone" placeholder="請輸入手機號碼">
  </div>
  <div class="form-group">
    <label for="question">問題類型</label>
    <select class="form-control form-control-{size}" id="question">
      <option>選項一</option>
      <option>選項二</option>
      <option>選項三</option>
    </select>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="checkbox">
    <label class="form-check-label" for="checkbox">核選方塊</label>
  </div>
  <div class="form-group">
    <label for="content">內容訊息</label>
    <textarea class="form-control" id="content" rows="3"></textarea>
  </div>
  <button class="btn btn-{color}" type="submit">送出</button>
</form>
```
#
#### 驗證表單
#
```html

<form action="..." class="needs-validation" novalidate>
  <div class="form-group">
      <label for="username">姓名*</label>
      <input type="text" class="form-control" id="username" placeholder="請輸入姓名" required>
      <div class="invalid-feedback">請填寫此欄位</div>
  </div>
  <div class="form-group">
      <label for="phonenumber">請輸入電話號碼*</label>
      <input type="tel" class="form-control" id="phonenumber" placeholder="請輸入電話號碼" required>
      <div class="invalid-feedback">請填寫此欄位</div>
  </div>
  <div class="form-group">
      <label for="email">請輸入Email*</label>
      <input type="email" class="form-control" id="email" placeholder="name@examlpe.com" required>
  </div>
  <div class="custom-control custom-radio">
      <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" required>
      <label class="custom-control-label" for="customRadio1">需要素食</label>
  </div>
  <div class="custom-control custom-radio">
      <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" required>
      <label class="custom-control-label" for="customRadio2">不需要素食</label>
      <div class="invalid-feedback">請選擇是否素食</div>
  </div>
  <div class="text-right">
      <button type="button" class="btn btn-secondary">取消</button>
      <button type="submit" class="btn btn-primary">送出</button>
  </div>
</form>
```
#
```js
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
```
#
`在<form>加入.needs-validation和novalidate可增加驗證表單功能`
#
-----------------------------------------------
#
## 輸入群組(Input group)
#
```html
<div class="input-group input-group-{size}">
  <div class="input-group-prepend">
    <span class="input-group-text">請輸入金額</span>
  </div>
  <input type="text" class="form-control">
  <div class="input-group-append">
    <span class="input-group-text">美元(USD)</span>
  </div>
</div>
```
#
`.input-group會滿版，可在外層加入.form-inline`
#
-----------------------------------------------
#
## 超大看板(Jumbotron)
#
```html
<div class="jumbotron">
  <h1 class="display-{num}">標題</h1>
  <p class="lead">內容文字</p>
  <a class="btn btn-{color}" href="#">按鈕</a>
</div>
```
#
`增加.jumbotron-fluid可以取消圓角`
#
-----------------------------------------------
#
## 清單群組(List Group)
#
```html
<div class="row">
  <div class="col-4">
    <div class="list-group">
      <a class="list-group-item list-group-item-action active" data-toggle="list" href="#one">選項一</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#two">選項二</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#three">選項三</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#four">選項四</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content">
      <div class="tab-pane show active" id="one">內容文字1</div>
      <div class="tab-pane" id="two">內容文字2</div>
      <div class="tab-pane" id="three">內容文字3</div>
      <div class="tab-pane" id="four">內容文字4</div>
    </div>
  </div>
</div>
```
#
`.active表示目前點擊，.show預設展開`
#
-----------------------------------------------
#
## 媒體對象(Media Object)
#
```html
<div class="media">
  <img src="...">
  <div class="media-body">
    <h5>標題</h5>
    內容文字
  </div>
</div>
```
#
-----------------------------------------------
#
## 進入頁面彈出視窗(Modal)
#
```html
<!-- 增加data-backdrop="static"點擊modal以外不會關閉 -->
<div class="modal fade" data-backdrop="static" id="myModal">
  <!-- modal-lg 調整modal大小 -->
  <div class="modal-dialog">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title">標題</h5>
        <!-- data-dismiss="modal" 關閉modal -->
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">內容文字</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-{color}" data-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-{color}">確定</button>
      </div>
    </div>
  </div>
</div>
```
#
```js
setTimeout(function(){
  $("myModal").modal("show");
},5000);
```
#
-----------------------------------------------
#
## 按鈕註冊視窗
#
```html
<!-- 按鈕 -->
<a href="#" class="btn btn-outline-primary mr-2" data-toggle="modal" data-target="#loginmodal">登入</a>
<a href="#" class="btn btn-primary px-4" data-toggle="modal" data-target="#signinmodal">註冊</a>
<!-- 登入視窗 -->
<div class="modal fade" id="loginmodal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="staticBackdropLabel">登入服務</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form>
                    <div class="form-group">
                        <label for="loginemail">Email</label>
                        <input type="email" class="form-control" id="loginemail"
                            aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">我們絕不會隨意將你的 email 給予第三者</small>
                    </div>
                    <div class="form-group">
                        <label for="loginpassword">密碼</label>
                        <input type="password" class="form-control" id="loginpassword" placeholder="Password">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="remember">
                        <label class="form-check-label" for="remember">記住帳號</label>
                    </div>
                    <div class="modal-footer pt-3 p-0">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#signinmodal">還沒有帳號了？</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">登入</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    <!-- 註冊視窗 -->
<div class="modal fade" id="signinmodal" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-warning text-white">
                <h5 class="modal-title" id="staticBackdropLabel">註冊服務</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body pb-0">
                <form class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <h3 class="font-weight-bold text-secondary">註冊六角西餐廳</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem omnis, voluptatibus harum asperiores exercitationem, vel maxime sequi eum suscipit quisquam laborum laudantium dolore? Quis rem est illo quam assumenda.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem omnis, voluptatibus harum asperiores exercitationem, vel maxime sequi eum suscipit quisquam laborum laudantium dolore? Quis rem est illo quam assumenda.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="signinemail">Email</label>
                                <input type="email" class="form-control" id="signinemail"
                                    aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">我們絕不會隨意將你的 email 給予第三者</small>
                            </div>
                            <div class="form-group">
                                <label for="signinpassword">密碼</label>
                                <input type="password" class="form-control" id="signinpassword" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="signinpassword2">確認密碼</label>
                                <input type="password" class="form-control" id="signinpassword2" placeholder="Password">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="agree">
                                <label class="form-check-label" for="agree">同意條款</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer pt-3 p-0">
                        <a href="#" class="mr-auto" data-dismiss="modal" data-toggle="modal"
                            data-target="#loginmodal">已經有帳號了？</a>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">註冊</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
```
#
```js
$(document).ready(function(){
            $("a[data-dismiss='modal'][data-toggle='modal']").on("click",function(){
                let target = $(this).data("target");
                $(target).on("shown.bs.modal",function(){
                    $("body").addClass("modal-open");
                });  
            });
        });
```
#
`model切換時<body>要加上.modal-open手機版才能捲軸滑動`
#
-----------------------------------------------
#
## 導覽(Nav)
#
```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <button class="nav-link active" data-toggle="tab" data-target="#one" type="button">選項一</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-toggle="tab" data-target="#two" type="button">選項二</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-toggle="tab" data-target="#three" type="button">選項三</button>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="one">內容文字1</div>
  <div class="tab-pane fade" id="two">內容文字2</div>
  <div class="tab-pane fade" id="three">內容文字3</div>
</div>
```
#
-----------------------------------------------
#
## 導覽列(Navbar)
#
```html
<!-- .navbar-expand-lg 超過lg寬度就展開 -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#one">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="one">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">連結一</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">連結二</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">連結三</a>
      </li>
    </ul>
    <!-- .form-inline 並排不伸展 -->
    <form class="form-inline">
      <input class="form-control" type="search" placeholder="搜尋">
      <button class="btn btn-primary" type="submit">搜尋</button>
    </form>
  </div>
</nav>
```
#
`若要將選單連結向右推，在<ul>上加上.ml-auto`
#
-----------------------------------------------
#
## 分頁(Pagination)
#
```html
<nav>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#">
        <span>&laquo;</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <span>&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```
#
-----------------------------------------------
#
## 時間軸(Timeline)
#
```html
<div class="container">
  <div class="timeline">
    <div class="timepoint"></div>
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-sm-right">標題</h2>
        <p class="text-sm-right">內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
  <div class="timeline">
    <div class="timepoint"> </div>
    <div class="row flex-sm-row-reverse">
      <div class="col-sm-6">
        <h2 class="title">標題</h2>
        <p>內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
  <div class="timeline">
    <div class="timepoint"> </div>
    <div class="row">
      <div class="col-sm-6">
        <h2 class="text-sm-right">標題</h2>
        <p class="text-sm-right">內文</p>
      </div>
      <div class="col-sm-6">圖片</div>
    </div>
  </div>
</div>
```
#
```css
.timeline{
  position: relative;
}

.timeline:after{
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(50% - 3px);
  width: 3px;
  background-color: #dddddd;
}

.timepoint{
  position: relative;
}

.timepoint:after{
  content: " ";
  position: absolute;
  left: calc(50% - 6.5px);
  width: 10px;
  height: 10px;
  border: solid 3px #dddddd;
  border-radius: 100%;
  background-color: #fff;
  z-index: 1;
}
```
#
-----------------------------------------------
#
## 表格(table)
#
```html
<table class="table table-responsive-sm">
    <thead>
        <tr>
            <th width="50">日期</th>
            <th width="80">訂單數</th>
            <th>營業額</th>
            <th>淨利潤</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9/1</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
        <tr>
            <td>9/2</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
        <tr>
            <td>9/3</td>
            <td>300</td>
            <td class="text-right">256,000</td>
            <td class="text-right">168,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th class="text-right" colspan="6">月總營收</td>
            <td class="text-right">3,750,500</td>
        </tr>
        <tr>
            <th class="text-right" colspan="6">月總淨利潤</td>
            <td class="text-right">2,140,500</td>
        </tr>
    </tfoot>
</table>
```
#
`在<table>加入.table-responsive-{size}可出現x軸，.table-hover有:hover效果`
#