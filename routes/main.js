__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/buy', (req, res) => {
    res.sendFile(__path + '/views/buy.html')
})

router.get('/sosial', (req, res) => {
    res.sendFile(__path + '/docs/sosial.html')
})

router.get('/encript', (req, res) => {
    res.sendFile(__path + '/docs/encript.html')
})

router.get('/images', (req, res) => {
    res.sendFile(__path + '/docs/images.html')
})

router.get('/islamic', (req, res) => {
    res.sendFile(__path + '/docs/islamic.html')
})

router.get('/asupan', (req, res) => {
    res.sendFile(__path + '/docs/asupan.html')
})

router.get('/wibu', (req, res) => {
    res.sendFile(__path + '/docs/wibu.html')
})

router.get('/nsfw', (req, res) => {
    res.sendFile(__path + '/docs/nsfw.html')
})
router.get('/sfw', (req, res) => {
    res.sendFile(__path + '/docs/sfw.html')
})

router.get('/other', (req, res) => {
    res.sendFile(__path + '/docs/other.html')
})

router.get('/maker', (req, res) => {
    res.sendFile(__path + '/docs/maker.html')
})

router.get('/oxy', (req, res) => {
    res.sendFile(__path + '/docs/oxy.html')
})

router.get('/textpro', (req, res) => {
    res.sendFile(__path + '/docs/textpro.html')
})

router.get('/random', (req, res) => {
    res.sendFile(__path + '/docs/random.html')
})

router.get('/search', (req, res) => {
    res.sendFile(__path + '/docs/search.html')
})

router.get('/serti', (req, res) => {
    res.sendFile(__path + '/docs/serti.html')
})

router.get('/kuis', (req, res) => {
    res.sendFile(__path + '/docs/kuis.html')
})

router.get('/news', (req, res) => {
    res.sendFile(__path + '/docs/news.html')
})

router.get('/school', (req, res) => {
    res.sendFile(__path + '/docs/school.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'ZhirrrBot',
            namaowner: 'Zhirrr',
            instagram: 'zhirr_ajalah',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
