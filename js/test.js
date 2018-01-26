function px(arry){
	var max,min;
	var n = arry.length;
	for(var i=1;i<n;i++){
		if(i===1){
			max =min= arry[i];
		}
		for(var m=i;m<n;m++;){
			if(max<arry[m]) max=arry[m]; 
			if(min>arry[m]) min=arry[m];
        }
	}
	return [min,max];
}