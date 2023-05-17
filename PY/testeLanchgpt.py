import json

def exibir_menu():
    with open('PY/menu.json') as file:
        menu = json.load(file)
        for opcao, preco in menu.items():
            print(f"{opcao}: R${preco:.2f}")

def registrar_pedido():
    pedido = []
    with open('PY/menu.json') as file:
        menu = json.load(file)
        while True:
            opcao = input("Digite o item do menu que deseja pedir (ou 'fim' para encerrar): ")
            if opcao == 'fim':
                break
            elif opcao not in menu:
                print("Opção inválida, por favor digite novamente.")
            else:
                quantidade = int(input("Digite a quantidade desejada: "))
                pedido.append({"opcao": opcao, "quantidade": quantidade, "preco_unitario": menu[opcao]})
    with open('pedidos.json', 'a') as file:
        json.dump(pedido, file)


def exibir_pedidos():
    with open('pedidos.json') as file:
        pedidos = json.load(file)
        for pedido in pedidos:
            print(f"{pedido['quantidade']}x {pedido['opcao']} - R${pedido['preco_unitario']:.2f} cada")

def main():
    while True:
        print("Escolha uma opção:")
        print("1. Ver menu")
        print("2. Registrar pedido")
        print("3. Ver pedidos")
        print("4. Sair")
        escolha = input("Digite o número da opção desejada: ")
        if escolha == '1':
            exibir_menu()
        elif escolha == '2':
            registrar_pedido()
        elif escolha == '3':
            exibir_pedidos()
        elif escolha == '4':
            break
        else:
            print("Opção inválida, por favor digite novamente.")

if __name__ == '__main__':
    main()
