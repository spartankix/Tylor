function a15_0x2737(_0x52fa38,_0x19aa5e){const _0x3f8072=a15_0x3f80();return a15_0x2737=function(_0x273769,_0x1d7582){_0x273769=_0x273769-0x15e;let _0x3e677c=_0x3f8072[_0x273769];return _0x3e677c;},a15_0x2737(_0x52fa38,_0x19aa5e);}const a15_0x1dbc1a=a15_0x2737;(function(_0x60a687,_0xe96e24){const _0x178dd2=a15_0x2737,_0xdce015=_0x60a687();while(!![]){try{const _0x302e7c=-parseInt(_0x178dd2(0x173))/0x1+parseInt(_0x178dd2(0x163))/0x2*(parseInt(_0x178dd2(0x160))/0x3)+-parseInt(_0x178dd2(0x161))/0x4+-parseInt(_0x178dd2(0x178))/0x5*(-parseInt(_0x178dd2(0x15f))/0x6)+-parseInt(_0x178dd2(0x162))/0x7+-parseInt(_0x178dd2(0x169))/0x8+parseInt(_0x178dd2(0x176))/0x9;if(_0x302e7c===_0xe96e24)break;else _0xdce015['push'](_0xdce015['shift']());}catch(_0x3d489d){_0xdce015['push'](_0xdce015['shift']());}}}(a15_0x3f80,0x7c13f),require(a15_0x1dbc1a(0x167))[a15_0x1dbc1a(0x179)]());function a15_0x3f80(){const _0x55b659=['387070fmNOEk','Erreur\x20lors\x20de\x20l\x27actualisation\x20de\x20events\x20:','La\x20colonne\x20','15703488afHOCP','exports','5QzQiXs','config','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27events\x27:','query','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20events\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20Id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20welcome\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20goodbye\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20antipromote\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20antidemote\x20text\x20DEFAULT\x20\x27non\x27\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','La\x20table\x20\x27events\x27\x20a\x20été\x20créée\x20avec\x20succès.','\x20ajouté\x20avec\x20la\x20colonne\x20','connect','length','1821156RBrgTD','111ZuzpUD','995532oGvSZF','4897263PPjoeK','36836dgIKWF','INSERT\x20INTO\x20events\x20(jid,\x20','rows','DATABASE_URL','dotenv','\x20ayant\x20la\x20valeur\x20','7088312ybwYGM','log','error','../set','SELECT\x20*\x20FROM\x20events\x20WHERE\x20jid\x20=\x20$1','\x20a\x20été\x20actualisée\x20sur\x20','\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','UPDATE\x20events\x20SET\x20','release','\x20pour\x20le\x20jid\x20'];a15_0x3f80=function(){return _0x55b659;};return a15_0x3f80();}const {Pool}=require('pg'),s=require(a15_0x1dbc1a(0x16c));var dbUrl=s[a15_0x1dbc1a(0x166)]?s[a15_0x1dbc1a(0x166)]:a15_0x1dbc1a(0x17d);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableevents=async()=>{const _0x42db4d=a15_0x1dbc1a;try{await pool[_0x42db4d(0x17b)](_0x42db4d(0x17c)),console[_0x42db4d(0x16a)](_0x42db4d(0x17e));}catch(_0x30a1c7){console[_0x42db4d(0x16b)](_0x42db4d(0x17a),_0x30a1c7);}};creerTableevents();async function attribuerUnevaleur(_0x169e5f,_0x58e09a,_0xfcabde){const _0x35fa9f=a15_0x1dbc1a,_0x276b2d=await pool[_0x35fa9f(0x180)]();try{const _0x66ddd3=await _0x276b2d['query'](_0x35fa9f(0x16d),[_0x169e5f]),_0x1b36ed=_0x66ddd3[_0x35fa9f(0x165)][_0x35fa9f(0x15e)]>0x0;_0x1b36ed?(await _0x276b2d[_0x35fa9f(0x17b)](_0x35fa9f(0x170)+_0x58e09a+_0x35fa9f(0x16f),[_0xfcabde,_0x169e5f]),console[_0x35fa9f(0x16a)](_0x35fa9f(0x175)+_0x58e09a+_0x35fa9f(0x16e)+_0xfcabde+_0x35fa9f(0x172)+_0x169e5f)):(await _0x276b2d[_0x35fa9f(0x17b)](_0x35fa9f(0x164)+_0x58e09a+')\x20VALUES\x20($1,\x20$2)',[_0x169e5f,_0xfcabde]),console[_0x35fa9f(0x16a)]('Nouveau\x20jid\x20'+_0x169e5f+_0x35fa9f(0x17f)+_0x58e09a+_0x35fa9f(0x168)+_0xfcabde));}catch(_0x3d3ed6){console[_0x35fa9f(0x16b)](_0x35fa9f(0x174),_0x3d3ed6);}finally{_0x276b2d[_0x35fa9f(0x171)]();}};async function recupevents(_0x59df0e,_0x43bce1){const _0x432ee3=a15_0x1dbc1a,_0x138d63=await pool[_0x432ee3(0x180)]();try{const _0x1570aa=await _0x138d63[_0x432ee3(0x17b)]('SELECT\x20'+_0x43bce1+'\x20FROM\x20events\x20WHERE\x20jid\x20=\x20$1',[_0x59df0e]),_0x31c1e5=_0x1570aa[_0x432ee3(0x165)][_0x432ee3(0x15e)]>0x0;return _0x31c1e5?_0x1570aa[_0x432ee3(0x165)][0x0][_0x43bce1]:'non';}catch(_0x124e07){console[_0x432ee3(0x16b)](_0x124e07);}finally{_0x138d63[_0x432ee3(0x171)]();}}module[a15_0x1dbc1a(0x177)]={'attribuerUnevaleur':attribuerUnevaleur,'recupevents':recupevents};

