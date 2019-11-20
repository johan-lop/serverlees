export function calculateCost(storage) {
    const rate = storage <= 10
        ? 12000
        : storage <= 100
            ? 6000
            : 3000;

    return rate * storage * 100;
}