import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):

    file = txt_importer(path_file)
    data = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(file),
        "linhas_do_arquivo": file,
    }

    for file in range(len(instance)):
        if instance.search(file)["nome_do_arquivo"] == path_file:
            return "arquivos iguais na queue"
    instance.enqueue(data)
    return print(data, file=sys.stdout)


def remove(instance):

    if not len(instance):
        return print("Não há elementos", file=sys.stdout)

    file_txt = instance.dequeue()
    if file_txt:
        return print(
            f"Arquivo {file_txt['nome_do_arquivo']} removido com sucesso",
            file=sys.stdout
        )


def file_metadata(instance, position):
    try:
        file = instance.search(position)
        return print(file, file=sys.stdout)
    except IndexError:
        print("Posição inválida", file=sys.stderr)
