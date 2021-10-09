# 餐廳清單

收集了各地受歡迎的餐廳

## 功能列表

- 縮短網址

### 需求

- Node.js & npm
- port 3000
- MongoDB

### 安裝

1.在本地目錄 clone repo 或 [download](https://github.com/herojia2021/restaurant-list/archive/refs/heads/master.zip)

```
git clone https://github.com/herojia2021/restaurant-list.git
```

2.安裝相依套件

```
cd restaurant-list
```

```
npm install
```

3.匯入種子資料

```
npm run seed
```

4.開啟程式

```
npm run start
```

- 終端顯示 `Express is running on http://localhost:3000` 即啟動完成，
- 用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 使用程式

## 運行截圖

![首頁](/public/img/index.jpg)

## 相依套件

- [Express](https://www.npmjs.com/package/express) - Framework
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - Template Engine
- [Mongoose](https://www.npmjs.com/package/mongoose) - ODM
