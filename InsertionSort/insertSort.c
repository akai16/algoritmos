#include <stdio.h>

// Stonks Learning
// Passing the array as a function parameter will lead to a pointer being passed
// In my system, a pointer is 8 bytes, so this function always returns 8 / 4 = 2
// It's advised to always pass a size_t parameter with the size of the array
// DONT USE THIS
int getArrayLength(int *array) {
    return sizeof(array)/sizeof(*array);
}

int* insertSort(int* array, size_t size) {

    int j;

    for(int i=1; i < size; i++){
        int key = array[i];

        j = i-1;
        while((j >= 0) && (array[j] > key)) {
            array[j + 1] = array[j];
            j = j -1;
        }

        array[j + 1] = key;
    }

    return array;
}

int main() {

    int array[10] = {1, 8, 4, 5, 9, 0, 2, 3, 7, 6};
    size_t arraySize = sizeof(array)/sizeof(array[0]);


    // Demonstrate Size Function error
    printf("Tamanho do array: %ld\n", sizeof(array));
    printf("Tamanho do Inteiro: %ld\n", sizeof(int));
    printf("[ERRADO] Número de elementos do array: %d\n", getArrayLength(array));
    printf("[CERTO] Número de elementos do array: %ld\n", arraySize);

    // Demonstrating insertionSort
    printf("\n\nArray Desordenado:");
    for (int i = 0; i < arraySize; i++) {
        printf(" %d", array[i]);
    }
    printf("\n");

    int* orderedArray = insertSort(array, arraySize);
    printf("\n\nArray Ordenado:");
    for (int i = 0; i < arraySize; i++) {
        printf(" %d", orderedArray[i]);
    }
    printf("\n");

    

    return 0;
}