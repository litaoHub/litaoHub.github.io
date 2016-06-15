<?php

	header('Content-Type:application/json; charset=utf-8');

	// 实际场景可能会是从数据中取出的
	$img = file_get_contents('../json/zhuye.json');
    
	// 将json解码成一个数组
	$img = json_decode($img, true);

	$nav = $_GET['nav'];


	// 返回json结果
	echo json_encode($img[$nav]);


?>