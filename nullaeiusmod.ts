function printObjectKeyAndValue<T>(obj: T, key: keyof T): void {
  const value = obj[key];
  console.log(`${String(key)}: ${value}`);
}

// Example usage:
const exampleObject = { name: 'Copilot', version: '1.0' };
printObjectKeyAndValue(exampleObject, 'name');
