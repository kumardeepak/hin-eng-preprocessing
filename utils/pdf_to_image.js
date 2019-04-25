var fs = require("fs");
var PDFImage = require("pdf-image").PDFImage;

function PdfToImage(file_path) {
    this.file_path = file_path;
}


PdfToImage.convertToImage = function(file_path, cb){
    var pdfImage = new PDFImage(file_path, {
        convertOptions: {
          '-background': 'white',
          '-density': '300',
          '-flatten': ''
        }
      });
      var pageNumber = 0, image_paths = [];
      saveToFile(pageNumber, image_paths, pdfImage, cb)
}

function saveToFile(pageNumber, image_paths, pdfImage, cb){
    pdfImage.convertPage(pageNumber).then(function (imagePath) {
        pageNumber = pageNumber + 1
        saveToFile(pageNumber, image_paths, pdfImage, cb)
        image_paths.push(imagePath)
      }).catch(function (e) {
        pdfImage.combineImages(image_paths).then(function (imagePath) {
          cb(imagePath)
        })
    })
}


module.exports = PdfToImage;