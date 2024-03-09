<?php 

function solution($number){

  $total = 0;

  for($i = 1; $i <= $number; $i++) {

    if ($i % 3 === 0) {
      $total += $i;
    } else if ($i % 5 === 0) {
      $total += $i;
    }
  }

  return $total;

}

var_dump(solution(15));

?>