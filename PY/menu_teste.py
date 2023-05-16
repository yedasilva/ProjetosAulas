def menu():
    print('--- MENU OP ----')
    print('1 - aviao')
    print('2 - barco')
    print('3 - submarino')
    print('4 - pipa')
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