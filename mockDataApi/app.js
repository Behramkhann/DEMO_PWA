const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Origin",
    "Orign",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization"
  );

  if (req.method === "OPTION") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
//routes
const products = [
  {
    id: 1,
    name: "Shirt",
    price: "55$",
    image:
      "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
  },
  {
    id: 2,
    name: "Shirt",
    price: "55$",
    image:
      "https://cdn.shopify.com/s/files/1/0070/8480/2117/products/Tact-and-Stone-Ize-Hemp-Tee-burgundy-Model-hero_1400x.png?v=1589507566",
  },
  {
    id: 3,
    name: "Shirt",
    price: "55$",
    image:
      "https://www.rollingstone.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-21-at-13.02.55-e1632255639909.png?w=428",
  },
  {
    id: 4,
    name: "Shirt",
    price: "55$",
    image:
      "https://www.rollingstone.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-21-at-13.02.55-e1632255639909.png?w=428",
  },
  {
    id: 5,
    name: "Shirt",
    price: "55$",
    image:
      "https://cdn.shopify.com/s/files/1/0070/8480/2117/products/Tact-and-Stone-Ize-Hemp-Tee-burgundy-Model-hero_1400x.png?v=1589507566",
  },
];

app.get("/products", (req, res, next) => {
  res.status(200).json(products);
});
app.get("/products/:id", (req, res, next) => {
  let reqId = req.params.id;
  let findProduct = products.find((product) => {
    return product.id == reqId;
  });
  res.status(200).json({
    data: findProduct,
  });
});

app.use("/", (req, res, next) => {
  res.json({
    app: "RUNNNING",
  });
});

module.exports = app;
