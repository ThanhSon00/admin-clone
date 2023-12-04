"use strict";
const referralJson = [
    {
        "id": 1,
        "user": "Koressa Leyfield",
        "email": "kleyfield0@columbia.edu",
        "avatar": "",
        "referred_id": 3398,
        "status": 2,
        "value": "$6655.92",
        "earning": "$380.17"
    },
    {
        "id": 2,
        "user": "Tania Brotherhood",
        "email": "tbrotherhood1@bing.com",
        "avatar": "13.png",
        "referred_id": 6740,
        "status": 2,
        "value": "$2113.04",
        "earning": "$716.72"
    },
    {
        "id": 3,
        "user": "Clemmie Montgomery",
        "email": "cmontgomery2@fema.gov",
        "avatar": "",
        "referred_id": 2749,
        "status": 2,
        "value": "$6717.09",
        "earning": "$699.02"
    },
    {
        "id": 4,
        "user": "Job Jope",
        "email": "jjope3@istockphoto.com",
        "avatar": "",
        "referred_id": 1413,
        "status": 3,
        "value": "$9465.13",
        "earning": "$98.23"
    },
    {
        "id": 5,
        "user": "Christoffer Derell",
        "email": "cderell4@apple.com",
        "avatar": "",
        "referred_id": 9176,
        "status": 3,
        "value": "$6202.81",
        "earning": "$882.51"
    },
    {
        "id": 6,
        "user": "Herminia Eyree",
        "email": "heyree5@gizmodo.com",
        "avatar": "18.png",
        "referred_id": 6975,
        "status": 2,
        "value": "$9802.40",
        "earning": "$219.52"
    },
    {
        "id": 7,
        "user": "Dela Lathwell",
        "email": "dlathwell6@webmd.com",
        "avatar": "19.png",
        "referred_id": 4552,
        "status": 3,
        "value": "$6470.46",
        "earning": "$831.45"
    },
    {
        "id": 8,
        "user": "Kirbie Greenhow",
        "email": "kgreenhow7@sina.com.cn",
        "avatar": "",
        "referred_id": 4131,
        "status": 2,
        "value": "$6199.28",
        "earning": "$856.00"
    },
    {
        "id": 9,
        "user": "Adrienne Tourne",
        "email": "atourne8@fotki.com",
        "avatar": "",
        "referred_id": 4072,
        "status": 2,
        "value": "$6774.33",
        "earning": "$821.78"
    },
    {
        "id": 10,
        "user": "Vanya Hearons",
        "email": "vhearons9@blogspot.com",
        "avatar": "19.png",
        "referred_id": 3070,
        "status": 2,
        "value": "$1067.14",
        "earning": "$804.91"
    },
    {
        "id": 11,
        "user": "Garnette Abramcik",
        "email": "gabramcika@google.com",
        "avatar": "11.png",
        "referred_id": 7828,
        "status": 2,
        "value": "$5375.10",
        "earning": "$447.01"
    },
    {
        "id": 12,
        "user": "Akim Korba",
        "email": "akorbab@flickr.com",
        "avatar": "17.png",
        "referred_id": 8561,
        "status": 2,
        "value": "$3104.91",
        "earning": "$552.75"
    },
    {
        "id": 13,
        "user": "Cull Scipsey",
        "email": "cscipseyc@adobe.com",
        "avatar": "20.png",
        "referred_id": 9287,
        "status": 3,
        "value": "$9375.13",
        "earning": "$690.75"
    },
    {
        "id": 14,
        "user": "Anabal Hakking",
        "email": "ahakkingd@paginegialle.it",
        "avatar": "",
        "referred_id": 4892,
        "status": 3,
        "value": "$8797.12",
        "earning": "$679.71"
    },
    {
        "id": 15,
        "user": "Linzy Swiers",
        "email": "lswierse@flickr.com",
        "avatar": "",
        "referred_id": 9180,
        "status": 2,
        "value": "$2996.63",
        "earning": "$610.27"
    },
    {
        "id": 16,
        "user": "Willy Espinet",
        "email": "wespinetf@addtoany.com",
        "avatar": "",
        "referred_id": 9102,
        "status": 3,
        "value": "$7048.18",
        "earning": "$369.06"
    },
    {
        "id": 17,
        "user": "Carter Gommowe",
        "email": "cgommoweg@purevolume.com",
        "avatar": "19.png",
        "referred_id": 7049,
        "status": 2,
        "value": "$6049.95",
        "earning": "$642.78"
    },
    {
        "id": 18,
        "user": "Andre Kenway",
        "email": "akenwayh@rambler.ru",
        "avatar": "6.png",
        "referred_id": 9826,
        "status": 3,
        "value": "$2221.71",
        "earning": "$347.19"
    },
    {
        "id": 19,
        "user": "Quintina Endacott",
        "email": "qendacotti@answers.com",
        "avatar": "9.png",
        "referred_id": 4555,
        "status": 3,
        "value": "$5918.70",
        "earning": "$543.44"
    },
    {
        "id": 20,
        "user": "Shurwood Cabble",
        "email": "scabblej@twitpic.com",
        "avatar": "4.png",
        "referred_id": 5591,
        "status": 3,
        "value": "$9073.50",
        "earning": "$980.62"
    },
    {
        "id": 21,
        "user": "Thatch Borchardt",
        "email": "tborchardtk@bing.com",
        "avatar": "",
        "referred_id": 4491,
        "status": 2,
        "value": "$8389.56",
        "earning": "$746.81"
    },
    {
        "id": 22,
        "user": "Fawne O'Scanlan",
        "email": "foscanlanl@europa.eu",
        "avatar": "",
        "referred_id": 2946,
        "status": 3,
        "value": "$7471.34",
        "earning": "$747.24"
    },
    {
        "id": 23,
        "user": "Ode Birts",
        "email": "obirtsm@sphinn.com",
        "avatar": "",
        "referred_id": 2328,
        "status": 3,
        "value": "$8484.83",
        "earning": "$815.79"
    },
    {
        "id": 24,
        "user": "Bella Michelle",
        "email": "bmichellen@npr.org",
        "avatar": "2.png",
        "referred_id": 5725,
        "status": 3,
        "value": "$7088.56",
        "earning": "$329.64"
    },
    {
        "id": 25,
        "user": "Aurora Skpsey",
        "email": "askpseyo@cdc.gov",
        "avatar": "",
        "referred_id": 2821,
        "status": 2,
        "value": "$2938.87",
        "earning": "$317.42"
    },
    {
        "id": 26,
        "user": "Neddie Maunders",
        "email": "nmaundersp@blogspot.com",
        "avatar": "",
        "referred_id": 1661,
        "status": 2,
        "value": "$6256.70",
        "earning": "$521.01"
    },
    {
        "id": 27,
        "user": "Andria Chisnell",
        "email": "achisnellq@imageshack.us",
        "avatar": "",
        "referred_id": 3363,
        "status": 2,
        "value": "$9106.99",
        "earning": "$705.15"
    },
    {
        "id": 28,
        "user": "Reggy Arnao",
        "email": "rarnaor@kickstarter.com",
        "avatar": "3.png",
        "referred_id": 7814,
        "status": 1,
        "value": "$6300.60",
        "earning": "$234.28"
    },
    {
        "id": 29,
        "user": "Shaylah Hasselby",
        "email": "shasselbys@odnoklassniki.ru",
        "avatar": "4.png",
        "referred_id": 8324,
        "status": 3,
        "value": "$1874.21",
        "earning": "$899.72"
    },
    {
        "id": 30,
        "user": "Althea Dayce",
        "email": "adaycet@youtu.be",
        "avatar": "8.png",
        "referred_id": 6069,
        "status": 3,
        "value": "$6098.09",
        "earning": "$269.32"
    },
    {
        "id": 31,
        "user": "Hector Biaggioli",
        "email": "hbiaggioliu@umich.edu",
        "avatar": "1.png",
        "referred_id": 5286,
        "status": 3,
        "value": "$4752.66",
        "earning": "$546.63"
    },
    {
        "id": 32,
        "user": "Mycah Gotcher",
        "email": "mgotcherv@yellowbook.com",
        "avatar": "",
        "referred_id": 7944,
        "status": 2,
        "value": "$5959.05",
        "earning": "$888.10"
    },
    {
        "id": 33,
        "user": "Garv Scruton",
        "email": "gscrutonw@sun.com",
        "avatar": "13.png",
        "referred_id": 6876,
        "status": 2,
        "value": "$6588.37",
        "earning": "$680.51"
    },
    {
        "id": 34,
        "user": "Renell Gurnett",
        "email": "rgurnettx@businessweek.com",
        "avatar": "20.png",
        "referred_id": 7802,
        "status": 1,
        "value": "$7542.30",
        "earning": "$208.96"
    },
    {
        "id": 35,
        "user": "Toinette Kilgrew",
        "email": "tkilgrewy@wikispaces.com",
        "avatar": "15.png",
        "referred_id": 6946,
        "status": 3,
        "value": "$4447.48",
        "earning": "$410.48"
    },
    {
        "id": 36,
        "user": "Corinne Cockshtt",
        "email": "ccockshttz@house.gov",
        "avatar": "",
        "referred_id": 1372,
        "status": 3,
        "value": "$3700.16",
        "earning": "$858.94"
    },
    {
        "id": 37,
        "user": "Isis Yurkiewicz",
        "email": "iyurkiewicz10@addthis.com",
        "avatar": "",
        "referred_id": 2384,
        "status": 2,
        "value": "$7456.86",
        "earning": "$280.52"
    },
    {
        "id": 38,
        "user": "Gerianna Nott",
        "email": "gnott11@youtu.be",
        "avatar": "",
        "referred_id": 1971,
        "status": 3,
        "value": "$5563.94",
        "earning": "$515.34"
    },
    {
        "id": 39,
        "user": "Calli Mewes",
        "email": "cmewes12@mit.edu",
        "avatar": "13.png",
        "referred_id": 7323,
        "status": 2,
        "value": "$7400.29",
        "earning": "$167.44"
    },
    {
        "id": 40,
        "user": "Sonnnie Keeltagh",
        "email": "skeeltagh13@typepad.com",
        "avatar": "7.png",
        "referred_id": 5719,
        "status": 3,
        "value": "$1977.34",
        "earning": "$652.01"
    },
    {
        "id": 41,
        "user": "Penelope Hause",
        "email": "phause14@netlog.com",
        "avatar": "3.png",
        "referred_id": 9347,
        "status": 3,
        "value": "$2155.12",
        "earning": "$101.49"
    },
    {
        "id": 42,
        "user": "Dannie Romeo",
        "email": "dromeo15@ask.com",
        "avatar": "",
        "referred_id": 1559,
        "status": 1,
        "value": "$7110.30",
        "earning": "$95.40"
    },
    {
        "id": 43,
        "user": "Keely Giannazzi",
        "email": "kgiannazzi16@mit.edu",
        "avatar": "",
        "referred_id": 3307,
        "status": 3,
        "value": "$2178.00",
        "earning": "$173.10"
    },
    {
        "id": 44,
        "user": "Kassia Mottini",
        "email": "kmottini17@usa.gov",
        "avatar": "7.png",
        "referred_id": 4426,
        "status": 1,
        "value": "$6921.60",
        "earning": "$365.93"
    },
    {
        "id": 45,
        "user": "Burr Scrauniage",
        "email": "bscrauniage18@wunderground.com",
        "avatar": "8.png",
        "referred_id": 3570,
        "status": 3,
        "value": "$6891.09",
        "earning": "$900.25"
    },
    {
        "id": 46,
        "user": "Cam Keely",
        "email": "ckeely19@jugem.jp",
        "avatar": "17.png",
        "referred_id": 7556,
        "status": 1,
        "value": "$1726.27",
        "earning": "$797.14"
    },
    {
        "id": 47,
        "user": "Burlie Kleinhausen",
        "email": "bkleinhausen1a@irs.gov",
        "avatar": "13.png",
        "referred_id": 4764,
        "status": 2,
        "value": "$9442.44",
        "earning": "$76.91"
    },
    {
        "id": 48,
        "user": "Fiorenze Jeness",
        "email": "fjeness1b@constantcontact.com",
        "avatar": "",
        "referred_id": 5489,
        "status": 2,
        "value": "$4389.40",
        "earning": "$697.08"
    },
    {
        "id": 49,
        "user": "Brannon Hambribe",
        "email": "bhambribe1c@xing.com",
        "avatar": "9.png",
        "referred_id": 9445,
        "status": 2,
        "value": "$7148.09",
        "earning": "$951.78"
    },
    {
        "id": 50,
        "user": "Daria Spiers",
        "email": "dspiers1d@ustream.tv",
        "avatar": "20.png",
        "referred_id": 2782,
        "status": 3,
        "value": "$8068.36",
        "earning": "$158.46"
    },
    {
        "id": 51,
        "user": "Bald Shmyr",
        "email": "bshmyr1e@tamu.edu",
        "avatar": "",
        "referred_id": 3357,
        "status": 1,
        "value": "$9458.25",
        "earning": "$598.50"
    },
    {
        "id": 52,
        "user": "Redford Benion",
        "email": "rbenion1f@msn.com",
        "avatar": "16.png",
        "referred_id": 2943,
        "status": 1,
        "value": "$8320.64",
        "earning": "$355.64"
    },
    {
        "id": 53,
        "user": "Horace Presho",
        "email": "hpresho1g@reference.com",
        "avatar": "",
        "referred_id": 3380,
        "status": 2,
        "value": "$6677.69",
        "earning": "$888.70"
    },
    {
        "id": 54,
        "user": "Scarlett Sandars",
        "email": "ssandars1h@cmu.edu",
        "avatar": "",
        "referred_id": 6804,
        "status": 1,
        "value": "$4277.35",
        "earning": "$681.49"
    },
    {
        "id": 55,
        "user": "Marabel Sommerling",
        "email": "msommerling1i@hugedomains.com",
        "avatar": "13.png",
        "referred_id": 2046,
        "status": 3,
        "value": "$1498.63",
        "earning": "$228.50"
    },
    {
        "id": 56,
        "user": "Leticia Teulier",
        "email": "lteulier1j@tamu.edu",
        "avatar": "8.png",
        "referred_id": 2174,
        "status": 2,
        "value": "$8123.93",
        "earning": "$277.38"
    },
    {
        "id": 57,
        "user": "Ellynn Markus",
        "email": "emarkus1k@artisteer.com",
        "avatar": "",
        "referred_id": 5358,
        "status": 3,
        "value": "$3299.72",
        "earning": "$731.45"
    },
    {
        "id": 58,
        "user": "Jarib Cardis",
        "email": "jcardis1l@intel.com",
        "avatar": "3.png",
        "referred_id": 9142,
        "status": 1,
        "value": "$1075.95",
        "earning": "$635.09"
    },
    {
        "id": 59,
        "user": "Bianca Losty",
        "email": "blosty1m@over-blog.com",
        "avatar": "9.png",
        "referred_id": 4280,
        "status": 2,
        "value": "$3660.92",
        "earning": "$656.93"
    },
    {
        "id": 60,
        "user": "Lonni Fifield",
        "email": "lfifield1n@geocities.com",
        "avatar": "19.png",
        "referred_id": 5834,
        "status": 2,
        "value": "$3089.90",
        "earning": "$724.27"
    },
    {
        "id": 61,
        "user": "Berty Letson",
        "email": "bletson1o@noaa.gov",
        "avatar": "8.png",
        "referred_id": 4072,
        "status": 3,
        "value": "$5524.56",
        "earning": "$87.33"
    },
    {
        "id": 62,
        "user": "Giulietta Rohlfs",
        "email": "grohlfs1p@harvard.edu",
        "avatar": "13.png",
        "referred_id": 7287,
        "status": 1,
        "value": "$3822.29",
        "earning": "$349.27"
    },
    {
        "id": 63,
        "user": "Linette Dudley",
        "email": "ldudley1q@homestead.com",
        "avatar": "",
        "referred_id": 6913,
        "status": 3,
        "value": "$8185.66",
        "earning": "$595.28"
    },
    {
        "id": 64,
        "user": "Garwood McGuire",
        "email": "gmcguire1r@freewebs.com",
        "avatar": "8.png",
        "referred_id": 8760,
        "status": 3,
        "value": "$1466.88",
        "earning": "$975.96"
    },
    {
        "id": 65,
        "user": "Leigh Petit",
        "email": "lpetit1s@blogspot.com",
        "avatar": "",
        "referred_id": 9839,
        "status": 1,
        "value": "$6234.84",
        "earning": "$387.02"
    },
    {
        "id": 66,
        "user": "Myrna Winchurst",
        "email": "mwinchurst1t@mac.com",
        "avatar": "9.png",
        "referred_id": 7450,
        "status": 1,
        "value": "$6271.00",
        "earning": "$229.75"
    },
    {
        "id": 67,
        "user": "Keary Erni",
        "email": "kerni1u@wikipedia.org",
        "avatar": "",
        "referred_id": 5630,
        "status": 1,
        "value": "$2893.32",
        "earning": "$738.82"
    },
    {
        "id": 68,
        "user": "Pail Treamayne",
        "email": "ptreamayne1v@constantcontact.com",
        "avatar": "3.png",
        "referred_id": 1884,
        "status": 2,
        "value": "$3409.60",
        "earning": "$119.99"
    },
    {
        "id": 69,
        "user": "Marv Mollon",
        "email": "mmollon1w@hatena.ne.jp",
        "avatar": "18.png",
        "referred_id": 3109,
        "status": 1,
        "value": "$7549.09",
        "earning": "$759.17"
    },
    {
        "id": 70,
        "user": "Kipper Ivanikhin",
        "email": "kivanikhin1x@cdbaby.com",
        "avatar": "18.png",
        "referred_id": 8075,
        "status": 2,
        "value": "$2844.25",
        "earning": "$719.90"
    },
    {
        "id": 71,
        "user": "Salim Allmond",
        "email": "sallmond1y@is.gd",
        "avatar": "18.png",
        "referred_id": 6730,
        "status": 2,
        "value": "$1250.41",
        "earning": "$277.62"
    },
    {
        "id": 72,
        "user": "Junina Huygens",
        "email": "jhuygens1z@drupal.org",
        "avatar": "",
        "referred_id": 9446,
        "status": 2,
        "value": "$7828.40",
        "earning": "$453.00"
    },
    {
        "id": 73,
        "user": "Morry Coutts",
        "email": "mcoutts20@cisco.com",
        "avatar": "8.png",
        "referred_id": 3797,
        "status": 2,
        "value": "$9755.92",
        "earning": "$600.60"
    },
    {
        "id": 74,
        "user": "Mellie Biggins",
        "email": "mbiggins21@dmoz.org",
        "avatar": "",
        "referred_id": 2865,
        "status": 1,
        "value": "$1191.33",
        "earning": "$519.60"
    },
    {
        "id": 75,
        "user": "Clywd Strapp",
        "email": "cstrapp22@creativecommons.org",
        "avatar": "",
        "referred_id": 3697,
        "status": 3,
        "value": "$8288.53",
        "earning": "$434.25"
    },
    {
        "id": 76,
        "user": "Toma Branson",
        "email": "tbranson23@businessinsider.com",
        "avatar": "3.png",
        "referred_id": 1950,
        "status": 1,
        "value": "$4561.52",
        "earning": "$547.30"
    },
    {
        "id": 77,
        "user": "Nicholas Dowell",
        "email": "ndowell24@yolasite.com",
        "avatar": "",
        "referred_id": 6088,
        "status": 3,
        "value": "$8586.11",
        "earning": "$221.44"
    },
    {
        "id": 78,
        "user": "Allsun Wrotchford",
        "email": "awrotchford25@fc2.com",
        "avatar": "18.png",
        "referred_id": 1094,
        "status": 3,
        "value": "$6186.51",
        "earning": "$653.95"
    },
    {
        "id": 79,
        "user": "Kaitlyn Patise",
        "email": "kpatise26@admin.ch",
        "avatar": "12.png",
        "referred_id": 1920,
        "status": 3,
        "value": "$7742.22",
        "earning": "$144.47"
    },
    {
        "id": 80,
        "user": "Antone Szymon",
        "email": "aszymon27@wufoo.com",
        "avatar": "4.png",
        "referred_id": 3985,
        "status": 1,
        "value": "$7048.75",
        "earning": "$246.18"
    },
    {
        "id": 81,
        "user": "Gifford Drivers",
        "email": "gdrivers28@multiply.com",
        "avatar": "",
        "referred_id": 8588,
        "status": 2,
        "value": "$2658.12",
        "earning": "$991.34"
    },
    {
        "id": 82,
        "user": "Pennie Yeudall",
        "email": "pyeudall29@slate.com",
        "avatar": "20.png",
        "referred_id": 6199,
        "status": 1,
        "value": "$6442.72",
        "earning": "$362.86"
    },
    {
        "id": 83,
        "user": "Nessi Adenet",
        "email": "nadenet2a@nba.com",
        "avatar": "",
        "referred_id": 9778,
        "status": 2,
        "value": "$3721.16",
        "earning": "$738.56"
    },
    {
        "id": 84,
        "user": "Glori Twidle",
        "email": "gtwidle2b@tumblr.com",
        "avatar": "10.png",
        "referred_id": 1019,
        "status": 3,
        "value": "$7902.32",
        "earning": "$588.37"
    },
    {
        "id": 85,
        "user": "Rodd Maylard",
        "email": "rmaylard2c@sciencedaily.com",
        "avatar": "",
        "referred_id": 4940,
        "status": 3,
        "value": "$3113.31",
        "earning": "$736.03"
    },
    {
        "id": 86,
        "user": "Tristan Scrivens",
        "email": "tscrivens2d@smugmug.com",
        "avatar": "17.png",
        "referred_id": 2508,
        "status": 2,
        "value": "$3480.07",
        "earning": "$666.42"
    },
    {
        "id": 87,
        "user": "Vincenty Downer",
        "email": "vdowner2e@vistaprint.com",
        "avatar": "9.png",
        "referred_id": 3676,
        "status": 2,
        "value": "$4237.02",
        "earning": "$167.10"
    },
    {
        "id": 88,
        "user": "Gabriellia Coltman",
        "email": "gcoltman2f@bizjournals.com",
        "avatar": "",
        "referred_id": 5589,
        "status": 2,
        "value": "$4854.04",
        "earning": "$899.57"
    },
    {
        "id": 89,
        "user": "Glynda Doogood",
        "email": "gdoogood2g@washingtonpost.com",
        "avatar": "",
        "referred_id": 6842,
        "status": 3,
        "value": "$8226.00",
        "earning": "$780.05"
    },
    {
        "id": 90,
        "user": "Dorrie Dobson",
        "email": "ddobson2h@sohu.com",
        "avatar": "17.png",
        "referred_id": 9974,
        "status": 1,
        "value": "$6475.75",
        "earning": "$605.74"
    },
    {
        "id": 91,
        "user": "Lexie Leeming",
        "email": "lleeming2i@census.gov",
        "avatar": "11.png",
        "referred_id": 2690,
        "status": 2,
        "value": "$5851.20",
        "earning": "$566.47"
    },
    {
        "id": 92,
        "user": "Rozanne Kibbee",
        "email": "rkibbee2j@nyu.edu",
        "avatar": "",
        "referred_id": 1870,
        "status": 3,
        "value": "$1971.16",
        "earning": "$813.48"
    },
    {
        "id": 93,
        "user": "Tannie Bassingden",
        "email": "tbassingden2k@census.gov",
        "avatar": "",
        "referred_id": 4498,
        "status": 1,
        "value": "$3209.19",
        "earning": "$745.70"
    },
    {
        "id": 94,
        "user": "Kasey Leet",
        "email": "kleet2l@vimeo.com",
        "avatar": "",
        "referred_id": 5407,
        "status": 2,
        "value": "$3313.60",
        "earning": "$905.76"
    },
    {
        "id": 95,
        "user": "Adriano Lygoe",
        "email": "alygoe2m@gravatar.com",
        "avatar": "8.png",
        "referred_id": 5361,
        "status": 1,
        "value": "$6447.15",
        "earning": "$777.46"
    },
    {
        "id": 96,
        "user": "Star Gorvette",
        "email": "sgorvette2n@ibm.com",
        "avatar": "9.png",
        "referred_id": 2397,
        "status": 2,
        "value": "$5670.85",
        "earning": "$683.44"
    },
    {
        "id": 97,
        "user": "Kellsie Ralls",
        "email": "kralls2o@phoca.cz",
        "avatar": "",
        "referred_id": 3996,
        "status": 3,
        "value": "$1007.24",
        "earning": "$419.00"
    },
    {
        "id": 98,
        "user": "Yul Laidel",
        "email": "ylaidel2p@list-manage.com",
        "avatar": "7.png",
        "referred_id": 2825,
        "status": 1,
        "value": "$5396.77",
        "earning": "$527.02"
    },
    {
        "id": 99,
        "user": "Stanleigh Chippin",
        "email": "schippin2q@odnoklassniki.ru",
        "avatar": "",
        "referred_id": 2337,
        "status": 1,
        "value": "$7679.13",
        "earning": "$790.53"
    },
    {
        "id": 100,
        "user": "Rhett Viegas",
        "email": "rviegas2r@alexa.com",
        "avatar": "14.png",
        "referred_id": 2807,
        "status": 2,
        "value": "$6833.00",
        "earning": "$461.81"
    }
]
$(function() {
    let t, s, a;
    a = (isDarkStyle ? (t = config.colors_dark.borderColor, s = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, s = config.colors.bodyBg, config.colors)).headingColor;
    var e = $(".datatables-referral"),
        n = {
            1: {
                title: "Paid",
                class: "bg-label-success"
            },
            2: {
                title: "Unpaid",
                class: "bg-label-warning"
            },
            3: {
                title: "Rejected",
                class: "bg-label-danger"
            }
        };
    e.length && (e.DataTable({
        data: referralJson,
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "user"
        }, {
            data: "referred_id"
        }, {
            data: "status"
        }, {
            data: "value"
        }, {
            data: "earning"
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
                var n = s.user,
                    r = s.email,
                    o = s.avatar;
                return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">' + (o ? '<img src="' + assetsPath + "img/avatars/" + o + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (o = (((o = (n = s.user).match(/\b\w/g) || []).shift() || "") + (o.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html"><span class="fw-medium">' + n + '</span></a><small class="text-muted text-nowrap">' + r + "</small></div></div>"
            }
        }, {
            targets: 3,
            render: function(e, t, s, a) {
                return "<span>" + s.referred_id + "</span>"
            }
        }, {
            targets: 4,
            render: function(e, t, s, a) {
                s = s.status;
                return '<span class="badge ' + n[s].class + '" text-capitalized>' + n[s].title + "</span>"
            }
        }, {
            targets: 5,
            render: function(e, t, s, a) {
                return "<span>" + s.value + "</span>"
            }
        }, {
            targets: 6,
            render: function(e, t, s, a) {
                return '<span class="fw-medium">' + s.earning + "</span > "
            }
        }],
        order: [
            [2, "asc"]
        ],
        dom: '<"card-header d-flex flex-column flex-sm-row pb-md-0 align-items-start align-items-sm-center pt-md-2"<"head-label"><"d-flex align-items-sm-center justify-content-end mt-2 mt-sm-0"l<"dt-action-buttons"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
            sLengthMenu: "_MENU_"
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
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
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
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().user
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
    }), $("div.head-label").html('<h5 class="card-title text-nowrap mb-2 mb-sm-0">Referred users</h5>'), $(".dataTables_length").addClass("mt-0 mt-md-3 me-3"), $(".dt-action-buttons").addClass("pt-0"), $(".dt-buttons > .btn-group > button").removeClass("btn-secondary")), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});