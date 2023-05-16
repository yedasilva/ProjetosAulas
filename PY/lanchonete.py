import json

REGISTRO = {}
# REGISTRO = {
#     'X-salada': [4, 1, 6], 
#     'bob': [4, 1], 
#     'carl': [2, 5, 6]
# }

VALORES = []


def carregar_valores():
    with open('menu-opcoes.json', 'r') as file:
        dados = json.load(file)

    for chave, valor in dados.items():
        VALORES.append(valor)

carregar_valores()



def carregar_menu():
    print('\n --- MENU LANCHONETE --- ')
    with open('menu-opcoes.json', 'r') as file:
        dados = json.load(file)

    count = 1
    for chave, valor in dados.items():
        print(count, '--', chave, ': R$', valor)
        count = count + 1
    print('99 - fim!')
    op = input('digite opcao:')
    op = int(op)
    return op

def fazer_pedido():
    pedido_cliente = []
    while True:
        op = carregar_menu()
        if op == 99: break
        pedido_cliente.append( op )
    nome = input('agora digite seu nome:')
    REGISTRO[nome] = pedido_cliente
    print('obrigado, aguarde...')


def total_pedido():
    for cli, pedido in REGISTRO.items():
        total_cli = 0
        for num in pedido:
            num = num - 1
            total_cli = total_cli + VALORES[num]
        print('cliente:', cli, 'R$', total_cli)


def total_xsalada():
    contador = 0
    for nome, ped in REGISTRO.items():
        for nprod in ped:
            if nprod == 1:
                contador = contador + 1

    print('Total x-salada vendido hoje:', contador)

def principal():
    for i in range(3):
        fazer_pedido()

    print('registro:', REGISTRO)

    total_pedido()
    total_xsalada()


def mytest():
    total_xsalada()
    total_pedido()