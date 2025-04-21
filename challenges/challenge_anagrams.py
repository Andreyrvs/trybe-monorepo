def is_anagram(first_string, second_string):

    list_1 = bubleSort(list(first_string.lower()))
    list_2 = bubleSort(list(second_string.lower()))

    # /**
    # * Consultei o repositório do Ronaldo Carlos [ronaferr]
    # * para resolver essa parte.
    # * Link do repositório:
    # * https://github.com/tryber/sd-020-a-project-algorithms/pull/19
    # */
    string1 = ''.join(list_1)
    string2 = ''.join(list_2)

    if string1 == "" or string2 == "":
        return (string1, string2, False)
    if string1 == string2:
        return (string1, string2, True)

    return (string1, string2, False)


def bubleSort(array):
    n = len(array)
    for ordered_elements in range(n - 1):
        for item in range(0, n - 1 - ordered_elements):
            if array[item] > array[item + 1]:
                current_element = array[item]
                array[item], array[item + 1] = array[item + 1], current_element

    return array
