<?php
//header("Location: http://www.swedpe.com/Intranet/index.php");
error_reporting(E_ALL | E_STRICT);
require('UploadHandler.php');
print_r($_REQUEST);
$options = array(
    // This option will disable creating thumbnail images and will not create that extra folder.
    // However, due to this, the images preview will not be displayed after upload
	'accept_file_types' => '/\.(gif|jpe?g|png|pdf|doc|docx)$/i',	
    'upload_dir' =>(dirname($_SERVER['SCRIPT_FILENAME'])).'/'.$_REQUEST['folder'].'/Temp/', 
    'upload_url' =>(dirname($_SERVER['SCRIPT_FILENAME'])).'/'.$_REQUEST['folder'].'/Temp/', 
	'image_versions' => array(),
);
$upload_handler = new UploadHandler($options);

?>