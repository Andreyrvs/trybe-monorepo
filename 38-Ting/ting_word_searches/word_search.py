
def exists_word(word, instance):
    find_word = list()
    word_lower = word.lower()

    for file_index in range(len(instance)):
        file = instance.search(file_index)

        data = {
            "palavra": word,
            "arquivo": file["nome_do_arquivo"],
            "ocorrencias": list(),
        }

        # /**
        # * Consultei o repositório do [João Marcelo] para resolver essa parte.
        # * Link do repositório:
        # * https://github.com/tryber/sd-020-a-project-ting/pull/9
        # */
        rows = 1
        for row in file["linhas_do_arquivo"]:
            if word_lower in row.lower():
                data["ocorrencias"].append({"linha": rows})

            rows += 1

        if len(data["ocorrencias"]) > 0:
            find_word.append(data)

    return find_word


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
