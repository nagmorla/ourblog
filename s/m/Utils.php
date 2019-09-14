<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getInsertQuery($j_obj,$tblName,$ignore){
    $qi = "INSERT INTO $tblName (";
    //reset($j_obj);
    try{
    foreach($j_obj as $j_arr_key => $value){
        if(in_array($j_arr_key,explode(",",$ignore))){
            continue;
        }
        $qi .= $j_arr_key . ",";
    }
    $qi = substr_replace($qi,"",-1);
    $qi .= ") VALUES (";
    reset($j_obj);
    foreach($j_obj as $j_arr_key => $value){
        if(in_array($j_arr_key,explode(",",$ignore))){
            continue;
        }
        $qi .= "'" . $value . "',";
    }
    $qi = substr_replace($qi,"",-1);
    $qi .= ")";
    }catch(Exception $e){
        return "In Exception";
    }
    return $qi;
}


function getInsertIgnoreQuery($j_obj,$tblName,$ignore){
    $qi = "INSERT IGNORE INTO $tblName (";
    //reset($j_obj);
    try{
    foreach($j_obj as $j_arr_key => $value){
        if(in_array($j_arr_key,explode(",",$ignore))){
            continue;
        }
        $qi .= $j_arr_key . ",";
    }
    $qi = substr_replace($qi,"",-1);
    $qi .= ") VALUES (";
    reset($j_obj);
    foreach($j_obj as $j_arr_key => $value){
        if(in_array($j_arr_key,explode(",",$ignore))){
            continue;
        }
        $qi .= "'" . $value . "',";
    }
    $qi = substr_replace($qi,"",-1);
    $qi .= ")";
    }catch(Exception $e){
        return "In Exception";
    }
    return $qi;
}


function getUpdateQuery($j_obj,$tblName,$ignore){
    
    $qi = "UPDATE $tblName set ";
    //reset($j_obj);
    foreach($j_obj as $j_arr_key => $value){
        if(in_array($j_arr_key,explode(",",$ignore)) || $j_arr_key=="id"){
            continue;
        }
        $qi .= $j_arr_key . "='" .$value. "',";
    }
    reset($j_obj);
    $qi = substr_replace($qi,"",-1);
    $qi .= " where id=".$j_obj->id.";";
    return $qi;
    
    
}