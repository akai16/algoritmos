def insertSort(array):

    i = 1
    while i < len(array):

        key = array[i]
        j = i -1

        while j >=0 and array[j] > key:
            array[j + 1] = array[j]
            j -= 1

        array[j + 1] = key
        i += 1
        
    return array

if __name__ == "__main__":

    exampleArr = [1, 8, 4, 5, 9, 0, 2, 3, 7, 6] 
    print(f'Array Desordenado: {exampleArr}')
    print(f'Array Ordernado: {insertSort(exampleArr)}')