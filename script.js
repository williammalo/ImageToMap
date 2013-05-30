var imageToMap=function(img){
  var a,w,h,i,j,l;
  var canvas=document.createElement("canvas");
  w=canvas.width=img.width
  h=canvas.height=img.height
  var ctx=canvas.getContext("2d");
  ctx.drawImage(img,0,0);
  a=ctx.getImageData(0,0,w,h).data;
  l=[];                            //initiate array
    for(i=0;i<w;i++){              //loop through all x positions
      l[i]=[];                     //make a new array
      for(j=0;j<h;j++)             //loop through all y positions
        l[i][j]=a[j*w+i<<2]<128    //fill l[x][y] with boolean (with a black and white image, black is true, white is false)
    }
    return l                       //return the array
};