/*global $*/
/*global localStorage*/
var disorders=["Acute stress disorder","Adjustment disorder","Adolescent antisocial behavior","Adult antisocial behavior","Agoraphobia","Alcohol abuse","Alcohol dependence","Alcohol withdrawal","Alcoholic hallucinosis",
"Alzheimers disease","Amnestic disorder","Amphetamine dependence","Anorexia nervosa","Anosognosia","Anterograde amnesia","Antisocial personality disorder","Anxiety disorder",
"Asperger syndrome","Atelophobia","Attention deficit disorder","Attention deficit hyperactivity disorder","Autism","Autophagia","Avoidant personality disorder","Avoidant/restrictive food intake disorder",
"Barbiturate dependence","Benzodiazepine dependence","Benzodiazepine misuse","Benzodiazepine withdrawal","Bereavement","Bibliomania","Binge eating disorder","Bipolar disorder","Bipolar I disorder","Bipolar II disorder",
"Borderline personality disorder","Brief psychotic disorder","Bulimia nervosa","Caffeine-induced anxiety disorder","Caffeine-induced sleep disorder","Cannabis dependence","Catatonia","Catatonic schizophrenia",
"Circadian rhythm sleep disorder","Body dysmorphic disorder","Borderline intellectual functioning","Hallucinogen persisting perception disorder","Hallucinogen persisting perception disorder",
"Claustrophobia","Cocaine dependence","Cocaine intoxication","Cognitive disorder","Communication disorder","Conduct disorder","Cotard delusion","Cyclothymia","Delirium tremens","Denial","Depersonalization disorder",
"Derealization","Dermatillomania","Desynchronosis","Developmental coordination disorder","Diogenes Syndrome","Dispareunia","Dissociative identity disorder","Dyscalculia","Dyspraxia",
"Dyslexia","EDNOS","Ekboms Syndrome (Delusional Parasitosis)","Encopresis","Epilepsy","Enuresis (not due to a general medical condition)","Erotomania","Exhibitionism","Factitious disorder",
"Fregoli delusion","Fugue state","Ganser syndrome","Generalized anxiety disorder","General adaptation syndrome","Grandiose delusions","Gender identity disorder","Gaming disorder","Hallucinogen-related disorder",
"Histrionic personality disorder","Huntingtons disease","Hypomanic episode","Hypochondriasis","Shared psychotic disorder","Sleep disorder",
"Hysteria","Insomnia","Intermittent explosive disorder","Kleptomania","Korsakoffs syndrome","Lacunar amnesia","Major depressive disorder","Major depressive episode","Male erectile disorder",
"Malingering","Manic episode","Mathematics disorder","Melancholia","Minor depressive disorder","Misophonia","Mixed episode","Mood disorder",
"Munchausens syndrome","Narcissistic personality disorder","Narcolepsy","Neurocysticercosis","Neurodevelopmental disorder","Nicotine withdrawal","Night eating syndrome","Nightmare disorder",
"Obsessive-compulsive disorder (OCD)","Obsessive-compulsive personality disorder (OCPD)","Ondines curse","Oneirophrenia","Opioid dependence","Opioid-related disorder","Oppositional defiant disorder (ODD)",
"Orthorexia (ON)","Pain disorder","Panic disorder","Paranoid personality disorder","Parasomnia","Parkinsons Disease","Partialism","Pathological gambling",
"Persecutory delusion","Personality disorder","Pervasive developmental disorder not otherwise specified (PDD-NOS)",
"Phencyclidine (or phencyclidine-like)-related disorder","Phobic disorder","Pica (disorder)","Psychosis","Phonological disorder",
"Physical abuse","Polysubstance-related disorder","Posttraumatic stress disorder (PTSD)","Premature ejaculation","Primary hypersomnia","Primary insomnia","Pseudologia fantastica",
"Psychogenic amnesia","Psychotic disorder","Pyromania","Reactive attachment disorder of infancy or early childhood","Recurrent brief depression","Relational disorder","Residual schizophrenia","Retrograde amnesia",
"Rumination syndrome","Schizoaffective disorder","Schizoid personality disorder","Schizophrenia","Schizophreniform disorder","Schizotypal personality disorder",
"Seasonal affective disorder","Sedative-, hypnotic-, or anxiolytic-related disorder","Selective mutism","Separation anxiety disorder","Sexual fetishism","Sexual masochism disorder","Sexual sadism disorder",
"Seasonal affective disorder","Sleep terror disorder","Sleepwalking disorder","Sleep paralysis","Social anxiety disorder","Social phobia","Somatization disorder","Somatoform disorder",
"Specific phobia","Stereotypic movement disorder","Stockholm syndrome","Stuttering","Substance-related disorder","Tardive dyskinesia","Transient global amnesia","Transient tic disorder","Transvestic disorder",
"Trichotillomania","Depression"];

/*
function api(searchterm){
    $.ajax({
      url: "https://www.googleapis.com/books/v1/"+searchterm+"#",
      method: "GET",
      success: function(response) {
        console.log(response);
      },
    }); 
}
*/

function check(){
    for(var i=0;i<disorders.length;i++){
        if($("#typeofdisorder").val()===disorders[i]){
            $("#home").html("<a href='app.html'><button id='disorder'>Submit</button></a>");
        }
    }
}

function printbooks(response){
    $("#content").html("<h2 id='subject'>Books</h2>");
    for( var i =0 ; i<response.items.length;i++){
        if(response.items[i].volumeInfo.subtitle === undefined ){
            $("#content").append("<div id='i class='col-md-12'><a href='"+ response.items[i].volumeInfo.previewLink +"'><div class='col-12-md'><center><p>"+ response.items[i].volumeInfo.title +"</p></center></div></a><center><img src='http://i.imgur.com/pej470t.png'></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
        } else if(response.items[i].volumeInfo.subtitle === undefined) {
            $("#content").append("<div id='i class='col-md-12'><a href='"+ response.items[i].volumeInfo.previewLink +"'><div class='col-12-md'><center><p>"+ response.items[i].volumeInfo.title +"</p></center></div></a><center><img src='"+ response.items[i].volumeInfo.imageLinks.thumbnail +"'></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
        } else {
            $("#content").append("<div id='i class='col-md-12'><a href='"+ response.items[i].volumeInfo.previewLink +"'><div class='col-12-md'><center><p>"+ response.items[i].volumeInfo.title +"</p></center></div><div class='col-md-12'><center><p>"+ response.items[i].volumeInfo.subtitle +"</p></center></div></a><center><img src='"+ response.items[i].volumeInfo.imageLinks.thumbnail +"'></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
        }
        
    }
}

function printmusic(response){
    $("#content").html("<h2 id='subject'>Music</h2>");
    
    if(response.length === 0){
        $("#content").append("Nothing found");
    } else {
        for( var i =0 ; i<response.length;i++){
            if(response[i].artwork_url === null){
                $("#content").append("<div id='i class='col-md-12'><a href='"+ response[i].permalink_url +"'><div class='col-12-md'><center><p>"+ response[i].title +"</p></center></div></a><center><img src=' http://i.imgur.com/pej470t.png '></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
            } else {
                $("#content").append("<div id='i class='col-md-12'><a href='"+ response[i].permalink_url +"'><div class='col-12-md'><center><p>"+ response[i].title +"</p></center></div></a><center><img src='"+ response[i].artwork_url +"'></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
            }
            
        }
    }
        
    
}

function printarticles(response){
    $("#content").html("<h2 id='subject'>Articles</h2>");
    
    for( var i =0 ; i<response.response.docs.length;i++){
        $("#content").append("<div id='i class='col-md-12'><a href='"+ response.response.docs[i].web_url+"'><div class='col-12-md'><center><p>"+ response.response.docs[i].headline.main +"</p></center></div><center><p>"+ response.response.docs[i].snippet +"</p></a></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
        
        
    }
}

function printmovies(response){
    $("#content").html("<h2 id='subject'>Movies</h2>");
    if (response.Response === "False"){
        console.log("nothing");
        $("#content").append("Nothing Found");
    } else {
        for( var i =0 ; i<response.Search.length;i++){
            if(response.Search[i].Poster === "N/A"){
                $("#content").append("<div id='i class='col-md-12'><div class='col-12-md'><center><p>"+ response.Search[i].Title +"</p></center></div><center><img src='http://i.imgur.com/pej470t.png'></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
            } else {
                $("#content").append("<div id='i class='col-md-12'><div class='col-12-md'><center><p>"+ response.Search[i].Title +"</p></center></div><center><img src='"+ response.Search[i].Poster +"'></center></div><br><hr style='border-color: #ffffff' border-width='10px'>");
            }
            
        }
}
    }
    

$(document).ready(function(){
 
    var  update = setInterval(function(){ click();$("#set").click(function() {setGame();});},1000);
    var speed = 1;
    $("#happy").click(function() {
        setGame();
    });
    
    function game(){
        $("#game").append("<div id='line'></div>");
        $("#game").append("<div id='score'>0</div>");
        $("#score").css("position","absolute");
        $("#score").css("top","10px");
        $("#score").css("text-align","center%");
        $("#score").css("width","100%");
        $("#line").css("width", "100%");
        $("#line").css("height", "10px");
        $("#line").css("background-color", "red");
        $("#line").css("position", "absolute");
        $("#line").css("top", "100%");
        createEnemy();
        fall();
        
    }
    
    var score=0;
    
    function createEnemy(){
        console.log("enemy created");
        $("#game").append("<div class='enemy'><img class='smiley' src='https://buildahead.com/wp-content/uploads/2017/02/happy-emoji-smaller-300x300.png'></div>");
        $(".enemy").css("cursor","pointer");
        $(".smiley").css("width", "25px");
        $(".smiley").css("height", "25px");
        var left = Math.floor(Math.random*$("#game").width());
        $(".smiley").css("position", "absolute");
        $(".smiley").css("left",left);
        $(".enemy").css("left",left);
    }
    
    
    function click(){
        
       $(".enemy").click(function(){
            console.log("click");
            score++;
            $(".enemy").css("top","0px");
            $(".smiley").css("top","0px");
            $("#score").html(score);
            speed++;
           createEnemy();
           
       }); 
    }
    
    
    function checkCollision($element) {
    
    var lineposition = $("#line").position().top;
    var smileyPosition = $element.position().top + $element.height();
    
    if(lineposition < smileyPosition){
        $("#game").html("<div id='set'>Click to try again</div>");
        $("#game").append("<div id='highscore'> Highscore : "+score+"</div>");
        $("#set").css("background-color","red");
        $("#set").css("color","white");
        $("#set").css("text-align","center");
        $("#set").css("height","100%");
        $("#set").css("width","100%");
        $("#highscore").css("color","white");
        $("#highscore").css("text-align","center");
        $("#highscore").css("position","absolute");
        $("#highscore").css("top","40%");
        $("#highscore").css("width","100%");
        
        //$(".smiley").css("top", 0);
    }
 
    

    }
    function fall(){
         var fall = setInterval(function(){
        
            
            
            //var smileyPosition = 0;
            //console.log($(".smiley").position().top);
            $(".smiley").each(function(index,element){
                var $element = $(element);
                $element.css("top", $element.position().top + speed);
                checkCollision($element);
            });
            
        },
        50);
        
    }
    
    
    function setGame(){
        score = score -score;
        clearInterval(fall);
        speed = 1;
       console.log("hi");
       $("#minigame").html("<div style='height:300px, width:400px,' id='game'></div>");
       $("#game").css("width","400px");
       $("#game").css("height","300px");
       $("#game").css("background-color","white");
       $("#game").css("position","absolute");
       $("#game").css("left","35%");
       game();
    }
 // function getRandomColor(){
   //   var letters = '0123456789ABCDEF';
     // var color = '#';
      //for (var i = 0; i < 6; i++) {
       // color += letters[Math.floor(Math.random() * 16)];
     // }
    //  return color;
 // }  
  




 // $("body").css("background-color", getRandomColor());

    
    $("#here").append(localStorage.getItem("disorder"));
    
    var listofDisorders=[];
    for(var i=0; i<disorders.length;i++){
        listofDisorders.push("<option value='"+disorders[i]+"'>");
        
        if (i===disorders.length-1){
            $("#typeofdisorder").html("<datalist id='disorders'>"+ listofDisorders +"</datalist>");
            
        }
    }
    
    //books(localStorage.getItem("disorder"));
    
   $("#disorder").click(function(){
       check();
       localStorage.clear();
       localStorage.setItem("disorder",$("#typeofdisorder").val());
       console.log(localStorage.getItem("disorder"));
       //api($("#typeofdisorder").val());
   });
   
   $("#books").click(function(){
      books(localStorage.getItem("disorder")); 
   });
   
   $("#music").click(function(){
      music(localStorage.getItem("disorder")); 
   });
   
   $("#articles").click(function(){
      articles(localStorage.getItem("disorder")); 
   });
   
   $("#movies").click(function(){
      movies(localStorage.getItem("disorder")); 
   });
   
   //api(localStorage.getItem("disorder"));
   
function books(searchTerm) {
    
  
  var newUrl= "https://www.googleapis.com/books/v1/volumes?q="+ searchTerm;
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function(response) {
        console.log(response);
        printbooks(response);
        console.log(response.items.length);
        
          
      },
    });
    
}

    $("#round").click(function(){
       confetti(); 
    });
    //confetti is misspelt on purpose
    function confetti(){
        
        $("body").css("background-image","url('https://media.giphy.com/media/fxwpwPOhNknT2/giphy.gif'), url('https://www.dafont.com/img/illustration/s/o/something.jpg')");
        setInterval(function(){ 
            $("body").css("background-image","url(https://www.dafont.com/img/illustration/s/o/something.jpg)");
            console.log("hi");
        }, 4000);
    }
    
    
    
//https://media.giphy.com/media/fxwpwPOhNknT2/giphy.gif
function music(searchTerm){
  var newUrl= "https://api.soundcloud.com/tracks?q="+ searchTerm +"&client_id=5aa8e389ba4e24b6106af5159ab3e344";
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function(response) {
        console.log(response);
        printmusic(response);
        
          
      },
    });
}

function articles(searchTerm){

 // var newUrl= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ $.param({'api-key': '5160881673d745a0bf14c0cd4cf34546','q': "+ searchTerm +"});
  //  $.ajax({
    //  url: newUrl,
      //method: "GET",
      //success: function(response) {
      //  console.log(response);
      //  printarticles(response);
        
          
//      },
//    });

    // Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5160881673d745a0bf14c0cd4cf34546",
  'q': searchTerm
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(response) {
  console.log(response);
  console.log(response.response.docs);
  printarticles(response);
}).fail(function(err) {
  throw err;
});
}

function movies(searchTerm){
  
  var newUrl= "https://www.omdbapi.com/?apikey=90d4b10a&s="+ searchTerm;
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function(response) {
          
        console.log(response);
        console.log(response.Search);
        printmovies(response);
        
          
      },
    });
}

});  






//app app app app app app app app app app app app app app app app app app app app app app app app 

//https://www.googleapis.com/books/v1/volumes?q=

//api keys required

// news api http://eventregistry.org/ *requires python

// music api https://api.spotify.com

