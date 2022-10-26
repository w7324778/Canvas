# Canvas
Canvas-2D
# Canvas-是什么-解决的了什么问题？
Canvas 是为了解决 Web 页面中只能显示静态图片这个问题而提出的，一个可以使用 JavaScript 等脚本语言向其中绘制图像的 HTML 标签。

# 兼容
元素	Chrome	  IE	Firefox	Safari	Opera
Canvas	4.0+	9.0+	2.0+	3.1+	9.0+

# Canvas 和 svg 的区别
svg 本质上是一种使用 XML 描述 2D 图形的语言。
svg 创建的每一个元素都是一个独立的 DOM 元素，既然是独立的 DOM 元素，那么我们就可以通过 css 和 JavaScript 来操控 dom。可以对每一个 DOM 元素进行监听。
并且因为每一个元素都是一个 DOM 元素，所以修改 svg 中的 DOM 元素，系统会自动进行 DOM 重绘。

Canvas 通过 JavaScript 来绘制 2D 图形，Canvas 只是一个 HTML 元素，其中的图形不会单独创建 DOM 元素。因此我们不能通过 JavaScript 操控 Canvas 内单独的图形，不能对其中的具体图形进行监控。
在 Canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

实际上 Canvas 是基于像素的即时模式图形系统，绘制完对象后不保存对象到内存中，当再次需要这个对象时，需要重新绘制；svg 是基于形状的保留模式图形系统，绘制完对象后会将其保存在内存中，当需要修改这个对象信息时，直接修改就可以了。这种根本的区别导致了很多应用场景的不同。

Canvas	                                    svg
依赖分辨率（位图）	                     不依赖分辨率（矢量图）
单个 HTML 元素	                       每一个图形都是一个 DOM 元素
只能通过脚本语言绘制图形	              可以通过 CSS 也可以通过脚本语言绘制
不支持事件处理程序	                     支持事件处理程序
弱的文本渲染能力	                     最适合带有大型渲染区域的应用程序（比如谷歌地图）
图面较小，对象数量较大（>10k）时性能最佳	 对象数量较小 (<10k)、图面更大时性能更佳


方法	                              描述
fill()	                            填充路径
stroke()	                          描边
arc()	                            创建圆弧
rect()	                            创建矩形
fillRect()	                    绘制矩形路径区域
strokeRect()	                绘制矩形路径描边
clearRect()	                在给定的矩形内清除指定的像素
arcTo()	                      创建两切线之间的弧/曲线
beginPath()	                起始一条路径，或重置当前路径
moveTo()	            把路径移动到画布中的指定点，不创建线条
lineTo()	        添加一个新点，然后在画布中创建从该点到最后指定点的线条
closePath()	                创建从当前点回到起始点的路径
clip()	                 从原始画布剪切任意形状和尺寸的区域
quadraticCurveTo()	           创建二次方贝塞尔曲线
bezierCurveTo()	               创建三次方贝塞尔曲线
isPointInPath()	    如果指定的点位于当前路径中，则返回 true，否则返回 false


设置路径样式
属性	                         描述
fillStyle	        设置或返回用于填充绘画的颜色、渐变或模式
strokeStyle	        设置或返回用于笔触的颜色、渐变或模式
shadowColor	        设置或返回用于阴影的颜色
shadowBlur	        设置或返回用于阴影的模糊级别
shadowOffsetX	    设置或返回阴影距形状的水平距离
shadowOffsetY	    设置或返回阴影距形状的垂直距离

设置渐变
方法	                        描述
createLinearGradient()	创建线性渐变（用在画布内容上）
createPattern()	        在指定的方向上重复指定的元素
createRadialGradient()	创建放射状/环形的渐变（用在画布内容上）
addColorStop()	        规定渐变对象中的颜色和停止位置

方法	                 描述
scale()	            缩放当前绘图至更大或更小
rotate()	        旋转当前绘图
translate()	        重新映射画布上的 (0,0) 位置
transform()	        替换绘图的当前转换矩阵
setTransform()	    将当前转换重置为单位矩阵，然后运行 transform()
