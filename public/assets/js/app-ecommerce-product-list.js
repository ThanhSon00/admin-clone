"use strict";
const productListJson = [ 
    {
        "id": 1,
        "product_name": "iPhone 14 Pro",
        "category": 2,
        "stock": 1,
        "sku": 19472,
        "price": "$999",
        "qty": 665,
        "status": 3,
        "image": "product-1.png",
        "product_brand": "Super Retina XDR display footnote Pro Motion technology"
    },
    {
        "id": 2,
        "product_name": "Echo Dot (4th Gen)",
        "category": 2,
        "stock": 0,
        "sku": 72836,
        "price": "$25.50",
        "qty": 827,
        "status": 2,
        "image": "product-2.png",
        "product_brand": "Echo Dot Smart speaker with Alexa"
    },
    {
        "id": 3,
        "product_name": "Dohioue Wall Clock",
        "category": 0,
        "stock": 0,
        "sku": 29540,
        "price": "$16.34",
        "qty": 804,
        "status": 2,
        "image": "product-3.png",
        "product_brand": "Modern 10 Inch Battery Operated Wall Clocks"
    },
    {
        "id": 4,
        "product_name": "INZCOU Running Shoes",
        "category": 3,
        "stock": 0,
        "sku": 49402,
        "price": "$36.98",
        "qty": 528,
        "status": 1,
        "image": "product-4.png",
        "product_brand": "Lightweight Tennis Shoes Non Slip Gym Workout Shoes"
    },
    {
        "id": 5,
        "product_name": "Apple Watch Series 7",
        "category": 4,
        "stock": 0,
        "sku": 46658,
        "price": "$799",
        "qty": 851,
        "status": 1,
        "image": "product-5.png",
        "product_brand": "Starlight Aluminum Case with Starlight Sport Band."
    },
    {
        "id": 6,
        "product_name": "Meta Quest 2",
        "category": 4,
        "stock": 1,
        "sku": 57640,
        "price": "$299",
        "qty": 962,
        "status": 1,
        "image": "product-6.png",
        "product_brand": "Advanced All-In-One Virtual Reality Headset"
    },
    {
        "id": 7,
        "product_name": "MacBook Pro 16",
        "category": 2,
        "stock": 1,
        "sku": 92885,
        "price": "$2648.95",
        "qty": 965,
        "status": 2,
        "image": "product-7.png",
        "product_brand": "Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU"
    },
    {
        "id": 8,
        "product_name": "SAMSUNG Galaxy S22 Ultra",
        "category": 2,
        "stock": 1,
        "sku": 75257,
        "price": "$899",
        "qty": 447,
        "status": 2,
        "image": "product-8.png",
        "product_brand": "Android Smartphone, 256GB, 8K Camera"
    },
    {
        "id": 9,
        "product_name": "Air Jordan",
        "category": 3,
        "stock": 0,
        "sku": 31063,
        "price": "$125",
        "qty": 942,
        "status": 3,
        "image": "product-9.png",
        "product_brand": "Air Jordan is a line of basketball shoes produced by Nike"
    },
    {
        "id": 10,
        "product_name": "VISKABACKA",
        "category": 1,
        "stock": 0,
        "sku": 91848,
        "price": "$190.45",
        "qty": 133,
        "status": 1,
        "image": "product-10.png",
        "product_brand": "Armchair, Skartofta black/light grey"
    },
    {
        "id": 11,
        "product_name": "Nintendo Switch",
        "category": 5,
        "stock": 1,
        "sku": 52575,
        "price": "$296.99",
        "qty": 870,
        "status": 3,
        "image": "product-11.png",
        "product_brand": "TV Mode, Tabletop Mode, Handheld Mode"
    },
    {
        "id": 12,
        "product_name": "PlayStation 5",
        "category": 5,
        "stock": 1,
        "sku": 59551,
        "price": "$499",
        "qty": 145,
        "status": 1,
        "image": "product-12.png",
        "product_brand": "Marvel at incredible graphics and experience"
    },
    {
        "id": 13,
        "product_name": "Amazon Fire TV",
        "category": 2,
        "stock": 0,
        "sku": 5829,
        "price": "$263.49",
        "qty": 587,
        "status": 1,
        "image": "product-13.png",
        "product_brand": "4K UHD smart TV, stream live TV without cable"
    },
    {
        "id": 14,
        "product_name": "Smiletag Ceramic Vase",
        "category": 1,
        "stock": 0,
        "sku": 24456,
        "price": "$34.99",
        "qty": 310,
        "status": 1,
        "image": "product-14.png",
        "product_brand": "Modern Farmhouse Decor Vase Set of 3"
    },
    {
        "id": 15,
        "product_name": "Apple iPad",
        "category": 2,
        "stock": 1,
        "sku": 35946,
        "price": "$248.39",
        "qty": 468,
        "status": 2,
        "image": "product-15.png",
        "product_brand": "10.2-inch Retina Display, 64GB"
    },
    {
        "id": 16,
        "product_name": "BANGE Anti Theft Backpack",
        "category": 4,
        "stock": 1,
        "sku": 41867,
        "price": "$79.99",
        "qty": 519,
        "status": 3,
        "image": "product-16.png",
        "product_brand": "Smart Business Laptop Fits 15.6 Inch Notebook"
    },
    {
        "id": 17,
        "product_name": "Xbox Series X/S",
        "category": 5,
        "stock": 1,
        "sku": 43224,
        "price": "$49.99",
        "qty": 787,
        "status": 2,
        "image": "product-17.png",
        "product_brand": "Dual Controller Charger Station Dock"
    },
    {
        "id": 18,
        "product_name": "Canon EOS Rebel T7",
        "category": 2,
        "stock": 1,
        "sku": 63474,
        "price": "$399",
        "qty": 810,
        "status": 1,
        "image": "product-18.png",
        "product_brand": "18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor"
    },
    {
        "id": 19,
        "product_name": "Honiway Wall Mirror",
        "category": 1,
        "stock": 0,
        "sku": 15859,
        "price": "$23.99",
        "qty": 735,
        "status": 3,
        "image": "product-19.png",
        "product_brand": "Decorative 12 inch Rustic Wood Mirror Sunburst Boho"
    },
    {
        "id": 20,
        "product_name": "Tommaso Veloce Shoes",
        "category": 3,
        "stock": 0,
        "sku": 28844,
        "price": "$922.09",
        "qty": 294,
        "status": 3,
        "image": "product-20.png",
        "product_brand": "Peloton Shoes Triathlon Road Bike Indoor Cycling"
    },
    {
        "id": 21,
        "product_name": "Zoolab",
        "category": 0,
        "stock": 1,
        "sku": 99009,
        "price": "$719.13",
        "qty": 927,
        "status": 1,
        "image": "product-1.png",
        "product_brand": "Cruickshank-Jones"
    },
    {
        "id": 22,
        "product_name": "Viva",
        "category": 1,
        "stock": 0,
        "sku": 53795,
        "price": "$775.80",
        "qty": 442,
        "status": 1,
        "image": "product-2.png",
        "product_brand": "Ferry Group"
    },
    {
        "id": 23,
        "product_name": "Transcof",
        "category": 3,
        "stock": 1,
        "sku": 77663,
        "price": "$817.60",
        "qty": 256,
        "status": 2,
        "image": "product-3.png",
        "product_brand": "Bruen-Heathcote"
    },
    {
        "id": 24,
        "product_name": "Uerified",
        "category": 0,
        "stock": 0,
        "sku": 45282,
        "price": "$167.19",
        "qty": 728,
        "status": 2,
        "image": "product-4.png",
        "product_brand": "Koch Group"
    },
    {
        "id": 25,
        "product_name": "Y-find",
        "category": 1,
        "stock": 0,
        "sku": 5622,
        "price": "$189.77",
        "qty": 445,
        "status": 1,
        "image": "product-5.png",
        "product_brand": "Emmerich and Sons"
    },
    {
        "id": 26,
        "product_name": "Wigtax",
        "category": 0,
        "stock": 1,
        "sku": 38920,
        "price": "$411.46",
        "qty": 857,
        "status": 1,
        "image": "product-6.png",
        "product_brand": "Zulauf-Prohaska"
    },
    {
        "id": 27,
        "product_name": "Tempsoft",
        "category": 0,
        "stock": 1,
        "sku": 78211,
        "price": "$961.76",
        "qty": 975,
        "status": 2,
        "image": "product-7.png",
        "product_brand": "VonRueden, Rogahn and Kris"
    },
    {
        "id": 28,
        "product_name": "Rt",
        "category": 0,
        "stock": 1,
        "sku": 98552,
        "price": "$514.14",
        "qty": 39,
        "status": 2,
        "image": "product-8.png",
        "product_brand": "Romaguera, O'Connell and Abernathy"
    },
    {
        "id": 29,
        "product_name": "Zontrax",
        "category": 3,
        "stock": 1,
        "sku": 7151,
        "price": "$591.30",
        "qty": 74,
        "status": 2,
        "image": "product-9.png",
        "product_brand": "Mills, Hagenes and Bednar"
    },
    {
        "id": 30,
        "product_name": "Keylex",
        "category": 0,
        "stock": 1,
        "sku": 79571,
        "price": "$928.07",
        "qty": 245,
        "status": 3,
        "image": "product-10.png",
        "product_brand": "Sanford, Harvey and Parisian"
    },
    {
        "id": 31,
        "product_name": "Trippledex",
        "category": 1,
        "stock": 0,
        "sku": 51597,
        "price": "$312.03",
        "qty": 657,
        "status": 3,
        "image": "product-11.png",
        "product_brand": "Conroy-Bergstrom"
    },
    {
        "id": 32,
        "product_name": "Opela",
        "category": 0,
        "stock": 1,
        "sku": 6506,
        "price": "$951.29",
        "qty": 770,
        "status": 2,
        "image": "product-12.png",
        "product_brand": "Langosh Inc"
    },
    {
        "id": 33,
        "product_name": "Span",
        "category": 3,
        "stock": 0,
        "sku": 33523,
        "price": "$600.43",
        "qty": 622,
        "status": 3,
        "image": "product-13.png",
        "product_brand": "Jerde-Walsh"
    },
    {
        "id": 34,
        "product_name": "Rank",
        "category": 0,
        "stock": 0,
        "sku": 60307,
        "price": "$337.90",
        "qty": 896,
        "status": 1,
        "image": "product-14.png",
        "product_brand": "Barrows, Quitzon and Roberts"
    },
    {
        "id": 35,
        "product_name": "Tempsoft",
        "category": 0,
        "stock": 1,
        "sku": 75059,
        "price": "$959.47",
        "qty": 239,
        "status": 3,
        "image": "product-15.png",
        "product_brand": "Russel-Grant"
    },
    {
        "id": 36,
        "product_name": "Ventosanzap",
        "category": 0,
        "stock": 1,
        "sku": 69072,
        "price": "$756.81",
        "qty": 410,
        "status": 1,
        "image": "product-16.png",
        "product_brand": "O'Conner-Zboncak"
    },
    {
        "id": 37,
        "product_name": "Mat Lam Tam",
        "category": 0,
        "stock": 0,
        "sku": 68290,
        "price": "$256.86",
        "qty": 630,
        "status": 2,
        "image": "product-17.png",
        "product_brand": "Rutherford, Heller and Bashirian"
    },
    {
        "id": 38,
        "product_name": "Zamit",
        "category": 3,
        "stock": 1,
        "sku": 89552,
        "price": "$378.54",
        "qty": 247,
        "status": 3,
        "image": "product-18.png",
        "product_brand": "Swift-Altenwerth"
    },
    {
        "id": 39,
        "product_name": "Tresom",
        "category": 3,
        "stock": 1,
        "sku": 50863,
        "price": "$166.17",
        "qty": 672,
        "status": 3,
        "image": "product-19.png",
        "product_brand": "O'Kon, Waelchi and Lesch"
    },
    {
        "id": 40,
        "product_name": "Viva",
        "category": 0,
        "stock": 0,
        "sku": 90484,
        "price": "$745.76",
        "qty": 697,
        "status": 2,
        "image": "product-20.png",
        "product_brand": "Johnston, Anderson and Metz"
    },
    {
        "id": 41,
        "product_name": "Matsoft",
        "category": 0,
        "stock": 1,
        "sku": 76980,
        "price": "$603.16",
        "qty": 74,
        "status": 2,
        "image": "product-1.png",
        "product_brand": "O'Conner, Paucek and Braun"
    },
    {
        "id": 42,
        "product_name": "Wiodex",
        "category": 1,
        "stock": 1,
        "sku": 66971,
        "price": "$772.51",
        "qty": 280,
        "status": 2,
        "image": "product-2.png",
        "product_brand": "Wisoky-Kassulke"
    },
    {
        "id": 43,
        "product_name": "Keylex",
        "category": 3,
        "stock": 0,
        "sku": 16589,
        "price": "$986.22",
        "qty": 758,
        "status": 3,
        "image": "product-3.png",
        "product_brand": "Haag, Bruen and Reichel"
    },
    {
        "id": 44,
        "product_name": "Konklux",
        "category": 0,
        "stock": 1,
        "sku": 73896,
        "price": "$988.47",
        "qty": 14,
        "status": 3,
        "image": "product-4.png",
        "product_brand": "Ankunding Inc"
    },
    {
        "id": 45,
        "product_name": "Tresom",
        "category": 0,
        "stock": 0,
        "sku": 67489,
        "price": "$946.62",
        "qty": 35,
        "status": 3,
        "image": "product-5.png",
        "product_brand": "Deckow and Sons"
    },
    {
        "id": 46,
        "product_name": "Quo Lux",
        "category": 3,
        "stock": 1,
        "sku": 48177,
        "price": "$224.28",
        "qty": 935,
        "status": 1,
        "image": "product-1.png",
        "product_brand": "Kreiger, Reynolds and Sporer"
    },
    {
        "id": 47,
        "product_name": "Roldlamis",
        "category": 1,
        "stock": 1,
        "sku": 225,
        "price": "$952.14",
        "qty": 361,
        "status": 2,
        "image": "product-6.png",
        "product_brand": "Kuphal-Abbott"
    },
    {
        "id": 48,
        "product_name": "Tampflex",
        "category": 0,
        "stock": 0,
        "sku": 29438,
        "price": "$646.21",
        "qty": 908,
        "status": 1,
        "image": "product-7.png",
        "product_brand": "Romaguera, Schmeler and Volkman"
    },
    {
        "id": 49,
        "product_name": "Span",
        "category": 1,
        "stock": 1,
        "sku": 55666,
        "price": "$583.13",
        "qty": 898,
        "status": 1,
        "image": "product-8.png",
        "product_brand": "Hane-Romaguera"
    },
    {
        "id": 50,
        "product_name": "Zamit",
        "category": 0,
        "stock": 0,
        "sku": 55860,
        "price": "$273.67",
        "qty": 332,
        "status": 2,
        "image": "product-9.png",
        "product_brand": "Hoeger-Powlowski"
    },
    {
        "id": 51,
        "product_name": "Witchip",
        "category": 1,
        "stock": 0,
        "sku": 41156,
        "price": "$573.24",
        "qty": 55,
        "status": 3,
        "image": "product-10.png",
        "product_brand": "Heidenreich, Keeling and Kuhn"
    },
    {
        "id": 52,
        "product_name": "Ratity",
        "category": 3,
        "stock": 1,
        "sku": 8147,
        "price": "$571.76",
        "qty": 839,
        "status": 2,
        "image": "product-11.png",
        "product_brand": "Beier and Sons"
    },
    {
        "id": 53,
        "product_name": "Voltsillam",
        "category": 1,
        "stock": 1,
        "sku": 78814,
        "price": "$396.79",
        "qty": 496,
        "status": 2,
        "image": "product-12.png",
        "product_brand": "Jones and Sons"
    },
    {
        "id": 54,
        "product_name": "Voltsillam",
        "category": 3,
        "stock": 0,
        "sku": 96040,
        "price": "$140.79",
        "qty": 50,
        "status": 1,
        "image": "product-13.png",
        "product_brand": "Mohr and Sons"
    },
    {
        "id": 55,
        "product_name": "Matsoft",
        "category": 0,
        "stock": 1,
        "sku": 99482,
        "price": "$723.01",
        "qty": 453,
        "status": 1,
        "image": "product-1.png",
        "product_brand": "Kling-Hayes"
    },
    {
        "id": 56,
        "product_name": "Rt",
        "category": 0,
        "stock": 1,
        "sku": 56480,
        "price": "$849.72",
        "qty": 293,
        "status": 3,
        "image": "product-14.png",
        "product_brand": "Brekke-Lubowitz"
    },
    {
        "id": 57,
        "product_name": "Konklab",
        "category": 0,
        "stock": 1,
        "sku": 95499,
        "price": "$152.02",
        "qty": 263,
        "status": 2,
        "image": "product-15.png",
        "product_brand": "Kiehn LLC"
    },
    {
        "id": 58,
        "product_name": "Lotstring",
        "category": 0,
        "stock": 0,
        "sku": 83893,
        "price": "$111.29",
        "qty": 231,
        "status": 3,
        "image": "product-16.png",
        "product_brand": "Windler-Corwin"
    },
    {
        "id": 59,
        "product_name": "Keylex",
        "category": 3,
        "stock": 1,
        "sku": 24943,
        "price": "$148.67",
        "qty": 289,
        "status": 3,
        "image": "product-17.png",
        "product_brand": "Reynolds, Buckridge and Schmeler"
    },
    {
        "id": 60,
        "product_name": "Transcof",
        "category": 0,
        "stock": 0,
        "sku": 92258,
        "price": "$369.54",
        "qty": 268,
        "status": 1,
        "image": "product-18.png",
        "product_brand": "Jacobs-Farrell"
    },
    {
        "id": 61,
        "product_name": "Opela",
        "category": 0,
        "stock": 1,
        "sku": 15281,
        "price": "$890.33",
        "qty": 115,
        "status": 2,
        "image": "product-19.png",
        "product_brand": "Beier-Bergstrom"
    },
    {
        "id": 62,
        "product_name": "Rlowdesk",
        "category": 0,
        "stock": 0,
        "sku": 92346,
        "price": "$668.81",
        "qty": 850,
        "status": 1,
        "image": "product-20.png",
        "product_brand": "Roob and Sons"
    },
    {
        "id": 63,
        "product_name": "Kanlam",
        "category": 0,
        "stock": 0,
        "sku": 8590,
        "price": "$407.46",
        "qty": 547,
        "status": 3,
        "image": "product-2.png",
        "product_brand": "Hauck Group"
    },
    {
        "id": 64,
        "product_name": "Rembucket",
        "category": 0,
        "stock": 0,
        "sku": 57694,
        "price": "$763.28",
        "qty": 188,
        "status": 1,
        "image": "product-2.png",
        "product_brand": "Reynolds-Lindgren"
    },
    {
        "id": 65,
        "product_name": "Tin",
        "category": 0,
        "stock": 0,
        "sku": 83532,
        "price": "$866.51",
        "qty": 469,
        "status": 3,
        "image": "product-2.png",
        "product_brand": "Stroman and Sons"
    },
    {
        "id": 66,
        "product_name": "Trippledex",
        "category": 0,
        "stock": 0,
        "sku": 85878,
        "price": "$390.28",
        "qty": 753,
        "status": 2,
        "image": "product-2.png",
        "product_brand": "Kihn-Wisoky"
    },
    {
        "id": 67,
        "product_name": "Redhold",
        "category": 0,
        "stock": 0,
        "sku": 18810,
        "price": "$944.68",
        "qty": 783,
        "status": 3,
        "image": "product-2.png",
        "product_brand": "Konopelski-Hauck"
    },
    {
        "id": 68,
        "product_name": "Pannier",
        "category": 3,
        "stock": 0,
        "sku": 42375,
        "price": "$802.49",
        "qty": 371,
        "status": 1,
        "image": "product-3.png",
        "product_brand": "Rau Inc"
    },
    {
        "id": 69,
        "product_name": "Rlexidy",
        "category": 0,
        "stock": 1,
        "sku": 55165,
        "price": "$812.75",
        "qty": 981,
        "status": 3,
        "image": "product-3.png",
        "product_brand": "Torp-Lebsack"
    },
    {
        "id": 70,
        "product_name": "Keylex",
        "category": 1,
        "stock": 0,
        "sku": 92443,
        "price": "$338.64",
        "qty": 44,
        "status": 1,
        "image": "product-3.png",
        "product_brand": "Hane-Bednar"
    },
    {
        "id": 71,
        "product_name": "Kuobam",
        "category": 0,
        "stock": 0,
        "sku": 98203,
        "price": "$190.82",
        "qty": 212,
        "status": 1,
        "image": "product-3.png",
        "product_brand": "Rice Group"
    },
    {
        "id": 72,
        "product_name": "Ulphazap",
        "category": 1,
        "stock": 0,
        "sku": 49451,
        "price": "$658.79",
        "qty": 707,
        "status": 3,
        "image": "product-3.png",
        "product_brand": "West, White and Rau"
    },
    {
        "id": 73,
        "product_name": "Wiodex",
        "category": 0,
        "stock": 1,
        "sku": 48644,
        "price": "$231.38",
        "qty": 513,
        "status": 3,
        "image": "product-4.png",
        "product_brand": "Keeling-Dicki"
    },
    {
        "id": 74,
        "product_name": "Veribet",
        "category": 0,
        "stock": 1,
        "sku": 86347,
        "price": "$885.15",
        "qty": 953,
        "status": 2,
        "image": "product-4.png",
        "product_brand": "Gerlach, Bernhard and Schmidt"
    },
    {
        "id": 75,
        "product_name": "Rix San",
        "category": 0,
        "stock": 1,
        "sku": 53970,
        "price": "$897.45",
        "qty": 305,
        "status": 3,
        "image": "product-4.png",
        "product_brand": "Emmerich, Hills and Beer"
    },
    {
        "id": 76,
        "product_name": "Zoolab",
        "category": 0,
        "stock": 0,
        "sku": 64602,
        "price": "$753.84",
        "qty": 269,
        "status": 1,
        "image": "product-4.png",
        "product_brand": "Treutel-Dickinson"
    },
    {
        "id": 77,
        "product_name": "Rob",
        "category": 0,
        "stock": 0,
        "sku": 21688,
        "price": "$880.91",
        "qty": 872,
        "status": 3,
        "image": "product-4.png",
        "product_brand": "Auer and Sons"
    },
    {
        "id": 78,
        "product_name": "Zamit",
        "category": 3,
        "stock": 1,
        "sku": 52982,
        "price": "$156.96",
        "qty": 836,
        "status": 1,
        "image": "product-5.png",
        "product_brand": "Koss, Heller and Lind"
    },
    {
        "id": 79,
        "product_name": "Zoolab",
        "category": 3,
        "stock": 1,
        "sku": 65044,
        "price": "$991.50",
        "qty": 806,
        "status": 2,
        "image": "product-5.png",
        "product_brand": "Brekke Inc"
    },
    {
        "id": 80,
        "product_name": "Stronghold",
        "category": 0,
        "stock": 0,
        "sku": 78717,
        "price": "$716.83",
        "qty": 821,
        "status": 1,
        "image": "product-5.png",
        "product_brand": "Balistreri Group"
    },
    {
        "id": 81,
        "product_name": "Rintone",
        "category": 0,
        "stock": 0,
        "sku": 24204,
        "price": "$984.21",
        "qty": 395,
        "status": 2,
        "image": "product-5.png",
        "product_brand": "Von, Terry and Wintheiser"
    },
    {
        "id": 82,
        "product_name": "Temp",
        "category": 0,
        "stock": 1,
        "sku": 26115,
        "price": "$405.73",
        "qty": 719,
        "status": 3,
        "image": "product-5.png",
        "product_brand": "Batz Group"
    },
    {
        "id": 83,
        "product_name": "Rlexidy",
        "category": 0,
        "stock": 0,
        "sku": 35053,
        "price": "$514.39",
        "qty": 286,
        "status": 3,
        "image": "product-6.png",
        "product_brand": "Beer, Blick and Heller"
    },
    {
        "id": 84,
        "product_name": "Ronstring",
        "category": 0,
        "stock": 1,
        "sku": 63623,
        "price": "$910.60",
        "qty": 681,
        "status": 3,
        "image": "product-6.png",
        "product_brand": "Carroll, Tremblay and Koch"
    },
    {
        "id": 85,
        "product_name": "Rixflex",
        "category": 3,
        "stock": 0,
        "sku": 84615,
        "price": "$990.12",
        "qty": 256,
        "status": 1,
        "image": "product-6.png",
        "product_brand": "Nader-Hane"
    },
    {
        "id": 86,
        "product_name": "Uerified",
        "category": 0,
        "stock": 1,
        "sku": 34845,
        "price": "$677.77",
        "qty": 778,
        "status": 1,
        "image": "product-6.png",
        "product_brand": "Bechtelar, Heidenreich and Collins"
    },
    {
        "id": 87,
        "product_name": "Stringtough",
        "category": 0,
        "stock": 0,
        "sku": 37008,
        "price": "$803.24",
        "qty": 514,
        "status": 1,
        "image": "product-7.png",
        "product_brand": "Bruen, Connelly and Padberg"
    },
    {
        "id": 88,
        "product_name": "Qookley",
        "category": 1,
        "stock": 1,
        "sku": 3332,
        "price": "$587.09",
        "qty": 644,
        "status": 1,
        "image": "product-7.png",
        "product_brand": "Larkin-Wilderman"
    },
    {
        "id": 89,
        "product_name": "Zamit",
        "category": 3,
        "stock": 0,
        "sku": 30921,
        "price": "$338.43",
        "qty": 412,
        "status": 2,
        "image": "product-7.png",
        "product_brand": "Okuneva-Wilderman"
    },
    {
        "id": 90,
        "product_name": "Mat Lam Tam",
        "category": 3,
        "stock": 1,
        "sku": 31016,
        "price": "$911.05",
        "qty": 814,
        "status": 1,
        "image": "product-7.png",
        "product_brand": "Herman, Wisozk and Watsica"
    },
    {
        "id": 91,
        "product_name": "Rt",
        "category": 1,
        "stock": 1,
        "sku": 28726,
        "price": "$474.40",
        "qty": 514,
        "status": 3,
        "image": "product-8.png",
        "product_brand": "Hodkiewicz Inc"
    },
    {
        "id": 92,
        "product_name": "Stim",
        "category": 0,
        "stock": 1,
        "sku": 44611,
        "price": "$115.60",
        "qty": 355,
        "status": 3,
        "image": "product-8.png",
        "product_brand": "Swaniawski, West and Runolfsdottir"
    },
    {
        "id": 93,
        "product_name": "Rix San",
        "category": 0,
        "stock": 1,
        "sku": 94348,
        "price": "$602.94",
        "qty": 695,
        "status": 1,
        "image": "product-8.png",
        "product_brand": "Wilkinson and Sons"
    },
    {
        "id": 94,
        "product_name": "Vagram",
        "category": 0,
        "stock": 1,
        "sku": 5786,
        "price": "$935.11",
        "qty": 944,
        "status": 2,
        "image": "product-8.png",
        "product_brand": "Mante, Greenfelder and Welch"
    },
    {
        "id": 95,
        "product_name": "Otcom",
        "category": 3,
        "stock": 1,
        "sku": 88662,
        "price": "$254.18",
        "qty": 6,
        "status": 3,
        "image": "product-9.png",
        "product_brand": "Lakin, Kautzer and Witting"
    },
    {
        "id": 96,
        "product_name": "Rixflex",
        "category": 1,
        "stock": 0,
        "sku": 37038,
        "price": "$871.09",
        "qty": 235,
        "status": 2,
        "image": "product-9.png",
        "product_brand": "Cormier-Leuschke"
    },
    {
        "id": 97,
        "product_name": "Lotstring",
        "category": 1,
        "stock": 1,
        "sku": 55539,
        "price": "$711.99",
        "qty": 442,
        "status": 2,
        "image": "product-9.png",
        "product_brand": "Cormier-Reichert"
    },
    {
        "id": 98,
        "product_name": "Wiodex",
        "category": 3,
        "stock": 1,
        "sku": 59067,
        "price": "$311.77",
        "qty": 787,
        "status": 3,
        "image": "product-9.png",
        "product_brand": "Kohler LLC"
    },
    {
        "id": 99,
        "product_name": "Komainer",
        "category": 0,
        "stock": 1,
        "sku": 59592,
        "price": "$656.85",
        "qty": 679,
        "status": 3,
        "image": "product-10.png",
        "product_brand": "Feest Group"
    },
    {
        "id": 100,
        "product_name": "Ulpha",
        "category": 0,
        "stock": 0,
        "sku": 13501,
        "price": "$538.96",
        "qty": 822,
        "status": 1,
        "image": "product-10.png",
        "product_brand": "Rosenbaum Group"
    }
];
$(function() {
    $.ajaxSetup({'cache': true});
    let e, s, a;
    a = (isDarkStyle ? (e = config.colors_dark.borderColor, s = config.colors_dark.bodyBg, config.colors_dark) : (e = config.colors.borderColor, s = config.colors.bodyBg, config.colors)).headingColor;
    var t, n = $(".datatables-products"),
        o = {
            1: {
                title: "Scheduled",
                class: "bg-label-warning"
            },
            2: {
                title: "Publish",
                class: "bg-label-success"
            },
            3: {
                title: "Inactive",
                class: "bg-label-danger"
            }
        },
        c = {
            0: {
                title: "Household"
            },
            1: {
                title: "Office"
            },
            2: {
                title: "Electronics"
            },
            3: {
                title: "Shoes"
            },
            4: {
                title: "Accessories"
            },
            5: {
                title: "Game"
            }
        },
        i = {
            0: {
                title: "Out_of_Stock"
            },
            1: {
                title: "In_Stock"
            }
        },
        r = {
            0: {
                title: "Out of Stock"
            },
            1: {
                title: "In Stock"
            }
        };
    n.length && (t = n.DataTable({
        data: productListJson,
        columns: [{
            data: "id"
        }, {
            data: "id"
        }, {
            data: "product_name"
        }, {
            data: "category"
        }, {
            data: "stock"
        }, {
            data: "sku"
        }, {
            data: "price"
        }, {
            data: "quantity"
        }, {
            data: "status"
        }, {
            data: ""
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(t, e, s, a) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input" >'
            },
            searchable: !1
        }, {
            targets: 2,
            responsivePriority: 1,
            render: function(t, e, s, a) {
                var n = s.product_name,
                    o = s.id,
                    c = s.product_brand,
                    i = s.image;
                return '<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper"><div class="avatar avatar me-2 rounded-2 bg-label-secondary">' + (i ? '<img src="' + assetsPath + "img/ecommerce-images/" + i + '" alt="Product-' + o + '" class="rounded-2">' : '<span class="avatar-initial rounded-2 bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (i = (((i = (n = s.product_brand).match(/\b\w/g) || []).shift() || "") + (i.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><h6 class="text-body text-nowrap mb-0">' + n + '</h6><small class="text-muted text-truncate d-none d-sm-block">' + c + "</small></div></div>"
            }
        }, {
            targets: 3,
            responsivePriority: 5,
            render: function(t, e, s, a) {
                s = c[s.category].title;
                return "<span class='text-truncate d-flex align-items-center'>" + {
                    Household: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-warning me-2"><i class="bx bx-home-alt"></i></span>',
                    Office: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2"><i class="bx bx-briefcase"></i></span>',
                    Electronics: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-primary me-2"><i class="bx bx-mobile-alt"></i></span>',
                    Shoes: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2"><i class="bx bx-walk"></i></span>',
                    Accessories: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-secondary me-2"><i class="bx bxs-watch"></i></span>',
                    Game: '<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-dark me-2"><i class="bx bx-game"></i></span>'
                } [s] + s + "</span>"
            }
        }, {
            targets: 4,
            orderable: !1,
            responsivePriority: 3,
            render: function(t, e, s, a) {
                s = s.stock;
                return "<span class='text-truncate'>" + {
                    Out_of_Stock: '<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" id="switch"><span class="switch-toggle-slider"><span class="switch-off"></span></span></label>',
                    In_Stock: '<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" checked=""><span class="switch-toggle-slider"><span class="switch-on"></span></span></label>'
                } [i[s].title] + '<span class="d-none">' + i[s].title + "</span></span>"
            }
        }, {
            targets: 5,
            render: function(t, e, s, a) {
                return "<span>" + s.sku + "</span>"
            }
        }, {
            targets: 6,
            render: function(t, e, s, a) {
                return "<span>" + s.price + "</span>"
            }
        }, {
            targets: 7,
            responsivePriority: 4,
            render: function(t, e, s, a) {
                return "<span>" + s.qty + "</span>"
            }
        }, {
            targets: -2,
            render: function(t, e, s, a) {
                s = s.status;
                return '<span class="badge ' + o[s].class + '" text-capitalized>' + o[s].title + "</span>"
            }
        }, {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function(t, e, s, a) {
                return '<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item">Suspend</a></div></div>'
            }
        }],
        order: [2, "asc"],
        dom: '<"card-header d-flex border-top rounded-0 flex-wrap py-md-0"<"me-5 ms-n2 pe-5"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        lengthMenu: [7, 10, 20, 50, 70, 100],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Product",
            info: "Displaying _START_ to _END_ of _TOTAL_ entries"
        },
        buttons: [{
            extend: "collection",
            className: "btn btn-label-secondary dropdown-toggle me-3",
            text: '<i class="bx bx-export me-1"></i>Export',
            buttons: [{
                extend: "print",
                text: '<i class="bx bx-printer me-2" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t), a = "", $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }), a)
                        }
                    }
                },
                customize: function(t) {
                    $(t.document.body).css("color", a).css("border-color", e).css("background-color", s), $(t.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t), a = "", $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t), a = "", $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t), a = "", $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t), a = "", $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }), a)
                        }
                    }
                }
            }]
        }, {
            text: '<i class="bx bx-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Product</span>',
            className: "add-new btn btn-primary",
            action: function() {
                window.location.href = "app-ecommerce-product-add.html"
            }
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(t) {
                        return "Details of " + t.data().product_name
                    }
                }),
                type: "column",
                renderer: function(t, e, s) {
                    s = $.map(s, function(t, e) {
                        return "" !== t.title ? '<tr data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>" : ""
                    }).join("");
                    return !!s && $('<table class="table"/><tbody />').append(s)
                }
            }
        },
        initComplete: function() {
            this.api().columns(-2).every(function() {
                var e = this,
                    s = $('<select id="ProductStatus" class="form-select text-capitalize"><option value="">Status</option></select>').appendTo(".product_status").on("change", function() {
                        var t = $.fn.dataTable.util.escapeRegex($(this).val());
                        e.search(t ? "^" + t + "$" : "", !0, !1).draw()
                    });
                e.data().unique().sort().each(function(t, e) {
                    s.append('<option value="' + o[t].title + '">' + o[t].title + "</option>")
                })
            }), this.api().columns(3).every(function() {
                var e = this,
                    s = $('<select id="ProductCategory" class="form-select text-capitalize"><option value="">Category</option></select>').appendTo(".product_category").on("change", function() {
                        var t = $.fn.dataTable.util.escapeRegex($(this).val());
                        e.search(t ? "^" + t + "$" : "", !0, !1).draw()
                    });
                e.data().unique().sort().each(function(t, e) {
                    s.append('<option value="' + c[t].title + '">' + c[t].title + "</option>")
                })
            }), this.api().columns(4).every(function() {
                var e = this,
                    s = $('<select id="ProductStock" class="form-select text-capitalize"><option value=""> Stock </option></select>').appendTo(".product_stock").on("change", function() {
                        var t = $.fn.dataTable.util.escapeRegex($(this).val());
                        e.search(t ? "^" + t + "$" : "", !0, !1).draw()
                    });
                e.data().unique().sort().each(function(t, e) {
                    s.append('<option value="' + i[t].title + '">' + r[t].title + "</option>")
                })
            })
        }
    }), $(".dataTables_length").addClass("mt-0 mt-md-3 me-3"), $(".dt-buttons > .btn-group > button").removeClass("btn-secondary"), $(".dt-buttons").addClass("d-flex flex-wrap")), $(".datatables-products tbody").on("click", ".delete-record", function() {
        t.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});