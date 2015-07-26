/**
 * Created by Administrator on 2015/7/19.
 */
Data = {
  'Beijing' :[86,117,80,153,119,184,143,29,43,87,143,42,110,109,148,381,211,104,177,37,51,153,169,185,40,77,128,61,155,93,184,179,105,40,50,116,158,124,102,29,35,133,150,241,311,424,339,137,95,89,208,308,313,262,309,402,330,31,106,57,175,267,88,38,38,36,63,191,126,108,207,36,58,62,128,151,181,86,75,37,54,82,166,241,322,294,169,72,63,172,140,131,63,91,64,97,133,224,194,271,88,131,197,284,132,83,121,181,83,82,68,80,149,152,175,65,74,84,118,139,166,48,94,55,50,99,95,102,88,72,45,60,89,55,116,92,98,112,140,121,142,191,127,101,121,65,105,80,97,140,157,88,62,75,98,111,88,37,56,58,90,69,63,100,83,149,167,120,87,158,71,100,59,64,97,134,173,47,50,84,121,124,84,238,237,167,253,210,150,59,78,60,49,49,91,111,117,173,185,116,97,51,39,63,86,109,155,160,168,164,160,244,196,164,151,50,48,59,114,96,133,78,51,70,45,61,73,97,96,88,129,143,178,71,142,46,45,64,90,104,98,170,87,126,36,36,70,120,183,196,46,75,97,109,98,93,69,45,71,75,88,102,159,134,124,66,49,139,162,51,84,78,48,91,75,119,101,48,47,179,309,380,351,233,25,29,72,81,73,127,194,289,254,67,100,154,263,341,85,50,84,138,203,201,85,29,51,126,125,34,61,91,79,92,70,42,44,54,124,105,38,78,267,342,215,50,155,103,177,279,101,113,269,209,55,25,56,33,42,82,74,78,267,185,39,41,64,108,108,33,94,186,57,22,39,94,99,31,42,154,234,160,134,52,46],
  'Shanghai' :[168,166,182,144,64,44,63,53,52,68,61,108,72,30,43,103,126,207,158,234,72,67,54,43,133,52,34,69,79,237,180,89,230,72,39,31,25,27,58,63,38,49,36,39,58,41,31,39,36,79,197,134,77,113,111,47,70,127,108,41,72,59,37,55,55,44,40,47,107,201,78,40,58,106,113,94,106,181,121,88,59,65,54,84,112,58,55,90,129,81,67,63,68,74,87,50,58,87,90,85,69,79,66,83,79,63,182,98,46,53,64,74,102,78,55,41,85,76,102,84,122,118,68,71,63,69,69,103,67,57,57,116,84,102,86,86,88,57,61,92,125,114,50,45,114,165,189,151,126,133,73,47,64,61,81,57,70,83,57,48,42,44,74,121,139,74,39,56,50,58,52,47,41,51,78,43,40,36,120,130,88,60,68,112,69,52,74,68,41,45,127,169,113,59,107,57,94,46,37,43,45,38,38,41,48,61,133,74,69,74,38,33,26,34,86,115,69,55,37,41,43,72,63,56,75,45,52,58,40,59,37,39,85,53,71,95,82,101,54,55,59,39,40,51,77,61,137,120,69,58,62,53,66,55,47,42,43,41,53,45,43,57,89,50,46,27,42,71,85,65,46,79,47,48,79,84,56,59,66,62,51,52,65,59,65,70,70,129,141,52,42,50,86,95,68,63,58,55,77,73,54,52,63,80,93,78,60,62,55,174,68,40,50,87,77,176,63,71,62,88,158,84,53,50,57,99,53,41,49,64,46,81,64,55,91,65,83,109,106,117,106,89,53,80,117,99,95,116,108,134,79,71,97,84,87,104,87,168,65,39,39,93,188,174,187],
  'GuangZhou' :[122,146,179,169,153,205,133,122,66,91,133,121,60,64,91,130,145,94,135,137,101,69,79,89,97,103,123,110,134,111,158,71,66,68,73,50,41,45,32,13,41,60,71,47,65,68,89,147,59,23,38,86,94,88,76,66,84,63,62,63,41,64,70,39,39,85,35,50,29,49,62,167,67,75,87,121,161,101,90,103,68,74,112,84,90,68,53,61,54,42,57,52,49,81,96,87,76,85,106,67,62,62,76,77,58,65,64,60,55,81,53,57,58,74,65,50,52,58,79,54,42,50,78,64,32,45,50,57,39,36,35,65,75,40,52,54,34,42,45,56,45,36,45,44,38,47,88,63,55,47,46,38,35,39,71,36,37,71,79,83,56,67,71,106,99,92,109,38,48,39,37,36,38,35,36,43,49,58,64,51,32,37,40,45,49,52,54,72,101,103,61,34,44,37,39,43,38,50,29,34,45,70,111,101,98,72,41,34,54,85,101,98,87,107,113,73,63,53,56,61,43,45,47,44,31,40,52,50,56,51,37,28,49,49,57,43,60,64,41,34,53,66,45,45,70,64,49,73,69,58,29,43,64,62,38,39,42,53,24,36,64,102,39,47,55,61,67,81,99,52,65,72,93,74,80,62,69,78,72,83,91,79,67,67,67,66,125,118,118,107,109,105,85,73,51,53,89,119,118,100,87,81,68,88,107,70,62,85,100,62,52,19,39,33,36,25,69,69,72,76,71,76,86,96,96,99,78,61,72,96,82,80,68,55,32,83,73,22,40,57,62,53,76,91,83,62,69,79,108,75,58,63,89,76,76,83,94,101,144,112,82,55,81,107,149]
},
recorder = {
    city : ["GuangZhou","Shanghai","Beijing"]
},
GuangZhou = {
    "AQI":[32,83,73,22,40,57,62,53,76,91,83,62,69,79,108,75,58,63,89,76,76,83,94,101,144,112,82,55,81,107,149
    ],
    "当天AQI排名":[12,147,102,6,23,25,32,21,71,96,96,53,44,42,77,100,36,24,79,91,84,66,47,68,158,113,67,23,42,86,481
    ],
    "PM2.5":[19,61,53,9,24,38,44,37,55,67,60,40,47,56,81,53,35,40,65,53,54,61,69,75,108,84,60,38,59,78,112
    ],
    "PM10":[28,68,69,14,40,59,51,50,78,86,67,71,84,94,126,80,56,70,93,80,84,90,107,111,147,110,75,51,92,140,197
    ],
    "CO":[1.39,1.23,1.5,0.75,0.62,0.77,0.87,0.86,1.18,1.15,1.18,0.94,0.91,1.16,1.5,0.97,0.82,0.91,1.22,1.32,1.28,1.21,1.36,1.63,2.05,1.21,1.48,1.49,1.42,1.95,2.34
    ],
    "NO2":[24,21,44,22,35,52,41,37,48,41,23,20,31,48,65,26,25,50,55,44,41,38,59,54,55,43,33,27,42,58,64
    ],
    "SO2":[8,14,7,4,14,21,11,12,22,28,20,19,25,21,33,31,22,20,25,17,24,25,24,17,29,16,5,8,14,18,22]
};
Shanghai = {
    "AQI":[32,83,108,75,58,63,89,76,76,83,94,73,22,40,57,62,53,76,91,83,62,69,79,101,144,112,82,55,81,107,149
    ],
    "当天AQI排名":[12,32,21,71,96,96,53,44,42,77,100,36,24,147,102,6,23,25,79,91,84,66,47,68,158,113,67,23,42,86,481
    ],
    "PM2.5":[19,35,40,65,53,54,61,69,75,108,84,60,38,59,78,61,53,9,24,38,44,37,55,67,60,40,47,56,81,53,112
    ],
    "PM10":[71,84,94,126,80,56,28,68,69,14,40,59,51,50,78,86,67,70,93,80,84,90,107,111,147,110,75,51,92,140,197
    ],
    "CO":[0.77,0.87,0.86,1.18,1.15,1.18,0.94,0.91,1.16,1.5,0.97,0.82,0.91,1.22,1.32,1.28,1.21,1.36,1.63,1.39,1.23,1.5,0.75,0.62,2.05,1.21,1.48,1.49,1.42,1.95,2.34
    ],
    "NO2":[48,41,23,20,31,48,65,26,25,50,55,44,41,24,21,44,22,35,52,41,37,38,59,54,55,43,33,27,42,58,64
    ],
    "SO2":[21,33,31,22,20,25,17,24,25,24,17,29,8,14,7,4,14,21,11,12,22,28,20,19,25,16,5,8,14,18,22]
};
Beijing = {
    "AQI":[79,108,75,58,63,89,76,76,83,94,101,144,32,83,73,22,40,57,62,53,76,91,83,62,69,112,82,55,81,107,149
    ],
    "当天AQI排名":[44,42,77,100,36,24,79,91,84,66,47,68,12,147,102,6,23,25,32,21,71,96,96,53,158,113,67,23,42,86,481
    ],
    "PM2.5":[56,81,53,35,40,65,53,54,61,69,75,108,19,61,53,9,24,38,44,37,55,67,60,40,47,84,60,38,59,78,112
    ],
    "PM10":[122,67,71,84,94,126,80,56,70,28,68,69,14,40,59,51,50,78,93,80,84,90,107,111,147,110,75,51,92,140,197
    ],
    "CO":[1.18,1.15,1.18,0.94,0.91,1.16,1.5,0.97,0.82,0.91,1.22,1.32,1.28,1.21,1.36,1.63,2.05,1.21,1.48,1.49,1.42,1.95,2.34,1.39,1.23,1.5,0.75,0.62,0.77,0.87,0.86
    ],
    "NO2":[20,31,48,65,26,25,50,55,44,41,38,59,24,21,44,22,35,52,41,37,48,41,23,54,55,43,33,27,42,58,64
    ],
    "SO2":[21,11,12,22,28,20,19,25,21,33,31,8,14,7,4,14,22,20,25,17,24,25,24,17,29,16,5,8,14,18,22]
};
Quaility ={
    "广州": ['优','良','良','优','优','良','良','良','良','良','良','良','良','良','轻度污染','良','良','良','良','良','良','良','良','轻度污染','轻度污染','轻度污染','良','良','良','轻度污染','轻度污染']
};