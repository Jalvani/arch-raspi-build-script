var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0"},1E4:{other:"0"},1E5:{other:"0"},1E6:{other:"0\u00a0mil."},1E7:{other:"00\u00a0mil."},1E8:{other:"000\u00a0mil."},1E9:{other:"0\u00a0mlr."},1E10:{other:"00\u00a0mlr."},1E11:{other:"000\u00a0mlr."},1E12:{other:"0\u00a0bil."},1E13:{other:"00\u00a0bil."},1E14:{other:"000\u00a0bil."}},a:{1E3:{other:"0"},1E4:{other:"0"},1E5:{other:"0"},1E6:{other:"0 milijuna"},1E7:{other:"00 milijuna"},1E8:{other:"000 milijuna"},1E9:{other:"0 milijarda"},1E10:{other:"00 milijarda"},
1E11:{other:"000 milijarda"},1E12:{other:"0 bilijuna"},1E13:{other:"00 bilijuna"},1E14:{other:"000 bilijuna"}}};var d={w:"yyyy",A:"MMM y",B:"MMMM yyyy",l:"MMM d",m:"MMMM dd",o:"M/d",n:"MMMM d",M:"MMM d, y",v:"EEE, MMM d",aa:"EEE, MMM d, y",d:"d"},d={w:"yyyy.",A:"LLL y.",B:"LLLL yyyy.",l:"d. MMM",m:"dd. MMMM",o:"d. M.",n:"d. MMMM",M:"d. MMM y.",v:"EEE, d. MMM",aa:"EEE, d. MMM y.",d:"d."};var h;
h={I:["p. n. e.","A. D."],H:["Prije Krista","Poslije Krista"],N:"1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12.".split(" "),U:"1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12.".split(" "),L:"sije\u010dnja velja\u010de o\u017eujka travnja svibnja lipnja srpnja kolovoza rujna listopada studenoga prosinca".split(" "),T:"sije\u010danj velja\u010da o\u017eujak travanj svibanj lipanj srpanj kolovoz rujan listopad studeni prosinac".split(" "),Q:"sij velj o\u017eu tra svi lip srp kol ruj lis stu pro".split(" "),W:"sij velj o\u017eu tra svi lip srp kol ruj lis stu pro".split(" "),$:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
Y:"nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),S:"ned pon uto sri \u010det pet sub".split(" "),X:"ned pon uto sri \u010det pet sub".split(" "),O:"NPUS\u010cPS".split(""),V:"npus\u010dps".split(""),R:["1kv","2kv","3kv","4kv"],P:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"],D:["AM","PM"],F:["EEEE, d. MMMM y.","d. MMMM y.","d. M. y.","d.M.y."],Z:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],G:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],J:0,ba:[5,6],K:6};var l={f:".",i:",",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"\u00a4#,##0.00;(\u00a4#,##0.00)",g:"USD"},l={f:",",i:".",q:"%",C:"0",t:"+",k:"-",h:"E",s:"\u2030",j:"\u221e",p:"NaN",e:"#,##0.###",u:"#E0",r:"#,##0%",c:"#,##0.00\u00a0\u00a4",g:"HRK"};b("I18N_DATETIMESYMBOLS_ERAS",h.I);b("I18N_DATETIMESYMBOLS_ERANAMES",h.H);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.N);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.U);b("I18N_DATETIMESYMBOLS_MONTHS",h.L);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.T);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.Q);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.W);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.$);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.S);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.X);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.O);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.V);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.R);b("I18N_DATETIMESYMBOLS_QUARTERS",h.P);b("I18N_DATETIMESYMBOLS_AMPMS",h.D);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.F);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.Z);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.G);b("I18N_DATETIMESYMBOLS_AVAILABLEFORMATS",h.da);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.J);
b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.ba);b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.K);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.w);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.A);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.B);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.l);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.m);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.o);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.n);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.v);
b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.d);void 0!==h.ca&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.ca);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.f);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.i);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.q);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.C);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.t);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.k);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.h);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.s);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.j);
b("I18N_NUMBERFORMATSYMBOLS_NAN",l.p);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.e);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.u);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.r);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.g);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
