var a=this,b=function(q,k){var f=q.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={c:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},b:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},d=c,d=c;var h={X:"yyyy",Y:"MMM y",Z:"MMMM yyyy",t:"MMM d",u:"MMMM dd",w:"M/d",v:"MMMM d",ca:"MMM d, y",V:"EEE, MMM d",da:"EEE, MMM d, y",g:"d"},l=h,l=h;var m;
m={l:["BC","AD"],k:["Before Christ","Anno Domini"],B:"JFMAMJJASOND".split(""),O:"JFMAMJJASOND".split(""),s:"January February March April May June July August September October November December".split(" "),N:"January February March April May June July August September October November December".split(" "),K:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Q:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),U:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),S:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
M:"Sun Mon Tue Wed Thu Fri Sat".split(" "),R:"Sun Mon Tue Wed Thu Fri Sat".split(" "),C:"SMTWTFS".split(""),P:"SMTWTFS".split(""),L:["Q1","Q2","Q3","Q4"],I:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],e:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],T:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],f:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],n:6,W:[5,6],o:5};var n={i:".",p:",",D:"%",aa:"0",H:"+",r:"-",m:"E",G:"\u2030",q:"\u221e",A:"NaN",h:"#,##0.###",J:"#E0",F:"#,##0%",d:"\u00a4#,##0.00",j:"USD"},p=n,p=n;b("I18N_DATETIMESYMBOLS_ERAS",m.l);b("I18N_DATETIMESYMBOLS_ERANAMES",m.k);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",m.B);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",m.O);b("I18N_DATETIMESYMBOLS_MONTHS",m.s);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",m.N);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",m.K);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",m.Q);b("I18N_DATETIMESYMBOLS_WEEKDAYS",m.U);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",m.S);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",m.M);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",m.R);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",m.C);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",m.P);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",m.L);b("I18N_DATETIMESYMBOLS_QUARTERS",m.I);b("I18N_DATETIMESYMBOLS_AMPMS",m.a);b("I18N_DATETIMESYMBOLS_DATEFORMATS",m.e);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",m.T);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",m.f);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",m.ba);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",m.n);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",m.W);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",m.o);b("I18N_DATETIMEPATTERNS_YEAR_FULL",l.X);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",l.Y);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",l.Z);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",l.t);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",l.u);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",l.w);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",l.v);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",l.V);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",l.g);void 0!==m.$&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",m.$);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",p.i);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",p.p);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",p.D);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",p.aa);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",p.H);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",p.r);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",p.m);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",p.G);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",p.q);
b("I18N_NUMBERFORMATSYMBOLS_NAN",p.A);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",p.h);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",p.J);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",p.F);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",p.d);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",p.j);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",d.c);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",d.b);
