import './index.css'
//创建一个圆
let canvas = document.getElementById('canvas')
let context = canvas.getContext("2d")
context.beginPath() // 起始一条路径，或重置当前路径
context.arc(100,100,50,0,Math.PI*2,true) // 创建弧/曲线
context.closePath();  // 创建从当前点回到起始点的路径
context.fillStyle = 'rgb(255, 255, 255)' // 设置或返回用于填充绘画的颜色、渐变或模式
context.fill()  // 填充当前绘图（路径）

//创建一个点，可以在一个画布上绘制多个图
context.beginPath();
//arc 前面2个参数是平移 图像大小
context.arc(250, 250, 1, 0, Math.PI * 2, true);
context.closePath();
context.fillStyle = 'rgb(255,255,255)';
context.fill();

// 创建一个四分之一圆

context.beginPath();
//arc 前面2个参数是平移 图像大小
context.arc(150, 100, 50, 0, Math.PI * 0.5, false);
context.strokeStyle="white";//设置描边颜色
context.stroke();//描边

//绘制一条直线 如果没有 moveTo，那么第一次 lineTo 的就视为 moveTo，每次 lineTo 后如果没有 moveTo，那么下次 lineTo 的开始点为前一次 lineTo 的结束点。
context.beginPath();
context.moveTo(300,300);//把路径移动到画布中的指定点，不创建线条
context.lineTo(400,400);//添加一个新点，然后在画布中创建从该点到最后指定点的线条
context.lineWidth = 10; //设置或返回当前的线条宽度
context.lineCap = 'round';//设置或返回线条的结束端点样式
context.strokeStyle = '#fff';
context.stroke();

// context.beginPath();
// context.lineTo(400, 400);
// context.lineTo(200, 100);
// context.lineTo(100,50);
// context.strokeStyle = '#fff';
// context.stroke();


// 绘制矩形
context.beginPath();
context.fillStyle = '#fff';
context.fillRect(100, 100, 100, 100); //fillRect(x,y,width,height)：绘制一个实心矩形 


context.strokeStyle = '#fff';
context.strokeRect(130, 10, 100, 100);// strokeRect(x,y,width,height)：绘制一个空心矩形
//阴影
// context.beginPath();
// context.arc(100,100,50,0,2*Math.PI,false);
// context.fillStyle = '#fff';
// context.shadowBlur = 50;
// context.shadowColor = 'red';
// context.fill()

//渐变 createLinearGradient() 的参数是两个点的坐标，这两个点的连线实际上就是渐变的方向。我们可以使用 addColorStop() 方法来设置渐变的颜色。
var grd = context.createLinearGradient(100,100,100,200);
// x0：开始渐变的 x 坐标
// y0：开始渐变的 y 坐标
// x1：结束渐变的 x 坐标
// y1：结束渐变的 y 坐标

//gradient.addColorStop(stop,color):
//stop：介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
//color：在结束位置显示的 CSS 颜色值
grd.addColorStop(0,'pink');
grd.addColorStop(1,'white');

context.fillStyle = grd;
context.fillRect(100,100,200,200);

//设置多点颜色
var grd = context.createLinearGradient(0,0,0,400);
    grd.addColorStop(0,'rgb(255, 0, 0)');
    grd.addColorStop(0.2,'rgb(255, 165, 0)');
    grd.addColorStop(0.3,'rgb(255, 255, 0)');
    grd.addColorStop(0.5,'rgb(0, 255, 0)');
    grd.addColorStop(0.7,'rgb(0, 127, 255)');
    grd.addColorStop(0.9,'rgb(0, 0, 255)');
    grd.addColorStop(1,'rgb(139, 0, 255)');

    context.fillStyle = grd;
    context.fillRect(0,0,400,400);
//图形转换

context.strokeStyle = 'white';
context.strokeRect(20,5,50,25);
//可以看到，在设置 scale() 方法之后再设置的矩形，无论是线条的宽度还是坐标的位置，都被放大了。并且 scale() 的效果是可以叠加的，也就是说，我们在上面的例子中使用了两次 scale(2,2) 那么，最后一个矩形相对于第一个矩形长和宽，以及坐标的位置就放大了 4 倍。
context.scale(2,2);
context.strokeRect(5,5,50,25);
context.scale(2,2);
context.strokeRect(5,5,50,25);
//旋转  angle : 旋转角度，以弧度计。 如需将角度转换为弧度，请使用 degrees*Math.PI/180 公式进行计算。 举例：如需旋转 5 度，可规定下面的公式：5*Math.PI/180。
// 通过上述两个例子，我们会发现一个特点，在进行图形变换的时候，我们需要画布旋转，然后再绘制图形。

// 这样的结果是，我们使用的图形变换的方法都是作用在画布上的，既然对画布进行了变换，那么在接下来绘制的图形都会变换。这点是需要注意的。

// 比如我对画布使用了 rotate(20*Math.PI/180) 方法，就是将画布旋转了 20°，然后之后绘制的图形都会旋转 20°。
context.fillStyle = 'white';
context.rotate(20*Math.PI/180);
context.fillRect(70,30,200,100);
//图像绘制
//Canvas 还有一个经常用的方法是drawImage()
// drawImage()	向画布上绘制图像、画布或视频
// ontext.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
//img：规定要使用的图像、画布或视频
//sx：可选。开始剪切的 x 坐标位置
//sy：可选。开始剪切的 y 坐标位置
//swidth：可选。被剪切图像的宽度
//sheight：可选。被剪切图像的高度
//x：在画布上放置图像的 x 坐标位置
//y：在画布上放置图像的 y 坐标位置
//width：可选。要使用的图像的宽度（伸展或缩小图像）
//height：可选。要使用的图像的高度（伸展或缩小图像）


//canvas.getContext(contextType, contextAttributes)
// 上下文类型（contextType）：
// 2d（本小册所有的示例都是 2d 的）：代表一个二维渲染上下文
// webgl（或"experimental-webgl"）：代表一个三维渲染上下文
// webgl2（或"experimental-webgl2"）：代表一个三维渲染上下文；这种情况下只能在浏览器中实现 WebGL 版本2 (OpenGL ES 3.0)。

// context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// x：圆心的 x 坐标
// y：圆心的 y 坐标
// r：圆的半径
// sAngle：起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
// eAngle：结束角，以弧度计
// counterclockwise：可选。规定应该逆时针还是顺时针绘图。false 为顺时针，true 为逆时针

//JS设置宽高
// let cx = canvas.width = 400;
// let cy = canvas.height = 400;

// Canvas 绘制图像的步骤：
//开始一个路径(beginPath)->绘制路径(arc)->关闭路径(closePath)->设置填充颜色或描边颜色->填充颜色或描边