<?
$token = '6775023082:AAEXfmuHyc9okoy8-5qxw2gAk2y5bnYEYw4';  
$chat_id = '170195649';

$arr = [
	"Имя клиента: " => trim(strip_tags($_POST['user_name'])),
	"Телефон клиента: " => trim(strip_tags($_POST['user_phone'])),
	"Email клиента: " => trim(strip_tags($_POST['user_email'])),
];

foreach ($arr as $key => $value) {
	$txt .= "<br>" . $key . "<br>" . $value . "%0A";
}

$url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}";
$proxy = "67.154.111.452:3128";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);


curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

curl_setopt($ch, CURLOPT_PROXY, $proxy);



curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 1);
$curl_scraped_page = curl_exec($ch);
curl_close($ch);
