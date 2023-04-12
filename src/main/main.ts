import readline from 'readline'

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question (text: string) {
    return new Promise(resolve => 
        terminal.question(`${text}`, resolve)
    )
} 

async function main () {
    console.log('\x1b[33m Welcome \x1b[0m \n')
    const name = await question(`What's your name ?  `)
    const age = await question(`How old are you ?    `)
    console.log(`Name: ${name} - Age: ${age}`)
    terminal.close()
}

main();
