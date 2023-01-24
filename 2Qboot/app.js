function processQuestionnaire()
    {
                var form = document.getElementById("questionnaire-form");
                var q1 = form.elements["q1"].value;
                var q2 = form.elements["q2"].value;
                if (!q1 || !q2) {
                    // display error message to user
                     swal("โปรดเลือกข้อคำถามให้ครบ", "", "error");
                     document.getElementById("processQuestionnaire").innerHTML = "thankyou";
                     return;
                     }
                var score = 0;
                if (q1 == "yes") { score++; }
                if (q2 == "yes") { score+=2; }
                
                if (score == 0 ) {
                    swal("ไม่เป็นโรคซึมเศร้า","แปลผลสำเร็จ","success");
                } 
                else{
                    swal("“มีแนวโน้มที่จะเป็นโรคซึมเศร้า”","แปลผลสำเร็จ","success")
                
                }
            document.getElementById("processQuestionnaire").innerHTML = "thankyou";
                
            
    }   