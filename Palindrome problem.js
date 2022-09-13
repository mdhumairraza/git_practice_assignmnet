

count=0;
    for(i=0;i<N;i++){
        if(str[i]==str[[N-1]-i]){
            count++;
        }    
        //     console.log("Yes")
        // }else{
        //     console.log("No")
        // }
    } if (count==N){
        console.log("Yes")
    }else{
        console.log("No")
    }
