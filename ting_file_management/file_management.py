import sys


def txt_importer(path_file):
    try:
        if path_file[len(path_file) - 4:] != ".txt":
            return print("Formato inválido", file=sys.stderr)

        with open(path_file) as file:
            lines = file.read()
            return lines.split("\n")
    except FileNotFoundError:
        print(f"Arquivo {path_file} não encontrado", file=sys.stderr)
