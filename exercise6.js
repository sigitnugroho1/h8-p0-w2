1.
// looping Pertama//
var  genap = 2
while (genap <= 20) {
  console.log (genap + ' - I love Coding');
  genap += 2
}

//looping kedua//
var  genap = 20
while (genap >= 2) {
  console.log (genap + ' - I will become fullstack developer');
  genap-=2
}

2.
//LOOPING PERTAMA
for (var num = 1; num <= 20; num++) {
    console.log(num + ' - I love coding')
  }

//LOOPING KEDUA
for(var num = 20; num > 0; num--) {
    console.log(num + ' - I will become fullstack developer')
  }


  3.
  for (counter = 1; counter <100; counter++) {
    if (counter % 2 === 0) {
      console.log ('genap');
    }
    else{
      console.log ('ganjil');
    }
  }


  for (var counter = 1; counter <100; counter+=2) {
    console.log(counter);
  }
  for (var counter = 1; counter <100; counter+=5) {
    console.log(counter);
  }
  for (var counter = 1; counter <100; counter+=9) {
    console.log(counter);
  }

  for(var i = 1; i < 100; i += 2) {
    if(i % 3 === 0) {
      console.log(i + ' kelipatan 3');
    } else {
      console.log(i);
    }
  }
    for(var i = 1; i < 100; i += 5) {
      if(i % 6 === 0) {
        console.log(i + ' kelipatan 6');
      } else {
        console.log(i);
      }
    }

    for(var i = 1; i < 100; i += 9) {
      if(i % 10 === 0) {
        console.log(i + ' kelipatan 10');
      } else {
        console.log(i);
      }
    }