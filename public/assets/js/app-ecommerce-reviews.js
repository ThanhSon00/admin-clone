"use strict";
const reviewJson = [
    {
        "id": 1,
        "product": "iPhone 14 Pro",
        "company_name": "Super Retina XDR display footnote Pro Motion technology",
        "product_image": "product-1.png",
        "reviewer": "Zane Scraggs",
        "email": "zscraggs0@flavors.me",
        "avatar": "",
        "date": "5/28/2020",
        "status": "Published",
        "review": 2,
        "head": "lorem ipsum dolor",
        "para": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
    },
    {
        "id": 2,
        "product": "Echo Dot (4th Gen)",
        "company_name": "Echo Dot Smart speaker with Alexa",
        "product_image": "product-2.png",
        "reviewer": "Stacey Hallgalley",
        "email": "shallgalley1@google.nl",
        "avatar": "13.png",
        "date": "3/21/2021",
        "status": "Published",
        "review": 5,
        "head": "libero ut",
        "para": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
        "id": 3,
        "product": "Dohioue Wall Clock",
        "company_name": "Modern 10 Inch Battery Operated Wall Clocks",
        "product_image": "product-3.png",
        "reviewer": "Francyne Coulthurst",
        "email": "fcoulthurst2@upenn.edu",
        "avatar": "9.png",
        "date": "8/10/2020",
        "status": "Published",
        "review": 2,
        "head": "neque libero convallis",
        "para": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
        "id": 4,
        "product": "INZCOU Running Shoes",
        "company_name": "Lightweight Tennis Shoes Non Slip Gym Workout Shoes",
        "product_image": "product-4.png",
        "reviewer": "Nate De Mitris",
        "email": "nde3@intel.com",
        "avatar": "",
        "date": "12/18/2021",
        "status": "Pending",
        "review": 3,
        "head": "accumsan tellus nisi eu",
        "para": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    },
    {
        "id": 5,
        "product": "Apple Watch Series 7",
        "company_name": "Starlight Aluminum Case with Starlight Sport Band.",
        "product_image": "product-5.png",
        "reviewer": "Ethel Zanardii",
        "email": "ezanardii4@mapy.cz",
        "avatar": "9.png",
        "date": "6/12/2020",
        "status": "Pending",
        "review": 1,
        "head": "etiam faucibus cursus",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 6,
        "product": "Meta Quest 2",
        "company_name": "Advanced All-In-One Virtual Reality Headset",
        "product_image": "product-6.png",
        "reviewer": "Fancy Tweedell",
        "email": "ftweedell5@telegraph.co.uk",
        "avatar": "",
        "date": "11/23/2020",
        "status": "Pending",
        "review": 1,
        "head": "in faucibus orci luctus et",
        "para": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": 7,
        "product": "MacBook Pro 16",
        "company_name": "Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU",
        "product_image": "product-7.png",
        "reviewer": "Abeu Gregorace",
        "email": "agregorace6@godaddy.com",
        "avatar": "7.png",
        "date": "9/8/2020",
        "status": "Pending",
        "review": 2,
        "head": "vel enim",
        "para": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": 8,
        "product": "SAMSUNG Galaxy S22 Ultra",
        "company_name": "Android Smartphone, 256GB, 8K Camera",
        "product_image": "product-8.png",
        "reviewer": "Sibylle Goodacre",
        "email": "sgoodacre7@washingtonpost.com",
        "avatar": "6.png",
        "date": "6/10/2021",
        "status": "Pending",
        "review": 1,
        "head": "eget semper rutrum",
        "para": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": 9,
        "product": "Air Jordan",
        "company_name": "Air Jordan is a line of basketball shoes produced by Nike",
        "product_image": "product-9.png",
        "reviewer": "Gisela Leppard",
        "email": "gleppard8@yandex.ru",
        "avatar": "5.png",
        "date": "4/20/2020",
        "status": "Published",
        "review": 2,
        "head": "ut mauris",
        "para": "Fusce consequat. Nulla nisl. Nunc nisl."
    },
    {
        "id": 10,
        "product": "VISKABACKA",
        "company_name": "Armchair, Skartofta black/light grey",
        "product_image": "product-10.png",
        "reviewer": "Hilario Wheldon",
        "email": "hwheldon9@apple.com",
        "avatar": "3.png",
        "date": "8/21/2020",
        "status": "Pending",
        "review": 2,
        "head": "amet consectetuer adipiscing elit proin",
        "para": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    },
    {
        "id": 11,
        "product": "Nintendo Switch",
        "company_name": "TV Mode, Tabletop Mode, Handheld Mode",
        "product_image": "product-11.png",
        "reviewer": "Ivie McGlaughn",
        "email": "imcglaughna@mapquest.com",
        "avatar": "",
        "date": "4/13/2020",
        "status": "Pending",
        "review": 4,
        "head": "eget nunc donec",
        "para": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": 12,
        "product": "PlayStation 5",
        "company_name": "Marvel at incredible graphics and experience",
        "product_image": "product-12.png",
        "reviewer": "Neel Kingscott",
        "email": "nkingscottb@soup.io",
        "avatar": "",
        "date": "12/27/2020",
        "status": "Published",
        "review": 1,
        "head": "lacus at velit",
        "para": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
        "id": 13,
        "product": "Amazon Fire TV",
        "company_name": "4K UHD smart TV, stream live TV without cable",
        "product_image": "product-13.png",
        "reviewer": "Tracey Ventham",
        "email": "tventhamc@thetimes.co.uk",
        "avatar": "",
        "date": "3/17/2021",
        "status": "Published",
        "review": 3,
        "head": "at nunc commodo placerat praesent",
        "para": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
    },
    {
        "id": 14,
        "product": "Smiletag Ceramic Vase",
        "company_name": "Modern Farmhouse Decor Vase Set of 3",
        "product_image": "product-14.png",
        "reviewer": "Rollo Truckell",
        "email": "rtruckelld@gravatar.com",
        "avatar": "",
        "date": "2/23/2020",
        "status": "Published",
        "review": 5,
        "head": "in hac",
        "para": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
        "id": 15,
        "product": "Apple iPad",
        "company_name": "10.2-inch Retina Display, 64GB",
        "product_image": "product-15.png",
        "reviewer": "Jabez Heggs",
        "email": "jheggse@nba.com",
        "avatar": "10.png",
        "date": "4/21/2020",
        "status": "Published",
        "review": 1,
        "head": "ac consequat",
        "para": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
    },
    {
        "id": 16,
        "product": "BANGE Anti Theft Backpack",
        "company_name": "Smart Business Laptop Fits 15.6 Inch Notebook",
        "product_image": "product-16.png",
        "reviewer": "Micaela Rowesby",
        "email": "mrowesbyf@surveymonkey.com",
        "avatar": "3.png",
        "date": "12/11/2021",
        "status": "Published",
        "review": 1,
        "head": "mattis egestas metus",
        "para": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
        "id": 17,
        "product": "Xbox Series X/S",
        "company_name": "Dual Controller Charger Station Dock",
        "product_image": "product-17.png",
        "reviewer": "Blakelee Benza",
        "email": "bbenzag@utexas.edu",
        "avatar": "5.png",
        "date": "4/26/2021",
        "status": "Published",
        "review": 1,
        "head": "sapien placerat",
        "para": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
    },
    {
        "id": 18,
        "product": "Canon EOS Rebel T7",
        "company_name": "18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor",
        "product_image": "product-18.png",
        "reviewer": "Emery Breitling",
        "email": "ebreitlingh@friendfeed.com",
        "avatar": "",
        "date": "12/1/2020",
        "status": "Pending",
        "review": 5,
        "head": "nec nisi vulputate",
        "para": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
        "id": 19,
        "product": "Honiway Wall Mirror",
        "company_name": "Decorative 12 inch Rustic Wood Mirror Sunburst Boho",
        "product_image": "product-19.png",
        "reviewer": "Wilona Fields",
        "email": "wfieldsi@columbia.edu",
        "avatar": "12.png",
        "date": "3/30/2020",
        "status": "Published",
        "review": 1,
        "head": "parturient montes nascetur ridiculus",
        "para": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
        "id": 20,
        "product": "Tommaso Veloce Shoes",
        "company_name": "Peloton Shoes Triathlon Road Bike Indoor Cycling",
        "product_image": "product-20.png",
        "reviewer": "Janey Lamprecht",
        "email": "jlamprechtj@tuttocitta.it",
        "avatar": "10.png",
        "date": "9/16/2020",
        "status": "Pending",
        "review": 1,
        "head": "maecenas ut massa quis augue",
        "para": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
        "id": 21,
        "product": "Zoolab",
        "company_name": "Cruickshank-Jones",
        "product_image": "product-1.png",
        "reviewer": "Rosene Walsh",
        "email": "rwalshk@latimes.com",
        "avatar": "",
        "date": "7/17/2021",
        "status": "Published",
        "review": 1,
        "head": "convallis nulla",
        "para": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
        "id": 22,
        "product": "Viva",
        "company_name": "Ferry Group",
        "product_image": "product-2.png",
        "reviewer": "Buffy Sellen",
        "email": "bsellenl@qq.com",
        "avatar": "7.png",
        "date": "1/9/2021",
        "status": "Pending",
        "review": 3,
        "head": "nunc viverra dapibus",
        "para": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
        "id": 23,
        "product": "Transcof",
        "company_name": "Bruen-Heathcote",
        "product_image": "product-3.png",
        "reviewer": "Alvis Szymanzyk",
        "email": "aszymanzykm@google.cn",
        "avatar": "",
        "date": "6/11/2020",
        "status": "Pending",
        "review": 1,
        "head": "nullam porttitor",
        "para": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
    },
    {
        "id": 24,
        "product": "Uerified",
        "company_name": "Koch Group",
        "product_image": "product-4.png",
        "reviewer": "Hatty Morsley",
        "email": "hmorsleyn@gov.uk",
        "avatar": "6.png",
        "date": "2/12/2021",
        "status": "Published",
        "review": 2,
        "head": "metus sapien ut",
        "para": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        "id": 25,
        "product": "Y-find",
        "company_name": "Emmerich and Sons",
        "product_image": "product-5.png",
        "reviewer": "Jabez Pudner",
        "email": "jpudnero@cpanel.net",
        "avatar": "",
        "date": "10/14/2021",
        "status": "Pending",
        "review": 4,
        "head": "orci luctus et",
        "para": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
    },
    {
        "id": 26,
        "product": "Wigtax",
        "company_name": "Zulauf-Prohaska",
        "product_image": "product-6.png",
        "reviewer": "Ida Ovill",
        "email": "iovillp@newsvine.com",
        "avatar": "13.png",
        "date": "11/18/2020",
        "status": "Published",
        "review": 2,
        "head": "vestibulum ante ipsum",
        "para": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
        "id": 27,
        "product": "Tempsoft",
        "company_name": "VonRueden, Rogahn and Kris",
        "product_image": "product-7.png",
        "reviewer": "Suzanne Breckin",
        "email": "sbreckinq@jimdo.com",
        "avatar": "11.png",
        "date": "7/26/2020",
        "status": "Published",
        "review": 2,
        "head": "vel enim",
        "para": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
        "id": 28,
        "product": "Rt",
        "company_name": "Romaguera, O'Connell and Abernathy",
        "product_image": "product-8.png",
        "reviewer": "Morgana Coote",
        "email": "mcooter@tinypic.com",
        "avatar": "5.png",
        "date": "8/29/2021",
        "status": "Pending",
        "review": 5,
        "head": "cubilia curae mauris",
        "para": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
        "id": 29,
        "product": "Zontrax",
        "company_name": "Mills, Hagenes and Bednar",
        "product_image": "product-9.png",
        "reviewer": "Wesley Murra",
        "email": "wmurras@tumblr.com",
        "avatar": "",
        "date": "3/20/2021",
        "status": "Pending",
        "review": 4,
        "head": "gravida nisi at",
        "para": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
    },
    {
        "id": 30,
        "product": "Keylex",
        "company_name": "Sanford, Harvey and Parisian",
        "product_image": "product-10.png",
        "reviewer": "Jobye Varnam",
        "email": "jvarnamt@webs.com",
        "avatar": "",
        "date": "11/24/2020",
        "status": "Pending",
        "review": 2,
        "head": "nec sem",
        "para": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
        "id": 31,
        "product": "Trippledex",
        "company_name": "Conroy-Bergstrom",
        "product_image": "product-11.png",
        "reviewer": "Bibbye O'Dowd",
        "email": "bodowdu@infoseek.co.jp",
        "avatar": "5.png",
        "date": "7/7/2020",
        "status": "Published",
        "review": 5,
        "head": "odio elementum eu",
        "para": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
        "id": 32,
        "product": "Opela",
        "company_name": "Langosh Inc",
        "product_image": "product-12.png",
        "reviewer": "Baldwin Bodimeade",
        "email": "bbodimeadev@gnu.org",
        "avatar": "1.png",
        "date": "3/21/2020",
        "status": "Published",
        "review": 2,
        "head": "in imperdiet et commodo",
        "para": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
        "id": 33,
        "product": "Span",
        "company_name": "Jerde-Walsh",
        "product_image": "product-13.png",
        "reviewer": "Rozalin Allan",
        "email": "rallanw@ucsd.edu",
        "avatar": "12.png",
        "date": "1/23/2020",
        "status": "Published",
        "review": 4,
        "head": "pellentesque at",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 34,
        "product": "Rank",
        "company_name": "Barrows, Quitzon and Roberts",
        "product_image": "product-14.png",
        "reviewer": "Patsy Bowlas",
        "email": "pbowlasx@yandex.ru",
        "avatar": "1.png",
        "date": "10/7/2020",
        "status": "Pending",
        "review": 5,
        "head": "congue etiam",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 35,
        "product": "Tempsoft",
        "company_name": "Russel-Grant",
        "product_image": "product-15.png",
        "reviewer": "Zsazsa Jansens",
        "email": "zjansensy@wikipedia.org",
        "avatar": "10.png",
        "date": "8/7/2021",
        "status": "Pending",
        "review": 1,
        "head": "eget eros",
        "para": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
        "id": 36,
        "product": "Ventosanzap",
        "company_name": "O'Conner-Zboncak",
        "product_image": "product-16.png",
        "reviewer": "Denny MacGettigen",
        "email": "dmacgettigenz@ca.gov",
        "avatar": "",
        "date": "2/17/2020",
        "status": "Published",
        "review": 1,
        "head": "vel dapibus",
        "para": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
    },
    {
        "id": 37,
        "product": "Mat Lam Tam",
        "company_name": "Rutherford, Heller and Bashirian",
        "product_image": "product-17.png",
        "reviewer": "Leia Braunroth",
        "email": "lbraunroth10@nytimes.com",
        "avatar": "1.png",
        "date": "1/28/2021",
        "status": "Published",
        "review": 4,
        "head": "sit amet consectetuer",
        "para": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    },
    {
        "id": 38,
        "product": "Zamit",
        "company_name": "Swift-Altenwerth",
        "product_image": "product-18.png",
        "reviewer": "Nil Vasilic",
        "email": "nvasilic11@ft.com",
        "avatar": "",
        "date": "1/2/2020",
        "status": "Published",
        "review": 1,
        "head": "blandit non",
        "para": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    },
    {
        "id": 39,
        "product": "Tresom",
        "company_name": "O'Kon, Waelchi and Lesch",
        "product_image": "product-19.png",
        "reviewer": "Mandie Forseith",
        "email": "mforseith12@phpbb.com",
        "avatar": "",
        "date": "7/2/2020",
        "status": "Published",
        "review": 1,
        "head": "in ante vestibulum ante",
        "para": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
        "id": 40,
        "product": "Viva",
        "company_name": "Johnston, Anderson and Metz",
        "product_image": "product-20.png",
        "reviewer": "Audra Pinks",
        "email": "apinks13@pinterest.com",
        "avatar": "",
        "date": "1/6/2020",
        "status": "Pending",
        "review": 2,
        "head": "ante ipsum primis in",
        "para": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    },
    {
        "id": 41,
        "product": "Matsoft",
        "company_name": "O'Conner, Paucek and Braun",
        "product_image": "product-1.png",
        "reviewer": "Damita Jarad",
        "email": "djarad14@un.org",
        "avatar": "11.png",
        "date": "10/30/2021",
        "status": "Pending",
        "review": 4,
        "head": "mus etiam vel augue",
        "para": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
    },
    {
        "id": 42,
        "product": "Wiodex",
        "company_name": "Wisoky-Kassulke",
        "product_image": "product-2.png",
        "reviewer": "Fowler Drury",
        "email": "fdrury15@chicagotribune.com",
        "avatar": "",
        "date": "2/11/2020",
        "status": "Published",
        "review": 3,
        "head": "dictumst aliquam augue quam",
        "para": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
    },
    {
        "id": 43,
        "product": "Keylex",
        "company_name": "Haag, Bruen and Reichel",
        "product_image": "product-3.png",
        "reviewer": "Anette Jouen",
        "email": "ajouen16@admin.ch",
        "avatar": "",
        "date": "12/11/2020",
        "status": "Published",
        "review": 3,
        "head": "mauris non ligula pellentesque ultrices",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 44,
        "product": "Konklux",
        "company_name": "Ankunding Inc",
        "product_image": "product-4.png",
        "reviewer": "Candace Fossey",
        "email": "cfossey17@live.com",
        "avatar": "15.png",
        "date": "2/10/2021",
        "status": "Pending",
        "review": 1,
        "head": "vel augue vestibulum ante",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 45,
        "product": "Tresom",
        "company_name": "Deckow and Sons",
        "product_image": "product-5.png",
        "reviewer": "Persis Loades",
        "email": "ploades18@g.co",
        "avatar": "4.png",
        "date": "9/11/2020",
        "status": "Pending",
        "review": 5,
        "head": "convallis nulla neque",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 46,
        "product": "Quo Lux",
        "company_name": "Kreiger, Reynolds and Sporer",
        "product_image": "product-1.png",
        "reviewer": "Kim Carrel",
        "email": "kcarrel19@webnode.com",
        "avatar": "12.png",
        "date": "5/26/2020",
        "status": "Pending",
        "review": 3,
        "head": "quam turpis adipiscing lorem",
        "para": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
        "id": 47,
        "product": "Roldlamis",
        "company_name": "Kuphal-Abbott",
        "product_image": "product-6.png",
        "reviewer": "Rodger Broz",
        "email": "rbroz1a@omniture.com",
        "avatar": "",
        "date": "10/5/2020",
        "status": "Pending",
        "review": 1,
        "head": "morbi non",
        "para": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
        "id": 48,
        "product": "Tampflex",
        "company_name": "Romaguera, Schmeler and Volkman",
        "product_image": "product-7.png",
        "reviewer": "Lauri Shearsby",
        "email": "lshearsby1b@goo.ne.jp",
        "avatar": "5.png",
        "date": "10/18/2020",
        "status": "Pending",
        "review": 5,
        "head": "vel dapibus at diam",
        "para": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
        "id": 49,
        "product": "Span",
        "company_name": "Hane-Romaguera",
        "product_image": "product-8.png",
        "reviewer": "Hannah Drohun",
        "email": "hdrohun1c@marketwatch.com",
        "avatar": "4.png",
        "date": "9/14/2020",
        "status": "Pending",
        "review": 4,
        "head": "morbi porttitor lorem",
        "para": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
    },
    {
        "id": 50,
        "product": "Zamit",
        "company_name": "Hoeger-Powlowski",
        "product_image": "product-9.png",
        "reviewer": "Celesta Hadden",
        "email": "chadden1d@hao123.com",
        "avatar": "11.png",
        "date": "4/15/2020",
        "status": "Published",
        "review": 5,
        "head": "non sodales",
        "para": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
        "id": 51,
        "product": "Witchip",
        "company_name": "Heidenreich, Keeling and Kuhn",
        "product_image": "product-10.png",
        "reviewer": "Sollie Dowling",
        "email": "sdowling1e@businessweek.com",
        "avatar": "",
        "date": "9/7/2020",
        "status": "Pending",
        "review": 1,
        "head": "nam congue risus semper porta",
        "para": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    },
    {
        "id": 52,
        "product": "Ratity",
        "company_name": "Beier and Sons",
        "product_image": "product-11.png",
        "reviewer": "Esma Tamsett",
        "email": "etamsett1f@arstechnica.com",
        "avatar": "",
        "date": "12/21/2020",
        "status": "Pending",
        "review": 2,
        "head": "rutrum rutrum neque aenean auctor",
        "para": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
        "id": 53,
        "product": "Voltsillam",
        "company_name": "Jones and Sons",
        "product_image": "product-12.png",
        "reviewer": "Fee Pieche",
        "email": "fpieche1g@usa.gov",
        "avatar": "",
        "date": "4/28/2020",
        "status": "Pending",
        "review": 5,
        "head": "non mi",
        "para": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
    },
    {
        "id": 54,
        "product": "Voltsillam",
        "company_name": "Mohr and Sons",
        "product_image": "product-13.png",
        "reviewer": "Frankie Davis",
        "email": "fdavis1h@guardian.co.uk",
        "avatar": "13.png",
        "date": "3/16/2021",
        "status": "Published",
        "review": 5,
        "head": "maecenas pulvinar lobortis est phasellus",
        "para": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
        "id": 55,
        "product": "Matsoft",
        "company_name": "Kling-Hayes",
        "product_image": "product-1.png",
        "reviewer": "Byram Wimlet",
        "email": "bwimlet1i@craigslist.org",
        "avatar": "4.png",
        "date": "7/13/2021",
        "status": "Pending",
        "review": 2,
        "head": "tortor sollicitudin",
        "para": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
        "id": 56,
        "product": "Rt",
        "company_name": "Brekke-Lubowitz",
        "product_image": "product-14.png",
        "reviewer": "Maurita Hutchin",
        "email": "mhutchin1j@ibm.com",
        "avatar": "",
        "date": "11/11/2020",
        "status": "Pending",
        "review": 1,
        "head": "odio cras mi pede malesuada",
        "para": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
    },
    {
        "id": 57,
        "product": "Konklab",
        "company_name": "Kiehn LLC",
        "product_image": "product-15.png",
        "reviewer": "Gorden Leftley",
        "email": "gleftley1k@disqus.com",
        "avatar": "",
        "date": "9/19/2021",
        "status": "Published",
        "review": 3,
        "head": "sed nisl nunc rhoncus",
        "para": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
    },
    {
        "id": 58,
        "product": "Lotstring",
        "company_name": "Windler-Corwin",
        "product_image": "product-16.png",
        "reviewer": "Raviv Critcher",
        "email": "rcritcher1l@icq.com",
        "avatar": "",
        "date": "4/20/2020",
        "status": "Published",
        "review": 5,
        "head": "bibendum imperdiet nullam orci",
        "para": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
        "id": 59,
        "product": "Keylex",
        "company_name": "Reynolds, Buckridge and Schmeler",
        "product_image": "product-17.png",
        "reviewer": "Cinda Tersay",
        "email": "ctersay1m@berkeley.edu",
        "avatar": "",
        "date": "3/31/2021",
        "status": "Published",
        "review": 4,
        "head": "curabitur at",
        "para": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
    },
    {
        "id": 60,
        "product": "Transcof",
        "company_name": "Jacobs-Farrell",
        "product_image": "product-18.png",
        "reviewer": "Raynell Rosenauer",
        "email": "rrosenauer1n@360.cn",
        "avatar": "",
        "date": "6/3/2020",
        "status": "Published",
        "review": 2,
        "head": "massa donec dapibus duis at",
        "para": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
        "id": 61,
        "product": "Opela",
        "company_name": "Beier-Bergstrom",
        "product_image": "product-19.png",
        "reviewer": "Aurelia Cooley",
        "email": "acooley1o@prnewswire.com",
        "avatar": "",
        "date": "7/27/2020",
        "status": "Pending",
        "review": 1,
        "head": "dictumst maecenas",
        "para": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    },
    {
        "id": 62,
        "product": "Rlowdesk",
        "company_name": "Roob and Sons",
        "product_image": "product-20.png",
        "reviewer": "Silvester Vittel",
        "email": "svittel1p@eepurl.com",
        "avatar": "",
        "date": "3/2/2021",
        "status": "Pending",
        "review": 5,
        "head": "elit ac nulla",
        "para": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    },
    {
        "id": 63,
        "product": "Kanlam",
        "company_name": "Hauck Group",
        "product_image": "product-2.png",
        "reviewer": "Nester Oliffe",
        "email": "noliffe1q@tinypic.com",
        "avatar": "",
        "date": "3/31/2021",
        "status": "Published",
        "review": 4,
        "head": "sagittis nam congue",
        "para": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
    },
    {
        "id": 64,
        "product": "Rembucket",
        "company_name": "Reynolds-Lindgren",
        "product_image": "product-2.png",
        "reviewer": "Cheryl Growcott",
        "email": "cgrowcott1r@nifty.com",
        "avatar": "10.png",
        "date": "10/29/2021",
        "status": "Pending",
        "review": 4,
        "head": "amet diam in magna bibendum",
        "para": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
    },
    {
        "id": 65,
        "product": "Tin",
        "company_name": "Stroman and Sons",
        "product_image": "product-2.png",
        "reviewer": "Calhoun Perot",
        "email": "cperot1s@goodreads.com",
        "avatar": "9.png",
        "date": "10/15/2020",
        "status": "Published",
        "review": 4,
        "head": "enim blandit mi",
        "para": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    },
    {
        "id": 66,
        "product": "Trippledex",
        "company_name": "Kihn-Wisoky",
        "product_image": "product-2.png",
        "reviewer": "Winnah Tivenan",
        "email": "wtivenan1t@example.com",
        "avatar": "",
        "date": "5/27/2021",
        "status": "Published",
        "review": 3,
        "head": "pede ullamcorper augue a suscipit",
        "para": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    },
    {
        "id": 67,
        "product": "Redhold",
        "company_name": "Konopelski-Hauck",
        "product_image": "product-2.png",
        "reviewer": "Faydra Perceval",
        "email": "fperceval1u@psu.edu",
        "avatar": "",
        "date": "10/2/2020",
        "status": "Published",
        "review": 2,
        "head": "porta volutpat",
        "para": "In congue. Etiam justo. Etiam pretium iaculis justo."
    },
    {
        "id": 68,
        "product": "Pannier",
        "company_name": "Rau Inc",
        "product_image": "product-3.png",
        "reviewer": "Shauna Runge",
        "email": "srunge1v@theatlantic.com",
        "avatar": "6.png",
        "date": "12/17/2021",
        "status": "Published",
        "review": 3,
        "head": "aliquam lacus morbi quis tortor",
        "para": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": 69,
        "product": "Rlexidy",
        "company_name": "Torp-Lebsack",
        "product_image": "product-3.png",
        "reviewer": "Udell Laurand",
        "email": "ulaurand1w@prnewswire.com",
        "avatar": "10.png",
        "date": "3/14/2021",
        "status": "Pending",
        "review": 5,
        "head": "vestibulum velit id pretium",
        "para": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
        "id": 70,
        "product": "Keylex",
        "company_name": "Hane-Bednar",
        "product_image": "product-3.png",
        "reviewer": "Charyl Mordaunt",
        "email": "cmordaunt1x@bizjournals.com",
        "avatar": "4.png",
        "date": "4/11/2021",
        "status": "Pending",
        "review": 1,
        "head": "amet eros suspendisse accumsan tortor",
        "para": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
        "id": 71,
        "product": "Kuobam",
        "company_name": "Rice Group",
        "product_image": "product-3.png",
        "reviewer": "Becki Petit",
        "email": "bpetit1y@addtoany.com",
        "avatar": "3.png",
        "date": "8/9/2021",
        "status": "Published",
        "review": 5,
        "head": "blandit lacinia erat vestibulum sed",
        "para": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
        "id": 72,
        "product": "Ulphazap",
        "company_name": "West, White and Rau",
        "product_image": "product-3.png",
        "reviewer": "Gallagher Goldes",
        "email": "ggoldes1z@microsoft.com",
        "avatar": "15.png",
        "date": "10/21/2020",
        "status": "Pending",
        "review": 4,
        "head": "vitae ipsum aliquam",
        "para": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    },
    {
        "id": 73,
        "product": "Wiodex",
        "company_name": "Keeling-Dicki",
        "product_image": "product-4.png",
        "reviewer": "Gunilla Painter",
        "email": "gpainter20@drupal.org",
        "avatar": "4.png",
        "date": "12/11/2021",
        "status": "Published",
        "review": 4,
        "head": "tortor duis mattis egestas",
        "para": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
        "id": 74,
        "product": "Veribet",
        "company_name": "Gerlach, Bernier and Jenkins",
        "product_image": "product-4.png",
        "reviewer": "Greggory Illingworth",
        "email": "gillingworth21@lis",
        "avatar": "15.png",
        "date": "8/8/2020",
        "status": "Pending",
        "review": 4,
        "head": "pede justo lacinia eget tincidunt",
        "para": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
    },
    {
        "id": 75,
        "product": "Rix San",
        "company_name": "Kessler and Sons",
        "product_image": "product-4.png",
        "reviewer": "Amabel Reah",
        "email": "areah22@indiegogo.com",
        "avatar": "",
        "date": "11/22/2021",
        "status": "Published",
        "review": 3,
        "head": "sit amet lobortis sapien",
        "para": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
        "id": 76,
        "product": "Zoolab",
        "company_name": "Goldner, Lind and Hansen",
        "product_image": "product-4.png",
        "reviewer": "Eziechiele Littlejohns",
        "email": "elittlejohns23@blogger.com",
        "avatar": "",
        "date": "8/17/2020",
        "status": "Pending",
        "review": 4,
        "head": "cras non velit",
        "para": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
    },
    {
        "id": 77,
        "product": "Rob",
        "company_name": "Trantow Group",
        "product_image": "product-4.png",
        "reviewer": "Faythe Hance",
        "email": "fhance24@odnoklassniki.ru",
        "avatar": "13.png",
        "date": "7/1/2021",
        "status": "Published",
        "review": 5,
        "head": "luctus tincidunt nulla mollis molestie",
        "para": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
        "id": 78,
        "product": "Zamit",
        "company_name": "Reichel, Hagenes and Nader",
        "product_image": "product-5.png",
        "reviewer": "Marie Hazelton",
        "email": "mhazelton25@miitbeian.gov.cn",
        "avatar": "",
        "date": "5/31/2021",
        "status": "Published",
        "review": 1,
        "head": "ut odio cras",
        "para": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
        "id": 79,
        "product": "Zoolab",
        "company_name": "Baumbach-Renner",
        "product_image": "product-5.png",
        "reviewer": "Vincenz Izsak",
        "email": "vizsak26@diigo.com",
        "avatar": "",
        "date": "3/15/2021",
        "status": "Pending",
        "review": 2,
        "head": "gravida sem",
        "para": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
        "id": 80,
        "product": "Stronghold",
        "company_name": "Ullrich, Jacobson and Tillman",
        "product_image": "product-5.png",
        "reviewer": "Roch Dehmel",
        "email": "rdehmel27@tiny.cc",
        "avatar": "",
        "date": "4/21/2020",
        "status": "Pending",
        "review": 3,
        "head": "ligula pellentesque ultrices phasellus",
        "para": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
    },
    {
        "id": 81,
        "product": "Rintone",
        "company_name": "VonRueden, Kuphal and Lindgren",
        "product_image": "product-5.png",
        "reviewer": "Marylin Thewlis",
        "email": "mthewlis28@tmall.com",
        "avatar": "12.png",
        "date": "5/26/2021",
        "status": "Pending",
        "review": 1,
        "head": "elementum nullam varius nulla",
        "para": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
    },
    {
        "id": 82,
        "product": "Temp",
        "company_name": "Wintheiser, Bergstrom and Schimmel",
        "product_image": "product-5.png",
        "reviewer": "Annissa Mapham",
        "email": "amapham29@cbslocal.com",
        "avatar": "4.png",
        "date": "6/10/2021",
        "status": "Published",
        "review": 4,
        "head": "odio porttitor",
        "para": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        "id": 83,
        "product": "Rlexidy",
        "company_name": "Kuhn and Sons",
        "product_image": "product-6.png",
        "reviewer": "Lori Prosek",
        "email": "lprosek2a@webs.com",
        "avatar": "",
        "date": "7/16/2021",
        "status": "Published",
        "review": 1,
        "head": "lacinia sapien quis",
        "para": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
    },
    {
        "id": 84,
        "product": "Ronstring",
        "company_name": "Goldner, Nitzsche and Rau",
        "product_image": "product-6.png",
        "reviewer": "Zelma Jado",
        "email": "zjado2b@salon.com",
        "avatar": "",
        "date": "7/13/2021",
        "status": "Pending",
        "review": 4,
        "head": "mauris sit amet eros suspendisse",
        "para": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
        "id": 85,
        "product": "Rixflex",
        "company_name": "Bayer-Beer",
        "product_image": "product-6.png",
        "reviewer": "Alfreda Tuffley",
        "email": "atuffley2c@drupal.org",
        "avatar": "",
        "date": "3/25/2020",
        "status": "Pending",
        "review": 2,
        "head": "molestie hendrerit at vulputate vitae",
        "para": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
        "id": 86,
        "product": "Uerified",
        "company_name": "Rolfson-Witting",
        "product_image": "product-6.png",
        "reviewer": "Arnold Rate",
        "email": "arate2d@mit.edu",
        "avatar": "15.png",
        "date": "7/22/2021",
        "status": "Pending",
        "review": 1,
        "head": "nisi venenatis tristique fusce",
        "para": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
        "id": 87,
        "product": "Stringtough",
        "company_name": "Kunde-Gibson",
        "product_image": "product-7.png",
        "reviewer": "Felizio Macieiczyk",
        "email": "fmacieiczyk2e@sciencedaily.com",
        "avatar": "15.png",
        "date": "8/27/2020",
        "status": "Published",
        "review": 4,
        "head": "augue quam sollicitudin",
        "para": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
        "id": 88,
        "product": "Qookley",
        "company_name": "Kshlerin-Klocko",
        "product_image": "product-7.png",
        "reviewer": "Evanne Chamley",
        "email": "echamley2f@gmpg.org",
        "avatar": "6.png",
        "date": "2/1/2021",
        "status": "Pending",
        "review": 4,
        "head": "eget tincidunt",
        "para": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    {
        "id": 89,
        "product": "Zamit",
        "company_name": "Reilly, Marvin and Ondricka",
        "product_image": "product-7.png",
        "reviewer": "Dacy Goodlatt",
        "email": "dgoodlatt2g@squarespace.com",
        "avatar": "11.png",
        "date": "4/15/2021",
        "status": "Pending",
        "review": 4,
        "head": "eu interdum eu",
        "para": "In congue. Etiam justo. Etiam pretium iaculis justo."
    },
    {
        "id": 90,
        "product": "Mat Lam Tam",
        "company_name": "Ratke-Bauch",
        "product_image": "product-7.png",
        "reviewer": "Samantha Vickerman",
        "email": "svickerman2h@earthlink.net",
        "avatar": "7.png",
        "date": "6/30/2021",
        "status": "Pending",
        "review": 3,
        "head": "leo rhoncus sed vestibulum",
        "para": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
    },
    {
        "id": 91,
        "product": "Rt",
        "company_name": "Kautzer-Hayes",
        "product_image": "product-8.png",
        "reviewer": "Maura Robichon",
        "email": "mrobichon2i@accuweather.com",
        "avatar": "",
        "date": "4/12/2020",
        "status": "Published",
        "review": 3,
        "head": "dui maecenas",
        "para": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
        "id": 92,
        "product": "Stim",
        "company_name": "Bernhard and Sons",
        "product_image": "product-8.png",
        "reviewer": "Shelton Bonde",
        "email": "sbonde2j@economist.com",
        "avatar": "11.png",
        "date": "6/1/2021",
        "status": "Pending",
        "review": 1,
        "head": "odio elementum",
        "para": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    {
        "id": 93,
        "product": "Rix San",
        "company_name": "Waters, Harvey and Stiedemann",
        "product_image": "product-8.png",
        "reviewer": "Hallsy Flannigan",
        "email": "hflannigan2k@printfriendly.com",
        "avatar": "13.png",
        "date": "6/3/2020",
        "status": "Published",
        "review": 5,
        "head": "ultrices phasellus id",
        "para": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "id": 94,
        "product": "Vagram",
        "company_name": "Ondricka, Thompson and Kuhn",
        "product_image": "product-8.png",
        "reviewer": "Rheta Chazelas",
        "email": "rchazelas2l@forbes.com",
        "avatar": "",
        "date": "2/21/2021",
        "status": "Pending",
        "review": 1,
        "head": "eleifend quam",
        "para": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
    },
    {
        "id": 95,
        "product": "Otcom",
        "company_name": "Volkman Group",
        "product_image": "product-9.png",
        "reviewer": "Arabelle Uc",
        "email": "auc2m@archive.org",
        "avatar": "",
        "date": "1/27/2021",
        "status": "Published",
        "review": 4,
        "head": "fermentum justo",
        "para": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    },
    {
        "id": 96,
        "product": "Rixflex",
        "company_name": "Dickinson, Spencer and Hyatt",
        "product_image": "product-9.png",
        "reviewer": "Pauly Goulden",
        "email": "pgoulden2n@ed.gov",
        "avatar": "1.png",
        "date": "10/2/2020",
        "status": "Pending",
        "review": 2,
        "head": "morbi ut",
        "para": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
    },
    {
        "id": 97,
        "product": "Lotstring",
        "company_name": "Marvin Inc",
        "product_image": "product-9.png",
        "reviewer": "Wilhelmina Benezet",
        "email": "wbenezet2o@themeforest.net",
        "avatar": "",
        "date": "8/12/2021",
        "status": "Pending",
        "review": 4,
        "head": "sapien cursus vestibulum proin",
        "para": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
        "id": 98,
        "product": "Wiodex",
        "company_name": "Hayes-Greenholt",
        "product_image": "product-9.png",
        "reviewer": "Wallie Paolone",
        "email": "wpaolone2p@paginegialle.it",
        "avatar": "9.png",
        "date": "7/15/2021",
        "status": "Published",
        "review": 2,
        "head": "tincidunt in leo maecenas",
        "para": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 99,
        "product": "Komainer",
        "company_name": "Gislason, Greenfelder and Wisozk",
        "product_image": "product-10.png",
        "reviewer": "Ezmeralda Normavill",
        "email": "enormavill2q@infoseek.co.jp",
        "avatar": "5.png",
        "date": "8/4/2021",
        "status": "Pending",
        "review": 3,
        "head": "pharetra magna ac",
        "para": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    },
    {
        "id": 100,
        "product": "Ulpha",
        "company_name": "Kunde Group",
        "product_image": "product-10.png",
        "reviewer": "Lew Dudman",
        "email": "ldudman2r@nationalgeographic.com",
        "avatar": "5.png",
        "date": "11/12/2020",
        "status": "Published",
        "review": 3,
        "head": "suscipit ligula in lacus",
        "para": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
    }   
]
! function() {
    let e, t, a, o;
    t = isDarkStyle ? (e = config.colors_dark.cardColor, a = config.colors_dark.textMuted, o = config.colors_dark.headingColor, "dark") : (e = config.colors.cardColor, a = config.colors.textMuted, o = config.colors.headingColor, "");
    var s = document.querySelector("#reviewsChart"),
        r = {
            chart: {
                height: 160,
                width: 190,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "75%",
                    columnWidth: "40%",
                    startingShape: "rounded",
                    endingShape: "rounded",
                    borderRadius: 5,
                    distributed: !0
                }
            },
            grid: {
                show: !1,
                padding: {
                    top: -25,
                    bottom: -12
                }
            },
            colors: [config.colors_label.success, config.colors_label.success, config.colors_label.success, config.colors_label.success, config.colors.success, config.colors_label.success, config.colors_label.success],
            dataLabels: {
                enabled: !1
            },
            series: [{
                data: [20, 40, 60, 80, 100, 80, 60]
            }],
            legend: {
                show: !1
            },
            xaxis: {
                categories: ["M", "T", "W", "T", "F", "S", "S"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: a,
                        fontSize: "13px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            },
            responsive: [{
                breakpoint: 0,
                options: {
                    chart: {
                        width: "100%"
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 1440,
                options: {
                    chart: {
                        height: 150,
                        width: 190,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 1400,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 130,
                        width: 190,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 992,
                chart: {
                    height: 150,
                    width: 190,
                    toolbar: {
                        show: !1
                    }
                },
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 883,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 150,
                        width: 190,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 576,
                options: {
                    chart: {
                        width: "100%",
                        height: "200",
                        type: "bar"
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "30% "
                        }
                    }
                }
            }, {
                breakpoint: 420,
                options: {
                    plotOptions: {
                        chart: {
                            width: "100%",
                            height: "200",
                            type: "bar"
                        },
                        bar: {
                            borderRadius: 3,
                            columnWidth: "30%"
                        }
                    }
                }
            }]
        };
    null !== s && new ApexCharts(s, r).render()
}(), $(function() {
    let t, a, o;
    o = (isDarkStyle ? (t = config.colors_dark.borderColor, a = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, a = config.colors.bodyBg, config.colors)).headingColor;
    var e, s = $(".datatables-review"),
        r = {
            Pending: {
                title: "Pending",
                class: "bg-label-warning"
            },
            Published: {
                title: "Published",
                class: "bg-label-success"
            }
        };
    s.length && (e = s.DataTable({
        data: reviewJson,
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "product"
        }, {
            data: "reviewer"
        }, {
            data: "review"
        }, {
            data: "date"
        }, {
            data: "status"
        }, {
            data: " "
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, a, o) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            searchable: !1,
            responsivePriority: 3,
            checkboxes: !0,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input">'
            }
        }, {
            targets: 2,
            render: function(e, t, a, o) {
                var s = a.product,
                    r = a.company_name,
                    n = a.id,
                    i = a.product_image;
                return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2 rounded-2 bg-label-secondary">' + (i ? '<img src="' + assetsPath + "img/ecommerce-images/" + i + '" alt="Product-' + n + '" class="rounded-2">' : '<span class="avatar-initial rounded bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (i = (((i = (s = a.product).match(/\b\w/g) || []).shift() || "") + (i.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><span class="fw-medium text-nowrap">' + s + '</span></a><small class="text-muted">' + r + "</small></div></div>"
            }
        }, {
            targets: 3,
            responsivePriority: 1,
            render: function(e, t, a, o) {
                var s = a.reviewer,
                    r = a.email,
                    n = a.avatar;
                return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">' + (n ? '<img src="' + assetsPath + "img/avatars/" + n + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (n = (((n = (s = a.reviewer).match(/\b\w/g) || []).shift() || "") + (n.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html"><span class="fw-medium">' + s + '</span></a><small class="text-muted text-nowrap">' + r + "</small></div></div>"
            }
        }, {
            targets: 4,
            responsivePriority: 2,
            render: function(e, t, a, o) {
                var s = a.review,
                    r = a.head,
                    a = a.para,
                    n = $('<div class="read-only-ratings ps-0 mb-2"></div>');
                return n.rateYo({
                    rating: s,
                    rtl: isRtl,
                    readOnly: !0,
                    starWidth: "20px",
                    spacing: "3px",
                    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2 L15.09,8.09 L22,9.9 L17,14 L18.18,20 L12,17.5 L5.82,20 L7,14 L2,9.9 L8.91,8.09 L12,2 Z" /></svg>'
                }), "<div>" + n.prop("outerHTML") + '<p class="fw-medium mb-1 text-truncate text-capitalize">' + r + '</p><small class="text-break pe-3">' + a + "</small></div>"
            }
        }, {
            targets: 5,
            render: function(e, t, a, o) {
                return '<span class="text-nowrap">' + new Date(a.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                }) + "</span>"
            }
        }, {
            targets: 6,
            render: function(e, t, a, o) {
                a = a.status;
                return '<span class="badge ' + r[a].class + '" text-capitalized>' + r[a].title + "</span>"
            }
        }, {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function(e, t, a, o) {
                return '<div class="text-xxl-center"><div class="dropdown"><a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="javascript:;" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">Delete</a></div></div></div>'
            }
        }],
        order: [
            [2, "asc"]
        ],
        dom: '<"card-header d-flex align-items-md-center pb-md-2 flex-wrap"<"me-5 ms-n2"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-end align-items-md-center justify-content-md-end pt-0 gap-3 flex-wrap"l<"review_filter"> <"mx-0 me-md-n3 mt-sm-0"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Review"
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
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                },
                customize: function(e) {
                    $(e.document.body).css("color", o).css("border-color", t).css("background-color", a), $(e.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().reviewer
                    }
                }),
                type: "column",
                renderer: function(e, t, a) {
                    a = $.map(a, function(e, t) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!a && $('<table class="table"/><tbody />').append(a)
                }
            }
        },
        initComplete: function() {
            this.api().columns(6).every(function() {
                var t = this,
                    a = $('<select id="Review" class="form-select"><option value=""> All </option></select>').appendTo(".review_filter").on("change", function() {
                        var e = $.fn.dataTable.util.escapeRegex($(this).val());
                        t.search(e ? "^" + e + "$" : "", !0, !1).draw()
                    });
                t.data().unique().sort().each(function(e, t) {
                    a.append('<option value="' + e + '" class="text-capitalize">' + e + "</option>")
                })
            })
        }
    }), $(".dataTables_length").addClass("mt-0 mt-md-3"), $(".dt-buttons > .btn-group > button").removeClass("btn-secondary")), $(".datatables-review tbody").on("click", ".delete-record", function() {
        e.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});