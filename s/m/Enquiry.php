<?php

/*

 * To change this license header, choose License Headers in Project Properties.

 * To change this template file, choose Tools | Templates

 * and open the template in the editor.

 */



$table_name = "enquiry_details";

function add($data) {

    global $table_name;

    $db = connect_db();

    $sql = getInsertQuery($data, $table_name, "hashKey,places,adn,uname,end_point_name,start_point_name,id,client_id,send_email_vendor,dest_id");



    $fp = fopen("logs/test.txt", "a");



    fputs($fp, $sql);



    fclose($fp);



    $exe = $db->query($sql) or die(mysqli_errno($db));

    $id = $db->insert_id;

    $db = null;

    echo $id;
}

function addPlace($data) {

    global $table_name;

    $db = connect_db();

    $sql = getInsertQuery($data, "enquiry_places_details", "hashKey,id,hotels");



    // $fp=fopen("E:/logs/test.txt","a");
    // fputs($fp,$sql);
    // fclose($fp);



    $exe = $db->query($sql) or die(mysqli_errno($db));

    $id = $db->insert_id;

    $db = null;

    echo $id;
}

function getEnquiryData() {

    global $table_name;

    $db = connect_db();

    $sql = "SELECT * FROM $table_name order by createdon desc";

    $exe = $db->query($sql);

    //  $data = $exe->fetch_all(MYSQLI_ASSOC);

    while ($row = $exe->fetch_assoc()) {

        $data[] = $row;
    }

    $db = null;

    echo json_encode($data);
}

function getEnquiryDataById($enquiryId) {

    global $table_name;

    $db = connect_db();

    $sql = "SELECT * FROM $table_name where enquiry_id='$enquiryId'";

    $exe = $db->query($sql);

    //  $data = $exe->fetch_all(MYSQLI_ASSOC);

    $row = $exe->fetch_assoc();

    $db = null;

    echo json_encode($row);
}

function getEnquiryPlaceDetailsById($enquiryId) {

    global $table_name;

    $db = connect_db();

    $sql = "SELECT * FROM enquiry_places_details where enquiry_id='$enquiryId'";

    $exe = $db->query($sql);

    //  $data = $exe->fetch_all(MYSQLI_ASSOC);

        $data=array();
    while ($row = $exe->fetch_assoc()) {

        $data[] = $row;
    }

    $db = null;

    echo json_encode($data);
}

function getEnquiryPlaceDetailsByIdFromVendorUpdate($enquiryId, $veuId) {

    global $table_name;

    $db = connect_db();

    $sql = "SELECT id,enquiry_id,dest_place,dest_place_hotel,dest_place_duration,dest_place_mp,dest_place_room_type FROM vendor_enquiry_places_updates where enquiry_id='$enquiryId' and vendor_enquiry_update_id=" . $veuId;

    $data = array();

    $exe = $db->query($sql);

    //  $data = $exe->fetch_all(MYSQLI_ASSOC);

    while ($row = $exe->fetch_assoc()) {

        $data[] = $row;
    }

    $db = null;

    echo json_encode($data);
}

function getQuotationDetails($enquiryId, $vemail, $veuId) {



    $db = connect_db();



    $sql = " select a.*,(select place from destination_master where id=a.start_point) start_point_a,(select place from destination_master where id=a.end_point) end_point_a,b.id as veu_id,b.notes,b.per_adult,b.vehicle_cost,b.extra_bed as extra_bed_b,b.meal_suppl,b.child_with_bed as child_with_bed_b,b.child_with_no_bed as child_with_no_bed_b,b.extras,b.agent_price as total_price,total_price as tp,b.markup_price,b.inclusions,b.exclusions,b.pa_markup_price,b.eb_markup_price,b.cwb_markup_price,b.cwnb_markup_price,b.vc_markup_price from enquiry_details a left JOIN vendor_enquiry_updates b on a.enquiry_id=b.enquiry_id and b.vendor_email='" . $vemail . "' where a.enquiry_id='" . $enquiryId . "' and b.id=" . $veuId;



    $fp1 = fopen("dd.txt", "w");

    fputs($fp1, "AAA==" . $sql . "\r\n");



    $exe = $db->query($sql);

    $data = array();

    while ($row = $exe->fetch_assoc()) {

        $data[] = $row;

        fputs($fp1, "In Loop\r\n");
    }

    fclose($fp1);

    $db = null;

    return json_encode($data);
}

function prepareMailBodyClient($data, $json, $adn, $userLogin,$gst) {





    //  $fileContents=  file_get_contents("tem")

    $fileContents = file_get_contents('../m/templates/client_mail.txt', FILE_USE_INCLUDE_PATH);



    $fileContents = str_replace("$(_AGENT_)", $adn, $fileContents);

    $fileContents = str_replace("$(_AR_)", $data->enquiry_id, $fileContents);

    $fileContents = str_replace("$(_VR_)", $data->enquiry_id, $fileContents);

    $fileContents = str_replace("$(_LOGIN-USER_)", $userLogin, $fileContents);

    $fileContents = str_replace("$(_DESTINATION))", $data->destination, $fileContents);



    $mainBody = "<table border=1>"
            . "<tr><td><b>Destination</b></td><td>" . $data->destination . "</td><td><b>Travel Date</b></td><td>" . $data->travel_date . "</td><td><b>Duration</b></td><td>" . $data->duration . " Nights</td></tr>"
            . "<tr><td><b># OF Adults</b></td><td>" . $data->adults . "</td><td><b>Child With Bed</b></td><td>" . $data->child_with_bed . "</td><td><b>Child With No Bed</b></td><td>" . $data->child_with_no_bed . "</td></tr>"
            . "<tr><td><b>Hotel Category</b></td><td>" . $data->hotel_category . "</td><td><b># OF Rooms</b></td><td>" . $data->rooms_req . "</td><td><b>Meal Plan</b></td><td>" . $data->meal_plan . "</td></tr>"
            . "<tr><td><b>Trip Start Point</b></td><td>" . $data->start_point_a . "</td><td><b>Trip End Point</b></td><td>" . $data->end_point_a . "</td><td><b>Vehicle Type</b></td><td>" . $data->vehicle_type . "</td></tr>"
            . "</table><br><br>";





    reset($data);

    if($json && count($json)>0)
    $mainBody .= "<table border=1><tr><td colspan='5' align='center'><b>ITINERARY</b></td></tr><tr><td><b>Place</b></td><td><b>Hotel Name</b></td><td><b>Room Type</b></td><td><b>Meal Plan</b></td><td><b># Of Nights</b></td></tr>";

    
    foreach ($json as $place) {

        $id = $place->dest_place_hotel;



        foreach ($place->hotels as $hotel) {



            if ($hotel->id == $id) {

                $mainBody .= "<tr><td>" . $hotel->dest_place . "</td><td>" . $hotel->hotel_name . "</td><td>" . $place->dest_place_room_type . "</td><td>" . $place->dest_place_mp . "</td><td>" . $place->dest_place_duration . "</td></tr>";
            }
        }
    }
    if($json && count($json)>0)
        $mainBody .="</table>";
    
    $mainBody .= "<br><table border=1><tr><td><b>Notes/Request</b></td><td colspan='4'>" . $data->notes . "</td></tr></table><br>";

    $perAdult=ceil($data->per_adult+(($data->per_adult*$data->pa_markup_price)/100));
    $vehicleCost=ceil($data->vehicle_cost+($data->vehicle_cost*$data->vc_markup_price)/100);
    $extrabed=ceil($data->extra_bed_b+(($data->extra_bed_b*$data->eb_markup_price)/100));
    $childwbed=ceil($data->child_with_bed_b+(($data->child_with_bed_b*$data->cwb_markup_price)/100));
    $childwnbed=ceil($data->child_with_no_bed_b+(($data->child_with_no_bed_b*$data->cwnb_markup_price)/100));
    
    
    
    
    if($gst=="18"){
        
       $perAdult=$perAdult+ceil((($data->per_adult*($data->pa_markup_price))/100)*18/100);
       $vehicleCost=$vehicleCost+ceil((($data->vehicle_cost*($data->vc_markup_price))/100)*18/100);
       $extrabed=$extrabed+ceil((($data->extra_bed_b*($data->eb_markup_price))/100)*18/100);
       $childwbed=$childwbed+ceil((($data->child_with_bed_b*($data->cwb_markup_price))/100)*18/100);
       $childwnbed=$childwnbed+ceil((($data->child_with_no_bed_b*($data->cwnb_markup_price))/100)*18/100);
        
    }
    

    $mainBody .= "<table border=1><tr><td colspan='4' align='center'><b>RATES INCLUSIVE OF GST</b></td></tr>";

    $mainBody .= "<tr><td><b>PER ADULT</b></td><td>" . $perAdult . "</td><td><b>VEHICLE COST</b></td><td>" . $vehicleCost . "</td></tr>";

    $mainBody .= "<tr><td><b>EXTRA BED</b></td><td>" . $extrabed . "</td><td><b>EXTRAS</b></td><td>" . $data->extras . "</td></tr>";

    $mainBody .= "<tr><td><b>CHILD WITH BED</b></td><td>" . $childwbed . "</td><td><b>CHILD WITH NO BED</b></td><td>" . $childwnbed . "</td></tr>";

    $mainBody .= "<tr><td><b>TOTAL PRICE</b></td><td colspan=3>" . $data->total_price . "</td></tr></table>";



    $mainBody.="<br><table border=1><tr><td><b>PACKAGE PRICE INCLUDES</b></td><td><b>NOT INCLUDED</b></td></tr>"
            . "<tr><td>".$data->inclusions."</td><td>".$data->exclusions."</td></tr>"
            . "</table>";



    $mainBody .= "<br><table><tr><td>IMPORTANT NOTE</td></tr><tr><td># No reservation made currently.</td></tr><tr><td># Please advise your acceptance. Reservation at hotel given above is subject to availability.</td></tr><tr><td># We shall proceed withe the reconformation only after receiving full payment.</td></tr><tr><td># Any Changes or Cancellation after Cancellation Dateline will result in Cancellation Charges.</td></tr></table><br>";





    $fileContents = str_replace("$(_ENQUIRY-BODY_)", $mainBody, $fileContents);



    return $fileContents;
}


function prepareMailBodyVendor($data, $json) {





    //  $fileContents=  file_get_contents("tem")

    $fileContents = file_get_contents('../m/templates/vendor_update_mail.txt', FILE_USE_INCLUDE_PATH);



    $fileContents = str_replace("$(_AGENT_)", $adn, $fileContents);

    $fileContents = str_replace("$(_AR_)", $data->enquiry_id, $fileContents);

    $fileContents = str_replace("$(_VR_)", $data->enquiry_id, $fileContents);

    $fileContents = str_replace("$(_LOGIN-USER_)", $userLogin, $fileContents);

    $fileContents = str_replace("$(_DESTINATION))", $data->destination, $fileContents);



    $mainBody = "<table border=1>"
            . "<tr><td><b>Destination</b></td><td>" . $data->destination . "</td><td><b>Travel Date</b></td><td>" . $data->travel_date . "</td><td><b>Duration</b></td><td>" . $data->duration . " Nights</td></tr>"
            . "<tr><td><b># OF Adults</b></td><td>" . $data->adults . "</td><td><b>Child With Bed</b></td><td>" . $data->child_with_bed . "</td><td><b>Child With No Bed</b></td><td>" . $data->child_with_no_bed . "</td></tr>"
            . "<tr><td><b>Hotel Category</b></td><td>" . $data->hotel_category . "</td><td><b># OF Rooms</b></td><td>" . $data->rooms_req . "</td><td><b>Meal Plan</b></td><td>" . $data->meal_plan . "</td></tr>"
            . "<tr><td><b>Trip Start Point</b></td><td>" . $data->start_point_a . "</td><td><b>Trip End Point</b></td><td>" . $data->end_point_a . "</td><td><b>Vehicle Type</b></td><td>" . $data->vehicle_type . "</td></tr>"
            . "</table><br><br>";





    reset($data);

    if($json && count($json)>0)
    $mainBody .= "<table border=1><tr><td colspan='5' align='center'><b>ITINERARY</b></td></tr><tr><td><b>Place</b></td><td><b>Hotel Name</b></td><td><b>Room Type</b></td><td><b>Meal Plan</b></td><td><b># Of Nights</b></td></tr>";

    
    foreach ($json as $place) {

        $id = $place->dest_place_hotel;



        foreach ($place->hotels as $hotel) {



            if ($hotel->id == $id) {

                $mainBody .= "<tr><td>" . $hotel->dest_place . "</td><td>" . $hotel->hotel_name . "</td><td>" . $place->dest_place_room_type . "</td><td>" . $place->dest_place_mp . "</td><td>" . $place->dest_place_duration . "</td></tr>";
            }
        }
    }
    if($json && count($json)>0)
        $mainBody .="</table>";
    
    $mainBody .= "<br><table border=1><tr><td><b>Notes/Request</b></td><td colspan='4'>" . $data->notes . "</td></tr></table><br>";



    $mainBody .= "<table border=1><tr><td colspan='4' align='center'><b>RATES INCLUSIVE OF GST</b></td></tr>";

    $mainBody .= "<tr><td><b>PER ADULT</b></td><td>" . $data->per_adult . "</td><td><b>VEHICLE COST</b></td><td>" . $data->vehicle_cost . "</td></tr>";

    $mainBody .= "<tr><td><b>EXTRA BED</b></td><td>" . $data->extra_bed_b . "</td><td><b>MEAL SUPPLEMENT</b></td><td>" . $data->meal_suppl . "</td></tr>";

    $mainBody .= "<tr><td><b>CHILD WITH BED</b></td><td>" . $data->child_with_bed_b . "</td><td><b>CHILD WITH NO BED</b></td><td>" . $data->child_with_no_bed_b . "</td></tr>";

    $mainBody .= "<tr><td><b>EXTRAS</b></td><td>" . $data->extras . "</td><td><b>TOTAL PRICE</b></td><td>" . $data->tp . "</td></tr></table>";



    $mainBody.="<br><table border=1><tr><td><b>PACKAGE PRICE INCLUDES</b></td><td><b>NOT INCLUDED</b></td></tr>"
            . "<tr><td>".$data->inclusions."</td><td>".$data->exclusions."</td></tr>"
            . "</table>";



   // $mainBody .= "<br><table><tr><td>IMPORTANT NOTE</td></tr><tr><td># No reservation made currently.</td></tr><tr><td># Please advise your acceptance. Reservation at hotel given above is subject to availability.</td></tr><tr><td># We shall proceed withe the reconformation only after receiving full payment.</td></tr><tr><td># Any Changes or Cancellation after Cancellation Dateline will result in Cancellation Charges.</td></tr></table><br>";





    $fileContents = str_replace("$(_ENQUIRY-BODY_)", $mainBody, $fileContents);



    return $fileContents;
}



//Update Enquiry details

function updateEnquiry($data) {

    global $table_name;

    $db = connect_db();

    $sql = getUpdateQuery($data, $table_name, "hashKey,places,adn,uname,end_point_name,start_point_name");



    $fp = fopen("logs/test.txt", "a");



    fputs($fp, $sql);



    fclose($fp);



    $exe = $db->query($sql) or die(mysqli_errno($db));

    $id = $db->affected_rows;

    $db = null;

    echo $id;
}

function deletePlace($enquiryId) {



    $db = connect_db();



    $sql = "DELETE FROM enquiry_places_details WHERE enquiry_id='" . $enquiryId . "'";



    $fp = fopen("logs/del.txt", "a");



    fputs($fp, $sql);



    fclose($fp);



    $exe = $db->query($sql) or die(mysqli_errno($db));

    $id = $db->affected_rows;

    $db = null;
}

function getEnquiriesById($enquiryId) {

    global $table_name;

    $db = connect_db();

    $sql = "SELECT count(*) total FROM $table_name where enquiry_id like '$enquiryId%'";

    $exe = $db->query($sql);

    //  $data = $exe->fetch_all(MYSQLI_ASSOC);

    $row = $exe->fetch_assoc();

    $db = null;

    echo json_encode($row);
}

?>