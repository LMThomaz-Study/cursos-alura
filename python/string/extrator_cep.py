import re  # Regular Expression - RegEx

endereco = "Avenida Brasil da Moca 987, 10000-100, Casa, Centro, Buntabo, SP"

# 5 dígitos de 0 até 9 + hífen (opcional) + 3 dígitos de 0 até 9
# padrao = re.compile("[0-9]{5}[-]?[0-9]{3}")
padrao = re.compile("[0-9]{5}[-]{0,1}[0-9]{3}")

busca = padrao.search(endereco)  # Match or return None

if busca:
    cep = busca.group()
    print(cep)
