def func1():
    teste = 'world'
    print('hello', teste)


def func2():
    op = input('digite opcao:')
    print('vc digitou:', op)

def func3():
    for tpm in range(5):
        print( 'teste', tpm)


lista = [1,2,3,'a','c', True]
print('lista:', lista)


for elem in lista:
    print('elemento:',elem)

for i in range(len(lista)):
    print ('i:', i)
    print('lista[i]:', lista[i])
