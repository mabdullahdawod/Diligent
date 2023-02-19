const reverse=(string,rstring)=>{
    for(i=string.length-1; i>=0 ;i--){
    rstring+=string[i];
    }
    if(string==rstring){
      return true;
    }
    else{  return false;
    }
    }
    show=reverse("aba","");
    console.log(show);