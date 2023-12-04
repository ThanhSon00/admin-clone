"use strict";
const customerAllJson = [
    {
        "id": 1,
        "customer": "Stanfield Baser",
        "customer_id": 879861,
        "email": "sbaser0@boston.com",
        "country": "Sri Lanka",
        "country_code": "lk",
        "order": 157,
        "total_spent": "$2074.22",
        "image": "3.png"
    },
    {
        "id": 2,
        "customer": "Laurie Dax",
        "customer_id": 178408,
        "email": "ldax1@lycos.com",
        "country": "Russia",
        "country_code": "ru",
        "order": 663,
        "total_spent": "$2404.19",
        "image": ""
    },
    {
        "id": 3,
        "customer": "Maxine Kenrick",
        "customer_id": 221092,
        "email": "mkenrick2@eepurl.com",
        "country": "Guatemala",
        "country_code": "gt",
        "order": 64,
        "total_spent": "$8821.40",
        "image": "16.png"
    },
    {
        "id": 4,
        "customer": "Harman Burkill",
        "customer_id": 645579,
        "email": "hburkill3@drupal.org",
        "country": "Portugal",
        "country_code": "pt",
        "order": 640,
        "total_spent": "$5294.35",
        "image": ""
    },
    {
        "id": 5,
        "customer": "Aubrey Borrow",
        "customer_id": 288765,
        "email": "aborrow4@jiathis.com",
        "country": "France",
        "country_code": "fr",
        "order": 184,
        "total_spent": "$1003.30",
        "image": "20.png"
    },
    {
        "id": 6,
        "customer": "Nester Fridd",
        "customer_id": 321942,
        "email": "nfridd5@cdbaby.com",
        "country": "China",
        "country_code": "cn",
        "order": 965,
        "total_spent": "$3876.92",
        "image": ""
    },
    {
        "id": 7,
        "customer": "Lizzie Nicholes",
        "customer_id": 516109,
        "email": "lnicholes6@rediff.com",
        "country": "Brazil",
        "country_code": "br",
        "order": 514,
        "total_spent": "$7936.85",
        "image": "16.png"
    },
    {
        "id": 8,
        "customer": "Amabel Scullion",
        "customer_id": 403666,
        "email": "ascullion7@wiley.com",
        "country": "Guatemala",
        "country_code": "gt",
        "order": 584,
        "total_spent": "$4150.97",
        "image": "19.png"
    },
    {
        "id": 9,
        "customer": "Zeke Arton",
        "customer_id": 895280,
        "email": "zarton8@weibo.com",
        "country": "Ukraine",
        "country_code": "ua",
        "order": 539,
        "total_spent": "$3430.05",
        "image": "17.png"
    },
    {
        "id": 10,
        "customer": "Rosy Medlicott",
        "customer_id": 199195,
        "email": "rmedlicott9@amazon.com",
        "country": "Russia",
        "country_code": "ru",
        "order": 4,
        "total_spent": "$8646.75",
        "image": ""
    },
    {
        "id": 11,
        "customer": "Elene Esp",
        "customer_id": 317063,
        "email": "eespa@soundcloud.com",
        "country": "China",
        "country_code": "cn",
        "order": 602,
        "total_spent": "$5807.99",
        "image": "8.png"
    },
    {
        "id": 12,
        "customer": "Cal Lavington",
        "customer_id": 999318,
        "email": "clavingtonb@nps.gov",
        "country": "Bolivia",
        "country_code": "bo",
        "order": 779,
        "total_spent": "$6677.41",
        "image": ""
    },
    {
        "id": 13,
        "customer": "Merrick Antcliffe",
        "customer_id": 804513,
        "email": "mantcliffec@php.net",
        "country": "China",
        "country_code": "cn",
        "order": 267,
        "total_spent": "$3340.41",
        "image": ""
    },
    {
        "id": 14,
        "customer": "Price Tremathack",
        "customer_id": 155681,
        "email": "ptremathackd@amazon.com",
        "country": "Russia",
        "country_code": "ru",
        "order": 611,
        "total_spent": "$5768.17",
        "image": ""
    },
    {
        "id": 15,
        "customer": "Leesa Habershaw",
        "customer_id": 490182,
        "email": "lhabershawe@washingtonpost.com",
        "country": "Japan",
        "country_code": "jp",
        "order": 90,
        "total_spent": "$4488.03",
        "image": "4.png"
    },
    {
        "id": 16,
        "customer": "Jeana Quincey",
        "customer_id": 760428,
        "email": "jquinceyf@yolasite.com",
        "country": "Ukraine",
        "country_code": "ua",
        "order": 597,
        "total_spent": "$6936.49",
        "image": "10.png"
    },
    {
        "id": 17,
        "customer": "Emmott Hise",
        "customer_id": 675190,
        "email": "ehiseg@usatoday.com",
        "country": "China",
        "country_code": "cn",
        "order": 30,
        "total_spent": "$7994.11",
        "image": "18.png"
    },
    {
        "id": 18,
        "customer": "Griffith Weeke",
        "customer_id": 601134,
        "email": "gweekeh@dyndns.org",
        "country": "Indonesia",
        "country_code": "id",
        "order": 322,
        "total_spent": "$5710.25",
        "image": "5.png"
    },
    {
        "id": 19,
        "customer": "Ali Barnardo",
        "customer_id": 908144,
        "email": "abarnardoi@forbes.com",
        "country": "Mexico",
        "country_code": "mx",
        "order": 863,
        "total_spent": "$7537.74",
        "image": ""
    },
    {
        "id": 20,
        "customer": "Powell Wornham",
        "customer_id": 528288,
        "email": "pwornhamj@ca.gov",
        "country": "Czech Republic",
        "country_code": "cz",
        "order": 812,
        "total_spent": "$7801.46",
        "image": ""
    },
    {
        "id": 21,
        "customer": "Miltie Ganniclifft",
        "customer_id": 573210,
        "email": "mganniclifftk@bandcamp.com",
        "country": "Russia",
        "country_code": "ru",
        "order": 705,
        "total_spent": "$1371.44",
        "image": ""
    },
    {
        "id": 22,
        "customer": "Tabbatha Duinbleton",
        "customer_id": 473511,
        "email": "tduinbletonl@mediafire.com",
        "country": "United States",
        "country_code": "us",
        "order": 956,
        "total_spent": "$8632.52",
        "image": "20.png"
    },
    {
        "id": 23,
        "customer": "Maurizia Abel",
        "customer_id": 676743,
        "email": "mabelm@xrea.com",
        "country": "Malaysia",
        "country_code": "my",
        "order": 326,
        "total_spent": "$7241.74",
        "image": "19.png"
    },
    {
        "id": 24,
        "customer": "Amargo Fliege",
        "customer_id": 381698,
        "email": "afliegen@storify.com",
        "country": "Indonesia",
        "country_code": "id",
        "order": 748,
        "total_spent": "$5821.27",
        "image": "6.png"
    },
    {
        "id": 25,
        "customer": "Shayla Tarplee",
        "customer_id": 865989,
        "email": "starpleeo@ovh.net",
        "country": "Nigeria",
        "country_code": "ng",
        "order": 535,
        "total_spent": "$900.54",
        "image": "17.png"
    },
    {
        "id": 26,
        "customer": "Kassey Cutting",
        "customer_id": 545661,
        "email": "kcuttingp@dion.ne.jp",
        "country": "Indonesia",
        "country_code": "id",
        "order": 645,
        "total_spent": "$3200.38",
        "image": "9.png"
    },
    {
        "id": 27,
        "customer": "Blaire Hillaby",
        "customer_id": 408852,
        "email": "bhillabyq@123-reg.co.uk",
        "country": "Chile",
        "country_code": "cl",
        "order": 709,
        "total_spent": "$376.46",
        "image": "15.png"
    },
    {
        "id": 28,
        "customer": "Taryn Ducker",
        "customer_id": 486325,
        "email": "tduckerr@tamu.edu",
        "country": "Bhutan",
        "country_code": "bt",
        "order": 535,
        "total_spent": "$3654.39",
        "image": ""
    },
    {
        "id": 29,
        "customer": "Maddie Witherop",
        "customer_id": 137049,
        "email": "mwitherops@bing.com",
        "country": "China",
        "country_code": "cn",
        "order": 763,
        "total_spent": "$1136.68",
        "image": "7.png"
    },
    {
        "id": 30,
        "customer": "Brooke Pattemore",
        "customer_id": 985599,
        "email": "bpattemoret@techcrunch.com",
        "country": "Brazil",
        "country_code": "br",
        "order": 63,
        "total_spent": "$1955.91",
        "image": "9.png"
    },
    {
        "id": 31,
        "customer": "Mordy Dockerty",
        "customer_id": 178466,
        "email": "mdockertyu@umn.edu",
        "country": "Sweden",
        "country_code": "se",
        "order": 452,
        "total_spent": "$191.11",
        "image": "9.png"
    },
    {
        "id": 32,
        "customer": "Clemmie Trowel",
        "customer_id": 871402,
        "email": "ctrowelv@feedburner.com",
        "country": "Chile",
        "country_code": "cl",
        "order": 415,
        "total_spent": "$5285.45",
        "image": "20.png"
    },
    {
        "id": 33,
        "customer": "Dehlia Shellard",
        "customer_id": 642834,
        "email": "dshellardw@mediafire.com",
        "country": "Czech Republic",
        "country_code": "cz",
        "order": 651,
        "total_spent": "$4284.88",
        "image": "20.png"
    },
    {
        "id": 34,
        "customer": "Neila Juggings",
        "customer_id": 471692,
        "email": "njuggingsx@wp.com",
        "country": "Kenya",
        "country_code": "ke",
        "order": 219,
        "total_spent": "$6698.44",
        "image": "15.png"
    },
    {
        "id": 35,
        "customer": "Ellsworth Dunnan",
        "customer_id": 295906,
        "email": "edunnany@ucla.edu",
        "country": "Brazil",
        "country_code": "br",
        "order": 11,
        "total_spent": "$3496.34",
        "image": "5.png"
    },
    {
        "id": 36,
        "customer": "Kassandra Cossentine",
        "customer_id": 979702,
        "email": "kcossentinez@topsy.com",
        "country": "Indonesia",
        "country_code": "id",
        "order": 316,
        "total_spent": "$5328.02",
        "image": "6.png"
    },
    {
        "id": 37,
        "customer": "Hugibert Merigeau",
        "customer_id": 231745,
        "email": "hmerigeau10@yelp.com",
        "country": "Peru",
        "country_code": "pe",
        "order": 931,
        "total_spent": "$5868.06",
        "image": "6.png"
    },
    {
        "id": 38,
        "customer": "Constantina Charter",
        "customer_id": 259786,
        "email": "ccharter11@php.net",
        "country": "Czech Republic",
        "country_code": "cz",
        "order": 30,
        "total_spent": "$4134.97",
        "image": "19.png"
    },
    {
        "id": 39,
        "customer": "Charleen Langsbury",
        "customer_id": 794373,
        "email": "clangsbury12@usatoday.com",
        "country": "Brazil",
        "country_code": "br",
        "order": 215,
        "total_spent": "$1869.06",
        "image": "9.png"
    },
    {
        "id": 40,
        "customer": "Sande Ferrar",
        "customer_id": 949483,
        "email": "sferrar13@weather.com",
        "country": "Bolivia",
        "country_code": "bo",
        "order": 696,
        "total_spent": "$2585.57",
        "image": ""
    },
    {
        "id": 41,
        "customer": "Lonnard Najara",
        "customer_id": 225529,
        "email": "lnajara14@baidu.com",
        "country": "Bangladesh",
        "country_code": "bd",
        "order": 956,
        "total_spent": "$1741.83",
        "image": ""
    },
    {
        "id": 42,
        "customer": "Niko Sharpling",
        "customer_id": 184711,
        "email": "nsharpling15@ustream.tv",
        "country": "China",
        "country_code": "cn",
        "order": 172,
        "total_spent": "$1733.66",
        "image": "8.png"
    },
    {
        "id": 43,
        "customer": "Malinde Derricoat",
        "customer_id": 272711,
        "email": "mderricoat16@feedburner.com",
        "country": "Nigeria",
        "country_code": "ng",
        "order": 822,
        "total_spent": "$3930.51",
        "image": ""
    },
    {
        "id": 44,
        "customer": "Kelsey Muskett",
        "customer_id": 236093,
        "email": "kmuskett17@lycos.com",
        "country": "Canada",
        "country_code": "ca",
        "order": 51,
        "total_spent": "$4638.94",
        "image": ""
    },
    {
        "id": 45,
        "customer": "Darcey Gorghetto",
        "customer_id": 582408,
        "email": "dgorghetto18@dropbox.com",
        "country": "China",
        "country_code": "cn",
        "order": 559,
        "total_spent": "$3614.00",
        "image": ""
    },
    {
        "id": 46,
        "customer": "Jody Stace",
        "customer_id": 343364,
        "email": "jstace19@ucsd.edu",
        "country": "China",
        "country_code": "cn",
        "order": 945,
        "total_spent": "$5413.53",
        "image": ""
    },
    {
        "id": 47,
        "customer": "Rudyard Prangnell",
        "customer_id": 811348,
        "email": "rprangnell1a@imageshack.us",
        "country": "Russia",
        "country_code": "ru",
        "order": 149,
        "total_spent": "$589.72",
        "image": ""
    },
    {
        "id": 48,
        "customer": "Tanner Irdale",
        "customer_id": 855725,
        "email": "tirdale1b@plala.or.jp",
        "country": "China",
        "country_code": "cn",
        "order": 438,
        "total_spent": "$8949.26",
        "image": "7.png"
    },
    {
        "id": 49,
        "customer": "Eran Galgey",
        "customer_id": 804218,
        "email": "egalgey1c@sakura.ne.jp",
        "country": "Indonesia",
        "country_code": "id",
        "order": 716,
        "total_spent": "$4466.54",
        "image": ""
    },
    {
        "id": 50,
        "customer": "Julianne Lavalde",
        "customer_id": 670044,
        "email": "jlavalde1d@twitter.com",
        "country": "Poland",
        "country_code": "pl",
        "order": 307,
        "total_spent": "$4382.72",
        "image": ""
    },
    {
        "id": 51,
        "customer": "Hernando Stolte",
        "customer_id": 804269,
        "email": "hstolte1e@artisteer.com",
        "country": "United States",
        "country_code": "us",
        "order": 684,
        "total_spent": "$4671.06",
        "image": "10.png"
    },
    {
        "id": 52,
        "customer": "Mommy Beardsdale",
        "customer_id": 711203,
        "email": "mbeardsdale1f@technorati.com",
        "country": "Portugal",
        "country_code": "pt",
        "order": 315,
        "total_spent": "$6261.53",
        "image": "8.png"
    },
    {
        "id": 53,
        "customer": "Edsel Wildbore",
        "customer_id": 745457,
        "email": "ewildbore1g@free.fr",
        "country": "Indonesia",
        "country_code": "id",
        "order": 797,
        "total_spent": "$741.89",
        "image": "5.png"
    },
    {
        "id": 54,
        "customer": "Iseabal Idney",
        "customer_id": 560446,
        "email": "iidney1h@1688.com",
        "country": "China",
        "country_code": "cn",
        "order": 145,
        "total_spent": "$4360.35",
        "image": "5.png"
    },
    {
        "id": 55,
        "customer": "Barbi Jest",
        "customer_id": 519637,
        "email": "bjest1i@com.com",
        "country": "Colombia",
        "country_code": "co",
        "order": 574,
        "total_spent": "$8328.19",
        "image": "18.png"
    },
    {
        "id": 56,
        "customer": "Paddie Grogan",
        "customer_id": 915392,
        "email": "pgrogan1j@wikia.com",
        "country": "Egypt",
        "country_code": "eg",
        "order": 948,
        "total_spent": "$9899.06",
        "image": "19.png"
    },
    {
        "id": 57,
        "customer": "Lem Exell",
        "customer_id": 856323,
        "email": "lexell1k@nytimes.com",
        "country": "Tanzania",
        "country_code": "tz",
        "order": 541,
        "total_spent": "$9285.65",
        "image": "6.png"
    },
    {
        "id": 58,
        "customer": "Starlin Baldassi",
        "customer_id": 696538,
        "email": "sbaldassi1l@squarespace.com",
        "country": "Russia",
        "country_code": "ru",
        "order": 99,
        "total_spent": "$3660.80",
        "image": ""
    },
    {
        "id": 59,
        "customer": "Marjie Badman",
        "customer_id": 875646,
        "email": "mbadman1m@paypal.com",
        "country": "Russia",
        "country_code": "ru",
        "order": 108,
        "total_spent": "$1978.61",
        "image": ""
    },
    {
        "id": 60,
        "customer": "Flossi McLaverty",
        "customer_id": 617163,
        "email": "fmclaverty1n@51.la",
        "country": "China",
        "country_code": "cn",
        "order": 483,
        "total_spent": "$772.98",
        "image": "20.png"
    },
    {
        "id": 61,
        "customer": "Norri Dillinton",
        "customer_id": 123210,
        "email": "ndillinton1o@bbc.co.uk",
        "country": "Macedonia",
        "country_code": "mk",
        "order": 69,
        "total_spent": "$4227.77",
        "image": "16.png"
    },
    {
        "id": 62,
        "customer": "Aloysius Lukas",
        "customer_id": 766292,
        "email": "alukas1p@chicagotribune.com",
        "country": "France",
        "country_code": "fr",
        "order": 147,
        "total_spent": "$6637.38",
        "image": "20.png"
    },
    {
        "id": 63,
        "customer": "Rochell Cockill",
        "customer_id": 100696,
        "email": "rcockill1q@irs.gov",
        "country": "Indonesia",
        "country_code": "id",
        "order": 444,
        "total_spent": "$1730.64",
        "image": ""
    },
    {
        "id": 64,
        "customer": "Emma Greensall",
        "customer_id": 792768,
        "email": "egreensall1r@joomla.org",
        "country": "Russia",
        "country_code": "ru",
        "order": 831,
        "total_spent": "$9996.22",
        "image": "20.png"
    },
    {
        "id": 65,
        "customer": "Jodi Malyan",
        "customer_id": 996390,
        "email": "jmalyan1s@uiuc.edu",
        "country": "Finland",
        "country_code": "fi",
        "order": 311,
        "total_spent": "$3459.82",
        "image": "15.png"
    },
    {
        "id": 66,
        "customer": "Zed Rawe",
        "customer_id": 343593,
        "email": "zrawe1t@va.gov",
        "country": "Libya",
        "country_code": "ly",
        "order": 473,
        "total_spent": "$5218.22",
        "image": "5.png"
    },
    {
        "id": 67,
        "customer": "Thomasine Vasentsov",
        "customer_id": 988015,
        "email": "tvasentsov1u@bloglovin.com",
        "country": "Argentina",
        "country_code": "ar",
        "order": 752,
        "total_spent": "$5984.53",
        "image": ""
    },
    {
        "id": 68,
        "customer": "Janice Large",
        "customer_id": 270658,
        "email": "jlarge1v@dot.gov",
        "country": "Norway",
        "country_code": "no",
        "order": 582,
        "total_spent": "$5565.85",
        "image": "3.png"
    },
    {
        "id": 69,
        "customer": "Tadeo Blasio",
        "customer_id": 208862,
        "email": "tblasio1w@ustream.tv",
        "country": "China",
        "country_code": "cn",
        "order": 751,
        "total_spent": "$9042.56",
        "image": "10.png"
    },
    {
        "id": 70,
        "customer": "Raul Onele",
        "customer_id": 895818,
        "email": "ronele1x@bloglovin.com",
        "country": "Peru",
        "country_code": "pe",
        "order": 689,
        "total_spent": "$4508.42",
        "image": "16.png"
    },
    {
        "id": 71,
        "customer": "Rolf Comellini",
        "customer_id": 292654,
        "email": "rcomellini1y@soup.io",
        "country": "Indonesia",
        "country_code": "id",
        "order": 837,
        "total_spent": "$6379.88",
        "image": ""
    },
    {
        "id": 72,
        "customer": "Feliza Birchenough",
        "customer_id": 974560,
        "email": "fbirchenough1z@a8.net",
        "country": "Ecuador",
        "country_code": "ec",
        "order": 724,
        "total_spent": "$2933.59",
        "image": ""
    },
    {
        "id": 73,
        "customer": "Elsinore Daltry",
        "customer_id": 152193,
        "email": "edaltry20@themeforest.net",
        "country": "Brazil",
        "country_code": "br",
        "order": 455,
        "total_spent": "$724.68",
        "image": ""
    },
    {
        "id": 74,
        "customer": "Roseann Serck",
        "customer_id": 772228,
        "email": "rserck21@about.com",
        "country": "Serbia",
        "country_code": "rs",
        "order": 51,
        "total_spent": "$8287.03",
        "image": "14.png"
    },
    {
        "id": 75,
        "customer": "Yank Luddy",
        "customer_id": 586615,
        "email": "yluddy22@fema.gov",
        "country": "Portugal",
        "country_code": "pt",
        "order": 462,
        "total_spent": "$9157.04",
        "image": ""
    },
    {
        "id": 76,
        "customer": "Sloan Huskisson",
        "customer_id": 762754,
        "email": "shuskisson23@live.com",
        "country": "Dominican Republic",
        "country_code": "do",
        "order": 952,
        "total_spent": "$6106.41",
        "image": "6.png"
    },
    {
        "id": 77,
        "customer": "Livy Lattimore",
        "customer_id": 258911,
        "email": "llattimore24@sfgate.com",
        "country": "Indonesia",
        "country_code": "id",
        "order": 794,
        "total_spent": "$9053.56",
        "image": ""
    },
    {
        "id": 78,
        "customer": "Lanette Deble",
        "customer_id": 890051,
        "email": "ldeble25@spotify.com",
        "country": "Hong Kong",
        "country_code": "hk",
        "order": 454,
        "total_spent": "$8180.20",
        "image": "17.png"
    },
    {
        "id": 79,
        "customer": "Juliet Gypps",
        "customer_id": 493646,
        "email": "jgypps26@paginegialle.it",
        "country": "Indonesia",
        "country_code": "id",
        "order": 320,
        "total_spent": "$210.84",
        "image": ""
    },
    {
        "id": 80,
        "customer": "Tome Joliffe",
        "customer_id": 356230,
        "email": "tjoliffe27@phoca.cz",
        "country": "Mexico",
        "country_code": "mx",
        "order": 515,
        "total_spent": "$8571.28",
        "image": "2.png"
    },
    {
        "id": 81,
        "customer": "Joel Hamil",
        "customer_id": 337022,
        "email": "jhamil28@state.gov",
        "country": "Sweden",
        "country_code": "se",
        "order": 906,
        "total_spent": "$620.57",
        "image": ""
    },
    {
        "id": 82,
        "customer": "Hagen Digance",
        "customer_id": 864064,
        "email": "hdigance29@odnoklassniki.ru",
        "country": "Indonesia",
        "country_code": "id",
        "order": 519,
        "total_spent": "$332.44",
        "image": "8.png"
    },
    {
        "id": 83,
        "customer": "Kristo Wagstaff",
        "customer_id": 550008,
        "email": "kwagstaff2a@fotki.com",
        "country": "China",
        "country_code": "cn",
        "order": 313,
        "total_spent": "$2481.60",
        "image": ""
    },
    {
        "id": 84,
        "customer": "Gibbie Dysert",
        "customer_id": 778429,
        "email": "gdysert2b@so-net.ne.jp",
        "country": "Nicaragua",
        "country_code": "ni",
        "order": 623,
        "total_spent": "$8466.96",
        "image": ""
    },
    {
        "id": 85,
        "customer": "Michale Britton",
        "customer_id": 158581,
        "email": "mbritton2c@cloudflare.com",
        "country": "China",
        "country_code": "cn",
        "order": 835,
        "total_spent": "$9048.31",
        "image": "11.png"
    },
    {
        "id": 86,
        "customer": "Hiram Hoys",
        "customer_id": 747948,
        "email": "hhoys2d@msn.com",
        "country": "Egypt",
        "country_code": "eg",
        "order": 361,
        "total_spent": "$9159.23",
        "image": ""
    },
    {
        "id": 87,
        "customer": "Tobin Bassick",
        "customer_id": 165827,
        "email": "tbassick2e@quantcast.com",
        "country": "Jordan",
        "country_code": "jo",
        "order": 527,
        "total_spent": "$9289.92",
        "image": ""
    },
    {
        "id": 88,
        "customer": "Mikol Caskey",
        "customer_id": 533641,
        "email": "mcaskey2f@facebook.com",
        "country": "India",
        "country_code": "in",
        "order": 25,
        "total_spent": "$4920.68",
        "image": "17.png"
    },
    {
        "id": 89,
        "customer": "Cris Donkersley",
        "customer_id": 997638,
        "email": "cdonkersley2g@utexas.edu",
        "country": "China",
        "country_code": "cn",
        "order": 404,
        "total_spent": "$7369.58",
        "image": ""
    },
    {
        "id": 90,
        "customer": "Valenka Turbill",
        "customer_id": 179914,
        "email": "vturbill2h@nbcnews.com",
        "country": "Turkmenistan",
        "country_code": "tm",
        "order": 550,
        "total_spent": "$9083.15",
        "image": ""
    },
    {
        "id": 91,
        "customer": "Cherice Fairclough",
        "customer_id": 467280,
        "email": "cfairclough2i@csmonitor.com",
        "country": "United States",
        "country_code": "us",
        "order": 792,
        "total_spent": "$2634.36",
        "image": "9.png"
    },
    {
        "id": 92,
        "customer": "Lauritz Ramble",
        "customer_id": 140146,
        "email": "lramble2j@discuz.net",
        "country": "Russia",
        "country_code": "ru",
        "order": 605,
        "total_spent": "$9381.83",
        "image": "13.png"
    },
    {
        "id": 93,
        "customer": "Goddard Fosher",
        "customer_id": 398102,
        "email": "gfosher2k@example.com",
        "country": "China",
        "country_code": "cn",
        "order": 892,
        "total_spent": "$3957.06",
        "image": "12.png"
    },
    {
        "id": 94,
        "customer": "Darby Leming",
        "customer_id": 178939,
        "email": "dleming2l@paginegialle.it",
        "country": "Poland",
        "country_code": "pl",
        "order": 894,
        "total_spent": "$1450.01",
        "image": "8.png"
    },
    {
        "id": 95,
        "customer": "Paulie Floch",
        "customer_id": 855358,
        "email": "pfloch2m@cnet.com",
        "country": "Indonesia",
        "country_code": "id",
        "order": 866,
        "total_spent": "$8713.73",
        "image": "15.png"
    },
    {
        "id": 96,
        "customer": "Raffaello Reaney",
        "customer_id": 533341,
        "email": "rreaney2n@mlb.com",
        "country": "China",
        "country_code": "cn",
        "order": 145,
        "total_spent": "$8589.40",
        "image": "8.png"
    },
    {
        "id": 97,
        "customer": "Inger Weadick",
        "customer_id": 902643,
        "email": "iweadick2o@unesco.org",
        "country": "Indonesia",
        "country_code": "id",
        "order": 766,
        "total_spent": "$7119.15",
        "image": ""
    },
    {
        "id": 98,
        "customer": "Brooke Tegler",
        "customer_id": 137230,
        "email": "btegler2p@state.tx.us",
        "country": "North Korea",
        "country_code": "kp",
        "order": 70,
        "total_spent": "$4403.22",
        "image": ""
    },
    {
        "id": 99,
        "customer": "Erny Picard",
        "customer_id": 960955,
        "email": "epicard2q@lycos.com",
        "country": "Czech Republic",
        "country_code": "cz",
        "order": 471,
        "total_spent": "$7696.67",
        "image": "5.png"
    },
    {
        "id": 100,
        "customer": "Manon Fossick",
        "customer_id": 478426,
        "email": "mfossick2r@hatena.ne.jp",
        "country": "Japan",
        "country_code": "jp",
        "order": 181,
        "total_spent": "$2838.35",
        "image": "18.png"
    }
]
$(function() {
        let t, s, a;
        a = (isDarkStyle ? (t = config.colors_dark.borderColor, s = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, s = config.colors.bodyBg, config.colors)).headingColor;
        var e, n = $(".datatables-customers"),
            o = $(".select2");
        o.length && (o = o).wrap('<div class="position-relative"></div>').select2({
            placeholder: "United States ",
            dropdownParent: o.parent()
        }), n.length && (e = n.DataTable({
            data: customerAllJson,
            columns: [{
                data: ""
            }, {
                data: "id"
            }, {
                data: "customer"
            }, {
                data: "customer_id"
            }, {
                data: "country"
            }, {
                data: "order"
            }, {
                data: "total_spent"
            }],
            columnDefs: [{
                className: "control",
                searchable: !1,
                orderable: !1,
                responsivePriority: 2,
                targets: 0,
                render: function(e, t, s, a) {
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
                responsivePriority: 1,
                render: function(e, t, s, a) {
                    var n = s.customer,
                        o = s.email,
                        r = s.image;
                    return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">' + (r ? '<img src="' + assetsPath + "img/avatars/" + r + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (r = (((r = (n = s.customer).match(/\b\w/g) || []).shift() || "") + (r.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html" ><span class="fw-medium">' + n + '</span></a><small class="text-muted">' + o + "</small></div></div>"
                }
            }, {
                targets: 3,
                render: function(e, t, s, a) {
                    return "<span class='fw-medium text-heading'>#" + s.customer_id + "</span>"
                }
            }, {
                targets: 4,
                render: function(e, t, s, a) {
                    var n = s.country,
                        s = s.country_code;
                    return '<div class="d-flex justify-content-start align-items-center customer-country"><div>' + (s ? `<i class ="fis fi fi-${s} rounded-circle me-2 fs-3"></i>` : '<i class ="fis fi fi-xx rounded-circle me-2 fs-3"></i>') + "</div><div><span>" + n + "</span></div></div>"
                }
            }, {
                targets: 5,
                render: function(e, t, s, a) {
                    return "<span>" + s.order + "</span>"
                }
            }, {
                targets: 6,
                render: function(e, t, s, a) {
                    return '<span class="fw-medium text-heading">' + s.total_spent + "</span>"
                }
            }],
            order: [
                [2, "desc"]
            ],
            dom: '<"card-header d-flex flex-wrap py-3"<"me-5 ms-n2"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end gap-3 gap-sm-2 flex-wrap flex-sm-nowrap"lB>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            language: {
                sLengthMenu: "_MENU_",
                search: "",
                searchPlaceholder: "Search Order"
            },
            buttons: [{
                extend: "collection",
                className: "btn btn-label-secondary dropdown-toggle ms-sm-0 me-3",
                text: '<i class="bx bx-export me-1"></i>Export',
                buttons: [{
                    extend: "print",
                    text: '<i class="bx bx-printer me-2" ></i>Print',
                    className: "dropdown-item",
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5, 6],
                        format: {
                            body: function(e, t, s) {
                                var a;
                                return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                    void 0 !== t.classList && t.classList.contains("customer-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                                }), a)
                            }
                        }
                    },
                    customize: function(e) {
                        $(e.document.body).css("color", a).css("border-color", t).css("background-color", s), $(e.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                    }
                }, {
                    extend: "csv",
                    text: '<i class="bx bx-file me-2" ></i>Csv',
                    className: "dropdown-item",
                    exportOptions: {
                        columns: [1, 2, 3, 4, 5, 6],
                        format: {
                            body: function(e, t, s) {
                                var a;
                                return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                    void 0 !== t.classList && t.classList.contains("customer-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                                }), a)
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
                            body: function(e, t, s) {
                                var a;
                                return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                    void 0 !== t.classList && t.classList.contains("customer-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                                }), a)
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
                            body: function(e, t, s) {
                                var a;
                                return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                    void 0 !== t.classList && t.classList.contains("customer-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                                }), a)
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
                            body: function(e, t, s) {
                                var a;
                                return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                    void 0 !== t.classList && t.classList.contains("customer-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                                }), a)
                            }
                        }
                    }
                }]
            }, {
                text: '<i class="bx bx-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Customer</span>',
                className: "add-new btn btn-primary",
                attr: {
                    "data-bs-toggle": "offcanvas",
                    "data-bs-target": "#offcanvasEcommerceCustomerAdd"
                }
            }],
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function(e) {
                            return "Details of " + e.data().customer
                        }
                    }),
                    type: "column",
                    renderer: function(e, t, s) {
                        s = $.map(s, function(e, t) {
                            return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                        }).join("");
                        return !!s && $('<table class="table"/><tbody />').append(s)
                    }
                }
            }
        }), $(".dataTables_length").addClass("mt-0 mt-md-3 me-2"), $(".dt-action-buttons").addClass("pt-0"), $(".dt-buttons > .btn-group > button").removeClass("btn-secondary"), $(".dt-buttons").addClass("d-flex flex-wrap")), $(".datatables-customers tbody").on("click", ".delete-record", function() {
            e.row($(this).parents("tr")).remove().draw()
        }), setTimeout(() => {
            $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
        }, 300)
    }),
    function() {
        var e = document.querySelectorAll(".phone-mask"),
            t = document.getElementById("eCommerceCustomerAddForm");
        e && e.forEach(function(e) {
            new Cleave(e, {
                phone: !0,
                phoneRegionCode: "US"
            })
        }), FormValidation.formValidation(t, {
            fields: {
                customerName: {
                    validators: {
                        notEmpty: {
                            message: "Please enter fullname "
                        }
                    }
                },
                customerEmail: {
                    validators: {
                        notEmpty: {
                            message: "Please enter your email"
                        },
                        emailAddress: {
                            message: "The value is not a valid email address"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: function(e, t) {
                        return ".mb-3"
                    }
                }),
                submitButton: new FormValidation.plugins.SubmitButton,
                autoFocus: new FormValidation.plugins.AutoFocus
            }
        })
    }();