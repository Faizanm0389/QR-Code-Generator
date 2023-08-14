import inquirer from 'inquirer';
import qr from "qr-image";


inquirer
  .prompt([
    {"message": "Your URL here: ", name:"URL"}
  ])
  .then((answers) => {
    let url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require('fs').createWriteStream('URL_QR_img1'));
  })
