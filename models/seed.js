const mongoose = require("mongoose");
const Product = require("./article");
const Category = require("./category");

mongoose.connect(
  "mongodb://localhost:27017/avito",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Успешно подключились к базе")
);

async function myCategory() {
  const product = [];
  const category = [];

  // category.push(new Category({name: 'Товары для дома и дачи'}))
  // category.push(new Category({name: 'Недвижимость'}))
  // category.push(new Category({name: 'Транспорт'}))

  product.push(
    new Product({
      model: "shirt",
      type: "-",
      mileage: 1,
      price: 200,
      categ: "60b2b4f0e8388b4004e0be2f",
      photo:
        "https://www.b-shop.ru/upload/resize_cache/iblock/f94/560_560_1/f9415f3a0ffffe072083e9853755eca2.jpg",
    })
  );
  product.push(
    new Product({
      model: "Mercedes-benz",
      type: "-",
      mileage: 1,
      price: 100,
      categ: "60b401d0d849e33db99e76ff",
      photo:
        "https://cdnimg.rg.ru/img/content/174/49/82/457_d_850.jpg",
    })
  );
  product.push(
    new Product({
      model: "BMW",
      type: "-",
      mileage: 1,
      price: 300,
      categ: "60b401d0d849e33db99e76ff",
      photo:
        "https://cdnimg.rg.ru/img/content/174/49/82/457_d_850.jpg",
    })
  );
  // await Category.insertMany(category)
  await Product.insertMany(product);
  await mongoose.disconnect();
}
myCategory();