<?php

require '../m/Topics.php';
require "../../vendor/autoload.php";


$app = new Slim\App();

//Get all topics
$app->get('/getalltopics', function ($request, $response, $args) { 
    
    getTopicsData();
});

$app->get('/gettopicbyid', function ($request, $response, $args) { 
    
	$tid=$request->getParam("tid");
    getTopicDataById($tid);
});

$app->get('/test', function ($request, $response, $args) { 
    
    echo "Testing";
});


//Add a new client
$app->post("/clients/add",function($request, $response, $args){
    $data=json_decode($request->getParam("myData"));    
    InsertOrUpdate($data);
});

$app->run();