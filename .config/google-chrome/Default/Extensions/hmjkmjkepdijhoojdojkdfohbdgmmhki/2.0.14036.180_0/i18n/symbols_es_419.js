var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0"},1E4:{other:"00k"},1E5:{other:"000k"},1E6:{other:"0\u00a0M"},1E7:{other:"00\u00a0M"},1E8:{other:"000\u00a0M"},1E9:{other:"0k\u00a0M"},1E10:{other:"00k\u00a0M"},1E11:{other:"000k\u00a0M"},1E12:{other:"0\u00a0B"},1E13:{other:"00\u00a0B"},1E14:{other:"000\u00a0B"}},a:{1E3:{other:"0 mil"},1E4:{other:"00 mil"},1E5:{other:"000 mil"},1E6:{other:"0 millones"},1E7:{other:"00 millones"},1E8:{other:"000 millones"},1E9:{other:"0 mil millones"},1E10:{other:"00 mil millones"},
1E11:{other:"000 mil millones"},1E12:{other:"0 billones"},1E13:{other:"00 billones"},1E14:{other:"000 billones"}}};var d={w:"yyyy",A:"MMM y",B:"MMMM yyyy",l:"MMM d",m:"MMMM dd",o:"M/d",n:"MMMM d",M:"MMM d, y",v:"EEE, MMM d",aa:"EEE, MMM d, y",d:"d"},d={w:"yyyy",A:"MMM 'de' y",B:"MMMM 'de' yyyy",l:"d 'de' MMM",m:"dd 'de' MMMM",o:"d/M",n:"d 'de' MMMM",M:"d 'de' MMM 'de' y",v:"EEE d 'de' MMM",aa:"EEE, d 'de' MMMM 'de' y",d:"d"};var h;
h={I:["a. C.","d. C."],H:["antes de Cristo","anno D\u00f3mini"],N:"EFMAMJJASOND".split(""),U:"EFMAMJJASOND".split(""),L:"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),T:"Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(" "),Q:"ene. feb. mar. abr. may. jun. jul. ago. sept. oct. nov. dic.".split(" "),W:"Ene. Feb. Mar. Abr. May. Jun. Jul. Ago. Sept. Oct. Nov. Dic.".split(" "),$:"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),Y:"Domingo Lunes Martes Mi\u00e9rcoles Jueves Viernes S\u00e1bado".split(" "),
S:"dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),X:"Dom. Lun. Mar. Mi\u00e9. Jue. Vie. S\u00e1b.".split(" "),O:"DLMXJVS".split(""),V:"DLMXJVS".split(""),R:["T1","T2","T3","T4"],P:["1.er trimestre","2.\u00ba trimestre","3.er trimestre","4.\u00ba trimestre"],D:["a. m.","p. m."],F:["EEEE, d 'de' MMMM 'de' y","d 'de' MMMM 'de' y","d/M/y","d/M/yy"],Z:["H:mm:ss (zzzz)","H:mm:ss z","H:mm:ss","H:mm"],G:["{1}, {0}","{1}, {0}","{1} {0}","{1} {0}"],J:0,ba:[5,6],K:3};var l={f:".",i:",",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"\u00a4#,##0.00",g:"USD"},l={f:".",i:",",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"\u00a4#,##0.00",g:"MXN"};b("I18N_DATETIMESYMBOLS_ERAS",h.I);b("I18N_DATETIMESYMBOLS_ERANAMES",h.H);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.N);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.U);b("I18N_DATETIMESYMBOLS_MONTHS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.T);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Q);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.W);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.S);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.V);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.R);b("I18N_DATETIMESYMBOLS_QUARTERS",h.P);b("I18N_DATETIMESYMBOLS_AMPMS",h.D);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.F);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.Z);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.G);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.da);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.J);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ba);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.K);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.w);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.A);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.B);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.l);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.m);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.o);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.n);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.v);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.d);void 0!==h.ca&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ca);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.f);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.i);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.q);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.C);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.t);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.k);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.h);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.s);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.j);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.p);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.e);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.r);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.g);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
