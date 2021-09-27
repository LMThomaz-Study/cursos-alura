print('\n******************')
# url = "https://bytebank.com/cambio?quantidade=100&moedaDestino=dolar&moedaOrigem=real"
url = ""
# Sanitização da URL
url = url.replace(" ", "")


# Validação da URL
if url == "":
    raise ValueError("URL não informada")

# Separa base e os parâmetros
indice_interrogacao = url.find("?")
url_base = url[0:indice_interrogacao]
url_parametros = url[indice_interrogacao + 1:]


# Busca o valor de um parâmetro
parametro_busca = "moedaDestino"
indice_parametro = url_parametros.find(parametro_busca)
indice_valor = indice_parametro + len(parametro_busca) + 1
indice_e_comercial = url_parametros.find("&", indice_valor)

if indice_e_comercial == -1:
    valor = url_parametros[indice_valor:]
else:
    valor = url_parametros[indice_valor:indice_e_comercial]

print(valor)

print('\n******************')
