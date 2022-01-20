const http = require('http')


const server = http.createServer((req,res) => {
    const url = req.url
    if(url === "/" || url === "/index") {
        res.writeHead(200 , {'Content-type': 'text/html'});
        res.write('<h2>INDEX SAYFASINA HOSGELDINIZ</h2>');
    }
    else if (url === "/hakkimda")
    {
        res.writeHead(200 , {'Content-type': 'text/html'});
        res.write('<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h2>')

    }
    else if (url === "/iletisim") {
        res.writeHead(200 , {'Content-type': 'text/html'});
        res.write('<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>')
    }
    else {
        res.writeHead(404 , {'Content-type': 'text/html'});
        res.write('<h2>404 SAYFA BULUNAMADI</h2>')
    }
    console.log(url)
    res.end()
})

const port = 5000

server.listen(port,()=> {
    console.log(`Sunucu ${port} numarasında başlatıldı.`)
})