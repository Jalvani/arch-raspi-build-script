var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0\u0445\u0438\u043b."},1E4:{other:"00\u00a0\u0445\u0438\u043b."},1E5:{other:"000\u00a0\u0445\u0438\u043b."},1E6:{other:"0\u00a0\u043c\u043b\u043d."},1E7:{other:"00\u00a0\u043c\u043b\u043d."},1E8:{other:"000\u00a0\u043c\u043b\u043d."},1E9:{other:"0\u00a0\u043c\u043b\u0440\u0434."},1E10:{other:"00\u00a0\u043c\u043b\u0440\u0434."},1E11:{other:"000\u00a0\u043c\u043b\u0440\u0434."},1E12:{other:"0\u00a0\u0442\u0440\u043b\u043d."},1E13:{other:"00\u00a0\u0442\u0440\u043b\u043d."},
1E14:{other:"000\u00a0\u0442\u0440\u043b\u043d."}},a:{1E3:{other:"0 \u0445\u0438\u043b\u044f\u0434\u0438"},1E4:{other:"00 \u0445\u0438\u043b\u044f\u0434\u0438"},1E5:{other:"000 \u0445\u0438\u043b\u044f\u0434\u0438"},1E6:{other:"0 \u043c\u0438\u043b\u0438\u043e\u043d\u0430"},1E7:{other:"00 \u043c\u0438\u043b\u0438\u043e\u043d\u0430"},1E8:{other:"000 \u043c\u0438\u043b\u0438\u043e\u043d\u0430"},1E9:{other:"0 \u043c\u0438\u043b\u0438\u0430\u0440\u0434\u0430"},1E10:{other:"00 \u043c\u0438\u043b\u0438\u0430\u0440\u0434\u0430"},
1E11:{other:"000 \u043c\u0438\u043b\u0438\u0430\u0440\u0434\u0430"},1E12:{other:"0 \u0442\u0440\u0438\u043b\u0438\u043e\u043d\u0430"},1E13:{other:"00 \u0442\u0440\u0438\u043b\u0438\u043e\u043d\u0430"},1E14:{other:"000 \u0442\u0440\u0438\u043b\u0438\u043e\u043d\u0430"}}};var d={w:"yyyy",A:"MMM y",B:"MMMM yyyy",l:"MMM d",m:"MMMM dd",o:"M/d",n:"MMMM d",M:"MMM d, y",v:"EEE, MMM d",aa:"EEE, MMM d, y",d:"d"},d={w:"yyyy '\u0433'.",A:"MMM y '\u0433'.",B:"MMMM yyyy '\u0433'.",l:"d MMM",m:"d MMMM",o:"d.MM",n:"d MMMM",M:"d MMM y '\u0433'.",v:"EEE, d MMM",aa:"EEE, d MMM y '\u0433'.",d:"d"};var h;
h={I:["\u043f\u0440.\u0425\u0440.","\u0441\u043b.\u0425\u0440."],H:["\u043f\u0440.\u0425\u0440.","\u0441\u043b.\u0425\u0440."],N:"\u044f\u0444\u043c\u0430\u043c\u044e\u044e\u0430\u0441\u043e\u043d\u0434".split(""),U:"\u044f\u0444\u043c\u0430\u043c\u044e\u044e\u0430\u0441\u043e\u043d\u0434".split(""),L:"\u044f\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),T:"\u044f\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
Q:"\u044f\u043d. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433. \u0441\u0435\u043f\u0442. \u043e\u043a\u0442. \u043d\u043e\u0435\u043c. \u0434\u0435\u043a.".split(" "),W:"\u044f\u043d. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433. \u0441\u0435\u043f\u0442. \u043e\u043a\u0442. \u043d\u043e\u0435\u043c. \u0434\u0435\u043a.".split(" "),
$:"\u043d\u0435\u0434\u0435\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u044f\u0434\u0430 \u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a \u043f\u0435\u0442\u044a\u043a \u0441\u044a\u0431\u043e\u0442\u0430".split(" "),Y:"\u043d\u0435\u0434\u0435\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u044f\u0434\u0430 \u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a \u043f\u0435\u0442\u044a\u043a \u0441\u044a\u0431\u043e\u0442\u0430".split(" "),
S:"\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),X:"\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),O:"\u043d\u043f\u0432\u0441\u0447\u043f\u0441".split(""),V:"\u043d\u043f\u0432\u0441\u0447\u043f\u0441".split(""),R:["1 \u0442\u0440\u0438\u043c.","2 \u0442\u0440\u0438\u043c.","3 \u0442\u0440\u0438\u043c.","4 \u0442\u0440\u0438\u043c."],P:["1-\u0432\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435",
"2-\u0440\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","3-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435","4-\u0442\u043e \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435"],D:["\u043f\u0440.\u043e\u0431.","\u0441\u043b.\u043e\u0431."],F:["EEEE, d MMMM y '\u0433'.","d MMMM y '\u0433'.","d.MM.y '\u0433'.","d.MM.yy"],Z:["H:mm:ss zzzz","H:mm:ss z","H:mm:ss","H:mm"],G:["{1}, {0}","{1}, {0}","{1}, {0}","{1}, {0}"],J:0,ba:[5,6],K:3};var l={f:".",i:",",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"\u00a4#,##0.00",g:"USD"},l={f:",",i:"\u00a0",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"#,##0.00\u00a0\u00a4",g:"BGN"};b("I18N_DATETIMESYMBOLS_ERAS",h.I);b("I18N_DATETIMESYMBOLS_ERANAMES",h.H);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.N);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.U);b("I18N_DATETIMESYMBOLS_MONTHS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.T);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Q);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.W);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.S);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.V);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.R);b("I18N_DATETIMESYMBOLS_QUARTERS",h.P);b("I18N_DATETIMESYMBOLS_AMPMS",h.D);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.F);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.Z);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.G);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.da);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.J);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ba);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.K);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.w);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.A);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.B);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.l);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.m);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.o);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.n);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.v);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.d);void 0!==h.ca&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ca);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.f);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.i);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.q);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.C);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.t);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.k);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.h);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.s);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.j);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.p);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.e);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.r);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.g);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
