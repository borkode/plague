var map = '00000100000000000001000000000000000000000000000000010100101000000011100000000000000000100000000000000111001110000001111000000000000000001100000000000100111110000001111100000000000000111111100000000111111111110000011110000000110000111111111111100011111111111011000110000001111100111111111111111010001111111001110011000000111111111111111111111100000111111110110000000001000111111111111111111010000001111111110000000000011111111111111111111001000000111111110000000000111111111111111111111001000000001111110000000000011010100111111111111000000000000011001000000000000000101111111111111001000000000000110000000000000111000110111111111100000000000000001100000000000111111101100111111100100000000000000001110000000011111110000001110110000000000000000001111100000001111111110000010010000000000000000000111111100000011111110000000000111100000000000000001111100000000011111000000000001001000000000000000011110000000000111100000000000010100000000000000001110000000000011100000000000011110000000000000000110000000000001110000000000011111100000000000000110000000000000010000000000001111110010000000000010000000000000000000000000000000110001'
var infected_areas = []
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
function retSurroundings(id){
  var y = map.split('')
  return [
    y[id-50],y[id-49],y[id-48],
    y[id-1],y[id],y[id+1],
    y[id+48],y[id+49],y[id+50]
  ]
}

function repeat(func,times){
    func()
    --times && repeat(func,times)
}

function arrayToString(array){
    return array.toString().replace(new RegExp(',','g'),'')
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

function spread(){
  var selSpreadID=infected_areas[Math.floor(Math.random()*infected_areas.length)]
  var tSur = arrayToString(retSurroundings(selSpreadID))
  if(tSur.includes('1')){
    var cleanSquares = []
    var i = 0;
    repeat(function(){
      if(retSurroundings(selSpreadID)[i]==1){
        cleanSquares.push(retSurroundings(selSpreadID)[i])
      }
      i++
    },9)
    var cmap=arrayToString(cmap.split('')[cleanSquares.split('')[Math.random()*cleanSquares.length]]=2)
  }
}

setInterval(function(){
  draw_diseaseMap()
  spread()
},1);
