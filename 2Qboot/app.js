function processQuestionnaire()
    {
                var form = document.getElementById("questionnaire-form");
                var q1 = form.elements["q1"].value;
                var q2 = form.elements["q2"].value;

                var score = 0;
                if (q1 == "yes") { score++; }
                if (q2 == "yes") { score+=2; }
                
                if (score == 0 ) {
                    swal("ไม่ป่วยเป็นโรคซึมเศร้า","","success");
                } 
                else{
                    swal("มีแนวโน้มที่จะเป็นโรคซึมเศร้า","กรุณาทำแบบประเมิน 9Q เป็นขั้นต่อไป ","success")
                
                }
            document.getElementById("processQuestionnaire").innerHTML = "thankyou";
                
            
    }   