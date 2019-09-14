<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require '../../lib/mysql.php';
require 'Utils.php';

$table_name="master_data";


function addType($data){
        global $table_name;
        $db = connect_db();
        $sql=getInsertQuery($data, $table_name,"abcd,hashKey");
        $exe = $db->query($sql) or die(mysqli_errno($db));
        $id = $db->insert_id;
         $db = null;
        echo $id;
}

function getMasterData(){
    global $table_name;
    $db = connect_db();
    $sql = "SELECT * FROM $table_name";
    $exe = $db->query($sql);
  //  $data = $exe->fetch_all(MYSQLI_ASSOC);
    while ($row = $exe->fetch_assoc()) {
  $data[] = $row;
}
    $db = null;
    echo json_encode($data);
    
}

function updateType($data){
    global $table_name;
    $db = connect_db();
    $sql=getUpdateQuery($data,$table_name,"hashKey");
    $exe = $db->query($sql);
    $id = $db->insert_id;
     $db = null; 
    echo $id;
    
}
function deleteType($data){
    global $table_name;
    $db = connect_db();
    $sql="delete from $table_name where id=".$data->id;
    $exe = $db->query($sql);
  //  $id = $db->insert_id;
     $db = null; 
    echo "DEL";
    
}
    
function updateProfile($data){
    global $table_name;
    $db = connect_db();
    $sql=getUpdateQuery($data,"login_users","hashKey");
    $exe = $db->query($sql);
    $id = $db->insert_id;
     $db = null; 
     session_start();
     
     $_SESSION['username']=$data->user_name;
$_SESSION['adn']=$data->agent_show_name;
$_SESSION['aemail']=$data->agent_email;

     
    echo $id;
    
}

?>