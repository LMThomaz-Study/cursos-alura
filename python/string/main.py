print('\n******************')

url = "https://bytebank.com/cambio?moedaDestino=dolar&moedaOrigem=real"

indice_interrogacao = url.find("?")

url_base = url[0:indice_interrogacao]

url_parametros = url[indice_interrogacao + 1:]

parametro_busca = "moedaOrigem"
indice_parametro = url_parametros.find(parametro_busca)

indice_valor = indice_parametro + len(parametro_busca) + 1
valor = url_parametros[indice_valor:]
print(valor)

print('\n')
