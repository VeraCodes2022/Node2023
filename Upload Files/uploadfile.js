//Step 1: Create an Upload Form
let http=require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="file-upload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="file-to-upload"><br>');
    res.write('</form>');
    return res.end()

})

// Step 2: Parse the Uploaded File
let formidable=require('formidable');

http.createServer(function (req,res){
    if(req.url=='/file-upload'){
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files){
            res.write('File upload');
            res.end()}

        )
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="file-upload"> <br>')
        res.write('</form>')
        return res.end()
    }
})

//Step 3: Save the File

http.createServer(function (req,res){
    if(req.url=='/file-upload'){
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files){
            let oldpath=files.filetoupload.path;
            let newpath='/Users/vera/Desktop/discover.jpeg'+filestoupload.name;
            fs.rename(oldpath,newpath,function (err){
                if(err)throw err;
                res.write('file upload and moved!');
                res.end();
            })
        })
    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form method="post" enctype="multipart/form-data" action="upload-file">')
        res.write('<input type="file" name="file-upload">')
        res.write('<input type="submit">')
        res.write('</form>');
        return res.end()
    }
})





































