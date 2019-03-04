function selectSort(a: number[]): number[] {
    for (let i = 0; i < a.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j
            }
        }
        let temp = a[minIndex]
        a[minIndex] = a[i]
        a[i] = temp
    }
    return []
}