let a = document.getElementsByTagName("audio");

        function other_pause(b){
            for(let i = 0;i < a.length; ++i){
                if(i != b){
                    a[i].pause()
                    a[i].currentTime = 0.0;
                } 
            }
        }
