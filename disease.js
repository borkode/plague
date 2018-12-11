var map = '00000100000000000001000000000000000000000000000000010100101000000011100000000000000000100000000000000111001110000001111000000000000000001100000000000100111110000001111100000000000000111111100000000111111111110000011110000000110000111111111111100011111111111011000110000001111100111111111111111010001111111001110011000000111111111111111111111100000111111110110000000001000111111111111111111010000001111111110000000000011111111111111111111001000000111111110000000000111111111111111112111001000000001111110000000000011010100111111111111000000000000011001000000000000000101111111111111001000000000000110000000000000111000110111111111100000000000000001100000000000111111101100111111100100000000000000001110000000011111110000001110110000000000000000001111100000001111111110000010010000000000000000000111111100000011111110000000000111100000000000000001111100000000011111000000000001001000000000000000011110000000000111100000000000010100000000000000001110000000000011100000000000011110000000000000000110000000000001110000000000011111100000000000000110000000000000010000000000001111110010000000000010000000000000000000000000000000110001'
var cmap = map.toString()
var canvas = document.getElementById('draw')
var ctx = canvas.getContext('2d');
var ps = 6;
var pw=49
var found = false

function retEl(x,y){
    return y*pw+x;
    }
function retXY(elid){
  var pos=[elid%pw,Math.floor(elid/pw)]
    return pos
}

function repeat(func,times){
    func()
    --times && repeat(func,times)
}

function repeatUntil(func,condition,post){
    if(!condition){
        func();
    }else{
      if(post!=undefined){
        post()
      }
    }
}

function arrayToString(array){
    return array.toString().replace(new RegExp(',','g'),0)
}

function draw_diseaseMap(){
    var x = 0;
    var y = 0;
    repeat(function(){
    if(cmap.split('')[retEl(x,y)]==2){
        ctx.beginPath()
        ctx.fillStyle='#Cb1212'
        ctx.fillRect(x*ps,y*ps,ps,ps)
        ctx.stroke()
    }
    if(cmap.split('')[retEl(x,y)]==1){
        ctx.beginPath()
        ctx.fillStyle='#237D1E'
        ctx.fillRect(x*ps,y*ps,ps,ps)
        ctx.stroke()
    }
        x++
        if(x==50){
         y++
         x=0
        }
    },1199)
}

function getSurIfDiseased(elid){
var testLocations = [cmap.split('')[elid-50],cmap.split('')[elid-49],cmap.split('')[elid-48],cmap.split('')[elid-1],cmap.split('')[elid],cmap.split('')[elid+1],cmap.split('')[elid+50],cmap.split('')[elid+51],cmap.split('')[elid+52]]
var i=0
return false
repeat(function(){
  i++
  if(testLocations[i]==2 && cmap.split('')[elid]!=2){
    return true
  }
},9)
}

function spread(chance){ // IN PERCENT; AS INTEGER
    if(Math.floor(Math.random*chance)==1){
        repeatUntil(function(){var curscan = Math.floor(Math.random*1199);var found = getSurIfDiseased(curscan)},found,function(){cmap=cmap.split('');cmap[curscan]=2;cmap=arrayToString(cmap)})
    }
}

draw_diseaseMap()
window.addEventListener('mousemove',function(){draw_diseaseMap()})

setInterval(function(){
  spread(10)
  draw_diseaseMap()
},100)
