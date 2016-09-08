<?php 

// How to work strotime
/*echo strtotime("26 Jul 1997 05:00:00 UTC"), "\n";
echo strtotime("1 Jan 1970 00:00:00 UTC"), "\n";*/

// we set the header for increase the cache 
header('Expires: ' . gmdate('D, d M Y H:i:s', strtotime('+1 years')) . ' GMT');
header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s' ) . ' GMT' );

/* The browser ask af server that if thare are gzip file, he answer with compress file */
header('Accept-Encoding: gzip, deflate');

?>