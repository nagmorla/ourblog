<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


require '../m/Master.php';
require "../../vendor/autoload.php";

$app = new Slim\App();

//Get all clients
$app->get('/getall', function ($request, $response, $args) { 
    getMasterData();
   
});

//Add a new client
$app->post("/addtype",function($request, $response, $args){
    $data=json_decode($request->getParam("myData"));
     addType($data);
    
});

//Update a client
$app->post("/updatetype",function($request, $response, $args){
    $data=json_decode($request->getParam("myData"));
    updateType($data);
    //echo "Hello World from hello router";
});



//Update profile
$app->post("/updateprofile",function($request, $response, $args){
    $data=json_decode($request->getParam("myData"));
    updateProfile($data);
    //echo "Hello World from hello router";
});

//Delete a client
$app->post("/deletedata",function($request, $response, $args){
     $data=json_decode($request->getParam("myData"));
    deleteType($data);
});

$app->run();