# QUOTES CLI

Bermain dengan module fs (FileSystem) Untuk Mensimulasikan Menambahkan, Menghapus, Menampilkan, Menampilkan dengan ID Tertentu dengan menggunakan process Object.

## Commands
- `npm run start read`  
- `npm run start add "quote content" "author"`  
- `npm run start search "keyword"`  
- `npm run start delete <id>`  
- `npm run start show <id>`  
- `npm run start stats [author]`

## Data Format & Store
Data Tersimpan di `./data/quotes/json`

## Example
```bash
node index.js add "Lets Dive in!" "FelienZ"
node index.js read
```
```json
Output : (read)
{
    "id": 4,
    "text": "Lets Dive in!",
    "author": "FelienZ"
}
```