//地址点击选中

		var mainA=document.querySelectorAll(".main ul a") //设为默认 编辑 删除
		var mainM=document.querySelectorAll(".main ul li:nth-child(2) a:nth-child(3)")//设为默认
		var mainU=document.querySelectorAll(".main ul")//六个地址
		var more=document.querySelector(".wrap>a")//显示更多
		var empty=document.querySelector(".main>span")//没有地址
		var onemo=document.querySelector(".main ul li:nth-child(2) a:nth-child(3)")//第一个默认
		var allid=document.querySelector(".main")//
		var mainUu=document.querySelector(".main ul")
		var he=window.getComputedStyle(mainUu).height
		var h=parseFloat(he)//ul高
		var qipao=document.querySelectorAll(".qipao")

		//默认样式
		for(var i=0;i<qipao.length;i++){
			qipao[i].style.display="none"
		}
		empty.style.display="none"

		onemo.style.backgroundColor="hotpink";
		onemo.style.width="100px"
		onemo.style.lineHeight="36px"
		onemo.style.color="#fff"
		onemo.style.fontSize="14px"
		onemo.innerHTML="默认"
		onemo.style.textAlign="center"




		
		for(var i=0;i<mainA.length;i++){
		mainA[i].onclick=function(event){
			event.preventDefault();
			event.stopPropagation();	
			for(var j=0;j<mainM.length;j++){
				
			 	mainM[j].style.backgroundColor="#fff";
			 	mainM[j].innerHTML="设为默认"
        mainM[j].style.color="#000"
			}
			if(this.innerHTML==="设为默认"){
			this.style.backgroundColor="hotpink";
			this.style.width="100px"
			this.style.lineHeight="36px"
			this.style.color="#fff"
			this.style.fontSize="14px"
			this.innerHTML="默认"
			this.style.textAlign="center"
			}else if(this.innerHTML==="删除"){
				var qi=this.parentNode.querySelector(".qipao")
				console.log(qi)
				qi.style.display="block"
				var aall=qi.querySelectorAll("a")
				for(var x=0;x<aall.length;x++){
					aall[x].onclick=function (e){
						e.preventDefault()
						if(this.innerHTML=="不删除"){
							this.parentNode.style.display="none"
						}else if(this.innerHTML=="确定删除"){
							this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode)

							mainU=document.querySelectorAll(".main ul")
        if(mainU.length<3){
					more.style.display="none"
					
        }
        if(mainU.length<1){
						empty.style.display="block"
					} 
				if(more.innerHTML=="收起"){
					var n=document.querySelectorAll(".main ul").length
				allid.style.height=52+h*n+"px"
				if(52+h*n < 355){
					allid.style.height="355px"
				}
				}
				
						}
					}
				}
        
			}

		}
	}


	//显示更多
	
	allid.style.height="355px"
	more.onclick=function(){
		if(more.innerHTML=="显示更多"){
			var n=document.querySelectorAll(".main ul").length//ul数量
			more.innerHTML="收起"
			allid.style.height=52+h*n+"px"
		}else{
			allid.style.height="355px"
			more.innerHTML="显示更多"
		}
	}











var ul=document.querySelectorAll(".main ul")





//提交订单
var mainF=document.querySelectorAll(".mainminf .one")//方式第一张图
var mainT=document.querySelectorAll(".two")//发票第一张图
var mainY=document.querySelectorAll(".three")//方式第二张图

//支付方式   物流方式
for(var i=0;i<mainY.length;i++){
		mainY[i].style.display="block"
		mainY[i].onclick=function(){
		this.style.display="none"
		this.parentNode.querySelector(".one").style.display="block"
		}
}
for(var i=0;i<mainF.length;i++){
	mainF[i].onclick=function(){
		this.parentNode.querySelector(".three").style.display="block"	
	    }
}


//开不开发票
document.querySelector(".two").style.border="3px solid #fcd901"
    for(var i=0;i<mainT.length;i++){
    	mainT[i].onclick=function(){
    		for(var j=0;j<mainT.length;j++){
    			mainT[j].style.border=""
    		}
    		this.style.border="3px solid #fcd901"
    		if(this.innerHTML==="不开发票"){
    			document.querySelector(".four").style.display="none"
    			document.querySelector("input").style.display="none"
    		}else{
    			document.querySelector(".four").style.display="block"
    			document.querySelector("input").style.display="block"
    		}
    	}
    }
    document.querySelector(".tijiao").onclick=function(event){
    	event.preventDefault();
    	document.querySelector(".mainmind").style.display="block"
    }




//订单跳转
var bu=document.querySelector(".ti")
bu.onclick=function(){
	window.location.href="shouyintai1.html";
}


//弹窗内容添加到地址
console.log(8)
var shou=document.querySelector(".shou")
console.log(shou)
var lian=document.querySelector(".tian")
var sheng=document.querySelector(".sheng")
var di=document.querySelector(".di")
var shi=document.querySelector(".shi")
var xiang=document.querySelector(".xiang")
var bie=document.querySelector(".chang")
var bao=document.querySelector(".bao")
console.log(bao)
bao.onclick=function(){
	console.log(2)
	if(shou.innerHTML!="" &&lian.innerHTML!="" &&sheng.innerHTML!="" &&di.innerHTML!="" &&shi.innerHTML!="" &&xiang.innerHTML!="" &&bie.innerHTML!=""){
		console.log(1)
	document.querySelector(".lastNice").style.display="none"
	var ull=document.createElement("ul")
	var nameli1=document.createElement("li")
	nameli1.innerHTML=lian.innerHTML
	ull.appendChild(nameli1)
	var idli2=document.createElement("li")
	idli2.innerHTML=sheng.innerHTML+di.innerHTML+shi.innerHTML+xiang.innerHTML+"("+bie.innerHTML+")"
	ull.insertBefore(idli2,nameli1)
	var dela1=document.querySelector("a")
	dela1.innerHTML="删除"
	ull.insertBefore(dela1,idli2)
	var dela2=document.createElement("a")
	dela2.innerHTML="编辑"
	ull.insertBefore(dela2,dela1)
	var dela3=document.createElement("a")
	dela3.innerHTML="设为默认"
	ull.insertBefore(dela3,dela2)
	console.log(ull)
	var mainul1=document.querySelector(".main ul")
	document.querySelector(".main").insertBefore(ull,mainul1)
}
}







// 弹窗
    document.getElementById('nices').onblur=function(){
         val=document.getElementById('nices').value
    	if(document.getElementById('nices').value==""){
    		
    		document.querySelector(".shouhuo").style.display="block"
    		console.log(document.getElementById('nices').value)
    	}else{
    		document.querySelector(".shouhuo").style.display="none"
    	}
    }

    document.getElementById('nicex').onblur=function(){
         val=document.getElementById('nicex').value
    	if(document.getElementById('nicex').value==""){
    		
    		document.querySelector(".dizhi").style.display="block"
    		console.log(document.getElementById('nicex').value)
    	}else{
    		document.querySelector(".dizhi").style.display="none"
    	}
    }
    document.querySelector(".maino h4 a").onclick=function(){
    	document.querySelector(".lastNice").style.display="block"

    }
    document.querySelector(".lastNice").onclick=function(event){
    	var ele=event.target
			if(ele.tagName==="A"||ele.className==="lastNice"){
				this.style.display="none"
			        }
			    }
	document.getElementById('nicen').onblur=function(){
         val=document.getElementById('nicen').value
    	if(document.getElementById('nicen').value==""){
    		
    		document.querySelector(".lianxi").style.display="block"
    		console.log(document.getElementById('nicex').value)
    	}else{
    		document.querySelector(".lianxi").style.display="none"
    	}
    }
    var Gid  = document.getElementById ;

    var showArea = function(){

	Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" + 	

	Gid('s_city').value + " - 县/区" + 

	Gid('s_county').value + "</h3>"

							}

  Gid('s_county').setAttribute('onchange','showArea()');










































