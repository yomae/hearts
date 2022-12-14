def printHearts(count):
  if(count > 0):
    for i in range(count):
      for j in range(i+1):
        print("♡", end="")
      print('')
  elif(count < 0):
    count = -count;
    for i in range(count):
      for j in range(count-i):
        print("♡", end="")
      print('')
  else:
    return 0;

while(1):
  print("매개변수를 입력하세요");
  n = int(input())
  exit = printHearts(n);
  if(exit == 0):
    break