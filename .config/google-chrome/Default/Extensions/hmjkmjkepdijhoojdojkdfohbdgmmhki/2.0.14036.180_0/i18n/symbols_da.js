var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0td"},1E4:{other:"00\u00a0td"},1E5:{other:"000\u00a0td"},1E6:{other:"0\u00a0mio"},1E7:{other:"00\u00a0mio"},1E8:{other:"000\u00a0mio"},1E9:{other:"0\u00a0mia"},1E10:{other:"00\u00a0mia"},1E11:{other:"000\u00a0mia"},1E12:{other:"0\u00a0bill"},1E13:{other:"00\u00a0bill"},1E14:{other:"000\u00a0bill"}},a:{1E3:{other:"0 tusind"},1E4:{other:"00 tusind"},1E5:{other:"000 tusind"},1E6:{other:"0 millioner"},1E7:{other:"00 millioner"},1E8:{other:"000 millioner"},
1E9:{other:"0 milliarder"},1E10:{other:"00 milliarder"},1E11:{other:"000 milliarder"},1E12:{other:"0 billioner"},1E13:{other:"00 billioner"},1E14:{other:"000 billioner"}}};var d={w:"yyyy",A:"MMM y",B:"MMMM yyyy",l:"MMM d",m:"MMMM dd",o:"M/d",n:"MMMM d",M:"MMM d, y",v:"EEE, MMM d",aa:"EEE, MMM d, y",d:"d"},d={w:"yyyy",A:"MMM y",B:"MMMM yyyy",l:"d. MMM",m:"dd. MMMM",o:"d/M",n:"d. MMMM",M:"d. MMM y",v:"EEE d. MMM",aa:"EEE d. MMM y",d:"d."};var h;
h={I:["f.Kr.","e.Kr."],H:["f.Kr.","e.Kr."],N:"JFMAMJJASOND".split(""),U:"JFMAMJJASOND".split(""),L:"januar februar marts april maj juni juli august september oktober november december".split(" "),T:"januar februar marts april maj juni juli august september oktober november december".split(" "),Q:"jan. feb. mar. apr. maj jun. jul. aug. sep. okt. nov. dec.".split(" "),W:"jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),$:"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),Y:"s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
S:"s\u00f8n. man. tir. ons. tor. fre. l\u00f8r.".split(" "),X:"s\u00f8n man tir ons tor fre l\u00f8r".split(" "),O:"SMTOTFL".split(""),V:"SMTOTFL".split(""),R:["K1","K2","K3","K4"],P:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],D:["AM","PM"],F:["EEEE 'den' d. MMMM y","d. MMM y","dd/MM/y","dd/MM/yy"],Z:["HH.mm.ss zzzz","HH.mm.ss z","HH.mm.ss","HH.mm"],G:["{1} 'kl.' {0}","{1} 'kl.' {0}","{1} {0}","{1} {0}"],J:0,ba:[5,6],K:3};var l={f:".",i:",",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"\u00a4#,##0.00",g:"USD"},l={f:",",i:".",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0\u00a0%",c:"#,##0.00\u00a0\u00a4",g:"DKK"};b("I18N_DATETIMESYMBOLS_ERAS",h.I);b("I18N_DATETIMESYMBOLS_ERANAMES",h.H);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.N);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.U);b("I18N_DATETIMESYMBOLS_MONTHS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.T);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Q);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.W);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.S);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.V);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.R);b("I18N_DATETIMESYMBOLS_QUARTERS",h.P);b("I18N_DATETIMESYMBOLS_AMPMS",h.D);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.F);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.Z);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.G);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.da);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.J);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ba);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.K);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.w);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.A);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.B);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.l);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.m);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.o);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.n);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.v);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.d);void 0!==h.ca&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ca);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.f);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.i);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.q);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.C);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.t);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.k);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.h);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.s);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.j);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.p);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.e);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.r);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.g);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
