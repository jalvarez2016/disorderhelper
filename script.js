/*global $*/
/*global localStorage*/
var disorders=["Acute stress disorder","Adjustment disorder","Adolescent antisocial behavior","Adult antisocial behavior","Agoraphobia","Alcohol abuse","Alcohol dependence","Alcohol withdrawal","Alcoholic hallucinosis",
"Alzheimer's disease","Amnestic disorder","Amphetamine dependence","Anorexia nervosa","Anosognosia","Anterograde amnesia","Antisocial personality disorder","Anxiety disorder",
"Asperger syndrome","Atelophobia","Attention deficit disorder","Attention deficit hyperactivity disorder","Autism","Autophagia","Avoidant personality disorder","Avoidant/restrictive food intake disorder",
"Barbiturate dependence","Benzodiazepine dependence","Benzodiazepine misuse","Benzodiazepine withdrawal","Bereavement","Bibliomania","Binge eating disorder","Bipolar disorder","Bipolar I disorder","Bipolar II disorder",
"Borderline personality disorder","Brief psychotic disorder","Bulimia nervosa","Caffeine-induced anxiety disorder","Caffeine-induced sleep disorder","Cannabis dependence","Catatonia","Catatonic schizophrenia",
"Circadian rhythm sleep disorder","Body dysmorphic disorder","Borderline intellectual functioning","Hallucinogen persisting perception disorder","Hallucinogen persisting perception disorder",
"Claustrophobia","Cocaine dependence","Cocaine intoxication","Cognitive disorder","Communication disorder","Conduct disorder","Cotard delusion","Cyclothymia","Delirium tremens","Denial","Depersonalization disorder",
"Derealization","Dermatillomania","Desynchronosis","Developmental coordination disorder","Diogenes Syndrome","Dispareunia","Dissociative identity disorder","Dyscalculia","Dyspraxia",
"Dyslexia","EDNOS","Ekbom's Syndrome (Delusional Parasitosis)","Encopresis","Epilepsy","Enuresis (not due to a general medical condition)","Erotomania","Exhibitionism","Factitious disorder",
"Fregoli delusion","Fugue state","Ganser syndrome","Generalized anxiety disorder","General adaptation syndrome","Grandiose delusions","Gender identity disorder","Gaming disorder","Hallucinogen-related disorder",
"Histrionic personality disorder","Huntingtons disease","Hypomanic episode","Hypochondriasis","Shared psychotic disorder","Sleep disorder",
"Hysteria","Insomnia","Intermittent explosive disorder","Kleptomania","Korsakoff's syndrome","Lacunar amnesia","Major depressive disorder","Major depressive episode","Male erectile disorder",
"Malingering","Manic episode","Mathematics disorder","Melancholia","Minor depressive disorder","Misophonia","Mixed episode","Mood disorder",
"Munchausen's syndrome","Narcissistic personality disorder","Narcolepsy","Neurocysticercosis","Neurodevelopmental disorder","Nicotine withdrawal","Night eating syndrome","Nightmare disorder",
"Obsessive-compulsive disorder (OCD)","Obsessive-compulsive personality disorder (OCPD)","Ondine's curse","Oneirophrenia","Opioid dependence","Opioid-related disorder","Oppositional defiant disorder (ODD)",
"Orthorexia (ON)","Pain disorder","Panic disorder","Paranoid personality disorder","Parasomnia","Parkinson's Disease","Partialism","Pathological gambling",
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
            $("#home").html("<a href='app.html'><button id='disorder'>Submit</button></a>")
        }
    }
}

$(document).ready(function(){
    var listofDisorders=[];
    for(var i=0; i<disorders.length;i++){
        listofDisorders.push("<option value='"+disorders[i]+"'>");
        
        if (i===disorders.length-1){
            $("#typeofdisorder").html("<datalist id='disorders'>"+ listofDisorders +"</datalist>");
            
        }
    }
    
    
   $("#disorder").click(function(){
       check();
       localStorage.clear();
       localStorage.setItem("disorder",$("#typeofdisorder").val());
       console.log(localStorage.getItem("disorder"));
       //api($("#typeofdisorder").val());
   });
   
   //api(localStorage.getItem("disorder"));
   
function books(searchTerm) {
    alert(searchTerm);
  
  var newUrl= "https://www.googleapis.com/books/v1/volumes?q="+ searchTerm;
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function(response) {
        console.log(response);
      
          
      },
    });
    
}

books("dog");
});  






//app app app app app app app app app app app app app app app app app app app app app app app app 

//https://www.googleapis.com/books/v1/volumes?q=




