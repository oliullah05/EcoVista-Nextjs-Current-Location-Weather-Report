const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
    {
        location: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
    },
    {
        location: "Tokyo",
        latitude: 35.6895,
        longitude: 139.6917,
    },
    {
        location: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
    },
    {
        location: "Dubai",
        latitude: 25.276987,
        longitude: 55.296249,
    },
    {
        location: "Moscow",
        latitude: 55.7558,
        longitude: 37.6173,
    },
    {
        location: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
    },
    {
        location: "Berlin",
        latitude: 52.5200,
        longitude: 13.4050,
    },
    {
        location: "Rome",
        latitude: 41.9028,
        longitude: 12.4964,
    },
    {
        location: "Beijing",
        latitude: 39.9042,
        longitude: 116.4074,
    },
    {
        location: "Cairo",
        latitude: 30.0444,
        longitude: 31.2357,
    },
    {
        location: "Mumbai",
        latitude: 19.0760,
        longitude: 72.8777,
    },
    {
        location: "Los Angeles",
        latitude: 34.0522,
        longitude: -118.2437,
    },
    {
        location: "Mexico City",
        latitude: 19.4326,
        longitude: -99.1332,
    },
    {
        location: "Buenos Aires",
        latitude: -34.6037,
        longitude: -58.3816,
    },
    {
        location: "Istanbul",
        latitude: 41.0082,
        longitude: 28.9784,
    },
    {
        location: "Bangkok",
        latitude: 13.7563,
        longitude: 100.5018,
    },
    {
        location: "Seoul",
        latitude: 37.5665,
        longitude: 126.9780,
    },
    {
        location: "Madrid",
        latitude: 40.4168,
        longitude: -3.7038,
    },
    {
        location: "Lagos",
        latitude: 6.5244,
        longitude: 3.3792,
    },
    {
        location: "Chicago",
        latitude: 41.8781,
        longitude: -87.6298,
    },
    {
        location: "São Paulo",
        latitude: -23.5505,
        longitude: -46.6333,
    },
    {
        location: "Shanghai",
        latitude: 31.2304,
        longitude: 121.4737,
    },
    {
        location: "Karachi",
        latitude: 24.8607,
        longitude: 67.0011,
    },
    {
        location: "Delhi",
        latitude: 28.7041,
        longitude: 77.1025,
    },
    {
        location: "Hong Kong",
        latitude: 22.3193,
        longitude: 114.1694,
    },
    {
        location: "Rio de Janeiro",
        latitude: -22.9068,
        longitude: -43.1729,
    },
    {
        location: "Singapore",
        latitude: 1.3521,
        longitude: 103.8198,
    },
    {
        location: "Toronto",
        latitude: 43.6511,
        longitude: -79.3470,
    },
    {
        location: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
    },
    {
        location: "Moscow",
        latitude: 55.7558,
        longitude: 37.6173,
    },
    {
        location: "Amsterdam",
        latitude: 52.3676,
        longitude: 4.9041,
    },
    {
        location: "Vienna",
        latitude: 48.2082,
        longitude: 16.3738,
    },
    {
        location: "Athens",
        latitude: 37.9838,
        longitude: 23.7275,
    },
    {
        location: "Dublin",
        latitude: 53.3498,
        longitude: -6.2603,
    },
    {
        location: "Zurich",
        latitude: 47.3769,
        longitude: 8.5417,
    },
    {
        location: "Oslo",
        latitude: 59.9139,
        longitude: 10.7522,
    },
    {
        location: "Stockholm",
        latitude: 59.3293,
        longitude: 18.0686,
    },
    {
        location: "Helsinki",
        latitude: 60.1695,
        longitude: 24.9354,
    },
    {
        location: "Copenhagen",
        latitude: 55.6761,
        longitude: 12.5683,
    },
    {
        location: "Warsaw",
        latitude: 52.2297,
        longitude: 21.0122,
    },
    {
        location: "Prague",
        latitude: 50.0755,
        longitude: 14.4378,
    },
    {
        location: "Budapest",
        latitude: 47.4979,
        longitude: 19.0402,
    },
    {
        location: "Lisbon",
        latitude: 38.7223,
        longitude: -9.1393,
    },
    {
        location: "Brussels",
        latitude: 50.8503,
        longitude: 4.3517,
    },
    {
        location: "Barcelona",
        latitude: 41.3851,
        longitude: 2.1734,
    },
    {
        location: "Munich",
        latitude: 48.1351,
        longitude: 11.5820,
    },
    {
        location: "Milan",
        latitude: 45.4642,
        longitude: 9.1900,
    },
    {
        location: "Edinburgh",
        latitude: 55.9533,
        longitude: -3.1883,
    },
    {
        location: "Manchester",
        latitude: 53.4830,
        longitude: -2.2446,
    },
    {
        location: "Bristol",
        latitude: 51.4545,
        longitude: -2.5879,
    },
    {
        location: "Liverpool",
        latitude: 53.4084,
        longitude: -2.9916,
    },
    {
        location: "Glasgow",
        latitude: 55.8642,
        longitude: -4.2518,
    },
    {
        location: "Belfast",
        latitude: 54.5970,
        longitude: -5.9301,
    },
    {
        location: "Newcastle upon Tyne",
        latitude: 54.9783,
        longitude: -1.6174,
    },
    {
        location: "Leeds",
        latitude: 53.8008,
        longitude: -1.5491,
    },
    {
        location: "Sheffield",
        latitude: 53.3811,
        longitude: -1.4701,
    },
    {
        location: "Cardiff",
        latitude: 51.4816,
        longitude: -3.1791,
    },
    {
        location: "Melbourne",
        latitude: -37.8136,
        longitude: 144.9631,
    },
    {
        location: "Perth",
        latitude: -31.9505,
        longitude: 115.8605,
    },
    {
        location: "Adelaide",
        latitude: -34.9285,
        longitude: 138.6007,
    },
    {
        location: "Brisbane",
        latitude: -27.4698,
        longitude: 153.0251,
    },
    {
        location: "Auckland",
        latitude: -36.8485,
        longitude: 174.7633,
    },
    {
        location: "Wellington",
        latitude: -41.2865,
        longitude: 174.7762,
    },
    {
        location: "Christchurch",
        latitude: -43.5321,
        longitude: 172.6362,
    },
    {
        location: "Hamilton",
        latitude: -37.7870,
        longitude: 175.2793,
    },
    {
        location: "Nairobi",
        latitude: -1.2864,
        longitude: 36.8172,
    },
    {
        location: "Cape Town",
        latitude: -33.9249,
        longitude: 18.4241,
    },
    {
        location: "Johannesburg",
        latitude: -26.2041,
        longitude: 28.0473,
    },
    {
        location: "Pretoria",
        latitude: -25.7469,
        longitude: 28.1875,
    },
    {
        location: "Durban",
        latitude: -29.8587,
        longitude: 31.0218,
    },
    {
        location: "Port Elizabeth",
        latitude: -33.9608,
        longitude: 25.6022,
    },
    {
        location: "Bloemfontein",
        latitude: -29.0852,
        longitude: 26.1596,
    },
    {
        location: "Lusaka",
        latitude: -15.4167,
        longitude: 28.2833,
    },
    {
        location: "Harare",
        latitude: -17.8252,
        longitude: 31.0335,
    },
    {
        location: "Luanda",
        latitude: -8.8391,
        longitude: 13.2894,
    },
    {
        location: "Accra",
        latitude: 5.6037,
        longitude: -0.1870,
    },
    {
        location: "Nairobi",
        latitude: -1.2864,
        longitude: 36.8172,
    },
    {
        location: "Kigali",
        latitude: -1.9441,
        longitude: 30.0619,
    },
    {
        location: "Dakar",
        latitude: 14.6927,
        longitude: -17.4467,
    },
    {
        location: "Addis Ababa",
        latitude: 9.0086,
        longitude: 38.7617,
    },
    {
        location: "Khartoum",
        latitude: 15.5007,
        longitude: 32.5599,
    },
    {
        location: "Tunis",
        latitude: 36.8065,
        longitude: 10.1815,
    },
    {
        location: "Algiers",
        latitude: 36.7372,
        longitude: 3.0870,
    },
    {
        location: "Maputo",
        latitude: -25.9653,
        longitude: 32.5892,
    },
    {
        location: "Mogadishu",
        latitude: 2.0469,
        longitude: 45.3182,
    },
    {
        location: "Windhoek",
        latitude: -22.5597,
        longitude: 17.0832,
    },
    {
        location: "Abuja",
        latitude: 9.0765,
        longitude: 7.3986,
    },
    {
        location: "Kampala",
        latitude: 0.3476,
        longitude: 32.5825,
    },
    {
        location: "Lilongwe",
        latitude: -13.9626,
        longitude: 33.7741,
    },
    {
        location: "Bujumbura",
        latitude: -3.3614,
        longitude: 29.3599,
    },
    {
        location: "N'Djamena",
        latitude: 12.1347,
        longitude: 15.0557,
    },
    {
        location: "Antananarivo",
        latitude: -18.8792,
        longitude: 47.5079,
    },
    {
        location: "Maseru",
        latitude: -29.3142,
        longitude: 27.4838,
    },
    {
        location: "Gaborone",
        latitude: -24.6282,
        longitude: 25.9231,
    },
    {
        location: "Victoria",
        latitude: -4.6191,
        longitude: 55.4513,
    },
    {
        location: "Port Louis",
        latitude: -20.1654,
        longitude: 57.4970,
    },
    {
        location: "Porto-Novo",
        latitude: 6.4969,
        longitude: 2.6036,
    },
    {
        location: "Yaoundé",
        latitude: 3.8480,
        longitude: 11.5021,
    },
    {
        location: "Kigali",
        latitude: -1.9441,
        longitude: 30.0619,
    },
    {
        location: "Maseru",
        latitude: -29.3142,
        longitude: 27.4838,
    },
    {
        location: "Bamako",
        latitude: 12.6392,
        longitude: -8.0029,
    },
    {
        location: "Nouakchott",
        latitude: 18.0791,
        longitude: -15.9785,
    },
    {
        location: "Niamey",
        latitude: 13.5127,
        longitude: 2.1124,
    },
    {
        location: "Mbabane",
        latitude: -26.3054,
        longitude: 31.1367,
    },
    {
        location: "Lomé",
        latitude: 6.1228,
        longitude: 1.2255,
    },
    {
        location: "Banjul",
        latitude: 13.4549,
        longitude: -16.5790,
    },
    {
        location: "Hanoi",
        latitude: 21.0285,
        longitude: 105.8542,
    },
    {
        location: "Ho Chi Minh City",
        latitude: 10.8231,
        longitude: 106.6297,
    },
    {
        location: "Manila",
        latitude: 14.5995,
        longitude: 120.9842,
    },
    {
        location: "Jakarta",
        latitude: -6.2088,
        longitude: 106.8456,
    },
    {
        location: "Bangalore",
        latitude: 12.9716,
        longitude: 77.5946,
    },
    {
        location: "Chennai",
        latitude: 13.0827,
        longitude: 80.2707,
    },
    {
        location: "Hyderabad",
        latitude: 17.3850,
        longitude: 78.4867,
    },
    {
        location: "Pune",
        latitude: 18.5204,
        longitude: 73.8567,
    },
    {
        location: "Ahmedabad",
        latitude: 23.0225,
        longitude: 72.5714,
    },
    {
        location: "Kuala Lumpur",
        latitude: 3.1390,
        longitude: 101.6869,
    },
    {
        location: "Seoul",
        latitude: 37.5665,
        longitude: 126.9780,
    },
    {
        location: "Busan",
        latitude: 35.1796,
        longitude: 129.0756,
    },
    {
        location: "Osaka",
        latitude: 34.6937,
        longitude: 135.5023,
    },
    {
        location: "Kyoto",
        latitude: 35.0116,
        longitude: 135.7681,
    },
    {
        location: "Nagoya",
        latitude: 35.1815,
        longitude: 136.9066,
    },
    {
        location: "Fukuoka",
        latitude: 33.5904,
        longitude: 130.4017,
    },
    {
        location: "Sapporo",
        latitude: 43.0618,
        longitude: 141.3545,
    },
    {
        location: "Taipei",
        latitude: 25.0320,
        longitude: 121.5654,
    },
    {
        location: "Kaohsiung",
        latitude: 22.6273,
        longitude: 120.3014,
    },
    {
        location: "Taichung",
        latitude: 24.1477,
        longitude: 120.6736,
    },
    {
        location: "Wellington",
        latitude: -41.2865,
        longitude: 174.7762,
    },
    {
        location: "Auckland",
        latitude: -36.8485,
        longitude: 174.7633,
    },
    {
        location: "Christchurch",
        latitude: -43.5321,
        longitude: 172.6362,
    },
    {
        location: "Hamilton",
        latitude: -37.7870,
        longitude: 175.2793,
    },
    {
        location: "Santiago",
        latitude: -33.4489,
        longitude: -70.6693,
    },
    {
        location: "Bogotá",
        latitude: 4.7110,
        longitude: -74.0721,
    },
    {
        location: "Lima",
        latitude: -12.0464,
        longitude: -77.0428,
    },
    {
        location: "Quito",
        latitude: -0.1807,
        longitude: -78.4678,
    },
    {
        location: "San José",
        latitude: 9.9281,
        longitude: -84.0907,
    },
    {
        location: "Montevideo",
        latitude: -34.9011,
        longitude: -56.1645,
    },
    {
        location: "Caracas",
        latitude: 10.4806,
        longitude: -66.9036,
    },
    {
        location: "Santo Domingo",
        latitude: 18.4861,
        longitude: -69.9312,
    },
    {
        location: "San Juan",
        latitude: 18.4655,
        longitude: -66.1057,
    },
    {
        location: "Guatemala City",
        latitude: 14.6349,
        longitude: -90.5069,
    },
    {
        location: "San Salvador",
        latitude: 13.6929,
        longitude: -89.2182,
    },
    {
        location: "Tegucigalpa",
        latitude: 14.0723,
        longitude: -87.1921,
    },
    {
        location: "Managua",
        latitude: 12.1149,
        longitude: -86.2362,
    },
    {
        location: "San José",
        latitude: 9.9281,
        longitude: -84.0907,
    },
    {
        location: "Panama City",
        latitude: 8.9824,
        longitude: -79.5199,
    },
    {
        location: "Asunción",
        latitude: -25.2637,
        longitude: -57.5759,
    },
    {
        location: "Paramaribo",
        latitude: 5.8520,
        longitude: -55.2038,
    },
    {
        location: "Georgetown",
        latitude: 6.8013,
        longitude: -58.1551,
    },
    {
        location: "Port-au-Prince",
        latitude: 18.5944,
        longitude: -72.3074,
    },
    {
        location: "Nassau",
        latitude: 25.0343,
        longitude: -77.3963,
    },
    {
        location: "Kingston",
        latitude: 17.9712,
        longitude: -76.7921,
    },
    {
        location: "Port of Spain",
        latitude: 10.6549,
        longitude: -61.5019,
    },
    {
        location: "Montego Bay",
        latitude: 18.4762,
        longitude: -77.8939,
    },
    {
        location: "Bridgetown",
        latitude: 13.1132,
        longitude: -59.5988,
    },
    {
        location: "Willemstad",
        latitude: 12.1165,
        longitude: -68.9335,
    },
    {
        location: "Oranjestad",
        latitude: 12.5246,
        longitude: -70.0265,
    },
    {
        location: "Chittagong",
        latitude: 22.3569,
        longitude: 91.7832,
    },
    {
        location: "Khulna",
        latitude: 22.8456,
        longitude: 89.5403,
    },
    {
        location: "Rajshahi",
        latitude: 24.3636,
        longitude: 88.6241,
    },
    {
        location: "Sylhet",
        latitude: 24.8949,
        longitude: 91.8687,
    },
    {
        location: "Barisal",
        latitude: 22.7010,
        longitude: 90.3535,
    },
    {
        location: "Rangpur",
        latitude: 25.7439,
        longitude: 89.2752,
    },
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125,
    },
    {
        location: "Narayanganj",
        latitude: 23.6337,
        longitude: 90.4966,
    },
    {
        location: "Gazipur",
        latitude: 23.9988,
        longitude: 90.4203,
    },
    {
        location: "Narsingdi",
        latitude: 23.9204,
        longitude: 90.7179,
    },
    {
        location: "Narayanganj",
        latitude: 23.6337,
        longitude: 90.4966,
    },
    {
        location: "Tangail",
        latitude: 24.2513,
        longitude: 89.9167,
    },
    {
        location: "Mymensingh",
        latitude: 24.7467,
        longitude: 90.4027,
    },
    {
        location: "Kushtia",
        latitude: 23.9013,
        longitude: 89.1205,
    },
    {
        location: "Bogra",
        latitude: 24.8508,
        longitude: 89.3711,
    },
    {
        location: "Comilla",
        latitude: 23.4682,
        longitude: 91.1782,
    },
    {
        location: "Jessore",
        latitude: 23.1688,
        longitude: 89.2131,
    },
    {
        location: "Dinajpur",
        latitude: 25.6217,
        longitude: 88.6356,
    },
    {
        location: "Faridpur",
        latitude: 23.6071,
        longitude: 89.8428,
    },
    {
        location: "Pabna",
        latitude: 24.0060,
        longitude: 89.2372,
    },
    {
        location: "Cox's Bazar",
        latitude: 21.4272,
        longitude: 92.0058,
    },
    {
        location: "Jamalpur",
        latitude: 24.9375,
        longitude: 89.9370,
    },
    {
        location: "Sherpur",
        latitude: 25.0214,
        longitude: 90.0153,
    },
    {
        location: "Bagerhat",
        latitude: 22.6594,
        longitude: 89.7853,
    },
    {
        location: "Moulvibazar",
        latitude: 24.4864,
        longitude: 91.7755,
    },
    {
        location: "Chapai Nawabganj",
        latitude: 24.5950,
        longitude: 88.2777,
    },
    {
        location: "Joypurhat",
        latitude: 25.0961,
        longitude: 89.0240,
    },
    {
        location: "Feni",
        latitude: 23.0238,
        longitude: 91.3976,
    },
    {
        location: "Netrakona",
        latitude: 24.8753,
        longitude: 90.7262,
    },
    {
        location: "Satkhira",
        latitude: 22.7185,
        longitude: 89.0751,
    },
    {
        location: "Naogaon",
        latitude: 24.7936,
        longitude: 88.9318,
    },
    {
        location: "Sirajganj",
        latitude: 24.4539,
        longitude: 89.7004,
    },
    {
        location: "Rangamati",
        latitude: 22.7324,
        longitude: 92.2987,
    },
    {
        location: "Pirojpur",
        latitude: 22.5812,
        longitude: 89.9720,
    },
    {
        location: "Noakhali",
        latitude: 22.8192,
        longitude: 91.0980,
    },
    {
        location: "Bhola",
        latitude: 22.6823,
        longitude: 90.6482,
    },
    {
        location: "Magura",
        latitude: 23.4871,
        longitude: 89.4195,
    },
    {
        location: "Patuakhali",
        latitude: 22.3586,
        longitude: 90.3287,
    },
    {
        location: "Jhalokati",
        latitude: 22.6406,
        longitude: 90.1987,
    },
    {
        location: "Barguna",
        latitude: 22.0953,
        longitude: 90.1121,
    },
    {
        location: "Nawabganj",
        latitude: 24.5965,
        longitude: 88.2777,
    },
    {
        location: "Lalmonirhat",
        latitude: 25.9923,
        longitude: 89.2620,
    },
    {
        location: "Manikganj",
        latitude: 23.8630,
        longitude: 90.0046,
    },
    {
        location: "Magura",
        latitude: 23.4871,
        longitude: 89.4195,
    },
    {
        location: "Rajbari",
        latitude: 23.7586,
        longitude: 89.6445,
    },
    {
        location: "Madaripur",
        latitude: 23.1640,
        longitude: 90.1897,
    },
    {
        location: "Natore",
        latitude: 24.4088,
        longitude: 89.0010,
    },
    {
        location: "Meherpur",
        latitude: 23.7733,
        longitude: 88.6318,
    },
    {
        location: "Narail",
        latitude: 23.1726,
        longitude: 89.5125,
    },
    {
        location: "Brahmanbaria",
        latitude: 23.9574,
        longitude: 91.1111,
    },
    {
        location: "Chandpur",
        latitude: 23.2333,
        longitude: 90.6500,
    },
    {
        location: "Chuadanga",
        latitude: 23.6425,
        longitude: 88.8414,
    },
    {
        location: "Cox's Bazar",
        latitude: 21.4272,
        longitude: 92.0058,
    },
    {
        location: "Cox's Bazar Sadar",
        latitude: 21.4267,
        longitude: 92.0058,
    },
    {
        location: "Cox's Bazar Airport",
        latitude: 21.4521,
        longitude: 91.9649,
    },
    {
        location: "Dhaka",
        latitude: 23.8103,
        longitude: 90.4125,
    },
    {
        location: "Dhaka Cantonment",
        latitude: 23.8191,
        longitude: 90.3656,
    },
    {
        location: "Dhaka Sheraton Hotel",
        latitude: 23.7441,
        longitude: 90.3771,
    },
    {
        location: "Dhaka District",
        latitude: 23.6802,
        longitude: 90.4125,
    },
    {
        location: "Dhaka Railway Station",
        latitude: 23.7055,
        longitude: 90.4141,
    },
    {
        location: "Dhaka University",
        latitude: 23.7333,
        longitude: 90.3933,
    },
    {
        location: "Dhamrai",
        latitude: 23.9661,
        longitude: 90.1746,
    },
    {
        location: "Dinajpur",
        latitude: 25.6217,
        longitude: 88.6356,
    },
    {
        location: "Dinajpur District",
        latitude: 25.6275,
        longitude: 88.6364,
    },
    {
        location: "Dinajpur Sadar",
        latitude: 25.6275,
        longitude: 88.6364,
    },
    {
        location: "Dohar",
        latitude: 23.6021,
        longitude: 90.1416,
    },
    {
        location: "Feni",
        latitude: 23.0238,
        longitude: 91.3976,
    },
    {
        location: "Feni District",
        latitude: 23.0238,
        longitude: 91.3976,
    },
    {
        location: "Feni Sadar",
        latitude: 23.0238,
        longitude: 91.3976,
    },
    {
        location: "Gazipur",
        latitude: 23.9988,
        longitude: 90.4203,
    },
    {
        location: "Gazipur District",
        latitude: 24.0167,
        longitude: 90.4203,
    },
    {
        location: "Gazipur Sadar",
        latitude: 23.9951,
        longitude: 90.4205,
    },
    {
        location: "Gazipur City Corporation",
        latitude: 23.9946,
        longitude: 90.4188,
    },
    {
        location: "Gopalganj",
        latitude: 23.0051,
        longitude: 89.8262,
    },
    {
        location: "Gopalganj District",
        latitude: 23.0051,
        longitude: 89.8262,
    },
    {
        location: "Gopalganj Sadar",
        latitude: 23.0026,
        longitude: 89.8267,
    },
    {
        location: "Gopalganj Municipality",
        latitude: 23.0026,
        longitude: 89.8267,
    },
    {
        location: "Gulshan",
        latitude: 23.7919,
        longitude: 90.4155,
    },
    {
        location: "Habiganj",
        latitude: 24.3740,
        longitude: 91.4155,
    },
    {
        location: "Habiganj District",
        latitude: 24.3740,
        longitude: 91.4155,
    },
    {
        location: "Habiganj Sadar",
        latitude: 24.3759,
        longitude: 91.4176,
    },
    {
        location: "Habiganj Municipality",
        latitude: 24.3727,
        longitude: 91.4133,
    },
    {
        location: "Jamalpur",
        latitude: 24.9375,
        longitude: 89.9370,
    },
    {
        location: "Jamalpur District",
        latitude: 24.9375,
        longitude: 89.9370,
    },
    {
        location: "Jamalpur Sadar",
        latitude: 24.9150,
        longitude: 89.9425,
    },
    {
        location: "Jamalpur Municipality",
        latitude: 24.9150,
        longitude: 89.9425,
    },
    {
        location: "Jessore",
        latitude: 23.1688,
        longitude: 89.2131,
    },
    {
        location: "Jessore District",
        latitude: 23.1726,
        longitude: 89.2131,
    },
    {
        location: "Jessore Sadar",
        latitude: 23.1726,
        longitude: 89.2131,
    },
    {
        location: "Jhalokati",
        latitude: 22.6406,
        longitude: 90.1987,
    },
    {
        location: "Jhalokati District",
        latitude: 22.6406,
        longitude: 90.1987,
    },
    {
        location: "Jhalokati Sadar",
        latitude: 22.6394,
        longitude: 90.1929,
    },
];


export function getLocations() {
    return data
}



export function getLocationByName(location) {
    if (!location) {
        return null
    }

    const foundLocation = data.find(item=>item.location.toLowerCase()===location.toLowerCase())

    return foundLocation ||{}
}