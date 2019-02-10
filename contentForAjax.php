<?php
  sleep(2);
  echo "Данные:строчка - ".$_POST['name'].", цифра - ".$_POST['number'];
  //код для второго примера, в функцию json_encode вводим массив с код-значение
  if($_GET["country"] == 1) echo json_encode(array("1" => "Вашингтон", "2" => "Сиэтл"));
  else if($_GET["country"] == 2) echo json_encode(array("3" => "Париж", "4" => "Марсель"));
?>
