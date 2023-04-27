import json

#registro = {}
REGISTRO = {
    "Ana": [4,1,6],
    "Bob": [1,6],
    "Carl": [2,3,5]
}

VALORES = []

def carregar_valores():
    with open('PY/menu-opcoes.json','r') as file:
        dados = json.load(file)
    print(dados)

    for chave, valor in dados.items():
        VALORES.append(valor)
carregar_valores()


def carregar_menu():
    with open('PY/menu-opcoes.json','r') as file:
        dados = json.load(file)
    print(dados)

    cont = 1
    for chave, valor in dados.items():
        print(cont, '--',chave, 'R$',valor)
        cont = cont+1
    print('99 - fim!')
    op = input ('digite uma opcao:')
    op = int(op)
    return op


carregar_menu()

def fazer_pedido():
    pedido_cliente = []
    while True:
        op = carregar_menu()
        if op == 99:break
        pedido_cliente.append(op)
    nome = input('Agora, digite seu nome:')
    REGISTRO[nome] = pedido_cliente
    print('Obrigada, aguarde...')

fazer_pedido()

def total_pedido():
    for cli, pedido in REGISTRO.items():
        total_cli = 0
        for num in pedido:
            num = num-1
            total_cli= total + VALORES[num]


def total_xsalada():
    contador = 0
    for nome, ped in registro.items():
        for nprod in ped:
            if nprod == 1:
                contador = contador + 1
    print('Total de x-salada vendido hoje:', contador)

def principal():
    for i in range(3):
        fazer_pedido()

    print ('registro:', registro)
    
    total_pedido()
    total_xsalada()