function retEl(x,y){
    return y*26+x;
    }
function retXY(elid){
  var pos=[elid%26,Math.floor(elid/26)]
    return pos
}

function repeat(func,times){
    func()
    --times & repeat(func,times)
}

var canvas = document.getElementById('draw')
var ctx = canvas.getContext('2d');

var mpos = [0,0]
var colors = ['#2DA01E','#237D1E','#2D55BE']

//window.addEventListener('mousemove',function(event){mpos = [event.clientX,event.clientY]
var datastr = "00000000000000000000000000000000000000000000000000000000000100000000000001000000000000000000000000000000000010100101000000011100000000000000000600000000000000000111001110000001111000000000000000006600000000000000100111110000001111100000000000000666666600000000000111111111110000011110000000440000666666666666600000011111111111011000110000004444400666666666666666000010001111111001110011000000444444666666666666666600000000111111110110000000004000444466666666666666060000000001111111110000000000044444446666666666666006000000000111111110000000000444444446666666666666006000000000001111110000000000044040400666666666666000000000000000011001000000000000000606666666666666006000000000000000110000000000000333000660666666666600000000000000000001100000000000333333306600666666600600000000000000000002220000000033333330000006660660000000000000000000002222200000003333333330000060060000000000000000000000222222200000033333330000000000666500000000000000000002222200000000033333000000000006005000000000000000000022220000000000333300000000000050500000000000000000002220000000000033300000000000055550000000000000000000220000000000003330000000000055555500000000000000000220000000000000030000000000005555550000000000000000020000000000000000000000000000000550005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
var x = 0;
var y = 0; 

//});
var y = 0; var x = 0;
repeat(function(){
    repeat(function(){
        setTimeout(function(){
        ctx.beginPath()
        if(datastr.split('')[retEl(x,y)]==0){
            ctx.strokeStyle=colors[2]
        }else{
            if(datastr.split('')[retEl(x,y)]==7){
                ctx.strokeStyle=colors[0]
            }else{
                ctx.strokeStyle=colors[1]
            }}
           
        ctx.moveTo(x*10,y*10)
        ctx.fillRect(x*10,y*10,(x+1)*10,(y+1)*10)
        ctx.stroke(); 
},1);
    },26);
    },52);
