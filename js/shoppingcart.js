function addClass(obj,classname){
            var oldName=obj.className.trim()
            var oldArr=oldName.split(" ")

            var x=-1
            for(var i=0;i<oldName.length;i++){
                if(classname==oldName[i]){
                    x=i
                    break;
                }
            }
            if(x==-1){
                obj.className=oldName+" "+classname
            }
        }
function removeClass(obj,classname){
    var oldName=obj.className.trim()
    var oldArr=oldName.split(" ")
  if(oldArr.indexOf(classname)!=-1){
        oldArr.splice(oldArr.indexOf(classname),1)
        var arr=oldArr.join(" ")
         obj.className=arr
  }
}




//购物车功能实现
var inpcheck=document.querySelectorAll(".allche")//所有checkbox
var allcheck=document.querySelectorAll(".all")//全选
var goods=document.querySelectorAll(".choose")//input商品
var price=document.querySelectorAll(".subtotal span")//小计
var min=document.querySelectorAll(".num .min")//减号
var add=document.querySelectorAll(".num .add")//加号
var ll=document.querySelectorAll(".ll")//商品li



var del=document.querySelectorAll(".del img")//删除
var qipao=document.querySelectorAll(".qipao")//商品删除气泡
var paopao=document.querySelector(".paopao")//左下角的泡泡
var delyes=document.querySelectorAll(".qipao a:first-child")
var delno=document.querySelectorAll(".qipao a:last-child")
var de=document.querySelectorAll(".alldel")
var delall=document.querySelector(".paopao a:first-child")
var delallr=document.querySelector(".paopao a:last-child")



//全选
function allchoose(all,state){
	for(var i=0;i<all.length;i++){
		all[i].checked=state
	}
}
allchoose(inpcheck,true)


//物品总件数 左上角
function left(){
	var num=document.querySelectorAll(".choose").length
	document.querySelector(".car span span").innerHTML=num
}
left()


//总价  等于小计的和
function total(){
	var total=0
	price=document.querySelectorAll(".subtotal span")
	for(var i=0;i<price.length;i++){
		if(price[i].parentNode.parentNode.querySelector(".choose").checked==true){
			total=total+Number(price[i].innerHTML)
		}
	}
	document.querySelector(".coun span").innerHTML=total
}


//计价  obj即li
function calcu(obj){
	var x=obj.querySelector(".price span").innerHTML
	var y=obj.querySelector(".num span").innerHTML
	obj.querySelector(".subtotal span").innerHTML=x*y

}
for(var i=0;i<price.length;i++){
	calcu(price[i].parentNode.parentNode)
}
total()//调用计算总价



//商品input按钮
for(var i=0;i<goods.length;i++){
	goods[i].onchange=function(){
		var state1=true
		didcho()
		for(var j=0;j<goods.length;j++){
			if(goods[j].checked==false){
				state1=false
				// break;	
			}
		}
		allchoose(allcheck,state1)
		total()
		left()
	}
}

//add
for(var i=0;i<add.length;i++){
	add[i].onclick=function(e){
		e.preventDefault()
		var num=this.parentNode.querySelector("span").innerHTML
		num++
		this.parentNode.querySelector("span").innerHTML=num
		calcu(this.parentNode.parentNode)
		total()
	}
}
//min
for(var i=0;i<min.length;i++){
	min[i].onclick=function(e){
		e.preventDefault()
		var num=this.parentNode.querySelector("span").innerHTML
		num--
		if(num<1){num=1}
		this.parentNode.querySelector("span").innerHTML=num
		calcu(this.parentNode.parentNode)
		total()
		left()
	}
}

//删除 右边商品气泡
for(var i=0;i<qipao.length;i++){
	addClass(qipao[i],"active")
}
for(var i=0;i<del.length;i++){
	del[i].onclick=function(e){
		e.preventDefault()
		var qipao=this.parentNode.parentNode.querySelector(".qipao")
		removeClass(qipao,"active")
		goods=document.querySelectorAll(".choose")
		qipao.querySelector("a:first-child").onclick=function(e){
			e.preventDefault()
			var li=this.parentNode.parentNode
		  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
			didcho()
			total()
			left()
			goods.length--//每次点击一次删除长度减一
			if(goods.length==0){
				window.location.href="shopempty.html";
			}
		}
		qipao.querySelector("a:last-child").onclick=function(e){
			e.preventDefault()
			addClass(qipao,"active")
		}
	}
}

//删除  左下角泡泡
addClass(paopao,"active")
for(var j=0;j<de.length;j++){
	de[j].onclick=function(e){
  	e.preventDefault()
  	removeClass(paopao,"active")
  	delall.onclick=function(e){
			e.preventDefault()
			addClass(paopao,"active")//气泡消失
			goods=document.querySelectorAll(".choose")
			for(var i=0;i<goods.length;i++){
				if(goods[i].checked){
					goods[i].parentNode.parentNode.removeChild(goods[i].parentNode)
				}
			}
			total()	
			didcho()
			left()
			if(goods.length==0){
				window.location.href="shopempty.html";
			}
	  }
	  delallr.onclick=function(e){
		  e.preventDefault()
		  addClass(paopao,"active")
	  }
	}
	}//左下角的删除完


// 已选择件数 didcho
function didcho(){
	var check=0
	goods=document.querySelectorAll(".choose")
	for(var x=0;x<goods.length;x++){
		if(goods[x].checked){
				check=check+1
			}
	}document.querySelector(".state .did").innerHTML=check
}
document.querySelector(".state span").innerHTML=ll.length
document.querySelector(".state .did").innerHTML=ll.length


//全选按钮
for(var i=0;i<allcheck.length;i++){
	allcheck[i].onchange=function(){
		var state=this.checked
		allchoose(inpcheck,state)
		total()
		didcho()
		left()
	}
}
//至此购物车完成

// 实现登录弹窗
var num1=false
var num2=false
var num3=false
var num4=false

		var dis=document.querySelector(".wraps")
		document.querySelector(".main li:last-child button").onclick=function(e){
			// e.stopPropagation();
			if(num4==false){
				e.preventDefault()
				dis.style.display="block"
			}else{
				window.location.href="dingdan.html";
			}
			
		}
		document.querySelector(".close").onclick=function(e){
			e.preventDefault()
			dis.style.display="none"
			e.stopPropagation()
		}
		dis.onclick=function(e){
			e.preventDefault()
			dis.style.display="none"
		}
		document.querySelector(".box").onclick=function(e){
			e.preventDefault()
			dis.style.display="block"
			e.stopPropagation()
		}




// 手机号
document.querySelector(".box-up form .number").onblur=function(){
	var phonum=this.value
	if(phonum!==""){
		var regg=/^1[3,4,5,7,8]\d{9}$/
		if(regg.test(phonum)==false){

			document.querySelector(".box-up form .number").value=""
    	addClass(document.querySelector(".box-up form .number"),"active1")
    	 
  	}else{
  		removeClass(document.querySelector(".box-up form .number"),"active1")
      num1=true
  	}
	}
}

//密码
document.querySelector(".box-up form .scrite").onblur=function(){
	var password=this.value
	if(password!=""){
		var regg= /^[\8]{6}$/
		var obj=document.querySelector(".box-up form .scrite")
		if(regg.test(password)==false){
			document.querySelector(".box-up form .scrite").value=""
			addClass(obj,"active1")
		}else{
			removeClass(obj,"active1")
			num2=true
		}
	}
}
//验证码
document.querySelector(".box-up form .yan").onblur=function(){
	var ma=this.value
	var obj=document.querySelector(".box-up form .yan")
	if(ma!=""){
		if(ma!="HvdHN"){
			obj.value=""
			addClass(obj,"active1")
		}else{
			removeClass(obj,"active1")
			num3=true
		}
	}
}
	document.querySelector(".lo").onclick=function(e){
		if(num1&&num2&&num3){	
				// document.querySelector(".wraps").style.display="none"
				// addClass(dis,"active")
				 e.preventDefault()
				dis.style.display="none"
				console.log(dis)
				
				num4=true
				e.stopPropagation()
	}	
}




























































