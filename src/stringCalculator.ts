export function stringCalculator(input: string): number {
    if (input === "") {
        return 0;
    }
    const numbers = input.match(/-?\d+/g);
    if (!numbers) {
        return 0;
    }
    return numbers.reduce((sum, num) => sum + parseFloat(num), 0);
}