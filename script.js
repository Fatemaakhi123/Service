var project=setInterval(projectdone,30);
let count1=1;
        function projectdone()
        {
             count1++;
             document.querySelector("#sec10").innerHTML=count1;
             if(count1==25)
             {clearInterval(project);}
        }

        var client=setInterval(clientdone,20);
        let count2=1;
        function clientdone()
        {
            count2++;
            document.querySelector("#sec11").innerHTML=count2;
            if(count2==350)
            {
                clearInterval(client);
            }
        }
        var award=setInterval(awarddone,10);
        let count3=1;
        function awarddone()
        {
            count3++;
            document.querySelector("#sec12").innerHTML=count3;
            if(count3==1500)
            {
                clearInterval(award);
            }
        }
        var worker=setInterval(workerdone,5);
        let count4=1;
        function workerdone()
        {
            count4++;
            document.querySelector("#sec13").innerHTML=count4;
            if(count4==5000)
            {
                clearInterval(worker);
            }
        }
  