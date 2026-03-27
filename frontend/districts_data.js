// InfraLens — Real India Districts Data
// Coordinates verified from latlong.net, mapsofindia.com & OpenStreetMap
const INDIA_DISTRICTS = [

  // ── BIHAR ──────────────────────────────────────────
  {id:1,name:"Sheohar",state:"Bihar",lat:26.5194,lng:85.2983,road:18,power:24,water:21,telecom:15,pop:656916,area:443},
  {id:2,name:"Araria",state:"Bihar",lat:26.1483,lng:87.4700,road:22,power:31,water:19,telecom:18,pop:2811569,area:2830},
  {id:3,name:"Supaul",state:"Bihar",lat:26.1234,lng:86.6032,road:25,power:28,water:22,telecom:20,pop:2279049,area:2410},
  {id:4,name:"Madhepura",state:"Bihar",lat:25.9181,lng:86.7927,road:28,power:33,water:25,telecom:22,pop:1994618,area:1788},
  {id:5,name:"Sitamarhi",state:"Bihar",lat:26.5926,lng:85.4887,road:24,power:29,water:20,telecom:19,pop:3423574,area:2199},
  {id:6,name:"Kishanganj",state:"Bihar",lat:26.0994,lng:87.9526,road:26,power:30,water:23,telecom:21,pop:1690400,area:1884},
  {id:7,name:"Purnia",state:"Bihar",lat:25.7771,lng:87.4753,road:30,power:35,water:27,telecom:24,pop:3264619,area:3229},
  {id:8,name:"Katihar",state:"Bihar",lat:25.5375,lng:87.5758,road:29,power:34,water:26,telecom:23,pop:3068149,area:3057},
  {id:9,name:"Madhubani",state:"Bihar",lat:26.3583,lng:86.0746,road:27,power:32,water:24,telecom:20,pop:4487379,area:3501},
  {id:10,name:"Darbhanga",state:"Bihar",lat:26.1520,lng:85.8974,road:32,power:38,water:28,telecom:26,pop:3937385,area:2279},

  // ── JHARKHAND ──────────────────────────────────────
  {id:11,name:"Pakur",state:"Jharkhand",lat:24.6355,lng:87.8455,road:28,power:35,water:29,telecom:22,pop:899200,area:1806},
  {id:12,name:"Chatra",state:"Jharkhand",lat:24.2018,lng:84.8717,road:35,power:42,water:33,telecom:29,pop:1042886,area:3706},
  {id:13,name:"Latehar",state:"Jharkhand",lat:23.7449,lng:84.5025,road:32,power:38,water:30,telecom:27,pop:725673,area:3660},
  {id:14,name:"Garhwa",state:"Jharkhand",lat:24.1583,lng:83.8083,road:30,power:36,water:28,telecom:25,pop:1322784,area:4044},
  {id:15,name:"Palamu",state:"Jharkhand",lat:24.0296,lng:84.0686,road:33,power:40,water:31,telecom:28,pop:1936319,area:4393},
  {id:16,name:"Simdega",state:"Jharkhand",lat:22.6117,lng:84.5026,road:31,power:37,water:29,telecom:26,pop:599578,area:3768},
  {id:17,name:"Khunti",state:"Jharkhand",lat:23.0721,lng:85.2817,road:34,power:41,water:32,telecom:28,pop:531885,area:2535},
  {id:18,name:"Dumka",state:"Jharkhand",lat:24.2671,lng:87.2494,road:36,power:43,water:34,telecom:30,pop:1321906,area:3716},
  {id:19,name:"Sahibganj",state:"Jharkhand",lat:25.2447,lng:87.6356,road:34,power:42,water:32,telecom:29,pop:1150567,area:1702},

  // ── ODISHA ─────────────────────────────────────────
  {id:20,name:"Malkangiri",state:"Odisha",lat:18.3500,lng:81.8833,road:22,power:41,water:25,telecom:18,pop:612727,area:5791},
  {id:21,name:"Nabarangpur",state:"Odisha",lat:19.2307,lng:82.5489,road:30,power:38,water:33,telecom:24,pop:1218277,area:5294},
  {id:22,name:"Nuapada",state:"Odisha",lat:20.8330,lng:82.5500,road:35,power:46,water:38,telecom:29,pop:606490,area:3408},
  {id:23,name:"Bolangir",state:"Odisha",lat:20.7014,lng:83.4864,road:38,power:48,water:40,telecom:32,pop:1648997,area:6575},
  {id:24,name:"Kalahandi",state:"Odisha",lat:19.9110,lng:83.1697,road:36,power:47,water:39,telecom:31,pop:1576033,area:7920},
  {id:25,name:"Rayagada",state:"Odisha",lat:19.1692,lng:83.4159,road:33,power:44,water:36,telecom:28,pop:961959,area:7073},
  {id:26,name:"Kandhamal",state:"Odisha",lat:20.4672,lng:84.2278,road:29,power:42,water:32,telecom:24,pop:731952,area:8021},
  {id:27,name:"Koraput",state:"Odisha",lat:18.8125,lng:82.7119,road:27,power:40,water:30,telecom:22,pop:1376934,area:8807},
  {id:28,name:"Gajapati",state:"Odisha",lat:19.3167,lng:84.1167,road:31,power:43,water:34,telecom:26,pop:575000,area:4325},
  {id:29,name:"Mayurbhanj",state:"Odisha",lat:21.9333,lng:86.7333,road:38,power:48,water:40,telecom:33,pop:2513895,area:10418},

  // ── CHHATTISGARH ───────────────────────────────────
  {id:30,name:"Bijapur",state:"Chhattisgarh",lat:18.8058,lng:80.8048,road:20,power:28,water:19,telecom:14,pop:255230,area:6562},
  {id:31,name:"Dantewada",state:"Chhattisgarh",lat:18.8997,lng:81.3479,road:25,power:33,water:22,telecom:20,pop:533638,area:3410},
  {id:32,name:"Sukma",state:"Chhattisgarh",lat:18.3853,lng:81.6583,road:22,power:30,water:20,telecom:16,pop:249857,area:5659},
  {id:33,name:"Narayanpur",state:"Chhattisgarh",lat:19.6925,lng:81.2432,road:24,power:32,water:21,telecom:18,pop:139820,area:6640},
  {id:34,name:"Kondagaon",state:"Chhattisgarh",lat:19.5960,lng:81.6629,road:28,power:36,water:25,telecom:22,pop:578326,area:7768},
  {id:35,name:"Kanker",state:"Chhattisgarh",lat:20.2740,lng:81.4907,road:32,power:40,water:29,telecom:26,pop:748941,area:5284},
  {id:36,name:"Bastar",state:"Chhattisgarh",lat:19.1167,lng:81.9500,road:28,power:38,water:26,telecom:22,pop:1413199,area:4995},
  {id:37,name:"Gariaband",state:"Chhattisgarh",lat:20.6319,lng:82.0736,road:35,power:43,water:32,telecom:28,pop:597653,area:5822},
  {id:38,name:"Rajnandgaon",state:"Chhattisgarh",lat:21.0972,lng:80.6986,road:52,power:61,water:49,telecom:53,pop:1537519,area:8025},

  // ── NAGALAND ───────────────────────────────────────
  {id:39,name:"Kiphire",state:"Nagaland",lat:25.9762,lng:94.7793,road:15,power:28,water:32,telecom:12,pop:74033,area:1255},
  {id:40,name:"Mon",state:"Nagaland",lat:26.7292,lng:94.8316,road:21,power:33,water:28,telecom:17,pop:250260,area:1786},
  {id:41,name:"Tuensang",state:"Nagaland",lat:26.2720,lng:94.8280,road:19,power:31,water:30,telecom:15,pop:196966,area:4228},
  {id:42,name:"Longleng",state:"Nagaland",lat:26.5966,lng:94.7284,road:17,power:29,water:26,telecom:13,pop:50593,area:885},

  // ── MANIPUR ────────────────────────────────────────
  {id:43,name:"Churachandpur",state:"Manipur",lat:24.3333,lng:93.6833,road:26,power:37,water:30,telecom:22,pop:274289,area:4570},
  {id:44,name:"Tamenglong",state:"Manipur",lat:24.9833,lng:93.5000,road:20,power:32,water:27,telecom:17,pop:140143,area:4391},
  {id:45,name:"Chandel",state:"Manipur",lat:24.3167,lng:93.9667,road:23,power:34,water:28,telecom:19,pop:144028,area:3313},
  {id:46,name:"Senapati",state:"Manipur",lat:25.2667,lng:94.0167,road:25,power:35,water:29,telecom:21,pop:479148,area:3270},
  {id:47,name:"Ukhrul",state:"Manipur",lat:25.1000,lng:94.3667,road:22,power:33,water:27,telecom:18,pop:183115,area:4544},

  // ── MEGHALAYA ──────────────────────────────────────
  {id:48,name:"West Garo Hills",state:"Meghalaya",lat:25.5333,lng:90.2167,road:42,power:49,water:46,telecom:38,pop:643291,area:3714},
  {id:49,name:"South Garo Hills",state:"Meghalaya",lat:25.3167,lng:90.4667,road:35,power:43,water:40,telecom:30,pop:142300,area:1850},
  {id:50,name:"East Jaintia Hills",state:"Meghalaya",lat:25.3833,lng:92.4167,road:38,power:46,water:43,telecom:34,pop:122436,area:2253},

  // ── ARUNACHAL PRADESH ──────────────────────────────
  {id:51,name:"Kurung Kumey",state:"Arunachal Pradesh",lat:27.9667,lng:93.5000,road:18,power:35,water:28,telecom:12,pop:89717,area:6188},
  {id:52,name:"Lower Subansiri",state:"Arunachal Pradesh",lat:27.5700,lng:93.8200,road:22,power:38,water:30,telecom:15,pop:82839,area:3508},
  {id:53,name:"Dibang Valley",state:"Arunachal Pradesh",lat:28.4167,lng:95.7167,road:14,power:30,water:24,telecom:10,pop:7948,area:9129},
  {id:54,name:"Anjaw",state:"Arunachal Pradesh",lat:28.0667,lng:96.8333,road:12,power:28,water:22,telecom:8,pop:21089,area:6190},

  // ── UTTAR PRADESH ──────────────────────────────────
  {id:55,name:"Shravasti",state:"Uttar Pradesh",lat:27.5528,lng:81.6467,road:32,power:42,water:29,telecom:27,pop:1114615,area:1838},
  {id:56,name:"Chitrakoot",state:"Uttar Pradesh",lat:25.2034,lng:80.8960,road:38,power:44,water:36,telecom:31,pop:990626,area:3215},
  {id:57,name:"Balrampur",state:"Uttar Pradesh",lat:27.4312,lng:82.1856,road:34,power:41,water:31,telecom:28,pop:2149065,area:3349},
  {id:58,name:"Bahraich",state:"Uttar Pradesh",lat:27.5744,lng:81.5944,road:36,power:43,water:33,telecom:29,pop:3487731,area:5745},
  {id:59,name:"Sonbhadra",state:"Uttar Pradesh",lat:24.6805,lng:83.0699,road:37,power:45,water:34,telecom:30,pop:1862559,area:6788},
  {id:60,name:"Lakhimpur Kheri",state:"Uttar Pradesh",lat:27.9477,lng:80.7819,road:41,power:49,water:38,telecom:34,pop:4021243,area:7680},

  // ── MADHYA PRADESH ─────────────────────────────────
  {id:61,name:"Barwani",state:"Madhya Pradesh",lat:22.0330,lng:74.9020,road:38,power:46,water:36,telecom:32,pop:1385659,area:5427},
  {id:62,name:"Alirajpur",state:"Madhya Pradesh",lat:22.3049,lng:74.3635,road:32,power:40,water:30,telecom:26,pop:728677,area:3182},
  {id:63,name:"Jhabua",state:"Madhya Pradesh",lat:22.7676,lng:74.5957,road:35,power:43,water:33,telecom:29,pop:1025048,area:6782},
  {id:64,name:"Dindori",state:"Madhya Pradesh",lat:22.9442,lng:81.0792,road:33,power:41,water:31,telecom:27,pop:704218,area:7470},
  {id:65,name:"Mandla",state:"Madhya Pradesh",lat:22.5984,lng:80.3779,road:36,power:44,water:34,telecom:30,pop:1053522,area:8771},
  {id:66,name:"Singrauli",state:"Madhya Pradesh",lat:24.1997,lng:82.6744,road:42,power:55,water:39,telecom:37,pop:1178273,area:5672},

  // ── RAJASTHAN ──────────────────────────────────────
  {id:67,name:"Jaisalmer",state:"Rajasthan",lat:26.9157,lng:70.9083,road:28,power:52,water:15,telecom:30,pop:669919,area:38401},
  {id:68,name:"Barmer",state:"Rajasthan",lat:25.7521,lng:71.3967,road:32,power:55,water:18,telecom:33,pop:2603751,area:28387},
  {id:69,name:"Dungarpur",state:"Rajasthan",lat:23.8439,lng:73.7145,road:36,power:54,water:20,telecom:32,pop:1388906,area:3770},
  {id:70,name:"Banswara",state:"Rajasthan",lat:23.5461,lng:74.4387,road:37,power:53,water:22,telecom:33,pop:1798194,area:5037},
  {id:71,name:"Pratapgarh",state:"Rajasthan",lat:24.0319,lng:74.7794,road:38,power:56,water:24,telecom:34,pop:867848,area:4117},

  // ── MAHARASHTRA ────────────────────────────────────
  {id:72,name:"Nandurbar",state:"Maharashtra",lat:21.3706,lng:74.2179,road:41,power:52,water:45,telecom:37,pop:1648295,area:5955},
  {id:73,name:"Gadchiroli",state:"Maharashtra",lat:20.1792,lng:80.0023,road:30,power:44,water:35,telecom:26,pop:1071795,area:14412},
  {id:74,name:"Washim",state:"Maharashtra",lat:20.1117,lng:77.1468,road:64,power:72,water:60,telecom:67,pop:1196714,area:5149},
  {id:75,name:"Osmanabad",state:"Maharashtra",lat:18.1860,lng:76.0427,road:58,power:65,water:54,telecom:56,pop:1657576,area:7512},
  {id:76,name:"Nanded",state:"Maharashtra",lat:19.1503,lng:77.3152,road:55,power:63,water:51,telecom:52,pop:3361292,area:10528},

  // ── KARNATAKA ──────────────────────────────────────
  {id:77,name:"Raichur",state:"Karnataka",lat:16.2120,lng:77.3566,road:55,power:62,water:48,telecom:51,pop:1924773,area:6827},
  {id:78,name:"Yadgir",state:"Karnataka",lat:16.7714,lng:77.1381,road:48,power:57,water:44,telecom:46,pop:1172985,area:5239},
  {id:79,name:"Koppal",state:"Karnataka",lat:15.3508,lng:76.1549,road:50,power:59,water:46,telecom:48,pop:1388925,area:5480},
  {id:80,name:"Bidar",state:"Karnataka",lat:17.9133,lng:77.5199,road:53,power:62,water:49,telecom:51,pop:1699041,area:5448},
  {id:81,name:"Gadag",state:"Karnataka",lat:15.4167,lng:75.6167,road:52,power:61,water:48,telecom:50,pop:1064570,area:4656},

  // ── ANDHRA PRADESH ─────────────────────────────────
  {id:82,name:"Vizianagaram",state:"Andhra Pradesh",lat:18.1066,lng:83.3956,road:59,power:68,water:55,telecom:58,pop:2344474,area:6539},
  {id:83,name:"Srikakulam",state:"Andhra Pradesh",lat:18.2969,lng:83.8979,road:57,power:66,water:53,telecom:56,pop:2699471,area:5837},
  {id:84,name:"Kurnool",state:"Andhra Pradesh",lat:15.8281,lng:78.0373,road:56,power:65,water:52,telecom:55,pop:4053463,area:17658},

  // ── TELANGANA ──────────────────────────────────────
  {id:85,name:"Adilabad",state:"Telangana",lat:19.6640,lng:78.5320,road:48,power:58,water:44,telecom:46,pop:708972,area:3648},
  {id:86,name:"Kumuram Bheem",state:"Telangana",lat:19.3500,lng:79.5500,road:44,power:54,water:40,telecom:42,pop:526163,area:4280},
  {id:87,name:"Mancherial",state:"Telangana",lat:18.8667,lng:79.4500,road:50,power:60,water:46,telecom:48,pop:917762,area:4054},

  // ── ASSAM ──────────────────────────────────────────
  {id:88,name:"Dhubri",state:"Assam",lat:26.0200,lng:89.9800,road:30,power:38,water:27,telecom:25,pop:1949258,area:2838},
  {id:89,name:"Kokrajhar",state:"Assam",lat:26.3985,lng:90.2750,road:33,power:41,water:30,telecom:28,pop:887142,area:3169},
  {id:90,name:"Chirang",state:"Assam",lat:26.4833,lng:90.4667,road:31,power:39,water:28,telecom:26,pop:481818,area:1468},
  {id:91,name:"Bongaigaon",state:"Assam",lat:26.4782,lng:90.5585,road:35,power:43,water:32,telecom:30,pop:737797,area:1093},
  {id:92,name:"Karbi Anglong",state:"Assam",lat:26.0000,lng:93.5000,road:32,power:42,water:30,telecom:27,pop:1010782,area:10434},

  // ── WEST BENGAL ────────────────────────────────────
  {id:93,name:"Purulia",state:"West Bengal",lat:23.3342,lng:86.3665,road:42,power:51,water:39,telecom:38,pop:2930115,area:6259},
  {id:94,name:"Murshidabad",state:"West Bengal",lat:24.1800,lng:88.2700,road:45,power:53,water:42,telecom:40,pop:7103807,area:5341},
  {id:95,name:"Malda",state:"West Bengal",lat:25.0108,lng:88.1418,road:43,power:52,water:40,telecom:39,pop:3997970,area:3733},
  {id:96,name:"North Dinajpur",state:"West Bengal",lat:26.3333,lng:88.0833,road:38,power:47,water:35,telecom:34,pop:3007134,area:3942},

  // ── GUJARAT ────────────────────────────────────────
  {id:97,name:"Dahod",state:"Gujarat",lat:22.8327,lng:74.2479,road:44,power:60,water:38,telecom:40,pop:2126558,area:3642},
  {id:98,name:"Narmada",state:"Gujarat",lat:21.8736,lng:73.4947,road:46,power:62,water:40,telecom:42,pop:590297,area:2749},
  {id:99,name:"Tapi",state:"Gujarat",lat:21.1215,lng:73.4154,road:48,power:63,water:42,telecom:44,pop:807022,area:3435},

  // ── HIMACHAL PRADESH ───────────────────────────────
  {id:100,name:"Kinnaur",state:"Himachal Pradesh",lat:31.5833,lng:78.4500,road:28,power:75,water:55,telecom:22,pop:84298,area:6401},
  {id:101,name:"Lahaul Spiti",state:"Himachal Pradesh",lat:32.5667,lng:77.6833,road:20,power:70,water:48,telecom:16,pop:31564,area:13835},
  {id:102,name:"Chamba",state:"Himachal Pradesh",lat:32.5533,lng:76.1322,road:32,power:72,water:52,telecom:28,pop:518844,area:6528},

  // ── UTTARAKHAND ────────────────────────────────────
  {id:103,name:"Pithoragarh",state:"Uttarakhand",lat:29.5831,lng:80.2181,road:30,power:68,water:50,telecom:26,pop:483439,area:7110},
  {id:104,name:"Champawat",state:"Uttarakhand",lat:29.3333,lng:80.0833,road:33,power:70,water:52,telecom:28,pop:259648,area:1766},
  {id:105,name:"Rudraprayag",state:"Uttarakhand",lat:30.2833,lng:78.9833,road:28,power:66,water:48,telecom:24,pop:242285,area:1984},

  // ── JAMMU & KASHMIR ────────────────────────────────
  {id:106,name:"Kishtwar",state:"Jammu & Kashmir",lat:33.3167,lng:75.7667,road:22,power:62,water:45,telecom:18,pop:230696,area:6494},
  {id:107,name:"Ramban",state:"Jammu & Kashmir",lat:33.2406,lng:75.2272,road:25,power:64,water:47,telecom:20,pop:283713,area:1329},
  {id:108,name:"Doda",state:"Jammu & Kashmir",lat:33.1492,lng:75.5494,road:24,power:63,water:46,telecom:19,pop:409576,area:8912},

  // ── MIZORAM ────────────────────────────────────────
  {id:109,name:"Lawngtlai",state:"Mizoram",lat:22.5333,lng:92.9000,road:20,power:45,water:38,telecom:16,pop:117894,area:2557},
  {id:110,name:"Siaha",state:"Mizoram",lat:22.4833,lng:92.9667,road:18,power:43,water:36,telecom:14,pop:55725,area:1431},
  {id:111,name:"Lunglei",state:"Mizoram",lat:22.8833,lng:92.7333,road:22,power:47,water:40,telecom:18,pop:161428,area:4536},

  // ── TRIPURA ────────────────────────────────────────
  {id:112,name:"Dhalai",state:"Tripura",lat:24.0833,lng:92.0167,road:35,power:55,water:42,telecom:32,pop:377988,area:2699},
  {id:113,name:"Unakoti",state:"Tripura",lat:24.3167,lng:92.0500,road:38,power:57,water:44,telecom:35,pop:277337,area:591},

  // ── SIKKIM ─────────────────────────────────────────
  {id:114,name:"North Sikkim",state:"Sikkim",lat:27.6667,lng:88.4333,road:25,power:72,water:55,telecom:20,pop:43709,area:4226},
  {id:115,name:"West Sikkim",state:"Sikkim",lat:27.3000,lng:88.2500,road:30,power:74,water:57,telecom:25,pop:136435,area:1166},

  // ── TAMIL NADU ─────────────────────────────────────
  {id:116,name:"Dharmapuri",state:"Tamil Nadu",lat:12.1278,lng:78.1574,road:58,power:74,water:55,telecom:60,pop:1506843,area:4497},
  {id:117,name:"Krishnagiri",state:"Tamil Nadu",lat:12.5186,lng:78.2137,road:60,power:76,water:57,telecom:62,pop:1879809,area:5143},
  {id:118,name:"Ramanathapuram",state:"Tamil Nadu",lat:9.3762,lng:78.8306,road:55,power:70,water:50,telecom:57,pop:1353445,area:4175},
  {id:119,name:"Virudhunagar",state:"Tamil Nadu",lat:9.5684,lng:77.9623,road:57,power:72,water:53,telecom:59,pop:1942288,area:4283},
  {id:120,name:"Tiruvannamalai",state:"Tamil Nadu",lat:12.2253,lng:79.0747,road:61,power:75,water:58,telecom:63,pop:2464875,area:6191},

  // ── KERALA ─────────────────────────────────────────
  {id:121,name:"Wayanad",state:"Kerala",lat:11.6854,lng:76.1320,road:65,power:82,water:68,telecom:70,pop:817420,area:2131},
  {id:122,name:"Idukki",state:"Kerala",lat:9.8500,lng:77.1000,road:62,power:80,water:65,telecom:67,pop:1107453,area:5019},

  // ── PUNJAB ─────────────────────────────────────────
  {id:123,name:"Mansa",state:"Punjab",lat:29.9854,lng:75.3978,road:68,power:78,water:65,telecom:70,pop:768808,area:2171},
  {id:124,name:"Fazilka",state:"Punjab",lat:30.4024,lng:74.0267,road:65,power:75,water:62,telecom:67,pop:1180483,area:3121},

  // ── HARYANA ────────────────────────────────────────
  {id:125,name:"Mewat",state:"Haryana",lat:28.1000,lng:77.0167,road:55,power:68,water:50,telecom:52,pop:1089263,area:1874},
];
