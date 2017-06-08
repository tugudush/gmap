<?php
require_once("config-clean.inc.php");
$pdo = connect();

// Start XML file, create parent node
$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

try {
    $query = "SELECT * FROM markers";
    $markers = $pdo->prepare($query);
    $is_success = $markers->execute();
    if ($is_success) {
        $rows = $markers->fetchAll(PDO::FETCH_ASSOC);
    } // end of if ($is_success)
    else {
        die('execute error!');
    }
} // end of try

catch(PDOException $e) {
    echo $e->getMessage();
    exit;
}

if ($is_success) {
    header("Content-type: text/xml");
    foreach($rows as $row) {
        // Add to XML document node
        $node = $dom->createElement("marker");
        $newnode = $parnode->appendChild($node);
        $newnode->setAttribute("id",$row['id']);
        $newnode->setAttribute("name",$row['name']);
        $newnode->setAttribute("address", $row['address']);
        $newnode->setAttribute("lat", $row['lat']);
        $newnode->setAttribute("lng", $row['lng']);
        $newnode->setAttribute("type", $row['type']);
    } // end of foreach($rows as $row)    
    echo $dom->saveXML();
} // end of if ($is_succes)
?>