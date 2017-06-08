<?php
require_once('config.inc.php');
require_once('functions.inc.php');
$pdo = connect();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {    
    $location_lat = $_POST['location_lat'];
    $location_lng = $_POST['location_lng'];
    
    //var_dump($_POST);
    
    try {
        $query = "INSERT INTO users (location_lat, location_lng) VALUES (:location_lat, :location_lng)";
        $users = $pdo->prepare($query);
        $users->bindValue(':location_lat', $location_lat, PDO::PARAM_STR);
        $users->bindValue(':location_lng', $location_lng, PDO::PARAM_STR);
        $users->execute();
        $response['is_success'] = true;
        
    } // end of try
    catch(PDOException $e) {
        $response['is_success'] = false;
        $response['message'] = $e->getMessage();
    }
    
    echo json_encode($response);
    
} // end of if ($_SERVER['REQUEST_METHOD'] == 'POST')

else {
    echo 'Thou shalt not pass!';
}
?>