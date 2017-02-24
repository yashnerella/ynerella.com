    	$(function() {  

    		$('.welcome-message').fadeOut(1000).fadeIn().fadeOut(1000);
    		
            $('.semi-transparent-button').on('click', viewSection);

            $('#javaBarContainer').on('mouseenter',displaySkillStatus);
            $('#javaBarContainer').on('mouseleave',hideSkillStatus);
            $('#javaBarContainer').on('mousemove',changeSkillStatusPosition);
            $('#jsBarContainer').on('mouseenter',displaySkillStatus);
            $('#jsBarContainer').on('mouseleave',hideSkillStatus);
            $('#jsBarContainer').on('mousemove',changeSkillStatusPosition);
            $('#reactBarContainer').on('mouseenter',displaySkillStatus);
            $('#reactBarContainer').on('mouseleave',hideSkillStatus);
            $('#reactBarContainer').on('mousemove',changeSkillStatusPosition);
            $('#htmlBarContainer').on('mouseenter',displaySkillStatus);
            $('#htmlBarContainer').on('mouseleave',hideSkillStatus);
            $('#htmlBarContainer').on('mousemove',changeSkillStatusPosition);
            $('#oracleBarContainer').on('mouseenter',displaySkillStatus);
            $('#oracleBarContainer').on('mouseleave',hideSkillStatus);
            $('#oracleBarContainer').on('mousemove',changeSkillStatusPosition);
            $('#phpBarContainer').on('mouseenter',displaySkillStatus);
            $('#phpBarContainer').on('mouseleave',hideSkillStatus);
            $('#phpBarContainer').on('mousemove',changeSkillStatusPosition);

            // $('#gitam-content').mouseover(function() {
            //      console.log("Hello, you just entered uou-logo");
            //     $('#gitam-logo').toggle();
            // });

            // function toggleImage() {
               
            // }

    		function viewSection() {
                    var childrenOfSC = $('.section-container').children();

                    for(var i=2;i<childrenOfSC.length;i++) {

                      $(childrenOfSC[i]).css("display","none");
                    }

    				var sectionId = $(this).attr('data-sectionid');
    				$('#'+sectionId).toggle();


                    if(sectionId == "ss") {
                        move("javaBar","javaBarPercentage");
                        move("jsBar","jsBarPercentage");
                        move("reactBar","reactBarPercentage");
                        move("htmlBar","htmlBarPercentage");
                        move("oracleBar","oracleBarPercentage");
                        move("phpBar","phpBarPercentage");
                    }                    
    		}

            /*javascript function to make progress bars move forward*/

            function move(pBar,pBarPercentage) {
                if(pBar == "phpBar") $('#skill-tip').fadeOut(1000).fadeIn(1000); /*This IF helps to blink the text only once*/   
                var elem = document.getElementById(pBar);   
                var width = 0;
                var id = setInterval(frame, 10);
                function frame() {

                    var maxPercentage= 100;

                    if(pBar == "javaBar") maxPercentage = 70;
                    else if(pBar == "jsBar") maxPercentage = 30;
                    else if(pBar == "reactBar") maxPercentage = 10;
                    else if(pBar == "htmlBar") maxPercentage = 60;
                    else if(pBar == "oracleBar") maxPercentage = 60;
                    else if(pBar == "phpBar") maxPercentage = 50;

                    if (width >= maxPercentage) {
                        clearInterval(id);
                    } 
                    else {
                        width++; 
                        elem.style.width = width + '%'; 
                        document.getElementById(pBarPercentage).innerHTML = width * 1  + '%';
                    }
                }
            }


            /*function to show skill status message when hovering over a particular skill*/

            function displaySkillStatus() {
                 if($(this).attr('id') == "javaBarContainer") {
                    $('.skill-status').html("Almost done learning java");
                 } else if ($(this).attr('id') == "jsBarContainer") {
                    $('.skill-status').html("This website is developed by me using javascript & jQuery");
                 } else if ($(this).attr('id') == "reactBarContainer") {
                    $('.skill-status').html("Just started an Independent study on this topic.");
                 } else if ($(this).attr('id') == "htmlBarContainer") {
                    $('.skill-status').html("HTML..hmm.. this website might please you! CSS - I know the concepts but I do not know every element in it. I  do not wish to be a designer");
                 } else if ($(this).attr('id') == "oracleBarContainer") {
                    $('.skill-status').html("Had a Database class in my bachelors, Did a project in my bachelors, Can write basic SQL and if given time I can also write a little complex one");
                 } else if ($(this).attr('id') == "phpBarContainer") {
                    $('.skill-status').html("I had a PHP class during my Master's. I will have a link to the PHP project (in projects section) that I created during that class.");
                 }
                
                $('.skill-status').toggle();
            }

            /*function to hide skill status message when hovering over a particular skill*/


            function hideSkillStatus() {

                $('.skill-status').toggle();
            }


             function changeSkillStatusPosition() {
                
                var tooltipX = event.pageX + 20;
                var tooltipY = event.pageY - 80;
                $('.skill-status').css({top: tooltipY, left: tooltipX});
            }

             //Code to change background every 5 seconds 
            // var counter=0;

            // function changeWebsiteBackground() {

            //     counter++;

            //     if(counter == 3) counter=1;
          
            //     if(counter == 1) $('html').toggleClass("background2");
            //     else if(counter == 2) $('html').toggleClass("background3");
            // }

            // setInterval(changeWebsiteBackground,5000);

    	}); 

        $(function(){
             $('#gitam-logo').mouseover(function() {
                 console.log("Hello, you just entered uou-logo");
                $('#gitam-content').toggle();
            });
        });