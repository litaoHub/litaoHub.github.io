<?php 
	
	header('Content-Type:text/html; charset=utf-8');

	$users = array(
		'admin'=>'12345',
		'test'=>'123',
		'litao'=>'345',
		'litao1'=>'34588',
		'litao2'=>'34567',
		'litao3'=>'34566',
		);
	$uname = $_POST[username];
	$upass = $_POST[passwd];
	if (array_key_exists($uname, $users)) {
		
		if ($users[$uname] == $upass) {
             header("location:../index.html");
		}
		else {
			echo "µÇÂ½²»³É¹¦";
		}
	}else {
		echo "µÇÂ½Ê§°Ü";
	}
?>