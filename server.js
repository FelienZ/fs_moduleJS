const fs = require('fs');
const path = require('path');
const [,,command, ...args] = process.argv;
const filePath = path.join(__dirname, './data/quotes.json');

function readQuotes(){
    const data = fs.readFileSync(filePath, 'utf-8');
    const quotes = JSON.parse(data)
    quotes.forEach(q => {
        console.log(q)
    })
}

function addQuote(text, author){
    const data = fs.readFileSync(filePath, 'utf-8');
    const quotes = JSON.parse(data)
    if(quotes.length > 0){
    const index = (quotes.length-1)
    const id = quotes[index].id + 1
    quotes.push({id, text, author})
    fs.writeFileSync('./data/quotes.json', JSON.stringify(quotes,null, 2))
    }else{
    quotes.push({id: 1, text, author})
    fs.writeFileSync('./data/quotes.json', JSON.stringify(quotes,null, 2))
    }
}

function search(kata){
    const data = fs.readFileSync(filePath, 'utf-8');
    const quotes = JSON.parse(data);
    const checker = quotes.find(q => (q.author.toLowerCase().includes(kata.toLowerCase())) || (q.quote.toLowerCase().includes(kata.toLowerCase())))
    if(checker) console.log(checker)
    else console.log('Not Found!')
    return;
}

function deletes(id){
    const data = fs.readFileSync(filePath, 'utf-8');
    let quotes = JSON.parse(data);
    const Change = quotes.filter(q => q.id !== Number(id));
    quotes = Change
    fs.writeFileSync('./data/quotes.json', JSON.stringify(quotes,null, 2))

}

function showById(id){
    const data = fs.readFileSync(filePath, 'utf-8');
    let quotes = JSON.parse(data);
    const checker = quotes.find(q=> q.id === id);
    if(checker){
        console.log(checker);
    }else{
        console.log('Data Tidak Ditemukan!')
    }
    return;
}

function stats(author){
    const data = fs.readFileSync(filePath, 'utf-8');
    let quotes = JSON.parse(data);
    const total = quotes.length;
    if(author !== undefined){
        const totalAuthor = quotes.map(q => q.author.toLowerCase() === author.toLowerCase())
        .reduce((total, i)=> total + i, 0);
        console.log(`Total Quotes: ${total}\nTotal Author: ${totalAuthor}`)
    }else{
        console.log(`Total Quotes: ${total}`)
    }
    return;
}

if(command === 'read'){
    readQuotes()
    return;
}
if(command === 'add'){
if (!args[0] || !args[1]) {
  console.log('Format salah. Gunakan: node index.js add "isi quote" "author"');
  return;
}
addQuote(...args)
}
if(command === 'search'){
    if(args.length > 0){
         search(args[0]);
         return;
    }else{
        console.log(`Harus 1 Keyword!`)
    }
}
if(command === 'delete'){
    if(args.length > 0){
        deletes(args[0])
    }else{
        console.log(`Harus Memasukkan ID`)
    }
}
if(command === 'show'){
    if(args.length > 0){
        showById(Number(args[0]))
    }else{
        console.log(`Masukkan ID!`)
    }
}
if(command === 'stats'){
    stats((args[0]))
}