<?php

$table_name="client_master";


function InsertOrUpdate($data){
    //$client= getClientDataByEmailId($data[email]);   
    addClient($data);        
    /*if($client){
        updateClient($data);
    }else{
        
    }*/
}

function addClient($data){
    global $table_name;
    $db = connect_db();
    $sql=getInsertIgnoreQuery($data, $table_name,"hashKey");
    $exe = $db->query($sql) or die(mysqli_errno($db));
    $id = $db->insert_id;
    $db = null;
    echo $id;
}

function getClientData(){
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
function getClientDataAC($search){
    global $table_name;
    $db = connect_db();
    $sql = "SELECT * FROM $table_name where name like '%$search%'";
    $exe = $db->query($sql);
  //  $data = $exe->fetch_all(MYSQLI_ASSOC);
    while ($row = $exe->fetch_assoc()) {
        $data[] = $row;
    }
    $db = null;
    echo json_encode($data);    
}

function getClientDataByEmailId($emailId){
    global $table_name;
    $db = connect_db();
    $sql = "SELECT * FROM $table_name where email like '%$emailId%'";
    $exe = $db->query($sql);
  //  $data = $exe->fetch_all(MYSQLI_ASSOC);
    while ($row = $exe->fetch_assoc()) {
        $data[] = $row;
    }
    $db = null;
    return $data;    
}

function updateClient($data){
    global $table_name;
    $db = connect_db();
    $sql=getUpdateQuery($data,$table_name,"hashKey");
    $exe = $db->query($sql);
    $id = $db->insert_id;
     $db = null; 
    echo $id;
    
}

?>