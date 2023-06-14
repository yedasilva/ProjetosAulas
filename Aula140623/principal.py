


#from banco import
import banco

produtos=banco.consulta_produtos()

for prod in produtos:
    print('produto retornado:', prod)