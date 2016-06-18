var entry_string = [];
//var total = 0;
var tmp = '';
$("button").on('click', function() {
 	var value = $(this).text();
  // Got a number, add to tmp
  if (!isNaN(value) || value === '.') {
    tmp += value;
    $("#answer").val(tmp.substring(0,10));//The val() is used when you want to read from or write to text fields.
  }
  // Got some symbol other than equals, add tmp to our entry_string
  // then add our current symbol and clear tmp
  else if (value === 'AC') {
    entry_string = [];
    tmp = '';
    //total = 0;
    $("#answer").val('')

  // Clear last entry
  } else if (value === 'CE') {
    tmp = '';
    $("#answer").val('')
    
  // Change multiply symbol to work with eval
  } else if (value === '×') {
    entry_string.push(tmp);
    entry_string.push('*');
    tmp = '';
    //$("#answer").val(entry_string.substring(0, 10));
    
  // Change divide symbol to work with eval
  } else if (value === '÷') {
    entry_string.push(tmp);
    entry_string.push('/');
    tmp = '';
  // Got the equals sign, perform calculation
  } else if (value === '=') {
  	entry_string.push(tmp);

    var nt = Number(entry_string[0]);
    for (var i = 1; i < entry_string.length; i += 2) {
      var nextNum = Number(entry_string[i+1])
      var symbol = entry_string[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      //i++;
    }
    // Swap the '-' symbol so text input handles it correctly
    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entry_string = [];
    var t = nt.toString();
    entry_string.push(t);
    tmp = '';
    // Push number
  } else {
    entry_string.push(tmp);
    entry_string.push(value);
    tmp = '';
  }
});
