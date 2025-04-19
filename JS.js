var a, b;
a = false;
b = false;
console.log("A   ", "B   ", "! A ", "A && B ", "A || B");
console.log(a, b, !a, a && b, a || b);
b = true;
console.log(a, b, !a, a && b, a || b);
a = true;
b = false;
console.log(a, b, !a, a && b, a || b);
b = true;
console.log(a, b, !a, a && b, a || b);

a = false;
b = false;
document.writeln("<table>");
document.writeln(
  "<th>A</th> <th>B</th> <th>! A</th> <th> A && B</th> <th>A || B</th>"
);
document.writeln(
  "<tr><td>",
  a,
  "</td> <td>",
  b,
  "</td> <td>",
  !a,
  "</td> <td>",
  a && b,
  "</td> <td>",
  a || b,
  "</td></tr>"
);
a = false;
b = true;
document.writeln(
  "<tr><td>",
  a,
  "</td> <td>",
  b,
  "</td> <td>",
  !a,
  "</td> <td>",
  a && b,
  "</td> <td>",
  a || b,
  "</td></tr>"
);
a = true;
b = false;
document.writeln(
  "<tr><td>",
  a,
  "</td> <td>",
  b,
  "</td> <td>",
  !a,
  "</td> <td>",
  a && b,
  "</td> <td>",
  a || b,
  "</td></tr>"
);
a = true;
b = true;
document.writeln(
  "<tr><td>",
  a,
  "</td> <td>",
  b,
  "</td> <td>",
  !a,
  "</td> <td>",
  a && b,
  "</td> <td>",
  a || b,
  "</td></tr>"
);
document.writeln("</table>");
