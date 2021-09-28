import re  # Regular Expression - RegEx

endereco = "Avenida Brasil da Moca 987, 10000100, Casa, Centro, Buntabo, SP"

# 5 dígitos + hífen (opcional) + 3 dígitos
padrao = re.compile(
    "[0123456789][0123456789][0123456789][0123456789][0123456789][-]?[0123456789][0123456789]")
busca = padrao.search(endereco)  # Match or return None

if busca:
    cep = busca.group()
    print(cep)
