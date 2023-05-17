def menu():
    print('--- MENU OP ----')
    print('1 - X-salada')
    print('2 - X-bacon')
    print('3 - coca-colaLata')
    print('4 - coca-cola600')
    print('5 - brigadeiro')
    print('6 - flanMorango')
    print('99 - fim!')
    op = input('digite op:')    
    op = int(op)
    print('vc digitou:', op)
    return op

def main():
    lista = []
    while True:
        print('\n\n-----')
        op = menu()
        if op == 99: break
        lista.append(op)

    soma=0
    for vlr in lista:
        soma = soma + vlr

    print(f'os valores somados sao: {soma}')


main()