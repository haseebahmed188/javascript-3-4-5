function greetUser(name) {
    return `Hello, ${name}! Welcome.`;
}
function main() {
    let user_name = prompt("Enter your name:");
    let greeting = greetUser(user_name);
    console.log(greeting);
}
main();