<?php
require_once('config.inc.php');
require_once('functions.inc.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('meta.inc.php'); ?>
    <meta name="description" content="Page Description">
    <title>Importing Data - Google Map API</title>
    <?php require_once('styles.inc.php'); ?>
    <?php include_once('favicons.inc.php'); ?>
    <?php include_once('google-fonts.inc.php'); ?>
    <?php require_once('head-scripts.inc.php'); ?>
</head>

<body id="page-marker-clustering">
    <?php include_once('header.inc.php'); ?>
    <div id="container">
        <div class="wrap">
            <div id="map"></div>
        </div>
        <!--/.wrap-->
    </div>
    <!--/container-->
    <?php include_once('footer.inc.php'); ?>    
    <script src="<?php echo $site_url; ?>/js/gmap-importing-data.js"></script>
    <?php require_once('footer-scripts.inc.php'); ?>    
</body>
</html>