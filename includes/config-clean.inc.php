<?php
$debug_mode = 1; // 1 or true  = ON; 2 or false = OFF

if ($debug_mode) {
    error_reporting(E_ALL);    
} // end of if ($debug_mode)

else {    
    error_reporting(E_ERROR | E_PARSE);
}

ini_set("display_errors", 1);

date_default_timezone_set('Asia/Manila');

function connect() {
    $host = "localhost";
    $db_name = "gmap";
    $charset = "utf8mb4";
    $db_user = "root";
    $db_password = "accessdenied123";
    $db = new PDO('mysql:host='.$host.';dbname='.$db_name.';charset='.$charset, $db_user, $db_password,
                  array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4"));
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    return $db;
} // end of function connect()

$webmaster = 'jerome2kph@gmail.com';
?>