<?php
$odbiorca = $_GET["odbiorca"];
$tresc = $_GET["tresc"];
$temat = $_GET["temat"];
$dosiebie = $_GET['dosiebie'];
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: '--Tu wstawić email--'' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
if (!filter_var($odbiorca, FILTER_VALIDATE_EMAIL) === false)
{
	if(mail($odbiorca, $temat, $tresc, $headers))
	{
	  echo("Email został wysłany!<br>");
	} 
	else 
	{
		echo("Email nie mógł zostać wysłany...<br>");
	}
}
else
{
	echo "Podany email docelowy jest niepoprawny. Wróć do formularza i popraw email.<br>";
}
