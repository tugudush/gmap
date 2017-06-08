<?php
require_once('config.inc.php');
require_once('functions.inc.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once('meta.inc.php'); ?>
    <meta name="description" content="Page Description">
    <title>Sumbit Location - Google Map API</title>    
    <?php require_once('styles.inc.php'); ?>
    <?php include_once('favicons.inc.php'); ?>
    <?php include_once('google-fonts.inc.php'); ?>
    <?php require_once('head-scripts.inc.php'); ?>    
</head>
<body id="page-submit-location">
    <?php include_once('header.inc.php'); ?>
    <div id="container">
        <div class="wrap">
            <form id="user-form">
                <input type="text" id="location-lat" name="location_lat" placeholder="Latttitude">
                <input type="text" id="location-lng" name="location_lng" placeholder="Longitude">
                <input type="submit" id="submit-location" name="submit_location" value="Submit">
            </form>
            <div id="map"></div>
        </div><!--/.wrap-->
    </div><!--/container-->
    <?php include_once('footer.inc.php'); ?>
    <script src="<?php echo $site_url; ?>/js/gmap-submit-location.js"></script>    
    <?php require_once('footer-scripts.inc.php'); ?>
</body>
</html>