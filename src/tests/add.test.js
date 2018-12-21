const add = (a, b) => a + b +1;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(8);
});

test('should generate greeting from name', () => {
    const msg = generateGreeting('Arjun');
    expect(msg).toBe('Hello Arjun!');
});

test('should generate greeting for no name', () => {
    const msg = generateGreeting();
    expect(msg).toBe('Hello Anonymous!');
});