const player = require('play-sound')(opts = {})
const clear = require('clear');
const asciify = require('asciify-image');
const chalkAnimation = require('chalk-animation');
const align = require('align-text');
const emoji = require('node-emoji')
const qoute = `
Kemerdekaan ini tidaklah didapat dengan mudah.
Kemerdekaan ini bukanlah sebuah hadiah dari penjajah secara cuma-cuma. 
Kemerdekaan indonesia adalah sebuah bukti bahwa perjuangan 
tidak akan mengkhianati hasil yang di dapat. 
Kemerdekaan indonesia adalah saksi bahwa menyerah 
hanya untuk orang-orang yang jiwanya kalah. 
Semoga indonesia selalu merdeka. 
Dirgahayu Republik indonesia.


Made with️ ❤ NIM4N | <nim4n136@gmail.com>`;

exports.lestGoIndonesia  = function(){
  clear();
  console.log(align( "\n"+emoji.get("flag-id")+" | Dirgahayu Republik indonesia Ke-74 | " + emoji.get("flag-id")+"\n",4));
  var options = {
    fit:    'box',
    width:  40,
    height: 20
  }
  asciify(__dirname+'/benderaku.png', options, function (err, asciified) {
    if (err) throw err;
    console.log(asciified);
    chalkAnimation.pulse(align('\nSelamat! Hari Kemerdekaan Ke-74\n------------------------------------'+qoute,4),2);
  });

  player.play(__dirname+'/indonesia.mp3', function(err){
    if (err) throw err
  })

}