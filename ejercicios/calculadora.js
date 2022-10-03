class calculadora{
   limpiar(){
      let resul = document.getElementById("result")
      resul.value=""
   }


 
   divisores(){
    let result= document.getElementById("result")
    let o=0
    let i=1
    let nume= parseInt(result.value)
    if(nume>0){
    for( i=1;i<nume;i++){
      if (nume%i==0){
       o=o+i+",".toString()
      }
   }
   result.value=o
}else{
   result.value="ingrese un valor numerico y mayor a cero ".toString()
}
} 






invertir(){
let result= document.getElementById("result")
let c=0,digito=""
let num= parseInt(result.value)
if(num>0){
while(num>0){
    c=num%10
    num=Math.floor(num/10)
    digito=digito + c.toString()
}
result.value= digito
}else{
   result.value="ingrese un valor numerico y mayor a cero ".toString()
}
}









primo(){
   let result=document.getElementById("result")
   let dig=0,c=1,resp=""
   let num= parseInt(result.value)
   if(num>0){
   while (c<=num) {
       if (num%c==0) {
          dig=dig+1
          console.log(dig)
       }
       c=c+1
   }
   if (dig==2) {
      resp=resp+num+" es un numero primo".toString()
      
   }else{
      resp=resp+num+" no es un numero primo".toString()
   }
   result.value=resp
}else{
   result.value="ingrese un valor numerico y mayor a cero ".toString()
}
}







perfecto(){
   let result=document.getElementById("result")
   let respu=0,per="",i=0
   let num=parseInt(result.value)
   if (num>0) {
   for(i=0;i<num;i++){
         if ((num%i)==0) {
            respu=respu+i
            
         }
     }
   if (respu==num) {
        per=num+" es un numero perfecto".toString() 
      }else{
      per=num+" no es un numero perfecto".toString() 
   }
}  
else{
   per="ingrese un valor numerico y mayor a 0 ".toString()
}
   result.value=per   
   }






   fibonachi(){
      
      let result = document.getElementById("result")
      let num1
      let sf=[0,1]
      num1 = parseFloat(result.value)
      if (Number.isInteger(num1)&& num1>0){
        if(num1!=""){
          result.value="0"
        }else{
          if(num1==2){
            result.value=sf.toString()
        }
        }
        for(let i=2; i<=num1-1;i++){
          sf[i]=sf[i-1]+sf[i-2]
          result.value=sf.toString()
        }
      }else{
        result.value="Ingrese un valor numerico mayor a 1"
      }
   }
    






base10_2(){
 let result=document.getElementById("result")
 let digito,pos=0,numeros=[],rr="",men=" "
 let vari = parseInt(result.value)
 if (vari>0) {
while(vari>0){
   digito=vari%2
   vari=Math.floor(vari/2)
   numeros[pos]= digito
   pos= pos+1
}
for(let h=pos-1; h>=0;h--){
    rr=rr+numeros[h].toString()
}
   result.value=rr
   }
   else {
      result.value=men+"ingrese un valor numerico y mayor a cero ".toString()
      
   }
}







base10_16(){
    let result=document.getElementById("result")
   let c=1,hex=" ",cn=""
   let num= parseInt(result.value)
   if(num>0){
   while(c>0){
      c=Math.floor(num/16)
        switch (num%16) {
         case 10:
                hex="A"+hex
            break;
         case 11:
                hex="B"+hex
            break;
         case 12:
                hex="C"+hex
            break;
         case 13:
                hex="D"+hex
            break;
         case 14:
                hex="E"+hex
            break;
         case 15:
                hex="F"+hex
            break;
        
         default:
            hex=(num%16)+hex
            break;
        }
        num=c
       
   }
    cn=cn+hex.toString()
    result.value=cn
}else{
   result.value="ingrese un valor numerico y mayor a cero ".toString()
}
}






base10_8(){
   let result=document.getElementById("result")
   let c=1,oct=" "
   let rep="",men=" "
   let num=parseInt(result.value)

   if (num>0) {
      while(c>0){
         c=Math.floor(num/8)
         oct=(num%8)+oct.toString()
         num=c
         
      } 
      rep=rep+oct.toString()
      result.value=rep
   } 
   else {
      result.value=men+"ingrese un valor numerico y mayor a cero ".toString()
      
   }
  
   
}







base2_10(){
   let result= document.getElementById("result")
   let dec=0,c=0,ex=0,s=0,r="",x=0,p=0
   let num=parseInt(result.value)
  if(num>0){
   while(c<num){ 
      dec=num%10
      if(dec>=0 && dec<2){
      num=Math.floor(num/10)
      p=2**x 
      ex=dec*p
      s=s+ex
      x=x+1  
      }else{
         num=0
         s="ingrese numeros binarios".toString()
      }   
   }

    r=s.toString()
}else{
   r="ingrese valores numericos".toString()
}
  
   result.value=r
}




base2_16(){
   let result= document.getElementById("result")
         let dec=0,c=0,ca=1,ex=0,s=0,r="",x=0,p=0,hex=" ",cn=" "
         let num=parseInt(result.value)
         if(num>0){
            while(c<num){ 
               dec=num%10
               if(dec>=0 && dec<2){
               num=Math.floor(num/10)
               p=2**x
               ex=dec*p
               s=s+ex
               x=x+1
            }else{
               num=0
               cn="ingrese numeros binarios".toString()
               ca=0
            }   
            }
            r=r+s
            //console.log(r)
            while(ca>0){
               ca=Math.floor(r/16)
               switch (r%16) {
               case 10:
                 hex="A"+hex
                break;
                  case 11:
                     hex="B"+hex
                  break;
                  case 12:
                     hex="C"+hex
                  break;
                  case 13:
                     hex="D"+hex
                  break;
                   case 14:
                     hex="E"+hex
                  break;
                  case 15:
                     hex="F"+hex
                  break;
                  default:
                     hex=(r%16)+hex
                  break;
               }
               r=ca
            } 
         }else{
            cn="ingrese valores numericos".toString()
         }
            cn=cn+hex.toString()
            result.value=cn
            console.log(cn)
        
         
}




contar_palabra(){
   let result= document.getElementById("result")
   let c=1,i=0
   let tex=result.value 
   for(let i=0;i<tex.length-1; i++){
      if(tex[i]==" " && tex[i+1]!==" "){
         c=c+1
      }
   }
   result.value="la frase ->"+tex+". ( tiene "+c+" palabras) "

}





palindroma(){
   let result= document.getElementById("result")
    let h="",iv="",res="",i=" ",vi=""
    let num =result.value
    for(let i=num.length -1; i>=0 ; i--){
      if(num[i] !=" "){
      iv =num[i].toLowerCase()+iv
      vi =vi+num[i].toLowerCase()
   }
   if (iv==vi) {
      res="la palabra ("+num+")"+" es palindroma"   
   }else{
      res="la palabra ("+num+")"+" no es palindroma"
      
   }
   
}
result.value=res
}



invertir_frase(){
   let result= document.getElementById("result")
   let i=" ",inv=" "
   let pal =result.value
   for(let i=pal.length -1; i>=0 ;i--){
      inv +=pal[i]
   }
   result.value=inv
   console.log(inv)
}





 contar_caracteres(){
   let result = document.getElementById("result")
   let palabra="",cont=0,cv=0,cc=0,cn=0,ce=0,co=0,c=1
   palabra=String(result.value)
   console.log(palabra)
   for(let pos=0;pos<palabra.length;pos++){
      if(palabra[pos]==" " && palabra[pos+1]!==" "){
         c=c+1
      }
     if(palabra[pos]=="/"  || palabra[pos]=="%"  ||  palabra[pos]=="!"  || palabra[pos]=="@"  || palabra[pos]=="#"  || palabra[pos]=="$"  || palabra[pos]=="^"  
       ||  palabra[pos]=="&"  || palabra[pos]=="*" ||  palabra[pos]=="(" ||  palabra[pos]==")" ||  palabra[pos]=="-" ||  palabra[pos]=="_" ||  palabra[pos]=="+" 
       ||  palabra[pos]=="=" ||  palabra[pos]=="{" ||  palabra[pos]=="}" ||  palabra[pos]=="[" ||  palabra[pos]=="]" ||  palabra[pos]==":" ||  palabra[pos]==";" 
       ||  palabra[pos]=="'" ||  palabra[pos]=="," ||  palabra[pos]=="." ||  palabra[pos]=="?" ||  palabra[pos]=="`" ||  palabra[pos]=="<" ||  palabra[pos]==">"){
         cc=cc+1
       }else{  
         if(palabra[pos]=="1"  || palabra[pos]=="2"  ||  palabra[pos]=="3"  || palabra[pos]=="4"  || palabra[pos]=="5"  || palabra[pos]=="6"  || palabra[pos]=="7"  
         ||  palabra[pos]=="8"  || palabra[pos]=="9" ||  palabra[pos]=="0"){
         cn=cn+1
         console.log("numeros"+cn)
       }else{
         if(palabra[pos].toLowerCase()==" "){
           ce=ce+1
           console.log("espacios"+ce)
         }else{
           if(palabra[pos].toLowerCase()=="a"|| palabra[pos].toLowerCase()=="e"||  palabra[pos].toLowerCase()=="i" 
           || palabra[pos].toLowerCase()=="o"  ||  palabra[pos].toLowerCase()=="u"){ // CONVIERTE A MINUSCULA EL TXT
         cv=cv+1
         console.log("vocales"+cv)
         }else{
           co=co+1
           console.log("consonantes"+co)
         }
       }
       }
     } 
     result.value= palabra+"-> tiene:"+c+" palabras; "+co+ "consonantes; "+cv+" vocales; "+ce+" espacios; "+cn+" numeros;"+cc+" caracteres especiales"
   }
 } 


 buscar_cadena(){
   let result = document.getElementById("result")
   let pa="",cc=0,cp="",arr=[]
   pa=result.value
   let valorb= prompt("Ingrese el valor buscado")

   for(let pos=0;pos<pa.length;pos++){
     console.log(pa[pos])
    
     if(pa[pos].toLocaleLowerCase()== valorb.toLocaleLowerCase()){
      
         cc=cc+1
         cp=cp+pos.toString()+","
         // console.log("arreglo"+cp)
     }
   }
    result.value="en el arreglo ("+pa+") el objeto " +valorb+ " se encuentra en la posicion "+cp
}




 
mayor_arreglo(){
   let result=document.getElementById("result")
   let max=0,c=0,arr=0
   let num=result.value
   let numt=num.split(";")
   for(c=0;c<numt.length;c++){
      arr=parseFloat(numt[c])
       if (max<arr) {
         max=arr
         console.log(max)
       }
   }
   if(max!=""){
      result.value="el numero mayor del arreglo ["+numt+"]"+"es ->"+max
   }else{
      result.value="porfavor ingrese valores numericos"
   }
} 
 




 promedio_arreglo(){
    let result=document.getElementById("result")
    let sum=0 ,c=0,i=0
    let num=result.value
    let arr=num.split(";")
                          
 
    for(c=0 ;c<arr.length;c++){
       sum=sum+parseFloat(arr[c])
       console.log(sum)
      }
      i=sum/arr.length
      if(i != parseFloat(i)){
         result.value= "no se puede promediar caracteres, por favor ingrese valores numericos"
        }else{
         result.value="El promedio del arreglo ["+ arr +"] -> es : " + i} 
     }
   
   



   buscar_arreglo(){
   let result=document.getElementById("result")
   let b=result.value
   let c=0,e="",bo=false
   let arr=b.split(";")
   let res=prompt("ingrese el elemento que desea buscar")
   while (c<arr.length ) {
      if (arr[c].toLocaleLowerCase()==res.toLocaleLowerCase()) {
         e+=c+","
         bo=true
         c=c+1
      }else{
         c=c+1
      }
   }
   if (bo==true) {
      result.value="en el arreglo ["+arr+"]"+" el elemento ["+ res+"] se encontro en la posicion "+e
   }else{
      result.value="en el arreglo ["+arr+"]"+" no se encuentra el elemento "+ res
   
   }
}


eliminar_arreglo(){
   let result=document.getElementById("result")
   let arr2="",i=0
   let a=result.value
   let arr=a.split(";")
   let tbs=prompt("ingrese el valor a eleiminar")
   for(i=0;i<arr.length;i++){
      if (arr[i] != tbs) {
         arr2+=arr[i]+","
      }
      console.log(arr2)
   }
  
   result.value="["+arr2+"]"
   
}

insertar_arreglo(){
   let result=document.getElementById("result")
    let arr2=""
    let arreglo=result.value
    let arr=arreglo.split(";")
    let ninsertar=prompt("Ingrese el valor a eleiminar")
    let npos=prompt("Ingrese la posicion")
    for(let i=0;i<arr.length;i++){
       if (i!=npos) {
          arr2+=arr[i]+","
          console.log(arr2)
       }else{
        arr2+=ninsertar+","+arr[i]+","
      
        console.log(arr2)
       }
    }
      console.log(arr.length)
    if(npos>arr.length-1){
      result.value="LA POSICION QUE INGRESO NO FORMA PARTE DEL ARREGLO"   
    }else{
      result.value="el arreglo ["+arr+"]"+" de le ah agregado el elemento ["+ ninsertar+"]"+" el nuevo arreglo es ["+arr2+"]" 
    }
 }


}
let sgc = new calculadora()
