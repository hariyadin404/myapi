__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("jepribarus");
} catch (e) {
	console.log('')
}

var creatorList = ['Jepri-Barus'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];
var vhtear = 'Tebingtinggi123'
var xteam = 'AkiraBotWa'
var leys = 'OneDayOneCharity'
const listkey = ["bangjep", "pangkal"];

var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();
var { exec } = require('child_process')
var fs = require('fs')

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'apikey not found !!!'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey not found !!!'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'SEDANG MAINTENANCE !!!'
    }
}

var error = __path + '/views/error.html'
var invalidKey = __path + '/views/invalidKey.html'

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------jepribarus'+'jepri-gans';

router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        const Apikey = req.query.apikey;
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/anony', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/anony.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/joker', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/joker.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/hijaber', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/cecans', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/cogans', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=cowokganteng`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/harley', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/harley.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cekapikey', async(req, res, next) => {
  const apikey = req.query.apikey;
  if(!apikey) return res.sendFile(invalidKey)
  if(listkey.includes(apikey)) {
    res.json({
      status: 'active',
      creator: `${creator}`,
      apikey: `${apikey}`,
      message: 'apikey active'
    })
  } else {
    res.sendFile(invalidKey)
  }
})

router.get('/muslim/niatshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/muslim/wirid', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/muslim/ayatkursi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/muslim/doaharian', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/muslim/jadwalshalat', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://api.xteam.xyz/jadwalsholat?kota=${kota}&APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 kota: data.kota,
                 tanggal: data.Tanggal,
                 subuh: data.Subuh,
                 zuhur: data.Dzuhur,
                 ashar: data.Ashar,
                 magrib: data.Magrib,
                 isya: data.Isha,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get("/kisahnabi", (req, res) => {
    const nabi = req.query.nabi;
    const apikey = req.query.apikey;
    
    if(!nabi) return res.send(loghandler.notquery)
    if(!apikey) return res.send(loghandler.notparam)
    if(listkey.includes(apikey)){
    Searchnabi(nabi)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.send(error);
        });
      } else {
      res.send(loghandler.invalidKey)
      }
});

router.get('/asupan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/rikagusriani', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/asupan/santuy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ukty', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/bocil', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ghea', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/ass', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/ahegao', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/bdsm', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/blowjob', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/cuckold', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/cum', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/ero', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/femdom', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/foot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/gangbang', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/glasses', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/hentai', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/hentaigif', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/jahy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/masturbation', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/neko', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/orgy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/panties', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/pussy', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/thighs', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nsfw/yuri', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/tolol', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://tolol.ibnux.com/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/kodepos', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kode pos"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/chord', async (req, res, next) => {
        var Apikey = req.query.apikey,
            judul = req.query.judul
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/chord?q=${judul}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/text/alay', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://api.terhambar.com/bpk?kata=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cerpen', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/cerpen?key=Kagami`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 cerita: data.result.ceritanya,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cersex', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/cersex?key=Kagami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 judul: data.title,
                 category: data.category,
                 image: data.image,
                 cerita: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/infogempa', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/gempa?key=Kagami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/infocuaca', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://api.xteam.xyz/cuaca?kota=${kota}&APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
        var result = data.message;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/font', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/font2?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/font2', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/font?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caklontong', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/kuis/main/caklontong.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tebakan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`http://dt-04.herokuapp.com/api/tebak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 soal: data.pertanyaan,
                 jawaban: data.jawaban,
                 penjelasan: data.jawaban_full,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tebak/bendera', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/kuis/tebakbendera.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/family100', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/kuis/main/family100.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tebakgambar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/kuis/main/tebakgambar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ytmp4', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/ytv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 judul: data.title,
                 size: data.filesize,
                 resolution: data.resolution,
                 thumb: data.thumb,
                 url_video: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ytmp3', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/yta?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 judul: data.title,
                 size: data.filesize,
                 file: data.ext,
                 thumb: data.thumb,
                 url_audio: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ytmp4/2', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/ytvideo?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 judul: data.result.title,
                 viewer: data.result.viewer,
                 desc: data.result.desc,
                 thumb: data.result.album,
                 url_video: data.result.download_video,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ytmp3/2', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/ytaudio?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 judul: data.result.title,
                 viewer: data.result.viewer,
                 desc: data.result.desc,
                 thumb: data.result.album,
                 url_video: data.result.download_audio,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/play/mp3', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.zeks.xyz/api/ytplaymp3?apikey=apivinz&q=${query}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/play/mp4', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${query}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/Instagram/stalk', async (req, res, next) => {
        var Apikey = req.query.apikey,
            username = req.query.username
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://mhankbarbar.herokuapp.com/api/stalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 Username: data.Username,
                 Nama: data.Name,
                 Diikuti: data.Jumlah_Following,
                 Mengikuti: data.Jumlah_Followers,
                 Postingan: data.Jumlah_Post,
                 Pict: data.Profile_pic,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/igdl/video', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://videfikri.com/api/igdl/?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 username: data.result.username,
                 comment: data.result.comment,
                 like: data.result.likes,
                 caption: data.result.caption,
                 thumb: data.result.thumb,
                 url: data.result.video,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/fb/download', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 judul: data.title,
                 url_video: data.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/yt/search', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://videfikri.com/api/ytsearch/?query=${search}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result.data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tiktok/dl', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://api.vhtear.com/tiktok_no_wm?link=${url}&apikey=${vhtear}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url_video: data.result.video,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/github/stalk', async (req, res, next) => {
        var Apikey = req.query.apikey,
            username = req.query.username
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/githubstalk?username=${username}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 follower: data.result.follower,
                 following: data.result.following,
                 location: data.result.location,
                 bio: data.result.bio,
                 type: data.result.Type,
                 public_repo: data.result.public_repo,
                 public_gists: data.result.public_gists,
                 avatar: data.result.avatar,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/twitter/stalk', async (req, res, next) => {
        var Apikey = req.query.apikey,
            username = req.query.username
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://videfikri.com/api/stalktwit/?username=${username}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 nama: data.result.full_name,
                 username: data.result.username,
                 followers: data.result.followers,
                 following: data.result.following,
                 twitt: data.result.tweets,
                 img_profile: data.result.profile,
                 verified: data.result.verified,
                 listed_count: data.result.listed_count,
                 favourites: data.result.favourites,
                 img_banner: data.result.profile_banner,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/joox', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://mnazria.herokuapp.com/api/jooxnich?search=${search}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 title: data.result.malbum,
                 thumb: data.result.album_url,
                 artist: data.result.msinger,
                 url_mp3: data.result.mp3Url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/download/twitter', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://zekais-api.herokuapp.com/twtdl?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 type: data.type,
                 url_mp4: data.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/mediafire', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://zekais-api.herokuapp.com/mediafire?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 name: data.result.name,
                 type: data.result.mimetype,
                 size: data.result.size,
                 url_file: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tinyurl', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/tinyurl?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 url: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/bitly', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/bitly?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 url: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/shorturl', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/shorturl?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 url: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cuttly', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`http://hadi-api.herokuapp.com/api/cuttly?url=${url}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 url: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/smule', async (req, res, next) => {
        var Apikey = req.query.apikey,
            url = req.query.url
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})

       fetch(encodeURI(`https://api.xteam.xyz/dl/smule?url=${url}&APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
             result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/playstore', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.vhtear.com/playstore?query=${query}&apikey=${vhtear}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
             result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wikipedia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wiki?query=${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/brainly', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.xteam.xyz/brainly?soal=${query}&APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 soal: data.soal,
                 jawaban: data.jawaban,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/kbbi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            q = req.query.q
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${q}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 lema: data.lema,
                 arti: data.arti,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/artinama', async (req, res, next) => {
        var Apikey = req.query.apikey,
            nama = req.query.nama
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/artinama?nama=${nama}&key=Kagami`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 arti: data.result.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/artimimpi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            mimpi = req.query.mimpi
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!mimpi) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter mimpi"})

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/artimimpi?query=${mimpi}&key=Kagami`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 arti: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/jam/dunia', async (req, res, next) => {
        var Apikey = req.query.apikey,
            kota = req.query.kota
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://rest.farzain.com/api/jam.php?id=${kota}&apikey=t7qIB3bmk2Uo8628BRgQjf8WN`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 date: data.date,
                 time: data.time,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/jadwal/tv', async (req, res, next) => {
        var Apikey = req.query.apikey,
            chanel = req.query.chanel
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!chanel) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel tv"})

       fetch(encodeURI(`https://api.zeks.xyz/api/jadwaltv?channel=${chanel}&apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cinta/segitiga', async (req, res, next) => {
        var Apikey = req.query.apikey,
            nama1 = req.query.nama1
            nama2 = req.query.nama2
            nama3 = req.query.nama3
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!nama1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama1"})
        if(!nama2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama2"})
        if(!nama3) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama3"})

       fetch(encodeURI(`https://rest.farzain.com/api/jodoh.php?id=${nama1}-${nama2}-${nama3}&apikey=t7qIB3bmk2Uo8628BRgQjf8WN`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/pinterest', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=${query}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/gambar/google', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=${query}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/biografi', async (req, res, next) => {
        var Apikey = req.query.apikey,
            tokoh = req.query.tokoh
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!tokoh) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tokoh"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/wiki?query=${tokoh}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cek/ip', async (req, res, next) => {
        var Apikey = req.query.apikey,
            ip = req.query.ip
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!ip) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ip"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/iplookup?ip=${ip}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 country: data.result.country,
                 region: data.result.regionName,
                 city: data.result.city,
                 isp: data.result.isp,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/hilih', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/hilih?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/halah', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/halah?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/heleh', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/heleh?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/huluh', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/huluh?teks=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/bucin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/bucin?key=Kagami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/motivasi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/motivasi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/quote/anime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/qanime?key=Kagami`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 quotes: data.result.quote,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/quote/gambar', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://python-jepri.herokuapp.com/api/qanimegr?key=Kagami`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.quote,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/quote/bijak', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/bijak.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/quote/joker', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/joker.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/quote/islami', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/agamis.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/pantun', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/pantun.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/dare', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/dare.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/truth/aneh', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/truhtaneh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/trut', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/kalakkaro/random/main/quetes/truht.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caption/dilan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 dilan: data.result,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caption/doi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caption/doraemon', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xptnewapi.000webhostapp.com/newapixptn/katadoraemon.php?apikey=xptn3`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caption/hits', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xptnewapi.000webhostapp.com/newapixptn/kataeren.php?apikey=xptn3`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caption/hacker', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/caption', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/quran', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.banghasan.com/quran/format/json/acak`))
        .then(response => response.json())
        .then(data => {
        var result = data.acak;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/cup', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/senja?text=${text}&theme=coffee-cup&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/cup2', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/senja?text=${text}&theme=coffee-cup2&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/glitch', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            text2 = req.query.text2
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})
        if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text2"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker?text=${text}&text2=${text2}&theme=glitch&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/google', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            text2 = req.query.text2
            text3 = req.query.text3
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})
        if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text2"})
        if(!text3) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text3"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker?text=${text}&text2=${text2}&text3=${text3}&theme=google-suggestion&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/pubg', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            text2 = req.query.text2
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})
        if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text2"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/game?text=${text}&text2=${text2}&theme=pubg&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/battlefield', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            text2 = req.query.text2
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})
        if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text2"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/game?text=${text}&text2=${text2}&theme=battlefield&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/neon', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/metallic?text=${text}&theme=neon&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/glow', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/metallic?text=${text}&theme=glow&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/summer', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/alam?text=${text}&theme=summer&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/flower', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/alam?text=${text}&theme=flower&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/burn', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/random?text=${text}&theme=text-burn&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/art', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/random?text=${text}&theme=art-quote&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/wooden', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/roses?text=${text}&theme=wooden-boarch&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/golden', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/roses?text=${text}&theme=golden&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/langit', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/barus?text=${text}&theme=langit&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/pot', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/barus?text=${text}&theme=pot&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/romantic', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/apasih?text=${text}&theme=romantic&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/love', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/oaja?text=${text}&theme=love-message&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/under', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/oaja?text=${text}&theme=under-grass&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/wolf', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/ktl?text=${text}&theme=wolf-metal&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/water', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/ktl?text=${text}&theme=underwater-ocean&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/rainbow', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/dugem?text=${text}&theme=glow-rainbow&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/night', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/asw?text=${text}&theme=night-sky&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/fire', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/asw?text=${text}&theme=flaming-text&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/harry', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/ngewe?text=${text}&theme=harry-potter&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/horor', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/ngewe?text=${text}&theme=horor&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/smoke', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/tete?text=${text}&theme=smoke&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/photooxy/between', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel text"})

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/textmaker/tete?text=${text}&theme=between-royal&apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 url: data.result.url,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/blueneon', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/matrix', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/dropwater', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/wolflogo', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${text}&text2=${text2}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/blackpink', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/logobp?text=${text}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/gold', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/gplaybutton?text=${text}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/silver', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/splaybutton?text=${text}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/pasir4', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/text3d', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/pornhub', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.zeks.xyz/api/phlogo?text1=${text}&text2=${text2}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/marvel', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.zeks.xyz/api/marvellogo?text1=${text}&text2=${text2}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/light', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/tlight?text=${text}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/neon', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/neon?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/cloud', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/cloudtext?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/gradient', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/3dgradient?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/vintage', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.xteam.xyz/textpro/realisticvintage?text=${text}&text2=${text2}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/pasir2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/sandsummerbeach?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/pasir3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/sandwriting?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/pasir', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/summerysandwriting?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/1997', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/1917?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/minion', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/minion3d?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/helloween', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/helloweenfire?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/joker', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/textpro/jokerlogo?text=${text}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/lion', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	text2 = req.query.text2
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})
  
      hasil = (`https://api.xteam.xyz/textpro/lionlogomascot?text=${text}&text2=${text2}&APIKEY=${xteam}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/party', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.vhtear.com/partytext?text=${text}&apikey=${vhtear}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/glass', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.vhtear.com/wetglass?text=${text}&apikey=${vhtear}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/textpro/grafity', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.vhtear.com/cartoon_graffiti?text=${text}&apikey=${vhtear}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/ff', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/FFSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/ff2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/FFSerti3/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/ff3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/FFSerti5/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/ml', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/ml2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/ml3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/pubg', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/pubg2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/pubg3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nulis2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    nama = req.query.nama
	kelas = req.query.kelas
	text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
  if(!kelas) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kelas"})
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${text}&tinta=1&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nulis', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/nulis?text=${text}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nulis3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://zekais-api.herokuapp.com/foliokiri?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nulis4', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://zekais-api.herokuapp.com/bukukanan?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tahta', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/hartatahta?text=${text}&apikey=apivinz`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tahta2', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://zekais-api.herokuapp.com/hartatahta?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tahta3', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.vhtear.com/hartatahta?text=${text}&apikey=${vhtear}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tahta4', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${text}&apikey=${leys}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/ttp', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/ttp?file&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/attp', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.xteam.xyz/attp?file&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/text/naruto', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://hadi-api.herokuapp.com/api/photoxy/manga-naruto?teks=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/slot', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.xteam.xyz/game/virtualslot?APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 slot: data.map,
                 hasil: data.hasil,
                 score: data.score,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tebak/huruf', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=${leys}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/suit', async (req, res, next) => {
        var Apikey = req.query.apikey,
            q = req.query.q
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!q) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter chanel query"})

       fetch(encodeURI(`https://api.xteam.xyz/game/suit?q=batu&APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 hasil: data.hasil,
                 jawabanmu: data.jawabanmu,
                 jawabanbot: data.jawabanbot,
                 point: data.poin,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/qkode', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/berkode', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cari/film', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/film/terbaru', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tvseries', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/dewabatch', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/dewabatch?q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/stiker/wa', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/baca/komik', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://api.zeks.xyz/api/bacakomik?apikey=apivinz&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/mod/app', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/shopee', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.data;
        var result = data.data[Math.floor(Math.random() * data.data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/gsm/arena', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://api.zeks.xyz/api/gsmArena?apikey=apivinz&q=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data.data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/news/kompas', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/kompas`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/news/detik', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://hadi-api.herokuapp.com/api/detik`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tribunews', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/liputan6', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/foxnews', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data.result[Math.floor(Math.random() * data.result.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/covid/indo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.kawalcorona.com/indonesia/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/covid/dunia', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://photooxy.herokuapp.com/api/covidworld?apikey=kangdev`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 kasus: data.result.totalCases,
                 sembuh: data.result.recovered,
                 meninggal: data.result.deaths,
                 update: data.result.lastUpdate,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/encode/base32', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://ostch.herokuapp.com/api/v1/base32?encode=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/base64', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})

       fetch(encodeURI(`https://ostch.herokuapp.com/api/v1/base64?encode=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/aesthetic', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/melancans/aesthetic/main/aesthetic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/bakarnama', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://zekais-api.herokuapp.com/sbburn?text=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/waifu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/waifu`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nekonime', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/neko`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/shinobu', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/shinobu`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/megumin', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/megumin`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/bully', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/bully`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/cuddle', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/cuddle`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/cry', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/cry`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/hug', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/hug`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/kiss', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/kiss`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/pat', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/pat`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/lick', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/lick`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/smug', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/smug`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/bonk', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/bonk`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/yeet', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/yeet`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/smile', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/smile`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/slap', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/slap`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/sfw/dance', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.waifu.pics/sfw/dance`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/loli', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime loli`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/akira', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime akira`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/zerotwo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime zerotwo`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/kurumi', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime kurumi`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/miku', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime miku`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/naruto', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime naruto`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/minato', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime naruto`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/hinata', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime hinata`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/sasuke', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime sasuke`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/chika', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime chika`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/kaneki', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime kaneki`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/touka', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime touka`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/rize', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime rize`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/onichan', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=anime onichan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wibu/squidward', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=squidward`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/haram', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/babu', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/BabuSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/bucin', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/BucinSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/gay', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/GaySerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/pacar', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/PacarSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/sadboy', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/SadBoySerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/serti/surga', async (req, res, next) => {
	var Apikey = req.query.apikey,
	    text = req.query.text
	
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
  if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
  
      hasil = (`http://rzky.net/docs/api/SurgaSerti/img.php?nama=${text}`)
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync('tolol.png', data)
        res.sendFile(__path+'/tolol.png')
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/jadwaltv/now', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/fake/data', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/fake_identity`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wattpad', async (req, res, next) => {
        var Apikey = req.query.apikey,
            search = req.query.search
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/wattpad_search?q=${search}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/translate', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            from = req.query.from
            to = req.query.to
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
        if(!from) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter from"})
        if(!to) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter to"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/translate?text=${text}&from=${from}&to=${to}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 from: data.from,
                 original: data.original_text,
                 to: data.to,
                 hasil: data.translated_text,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/tanggal/jadian', async (req, res, next) => {
        var Apikey = req.query.apikey,
            tgl = req.query.tgl
            bln = req.query.bln
            thn = req.query.thn
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!tgl) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tanggal"})
        if(!bln) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bulan"})
        if(!thn) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/tanggal_jadian?tgl=${tgl}&bln=${bln}&thn=${thn}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/neon2', async (req, res, next) => {
        var Apikey = req.query.apikey,
            text = req.query.text
            text2 = req.query.text2
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
        if(!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/neon_writing?text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/jurnalotaku', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/jurnalotaku_search?q=${query}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/nama/ninja', async (req, res, next) => {
        var Apikey = req.query.apikey,
            nama = req.query.nama
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})

       fetch(encodeURI(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${nama}`))
        .then(response => response.json())
        .then(data => {
             var result = data;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/meme/indo', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/darkjokes', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/soundcloud', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.xteam.xyz/dl/soundcloud?url=https://soundcloud.com/nvl-sounds/${query}&APIKEY=${xteam}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 thumb: data.result.img,
                 to: data.result,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/kalkulator', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.vhtear.com/calculator?value=${query}&apikey=${vhtear}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 hasil: data.result.data,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/lirik', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.vhtear.com/liriklagu?query=${query}&apikey=${vhtear}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result.result;
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/zodiak', async (req, res, next) => {
        var Apikey = req.query.apikey,
            query = req.query.query
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){
        if(!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://api.vhtear.com/zodiak?query=${query}&apikey=${vhtear}`))
        .then(response => response.json())
        .then(data => {
             var result = data.result;
             res.json({
             	creator: `${creator}`,
                 ramalan: data.result.ramalan,
                 nomorhoki: data.result.nomorKeberuntungan,
                 motivasi: data.result.motivasi,
                 inspirasi: data.result.inspirasi,
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/blackpink', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=blackpink`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/wallpaper/bts', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://api.fdci.se/rep.php?gambar=bts`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/cewek/racing', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/melancans/aesthetic/main/racing.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

router.get('/chobay', async (req, res, next) => {
        var Apikey = req.query.apikey
            
	if(!Apikey) return res.sendFile(invalidKey)
	if(listkey.includes(Apikey)){

       fetch(encodeURI(`https://raw.githubusercontent.com/melancans/aesthetic/main/Oh/oh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator: `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.sendFile(error)
})
} else {
res.sendFile(invalidKey)
}
})

module.exports = router
