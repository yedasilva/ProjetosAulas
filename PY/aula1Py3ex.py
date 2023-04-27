pi = input('Digite um número:')
print('Voce digitou ', pi)

pi = int(pi)
for i in range(0,50):
    
    if (i > 0 and i % pi == 0) or i % 10 == pi:
        print ("pi")
    else:
        print(i)
       