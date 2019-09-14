<?php
require '../../lib/mysql.php';
require '../m/Utils.php';
require '../m/Clients.php';
require "../../vendor/autoload.php";


$app = new Slim\App();

//Get all clients
$app->get('/getall', function ($request, $response, $args) { 
    
    getClientData();
});

$app->get('/getautocomp', function ($request, $response, $args) { 
    
    $search=$request->getParam("q");
    
  
    
    getClientDataAC($search);
});


//Add a new client
$app->post("/clients/add",function($request, $response, $args){
    $data=json_decode($request->getParam("myData"));    
    InsertOrUpdate($data);
});

$app->run();