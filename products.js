/* =========================================================
   USWA NAZISH CLOTHING STORE
   PRODUCTS DATABASE
========================================================= */


/* =========================================================
   PRODUCT IMAGE FOLDER
========================================================= */

const IMAGE_PATH = "images/";


/* =========================================================
   LADIES PRODUCTS
========================================================= */

const ladiesProducts = [

    {
        id: "L001",
        name: "Premium Printed Lawn 2 Piece",
        category: "lawn",
        type: "Ladies",
        fabric: "Lawn",
        pieces: "2 Piece",
        description: "Beautiful printed lawn shirt with matching trouser.",
        price: 3500,
        salePrice: 2999,
        image: IMAGE_PATH + "ladies-lawn-2piece-01.jpg",
        badge: "SALE",
        isNew: false
    },

    {
        id: "L002",
        name: "Luxury Printed Lawn 3 Piece",
        category: "lawn",
        type: "Ladies",
        fabric: "Lawn",
        pieces: "3 Piece",
        description: "Elegant printed lawn with shirt, trouser and dupatta.",
        price: 4500,
        salePrice: 3799,
        image: IMAGE_PATH + "ladies-lawn-3piece-01.jpg",
        badge: "SALE",
        isNew: true
    },

    {
        id: "L003",
        name: "Classic Cotton 2 Piece",
        category: "cotton",
        type: "Ladies",
        fabric: "Cotton",
        pieces: "2 Piece",
        description: "Soft and comfortable cotton fabric for everyday wear.",
        price: 3200,
        salePrice: 2799,
        image: IMAGE_PATH + "ladies-cotton-2piece-01.jpg",
        badge: "POPULAR",
        isNew: false
    },

    {
        id: "L004",
        name: "Premium Cotton 3 Piece",
        category: "cotton",
        type: "Ladies",
        fabric: "Cotton",
        pieces: "3 Piece",
        description: "Premium cotton collection with beautiful matching dupatta.",
        price: 4200,
        salePrice: 3599,
        image: IMAGE_PATH + "ladies-cotton-3piece-01.jpg",
        badge: "NEW",
        isNew: true
    },

    {
        id: "L005",
        name: "Premium Washing Wear 2 Piece",
        category: "washing",
        type: "Ladies",
        fabric: "Washing Wear",
        pieces: "2 Piece",
        description: "Comfortable washing wear fabric for regular use.",
        price: 3300,
        salePrice: 2899,
        image: IMAGE_PATH + "ladies-washing-2piece-01.jpg",
        badge: "SALE",
        isNew: false
    },

    {
        id: "L006",
        name: "Printed Washing Wear 3 Piece",
        category: "washing",
        type: "Ladies",
        fabric: "Washing Wear",
        pieces: "3 Piece",
        description: "Beautiful printed washing wear with matching dupatta.",
        price: 4300,
        salePrice: 3699,
        image: IMAGE_PATH + "ladies-washing-3piece-01.jpg",
        badge: "NEW",
        isNew: true
    },

    {
        id: "L007",
        name: "Luxury Linen 2 Piece",
        category: "linen",
        type: "Ladies",
        fabric: "Linen",
        pieces: "2 Piece",
        description: "Premium linen fabric designed for elegant seasonal wear.",
        price: 3900,
        salePrice: 3299,
        image: IMAGE_PATH + "ladies-linen-2piece-01.jpg",
        badge: "NEW",
        isNew: true
    },

    {
        id: "L008",
        name: "Luxury Linen 3 Piece",
        category: "linen",
        type: "Ladies",
        fabric: "Linen",
        pieces: "3 Piece",
        description: "Premium linen shirt, trouser and beautiful dupatta.",
        price: 4900,
        salePrice: 4199,
        image: IMAGE_PATH + "ladies-linen-3piece-01.jpg",
        badge: "PREMIUM",
        isNew: true
    },

    {
        id: "L009",
        name: "Printed Dupatta Collection",
        category: "lawn",
        type: "Ladies",
        fabric: "Printed",
        pieces: "Dupatta",
        description: "Beautiful printed dupatta collection with elegant designs.",
        price: 1500,
        salePrice: 1199,
        image: IMAGE_PATH + "ladies-dupatta-01.jpg",
        badge: "SALE",
        isNew: false
    },

    {
        id: "L010",
        name: "Elegant Karhai Collection",
        category: "embroidered",
        type: "Ladies",
        fabric: "Embroidered",
        pieces: "3 Piece",
        description: "Elegant embroidered and karhai fabric for special occasions.",
        price: 6500,
        salePrice: 5499,
        image: IMAGE_PATH + "ladies-karhai-01.jpg",
        badge: "PREMIUM",
        isNew: true
    },

    {
        id: "L011",
        name: "Luxury Embroidered 2 Piece",
        category: "embroidered",
        type: "Ladies",
        fabric: "Embroidered",
        pieces: "2 Piece",
        description: "Beautiful embroidered shirt and trouser combination.",
        price: 5200,
        salePrice: 4499,
        image: IMAGE_PATH + "ladies-embroidered-2piece-01.jpg",
        badge: "NEW",
        isNew: true
    },

    {
        id: "L012",
        name: "Premium Winter Collection",
        category: "winter",
        type: "Ladies",
        fabric: "Winter",
        pieces: "3 Piece",
        description: "Warm and elegant winter fabric collection.",
        price: 5500,
        salePrice: 4699,
        image: IMAGE_PATH + "ladies-winter-3piece-01.jpg",
        badge: "WINTER",
        isNew: true
    },

    {
        id: "L013",
        name: "Winter Linen Printed 3 Piece",
        category: "winter",
        type: "Ladies",
        fabric: "Winter Linen",
        pieces: "3 Piece",
        description: "Stylish printed winter linen with matching dupatta.",
        price: 5800,
        salePrice: 4999,
        image: IMAGE_PATH + "ladies-winter-linen-01.jpg",
        badge: "WINTER",
        isNew: false
    },

    {
        id: "L014",
        name: "Printed Lawn Premium Design",
        category: "lawn",
        type: "Ladies",
        fabric: "Lawn",
        pieces: "3 Piece",
        description: "Premium printed lawn collection with beautiful colors.",
        price: 4800,
        salePrice: 3999,
        image: IMAGE_PATH + "ladies-lawn-printed-01.jpg",
        badge: "HOT",
        isNew: true
    },

    {
        id: "L015",
        name: "Luxury Karhai 3 Piece",
        category: "embroidered",
        type: "Ladies",
        fabric: "Karhai",
        pieces: "3 Piece",
        description: "Detailed karhai work with premium fabric and dupatta.",
        price: 7200,
        salePrice: 5999,
        image: IMAGE_PATH + "ladies-karhai-3piece-01.jpg",
        badge: "LUXURY",
        isNew: true
    }

];


/* =========================================================
   GENTS PRODUCTS
========================================================= */

const gentsProducts = [

    {
        id: "G001",
        name: "Luxury Giza Cotton",
        category: "gents-cotton",
        type: "Gents",
        fabric: "Giza Cotton",
        pieces: "Unstitched",
        description: "Premium Giza cotton fabric for elegant shalwar kameez.",
        price: 4500,
        salePrice: 3899,
        image: IMAGE_PATH + "gents-giza-cotton-01.jpg",
        badge: "PREMIUM",
        isNew: true
    },

    {
        id: "G002",
        name: "Premium Cotton Shalwar Kameez",
        category: "gents-cotton",
        type: "Gents",
        fabric: "Cotton",
        pieces: "Unstitched",
        description: "Comfortable premium cotton fabric for daily wear.",
        price: 3800,
        salePrice: 3299,
        image: IMAGE_PATH + "gents-cotton-01.jpg",
        badge: "SALE",
        isNew: false
    },

    {
        id: "G003",
        name: "Classic Washing Wear",
        category: "gents-washing",
        type: "Gents",
        fabric: "Washing Wear",
        pieces: "Unstitched",
        description: "Comfortable washing wear fabric for everyday use.",
        price: 3500,
        salePrice: 2999,
        image: IMAGE_PATH + "gents-washing-01.jpg",
        badge: "POPULAR",
        isNew: false
    },

    {
        id: "G004",
        name: "Premium Washing Wear",
        category: "gents-washing",
        type: "Gents",
        fabric: "Washing Wear",
        pieces: "Unstitched",
        description: "Premium quality washing wear in beautiful colors.",
        price: 4200,
        salePrice: 3599,
        image: IMAGE_PATH + "gents-washing-premium-01.jpg",
        badge: "NEW",
        isNew: true
    },

    {
        id: "G005",
        name: "Luxury Winter Fabric",
        category: "gents-winter",
        type: "Gents",
        fabric: "Winter",
        pieces: "Unstitched",
        description: "Warm premium winter fabric for shalwar kameez.",
        price: 5000,
        salePrice: 4299,
        image: IMAGE_PATH + "gents-winter-01.jpg",
        badge: "WINTER",
        isNew: true
    },

    {
        id: "G006",
        name: "Premium Winter Collection",
        category: "gents-winter",
        type: "Gents",
        fabric: "Winter",
        pieces: "Unstitched",
        description: "Elegant winter fabric collection for the season.",
        price: 5500,
        salePrice: 4699,
        image: IMAGE_PATH + "gents-winter-premium-01.jpg",
        badge: "NEW",
        isNew: true
    },

    {
        id: "G007",
        name: "Summer Cotton Collection",
        category: "gents-summer",
        type: "Gents",
        fabric: "Summer Cotton",
        pieces: "Unstitched",
        description: "Lightweight cotton fabric perfect for summer.",
        price: 3400,
        salePrice: 2899,
        image: IMAGE_PATH + "gents-summer-cotton-01.jpg",
        badge: "SUMMER",
        isNew: true
    },

    {
        id: "G008",
        name: "Classic Summer Fabric",
        category: "gents-summer",
        type: "Gents",
        fabric: "Summer",
        pieces: "Unstitched",
        description: "Comfortable summer fabric available in multiple colors.",
        price: 3200,
        salePrice: 2699,
        image: IMAGE_PATH + "gents-summer-01.jpg",
        badge: "SALE",
        isNew: false
    },

    {
        id: "G009",
        name: "Premium Shalwar Kameez Fabric",
        category: "gents-shalwar",
        type: "Gents",
        fabric: "Premium Fabric",
        pieces: "Unstitched",
        description: "Premium unstitched fabric for traditional shalwar kameez.",
        price: 4800,
        salePrice: 4099,
        image: IMAGE_PATH + "gents-shalwar-kameez-01.jpg",
        badge: "PREMIUM",
        isNew: true
    },

    {
        id: "G010",
        name: "Elegant Embroidered Fabric",
        category: "gents-embroidered",
        type: "Gents",
        fabric: "Embroidered",
        pieces: "Unstitched",
        description: "Elegant embroidered fabric for special occasions.",
        price: 6000,
        salePrice: 5199,
        image: IMAGE_PATH + "gents-embroidered-01.jpg",
        badge: "LUXURY",
        isNew: true
    },

    {
        id: "G011",
        name: "Premium Embroidered Collection",
        category: "gents-embroidered",
        type: "Gents",
        fabric: "Embroidered",
        pieces: "Unstitched",
        description: "Luxury embroidered fabric with elegant detailing.",
        price: 6800,
        salePrice: 5799,
        image: IMAGE_PATH + "gents-embroidered-premium-01.jpg",
        badge: "PREMIUM",
        isNew: true
    },

    {
        id: "G012",
        name: "Classic Plain Cotton",
        category: "gents-cotton",
        type: "Gents",
        fabric: "Cotton",
        pieces: "Unstitched",
        description: "Classic plain cotton available in beautiful colors.",
        price: 3300,
        salePrice: 2799,
        image: IMAGE_PATH + "gents-plain-cotton-01.jpg",
        badge: "POPULAR",
        isNew: false
    }

];


/* =========================================================
   COMBINE ALL PRODUCTS
========================================================= */

const allProducts = [
    ...ladiesProducts,
    ...gentsProducts
];


/* =========================================================
   FIND PRODUCT BY ID
========================================================= */

function getProductById(productId) {

    return allProducts.find(
        product => product.id === productId
    );

}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return "Rs. " + Number(price).toLocaleString("en-PK");

}


/* =========================================================
   GET FINAL PRODUCT PRICE
========================================================= */

function getProductPrice(product) {

    if (
        product.salePrice &&
        product.salePrice < product.price
    ) {

        return product.salePrice;

    }

    return product.price;

}


/* =========================================================
   CALCULATE DISCOUNT PERCENTAGE
========================================================= */

function getDiscountPercentage(product) {

    if (
        !product.salePrice ||
        product.salePrice >= product.price
    ) {

        return 0;

    }

    const discount =
        ((product.price - product.salePrice) /
        product.price) * 100;

    return Math.round(discount);

}


/* =========================================================
   PRODUCT CARD HTML
========================================================= */

function createProductCard(product) {

    const finalPrice =
        getProductPrice(product);

   
