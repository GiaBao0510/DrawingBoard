var canvas =document.querySelector('#canvas');
var ctx =canvas.getContext('2d');
var xlim = window.height,
    ylim = window.width;

window.addEventListener('load',() => {
    //1.Biến hỗ trợ
    let painting = false;
    //2.Thay đổi kích cỡ
    canvas.height =window.innerHeight;
    canvas.width =window.innerWidth;
    //3.Cập nhật thuộc tính
    ctx.lineWidth=7;
    ctx.lineCap = "round";
    ctx.strokeStyle='black';
    //4.Các hàm
    function startPosition(x){
        painting = true;
        draw(x);
    }
    function endPosition(){
        painting = false;
        ctx.beginPath();//Đặt lại
    }
    function draw(e){
        if(!painting) return;//Nếu painting khác false thì ngừng
        ctx.lineTo(e.clientX , e.clientY);
        ctx.stroke();//vẽ
        ctx.beginPath();//Đặt lại
        ctx.moveTo(e.clientX , e.clientY);
    }
    //5.Thêm bắt sự kiện
    canvas.addEventListener('mousedown',startPosition);
    canvas.addEventListener('mouseup',endPosition);
    canvas.addEventListener("mousemove",draw);
});
//Tra ve mau
function maudo(){
    ctx.strokeStyle='red';
}
function maucam(){
    ctx.strokeStyle='orangered';
}
function mauvang(){
    ctx.strokeStyle='yellow';
}
function mauxanhla(){
    ctx.strokeStyle='green';
}
function mauxanhduong(){
    ctx.strokeStyle='blue';
}
function mauden(){
    ctx.strokeStyle='black';
}
function mautrang(){
    ctx.strokeStyle='white';
}
function mautim(){
    ctx.strokeStyle='blueviolet';
}
function mautuychon(){
    let mtc =document.getElementById('tuyChonMau').value;
    ctx.strokeStyle=mtc;
}
//Dụng cụ bút vẽ - gơm
function butthuong(){
    ctx.lineWidth=7;
    ctx.strokeStyle='black';
    ctx.lineCap = "round";
}
function butchi(){
    ctx.lineWidth=6;
    ctx.strokeStyle='rgb(24, 23, 22)';
    ctx.lineCap = "round";
}
function butbi(){
    ctx.lineWidth=3;
    ctx.strokeStyle='darkblue';
    ctx.lineCap = "round";
}
function butmuc(){
    ctx.lineWidth=5;
    ctx.strokeStyle='blue';
    ctx.lineCap = "round";
}
function butke(){
    ctx.lineWidth=8;
    ctx.strokeStyle='black';
    ctx.lineCap = "square";
}
function cucgom(){
    let gom = document.getElementById('cucGom').value;
    ctx.lineWidth=gom;
    ctx.strokeStyle='white';
    ctx.lineCap = "round";
}
//Nut du lieu
function reset(){
    // confirm("Bạn muốn xóa bài vẽ của bạn chứ ?");
    // if(true){
        
    // }
    ctx.clearRect(0,0,xlim,ylim);
}