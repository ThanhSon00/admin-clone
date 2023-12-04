"use strict";
const orderListJson = [
    {
        "id": 1,
        "order": 5434,
        "customer": "Gabrielle Feyer",
        "email": "gfeyer0@nyu.edu",
        "avatar": "8.png",
        "payment": 1,
        "status": 1,
        "spent": "$73.98",
        "method": "paypal_logo",
        "date": "5/16/2022",
        "time": "2:11 AM",
        "method_number": 6522
    },
    {
        "id": 2,
        "order": 6745,
        "customer": "Jackson Deignan",
        "email": "jdeignan1@dell.com",
        "avatar": "18.png",
        "payment": 3,
        "status": 1,
        "spent": "$100.39",
        "method": "paypal_logo",
        "date": "5/3/2023",
        "time": "7:26 PM",
        "method_number": 7538
    },
    {
        "id": 3,
        "order": 6087,
        "customer": "Tanya Crum",
        "email": "tcrum2@yandex.ru",
        "avatar": "7.png",
        "payment": 4,
        "status": 3,
        "spent": "$809.26",
        "method": "mastercard",
        "date": "12/15/2022",
        "time": "6:51 PM",
        "method_number": 5170
    },
    {
        "id": 4,
        "order": 7825,
        "customer": "Dallis Dillestone",
        "email": "ddillestone3@archive.org",
        "avatar": "4.png",
        "payment": 3,
        "status": 3,
        "spent": "$617.64",
        "method": "paypal_logo",
        "date": "8/5/2022",
        "time": "9:18 PM",
        "method_number": 1748
    },
    {
        "id": 5,
        "order": 5604,
        "customer": "Conan Kennham",
        "email": "ckennham4@cnn.com",
        "avatar": "9.png",
        "payment": 3,
        "status": 1,
        "spent": "$384.41",
        "method": "mastercard",
        "date": "6/18/2022",
        "time": "3:34 AM",
        "method_number": 6425
    },
    {
        "id": 6,
        "order": 5390,
        "customer": "Daven Brocket",
        "email": "dbrocket5@epa.gov",
        "avatar": "13.png",
        "payment": 3,
        "status": 2,
        "spent": "$162.85",
        "method": "paypal_logo",
        "date": "10/14/2022",
        "time": "6:12 PM",
        "method_number": 1694
    },
    {
        "id": 7,
        "order": 7279,
        "customer": "Rex Farbrace",
        "email": "rfarbrace6@sourceforge.net",
        "avatar": "20.png",
        "payment": 2,
        "status": 2,
        "spent": "$591.47",
        "method": "mastercard",
        "date": "8/8/2022",
        "time": "6:09 PM",
        "method_number": 1883
    },
    {
        "id": 8,
        "order": 7003,
        "customer": "Tann Biaggetti",
        "email": "tbiaggetti7@eepurl.com",
        "avatar": "8.png",
        "payment": 4,
        "status": 1,
        "spent": "$664.51",
        "method": "mastercard",
        "date": "6/10/2022",
        "time": "12:59 PM",
        "method_number": 5047
    },
    {
        "id": 9,
        "order": 8632,
        "customer": "Abagael Drogan",
        "email": "adrogan8@storify.com",
        "avatar": "11.png",
        "payment": 4,
        "status": 4,
        "spent": "$717.72",
        "method": "paypal_logo",
        "date": "10/25/2022",
        "time": "10:48 AM",
        "method_number": 1945
    },
    {
        "id": 10,
        "order": 8501,
        "customer": "Esme Sangwin",
        "email": "esangwin9@taobao.com",
        "avatar": "",
        "payment": 3,
        "status": 3,
        "spent": "$477.42",
        "method": "mastercard",
        "date": "11/2/2022",
        "time": "2:19 PM",
        "method_number": 3526
    },
    {
        "id": 11,
        "order": 6498,
        "customer": "Jarib Siverns",
        "email": "jsivernsa@dailymail.co.uk",
        "avatar": "",
        "payment": 4,
        "status": 2,
        "spent": "$71.42",
        "method": "mastercard",
        "date": "8/25/2022",
        "time": "8:15 PM",
        "method_number": 8325
    },
    {
        "id": 12,
        "order": 7820,
        "customer": "Christie Le Moucheux",
        "email": "cleb@wikia.com",
        "avatar": "18.png",
        "payment": 1,
        "status": 1,
        "spent": "$894.55",
        "method": "paypal_logo",
        "date": "11/3/2022",
        "time": "11:31 AM",
        "method_number": 2034
    },
    {
        "id": 13,
        "order": 8229,
        "customer": "Debby Albury",
        "email": "dalburyc@homestead.com",
        "avatar": "",
        "payment": 2,
        "status": 1,
        "spent": "$279.80",
        "method": "mastercard",
        "date": "3/21/2023",
        "time": "3:28 PM",
        "method_number": 2751
    },
    {
        "id": 14,
        "order": 9076,
        "customer": "Alexia Speaks",
        "email": "aspeaksd@omniture.com",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$156.41",
        "method": "paypal_logo",
        "date": "11/26/2022",
        "time": "9:16 PM",
        "method_number": 3234
    },
    {
        "id": 15,
        "order": 6045,
        "customer": "Orel Leamy",
        "email": "oleamye@cbc.ca",
        "avatar": "",
        "payment": 2,
        "status": 1,
        "spent": "$614.39",
        "method": "mastercard",
        "date": "11/20/2022",
        "time": "11:58 PM",
        "method_number": 5209
    },
    {
        "id": 16,
        "order": 8005,
        "customer": "Maurits Nealey",
        "email": "mnealeyf@japanpost.jp",
        "avatar": "17.png",
        "payment": 1,
        "status": 1,
        "spent": "$203.72",
        "method": "mastercard",
        "date": "4/22/2023",
        "time": "3:01 PM",
        "method_number": 1555
    },
    {
        "id": 17,
        "order": 6917,
        "customer": "Emmalee Mason",
        "email": "emasong@rakuten.co.jp",
        "avatar": "",
        "payment": 4,
        "status": 4,
        "spent": "$491.83",
        "method": "mastercard",
        "date": "9/1/2022",
        "time": "10:31 PM",
        "method_number": 7013
    },
    {
        "id": 18,
        "order": 6917,
        "customer": "Tibold Schops",
        "email": "tschopsh@reference.com",
        "avatar": "7.png",
        "payment": 4,
        "status": 2,
        "spent": "$708.43",
        "method": "paypal_logo",
        "date": "6/15/2022",
        "time": "11:03 AM",
        "method_number": 4636
    },
    {
        "id": 19,
        "order": 8733,
        "customer": "Godwin Greatbanks",
        "email": "ggreatbanksi@guardian.co.uk",
        "avatar": "",
        "payment": 2,
        "status": 2,
        "spent": "$849.78",
        "method": "paypal_logo",
        "date": "8/31/2022",
        "time": "10:02 AM",
        "method_number": 6846
    },
    {
        "id": 20,
        "order": 6630,
        "customer": "Conn Cathery",
        "email": "ccatheryj@w3.org",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$855.31",
        "method": "paypal_logo",
        "date": "1/2/2023",
        "time": "4:35 PM",
        "method_number": 4813
    },
    {
        "id": 21,
        "order": 8963,
        "customer": "Riccardo McKerton",
        "email": "rmckertonk@gravatar.com",
        "avatar": "20.png",
        "payment": 2,
        "status": 4,
        "spent": "$458.76",
        "method": "paypal_logo",
        "date": "9/17/2022",
        "time": "6:00 AM",
        "method_number": 8197
    },
    {
        "id": 22,
        "order": 6916,
        "customer": "Isa Cartmel",
        "email": "icartmell@scientificamerican.com",
        "avatar": "10.png",
        "payment": 3,
        "status": 4,
        "spent": "$914.48",
        "method": "paypal_logo",
        "date": "12/21/2022",
        "time": "8:35 PM",
        "method_number": 2844
    },
    {
        "id": 23,
        "order": 6647,
        "customer": "Yoko Beetles",
        "email": "ybeetlesm@discovery.com",
        "avatar": "15.png",
        "payment": 1,
        "status": 1,
        "spent": "$948.07",
        "method": "mastercard",
        "date": "1/24/2023",
        "time": "12:01 AM",
        "method_number": 2562
    },
    {
        "id": 24,
        "order": 8044,
        "customer": "Nowell Cornford",
        "email": "ncornfordn@sogou.com",
        "avatar": "5.png",
        "payment": 4,
        "status": 3,
        "spent": "$525.60",
        "method": "paypal_logo",
        "date": "8/22/2022",
        "time": "6:36 PM",
        "method_number": 2030
    },
    {
        "id": 25,
        "order": 9879,
        "customer": "Brandy McIlvenna",
        "email": "bmcilvennao@51.la",
        "avatar": "",
        "payment": 1,
        "status": 2,
        "spent": "$100.18",
        "method": "mastercard",
        "date": "12/23/2022",
        "time": "7:14 AM",
        "method_number": 4686
    },
    {
        "id": 26,
        "order": 5551,
        "customer": "Zondra Klimkin",
        "email": "zklimkinp@ed.gov",
        "avatar": "9.png",
        "payment": 3,
        "status": 1,
        "spent": "$463.32",
        "method": "mastercard",
        "date": "12/20/2022",
        "time": "12:01 PM",
        "method_number": 6209
    },
    {
        "id": 27,
        "order": 5905,
        "customer": "Elyn Aizic",
        "email": "eaizicq@live.com",
        "avatar": "",
        "payment": 4,
        "status": 4,
        "spent": "$581.81",
        "method": "mastercard",
        "date": "6/1/2022",
        "time": "2:31 AM",
        "method_number": 7031
    },
    {
        "id": 28,
        "order": 7616,
        "customer": "Leoine Talbot",
        "email": "ltalbotr@prweb.com",
        "avatar": "",
        "payment": 1,
        "status": 1,
        "spent": "$118.75",
        "method": "paypal_logo",
        "date": "10/13/2022",
        "time": "12:57 AM",
        "method_number": 4387
    },
    {
        "id": 29,
        "order": 6624,
        "customer": "Fayre Screech",
        "email": "fscreechs@army.mil",
        "avatar": "",
        "payment": 3,
        "status": 2,
        "spent": "$774.91",
        "method": "mastercard",
        "date": "4/17/2023",
        "time": "6:43 PM",
        "method_number": 2077
    },
    {
        "id": 30,
        "order": 8653,
        "customer": "Roxanne Rablen",
        "email": "rrablent@alexa.com",
        "avatar": "",
        "payment": 1,
        "status": 1,
        "spent": "$212.75",
        "method": "mastercard",
        "date": "3/23/2023",
        "time": "10:07 PM",
        "method_number": 2696
    },
    {
        "id": 31,
        "order": 8076,
        "customer": "Rebekkah Newsham",
        "email": "rnewshamu@hhs.gov",
        "avatar": "10.png",
        "payment": 2,
        "status": 3,
        "spent": "$778.56",
        "method": "mastercard",
        "date": "7/1/2022",
        "time": "10:37 PM",
        "method_number": 8071
    },
    {
        "id": 32,
        "order": 7972,
        "customer": "Crawford Beart",
        "email": "cbeartv@senate.gov",
        "avatar": "",
        "payment": 3,
        "status": 1,
        "spent": "$378.74",
        "method": "mastercard",
        "date": "11/23/2022",
        "time": "6:45 AM",
        "method_number": 3993
    },
    {
        "id": 33,
        "order": 6979,
        "customer": "Cristine Easom",
        "email": "ceasomw@theguardian.com",
        "avatar": "19.png",
        "payment": 2,
        "status": 2,
        "spent": "$595.84",
        "method": "mastercard",
        "date": "4/15/2023",
        "time": "10:21 PM",
        "method_number": 2356
    },
    {
        "id": 34,
        "order": 9438,
        "customer": "Bessy Vasechkin",
        "email": "bvasechkinx@plala.or.jp",
        "avatar": "",
        "payment": 1,
        "status": 4,
        "spent": "$257.18",
        "method": "paypal_logo",
        "date": "11/10/2022",
        "time": "8:12 PM",
        "method_number": 1776
    },
    {
        "id": 35,
        "order": 5666,
        "customer": "Joanne Morl",
        "email": "jmorly@google.fr",
        "avatar": "",
        "payment": 1,
        "status": 3,
        "spent": "$368.26",
        "method": "paypal_logo",
        "date": "11/17/2022",
        "time": "2:32 PM",
        "method_number": 6276
    },
    {
        "id": 36,
        "order": 7128,
        "customer": "Cobbie Brameld",
        "email": "cbrameldz@biglobe.ne.jp",
        "avatar": "",
        "payment": 4,
        "status": 1,
        "spent": "$484.14",
        "method": "paypal_logo",
        "date": "6/13/2022",
        "time": "9:36 PM",
        "method_number": 3876
    },
    {
        "id": 37,
        "order": 5834,
        "customer": "Turner Braban",
        "email": "tbraban10@lulu.com",
        "avatar": "14.png",
        "payment": 2,
        "status": 1,
        "spent": "$135.04",
        "method": "mastercard",
        "date": "10/14/2022",
        "time": "4:39 AM",
        "method_number": 2211
    },
    {
        "id": 38,
        "order": 7417,
        "customer": "Rudd Aisman",
        "email": "raisman11@huffingtonpost.com",
        "avatar": "",
        "payment": 2,
        "status": 1,
        "spent": "$598.61",
        "method": "mastercard",
        "date": "9/29/2022",
        "time": "10:31 AM",
        "method_number": 1979
    },
    {
        "id": 39,
        "order": 5574,
        "customer": "Rakel Hearle",
        "email": "rhearle12@zimbio.com",
        "avatar": "18.png",
        "payment": 1,
        "status": 2,
        "spent": "$612.56",
        "method": "paypal_logo",
        "date": "11/29/2022",
        "time": "2:59 AM",
        "method_number": 8328
    },
    {
        "id": 40,
        "order": 7834,
        "customer": "Cull Otson",
        "email": "cotson13@angelfire.com",
        "avatar": "10.png",
        "payment": 4,
        "status": 1,
        "spent": "$413.70",
        "method": "mastercard",
        "date": "7/23/2022",
        "time": "3:15 PM",
        "method_number": 3901
    },
    {
        "id": 41,
        "order": 9877,
        "customer": "Jedd Lafont",
        "email": "jlafont14@vimeo.com",
        "avatar": "18.png",
        "payment": 1,
        "status": 3,
        "spent": "$67.26",
        "method": "paypal_logo",
        "date": "11/1/2022",
        "time": "8:05 AM",
        "method_number": 7245
    },
    {
        "id": 42,
        "order": 5781,
        "customer": "Maribeth Roffe",
        "email": "mroffe15@hostgator.com",
        "avatar": "16.png",
        "payment": 1,
        "status": 2,
        "spent": "$697.13",
        "method": "paypal_logo",
        "date": "9/30/2022",
        "time": "8:03 PM",
        "method_number": 8102
    },
    {
        "id": 43,
        "order": 5299,
        "customer": "Ximenez Callaghan",
        "email": "xcallaghan16@reuters.com",
        "avatar": "6.png",
        "payment": 2,
        "status": 4,
        "spent": "$528.17",
        "method": "mastercard",
        "date": "12/30/2022",
        "time": "12:21 AM",
        "method_number": 3075
    },
    {
        "id": 44,
        "order": 6622,
        "customer": "Oliy Seton",
        "email": "oseton17@cargocollective.com",
        "avatar": "7.png",
        "payment": 2,
        "status": 1,
        "spent": "$662.07",
        "method": "paypal_logo",
        "date": "12/29/2022",
        "time": "8:45 PM",
        "method_number": 5021
    },
    {
        "id": 45,
        "order": 7387,
        "customer": "Conroy Conan",
        "email": "cconan18@jigsy.com",
        "avatar": "8.png",
        "payment": 1,
        "status": 1,
        "spent": "$65.73",
        "method": "paypal_logo",
        "date": "6/11/2022",
        "time": "10:11 AM",
        "method_number": 3954
    },
    {
        "id": 46,
        "order": 5078,
        "customer": "Elianore Russ",
        "email": "eruss19@usa.gov",
        "avatar": "",
        "payment": 2,
        "status": 3,
        "spent": "$741.28",
        "method": "mastercard",
        "date": "8/28/2022",
        "time": "3:45 PM",
        "method_number": 2128
    },
    {
        "id": 47,
        "order": 9631,
        "customer": "Farlee Gerard",
        "email": "fgerard1a@mit.edu",
        "avatar": "",
        "payment": 2,
        "status": 3,
        "spent": "$161.30",
        "method": "paypal_logo",
        "date": "6/8/2022",
        "time": "4:16 PM",
        "method_number": 6781
    },
    {
        "id": 48,
        "order": 7869,
        "customer": "Gino Fairbrass",
        "email": "gfairbrass1b@spotify.com",
        "avatar": "",
        "payment": 4,
        "status": 3,
        "spent": "$644.90",
        "method": "paypal_logo",
        "date": "6/23/2022",
        "time": "10:36 AM",
        "method_number": 5470
    },
    {
        "id": 49,
        "order": 8643,
        "customer": "Dory Carter",
        "email": "dcarter1c@sphinn.com",
        "avatar": "20.png",
        "payment": 3,
        "status": 1,
        "spent": "$462.45",
        "method": "mastercard",
        "date": "11/10/2022",
        "time": "2:45 AM",
        "method_number": 4647
    },
    {
        "id": 50,
        "order": 7395,
        "customer": "Shane Galbreth",
        "email": "sgalbreth1d@mac.com",
        "avatar": "8.png",
        "payment": 4,
        "status": 1,
        "spent": "$731.58",
        "method": "mastercard",
        "date": "5/20/2022",
        "time": "8:09 PM",
        "method_number": 4113
    },
    {
        "id": 51,
        "order": 7168,
        "customer": "Alicea Macci",
        "email": "amacci1e@bbc.co.uk",
        "avatar": "",
        "payment": 1,
        "status": 3,
        "spent": "$556.94",
        "method": "mastercard",
        "date": "6/10/2022",
        "time": "4:00 PM",
        "method_number": 6798
    },
    {
        "id": 52,
        "order": 5775,
        "customer": "Terrijo Copello",
        "email": "tcopello1f@netlog.com",
        "avatar": "",
        "payment": 3,
        "status": 4,
        "spent": "$687.27",
        "method": "paypal_logo",
        "date": "6/23/2022",
        "time": "6:41 PM",
        "method_number": 3529
    },
    {
        "id": 53,
        "order": 6558,
        "customer": "Bambi Yerby",
        "email": "byerby1g@sohu.com",
        "avatar": "",
        "payment": 1,
        "status": 2,
        "spent": "$309.15",
        "method": "paypal_logo",
        "date": "10/18/2022",
        "time": "8:40 PM",
        "method_number": 1664
    },
    {
        "id": 54,
        "order": 7766,
        "customer": "Corny Linstead",
        "email": "clinstead1h@icio.us",
        "avatar": "",
        "payment": 4,
        "status": 4,
        "spent": "$805.73",
        "method": "paypal_logo",
        "date": "6/25/2022",
        "time": "8:01 AM",
        "method_number": 7931
    },
    {
        "id": 55,
        "order": 9305,
        "customer": "Pauline Pfaffe",
        "email": "ppfaffe1i@wikia.com",
        "avatar": "",
        "payment": 4,
        "status": 3,
        "spent": "$769.47",
        "method": "paypal_logo",
        "date": "4/17/2023",
        "time": "8:05 AM",
        "method_number": 8412
    },
    {
        "id": 56,
        "order": 7886,
        "customer": "Ilka Adanet",
        "email": "iadanet1j@tripod.com",
        "avatar": "",
        "payment": 4,
        "status": 3,
        "spent": "$899.35",
        "method": "paypal_logo",
        "date": "2/2/2023",
        "time": "6:13 PM",
        "method_number": 3946
    },
    {
        "id": 57,
        "order": 8333,
        "customer": "Charlena Sabberton",
        "email": "csabberton1k@vinaora.com",
        "avatar": "",
        "payment": 3,
        "status": 2,
        "spent": "$201.84",
        "method": "paypal_logo",
        "date": "6/11/2022",
        "time": "10:15 PM",
        "method_number": 3294
    },
    {
        "id": 58,
        "order": 7044,
        "customer": "Harwell Vallack",
        "email": "hvallack1l@sakura.ne.jp",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$547.07",
        "method": "paypal_logo",
        "date": "6/1/2022",
        "time": "1:29 PM",
        "method_number": 5571
    },
    {
        "id": 59,
        "order": 5414,
        "customer": "Juliette Douthwaite",
        "email": "jdouthwaite1m@marketwatch.com",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$89.46",
        "method": "mastercard",
        "date": "9/26/2022",
        "time": "11:40 AM",
        "method_number": 4380
    },
    {
        "id": 60,
        "order": 7102,
        "customer": "Nydia Brandel",
        "email": "nbrandel1n@cnet.com",
        "avatar": "",
        "payment": 3,
        "status": 2,
        "spent": "$417.49",
        "method": "paypal_logo",
        "date": "2/5/2023",
        "time": "11:42 PM",
        "method_number": 5856
    },
    {
        "id": 61,
        "order": 8784,
        "customer": "Gaby Edy",
        "email": "gedy1o@latimes.com",
        "avatar": "9.png",
        "payment": 4,
        "status": 2,
        "spent": "$589.37",
        "method": "mastercard",
        "date": "2/5/2023",
        "time": "8:46 AM",
        "method_number": 1923
    },
    {
        "id": 62,
        "order": 9885,
        "customer": "Lacey Swenson",
        "email": "lswenson1p@booking.com",
        "avatar": "",
        "payment": 2,
        "status": 3,
        "spent": "$62.71",
        "method": "mastercard",
        "date": "9/11/2022",
        "time": "7:41 PM",
        "method_number": 4367
    },
    {
        "id": 63,
        "order": 5387,
        "customer": "Bradan Edgworth",
        "email": "bedgworth1q@typepad.com",
        "avatar": "7.png",
        "payment": 4,
        "status": 2,
        "spent": "$54.45",
        "method": "paypal_logo",
        "date": "6/2/2022",
        "time": "11:05 AM",
        "method_number": 8829
    },
    {
        "id": 64,
        "order": 5459,
        "customer": "Ilyssa Egan",
        "email": "iegan1r@reference.com",
        "avatar": "18.png",
        "payment": 3,
        "status": 4,
        "spent": "$756.16",
        "method": "paypal_logo",
        "date": "5/20/2022",
        "time": "12:39 PM",
        "method_number": 6971
    },
    {
        "id": 65,
        "order": 8812,
        "customer": "Duke Jahnel",
        "email": "djahnel1s@huffingtonpost.com",
        "avatar": "7.png",
        "payment": 2,
        "status": 4,
        "spent": "$103.71",
        "method": "mastercard",
        "date": "3/1/2023",
        "time": "10:25 PM",
        "method_number": 4305
    },
    {
        "id": 66,
        "order": 7123,
        "customer": "Christen Dillow",
        "email": "cdillow1t@businessinsider.com",
        "avatar": "",
        "payment": 1,
        "status": 3,
        "spent": "$357.17",
        "method": "mastercard",
        "date": "2/1/2023",
        "time": "4:11 AM",
        "method_number": 7385
    },
    {
        "id": 67,
        "order": 8964,
        "customer": "Hildegaard Ormshaw",
        "email": "hormshaw1u@amazonaws.com",
        "avatar": "",
        "payment": 1,
        "status": 4,
        "spent": "$191.57",
        "method": "mastercard",
        "date": "6/15/2022",
        "time": "7:28 PM",
        "method_number": 6469
    },
    {
        "id": 68,
        "order": 8020,
        "customer": "Merrill Sangwin",
        "email": "msangwin1v@ted.com",
        "avatar": "",
        "payment": 3,
        "status": 1,
        "spent": "$80.47",
        "method": "paypal_logo",
        "date": "9/15/2022",
        "time": "9:35 PM",
        "method_number": 1464
    },
    {
        "id": 69,
        "order": 7192,
        "customer": "Niel Kitchingman",
        "email": "nkitchingman1w@twitpic.com",
        "avatar": "",
        "payment": 1,
        "status": 1,
        "spent": "$759.98",
        "method": "mastercard",
        "date": "11/24/2022",
        "time": "12:51 PM",
        "method_number": 3957
    },
    {
        "id": 70,
        "order": 9941,
        "customer": "Zacharias Stonhard",
        "email": "zstonhard1x@ca.gov",
        "avatar": "",
        "payment": 4,
        "status": 1,
        "spent": "$333.83",
        "method": "paypal_logo",
        "date": "6/20/2022",
        "time": "11:11 AM",
        "method_number": 3907
    },
    {
        "id": 71,
        "order": 7786,
        "customer": "Hirsch Garwood",
        "email": "hgarwood1y@hhs.gov",
        "avatar": "",
        "payment": 1,
        "status": 1,
        "spent": "$993.07",
        "method": "paypal_logo",
        "date": "1/30/2023",
        "time": "8:13 AM",
        "method_number": 3210
    },
    {
        "id": 72,
        "order": 6890,
        "customer": "Etienne Duke",
        "email": "eduke1z@dell.com",
        "avatar": "9.png",
        "payment": 4,
        "status": 4,
        "spent": "$651.14",
        "method": "mastercard",
        "date": "8/1/2022",
        "time": "7:24 AM",
        "method_number": 3507
    },
    {
        "id": 73,
        "order": 6672,
        "customer": "Galen Bent",
        "email": "gbent20@altervista.org",
        "avatar": "20.png",
        "payment": 4,
        "status": 2,
        "spent": "$483.86",
        "method": "mastercard",
        "date": "5/10/2022",
        "time": "7:51 PM",
        "method_number": 7538
    },
    {
        "id": 74,
        "order": 5531,
        "customer": "Cletus Arias",
        "email": "carias21@rambler.ru",
        "avatar": "19.png",
        "payment": 3,
        "status": 1,
        "spent": "$609.47",
        "method": "mastercard",
        "date": "8/20/2022",
        "time": "3:21 AM",
        "method_number": 5851
    },
    {
        "id": 75,
        "order": 9041,
        "customer": "Gilbertina Manjin",
        "email": "gmanjin22@blogtalkradio.com",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$593.65",
        "method": "mastercard",
        "date": "9/19/2022",
        "time": "5:23 AM",
        "method_number": 8332
    },
    {
        "id": 76,
        "order": 9521,
        "customer": "Helena Airds",
        "email": "hairds23@facebook.com",
        "avatar": "17.png",
        "payment": 4,
        "status": 2,
        "spent": "$897.84",
        "method": "mastercard",
        "date": "1/13/2023",
        "time": "1:41 PM",
        "method_number": 8564
    },
    {
        "id": 77,
        "order": 9793,
        "customer": "Bonny Tebbutt",
        "email": "btebbutt24@clickbank.net",
        "avatar": "",
        "payment": 3,
        "status": 3,
        "spent": "$856.58",
        "method": "paypal_logo",
        "date": "1/23/2023",
        "time": "6:10 AM",
        "method_number": 2150
    },
    {
        "id": 78,
        "order": 6741,
        "customer": "Garreth Rubinowitz",
        "email": "grubinowitz25@unblog.fr",
        "avatar": "18.png",
        "payment": 2,
        "status": 3,
        "spent": "$191.99",
        "method": "paypal_logo",
        "date": "8/24/2022",
        "time": "2:01 PM",
        "method_number": 4148
    },
    {
        "id": 79,
        "order": 6602,
        "customer": "Lotta Martinie",
        "email": "lmartinie26@ovh.net",
        "avatar": "18.png",
        "payment": 2,
        "status": 2,
        "spent": "$790.09",
        "method": "paypal_logo",
        "date": "6/25/2022",
        "time": "12:54 AM",
        "method_number": 4538
    },
    {
        "id": 80,
        "order": 9682,
        "customer": "Danna Goldis",
        "email": "dgoldis27@tinypic.com",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$121.21",
        "method": "mastercard",
        "date": "1/11/2023",
        "time": "4:33 PM",
        "method_number": 1974
    },
    {
        "id": 81,
        "order": 6256,
        "customer": "Ronica McDuffie",
        "email": "rmcduffie28@dagondesign.com",
        "avatar": "",
        "payment": 4,
        "status": 1,
        "spent": "$783.05",
        "method": "mastercard",
        "date": "7/12/2022",
        "time": "1:54 AM",
        "method_number": 6563
    },
    {
        "id": 82,
        "order": 6265,
        "customer": "Clarice Biesty",
        "email": "cbiesty29@hp.com",
        "avatar": "",
        "payment": 2,
        "status": 4,
        "spent": "$905.31",
        "method": "paypal_logo",
        "date": "9/7/2022",
        "time": "5:58 AM",
        "method_number": 7367
    },
    {
        "id": 83,
        "order": 7330,
        "customer": "Georgetta Hawkins",
        "email": "ghawkins2a@shinystat.com",
        "avatar": "",
        "payment": 4,
        "status": 2,
        "spent": "$670.50",
        "method": "mastercard",
        "date": "12/9/2022",
        "time": "4:22 AM",
        "method_number": 4789
    },
    {
        "id": 84,
        "order": 6342,
        "customer": "Hamid Gosford",
        "email": "hgosford2b@youtu.be",
        "avatar": "7.png",
        "payment": 2,
        "status": 2,
        "spent": "$520.17",
        "method": "paypal_logo",
        "date": "5/26/2022",
        "time": "3:15 PM",
        "method_number": 2733
    },
    {
        "id": 85,
        "order": 9620,
        "customer": "Marnia Scamwell",
        "email": "mscamwell2c@guardian.co.uk",
        "avatar": "3.png",
        "payment": 4,
        "status": 3,
        "spent": "$77.59",
        "method": "paypal_logo",
        "date": "9/10/2022",
        "time": "11:40 AM",
        "method_number": 3822
    },
    {
        "id": 86,
        "order": 5699,
        "customer": "Casie Cratere",
        "email": "ccratere2d@baidu.com",
        "avatar": "",
        "payment": 3,
        "status": 1,
        "spent": "$429.80",
        "method": "mastercard",
        "date": "9/22/2022",
        "time": "11:52 PM",
        "method_number": 2925
    },
    {
        "id": 87,
        "order": 7289,
        "customer": "Edik Whytock",
        "email": "ewhytock2e@vimeo.com",
        "avatar": "",
        "payment": 3,
        "status": 3,
        "spent": "$838.25",
        "method": "mastercard",
        "date": "8/4/2022",
        "time": "9:12 PM",
        "method_number": 6240
    },
    {
        "id": 88,
        "order": 9780,
        "customer": "Wylie Marryatt",
        "email": "wmarryatt2f@economist.com",
        "avatar": "",
        "payment": 3,
        "status": 2,
        "spent": "$308.07",
        "method": "mastercard",
        "date": "3/2/2023",
        "time": "10:00 AM",
        "method_number": 7909
    },
    {
        "id": 89,
        "order": 5859,
        "customer": "Eydie Vogelein",
        "email": "evogelein2g@forbes.com",
        "avatar": "",
        "payment": 4,
        "status": 3,
        "spent": "$447.29",
        "method": "paypal_logo",
        "date": "4/29/2023",
        "time": "9:52 AM",
        "method_number": 5475
    },
    {
        "id": 90,
        "order": 9957,
        "customer": "Milt Whitear",
        "email": "mwhitear2h@instagram.com",
        "avatar": "",
        "payment": 4,
        "status": 4,
        "spent": "$59.28",
        "method": "mastercard",
        "date": "11/29/2022",
        "time": "6:53 PM",
        "method_number": 4371
    },
    {
        "id": 91,
        "order": 7094,
        "customer": "Damara Figgins",
        "email": "dfiggins2i@de.vu",
        "avatar": "",
        "payment": 2,
        "status": 1,
        "spent": "$62.62",
        "method": "mastercard",
        "date": "6/29/2022",
        "time": "6:51 AM",
        "method_number": 8321
    },
    {
        "id": 92,
        "order": 7280,
        "customer": "Sibley Braithwait",
        "email": "sbraithwait2j@webmd.com",
        "avatar": "",
        "payment": 1,
        "status": 3,
        "spent": "$554.91",
        "method": "mastercard",
        "date": "12/6/2022",
        "time": "2:11 AM",
        "method_number": 8535
    },
    {
        "id": 93,
        "order": 7931,
        "customer": "Octavius Whitchurch",
        "email": "owhitchurch2k@google.ca",
        "avatar": "17.png",
        "payment": 3,
        "status": 4,
        "spent": "$383.52",
        "method": "mastercard",
        "date": "12/26/2022",
        "time": "9:49 AM",
        "method_number": 8585
    },
    {
        "id": 94,
        "order": 8767,
        "customer": "Lyndsey Dorey",
        "email": "ldorey2l@barnesandnoble.com",
        "avatar": "2.png",
        "payment": 3,
        "status": 3,
        "spent": "$738.42",
        "method": "mastercard",
        "date": "8/29/2022",
        "time": "5:24 AM",
        "method_number": 3432
    },
    {
        "id": 95,
        "order": 6111,
        "customer": "Chad Cock",
        "email": "ccock2m@g.co",
        "avatar": "",
        "payment": 4,
        "status": 3,
        "spent": "$669.45",
        "method": "mastercard",
        "date": "3/11/2023",
        "time": "10:43 AM",
        "method_number": 1014
    },
    {
        "id": 96,
        "order": 5911,
        "customer": "Hilliard Merck",
        "email": "hmerck2n@printfriendly.com",
        "avatar": "",
        "payment": 4,
        "status": 2,
        "spent": "$237.91",
        "method": "paypal_logo",
        "date": "8/14/2022",
        "time": "3:26 PM",
        "method_number": 3196
    },
    {
        "id": 97,
        "order": 7064,
        "customer": "Carmon Vasiljevic",
        "email": "cvasiljevic2o@odnoklassniki.ru",
        "avatar": "8.png",
        "payment": 3,
        "status": 1,
        "spent": "$595.25",
        "method": "paypal_logo",
        "date": "3/20/2023",
        "time": "3:11 PM",
        "method_number": 4892
    },
    {
        "id": 98,
        "order": 8114,
        "customer": "Ulysses Goodlife",
        "email": "ugoodlife2p@blogger.com",
        "avatar": "20.png",
        "payment": 3,
        "status": 3,
        "spent": "$746.38",
        "method": "mastercard",
        "date": "4/8/2023",
        "time": "3:39 AM",
        "method_number": 4509
    },
    {
        "id": 99,
        "order": 7189,
        "customer": "Boycie Hartmann",
        "email": "bhartmann2q@addthis.com",
        "avatar": "",
        "payment": 3,
        "status": 2,
        "spent": "$704.86",
        "method": "paypal_logo",
        "date": "1/2/2023",
        "time": "8:55 PM",
        "method_number": 6424
    },
    {
        "id": 100,
        "order": 9042,
        "customer": "Chere Schofield",
        "email": "cschofield2r@ucsd.edu",
        "avatar": "",
        "payment": 2,
        "status": 3,
        "spent": "$815.77",
        "method": "mastercard",
        "date": "2/1/2023",
        "time": "4:12 PM",
        "method_number": 3949
    }
]
$(function() {
    let t, a, s;
    s = (isDarkStyle ? (t = config.colors_dark.borderColor, a = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, a = config.colors.bodyBg, config.colors)).headingColor;
    var e, n = $(".datatables-order"),
        r = {
            1: {
                title: "Dispatched",
                class: "bg-label-warning"
            },
            2: {
                title: "Delivered",
                class: "bg-label-success"
            },
            3: {
                title: "Out for Delivery",
                class: "bg-label-primary"
            },
            4: {
                title: "Ready to Pickup",
                class: "bg-label-info"
            }
        },
        o = {
            1: {
                title: "Paid",
                class: "text-success"
            },
            2: {
                title: "Pending",
                class: "text-warning"
            },
            3: {
                title: "Failed",
                class: "text-danger"
            },
            4: {
                title: "Cancelled",
                class: "text-secondary"
            }
        };
    n.length && (e = n.DataTable({
        data: orderListJson,
        columns: [{
            data: "id"
        }, {
            data: "id"
        }, {
            data: "order"
        }, {
            data: "date"
        }, {
            data: "customer"
        }, {
            data: "payment"
        }, {
            data: "status"
        }, {
            data: "method"
        }, {
            data: ""
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, a, s) {
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
            render: function(e, t, a, s) {
                return '<a href="app-ecommerce-order-details.html"><span class="fw-medium">#' + a.order + "</span></a>"
            }
        }, {
            targets: 3,
            render: function(e, t, a, s) {
                var n = new Date(a.date),
                    a = a.time.substring(0, 5);
                return '<span class="text-nowrap">' + n.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    time: "numeric"
                }) + ", " + a + "</span>"
            }
        }, {
            targets: 4,
            responsivePriority: 1,
            render: function(e, t, a, s) {
                var n = a.customer,
                    r = a.email,
                    o = a.avatar;
                return '<div class="d-flex justify-content-start align-items-center order-name text-nowrap"><div class="avatar-wrapper"><div class="avatar me-2">' + (o ? '<img src="' + assetsPath + "img/avatars/" + o + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (o = (((o = (n = a.customer).match(/\b\w/g) || []).shift() || "") + (o.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><h6 class="m-0"><a href="pages-profile-user.html" class="text-body">' + n + '</a></h6><small class="text-muted">' + r + "</small></div></div>"
            }
        }, {
            targets: 5,
            render: function(e, t, a, s) {
                a = a.payment, a = o[a];
                return a ? '<h6 class="mb-0 w-px-100 ' + a.class + '"><i class="bx bxs-circle fs-tiny me-2"></i>' + a.title + "</h6>" : e
            }
        }, {
            targets: -3,
            render: function(e, t, a, s) {
                a = a.status;
                return '<span class="badge px-2 ' + r[a].class + '" text-capitalized>' + r[a].title + "</span>"
            }
        }, {
            targets: -2,
            render: function(e, t, a, s) {
                var n = a.method,
                    a = a.method_number;
                return "paypal_logo" == n && (a = "@gmail.com"), '<div class="d-flex align-items-center text-nowrap"><img src="' + assetsPath + "img/icons/payments/" + n + '.png" alt="' + n + '" class="me-2" width="16"><span><i class="bx bx-dots-horizontal-rounded"></i>' + a + "</span></div>"
            }
        }, {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function(e, t, a, s) {
                return '<div class="d-flex justify-content-sm-center align-items-sm-center"><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-ecommerce-order-details.html" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item delete-record">Delete</a></div></div>'
            }
        }],
        order: [3, "asc"],
        dom: '<"card-header d-flex flex-column flex-md-row align-items-start align-items-md-center"<"ms-n2"f><"d-flex align-items-md-center justify-content-md-end mt-2 mt-md-0"l<"dt-action-buttons"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        lengthMenu: [10, 40, 60, 80, 100],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Order",
            info: "Displaying _START_ to _END_ of _TOTAL_ entries"
        },
        buttons: [{
            extend: "collection",
            className: "btn btn-label-secondary dropdown-toggle",
            text: '<i class="bx bx-export me-1"></i>Export',
            buttons: [{
                extend: "print",
                text: '<i class="bx bx-printer me-2" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                },
                customize: function(e) {
                    $(e.document.body).css("color", s).css("border-color", t).css("background-color", a), $(e.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().customer
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
        }
    }), $(".dataTables_length").addClass("mt-0 mt-md-3 me-3"), $(".dt-action-buttons").addClass("pt-0"), $(".dt-buttons > .btn-group > button").removeClass("btn-secondary")), $(".datatables-order tbody").on("click", ".delete-record", function() {
        e.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});