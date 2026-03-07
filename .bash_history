echo -n "MySeed123-nonce1" | sha256sum
# Imagine 'seed123' is the server seed and '101' is the Match ID (Nonce)
echo -n "seed123-101" | sha256sum
# Now see how much the result changes for the next match (Nonce 102)
echo -n "seed123-102" | sha256sum
npx localtonet http --to 8080
pkg install cloudflared
cloudflared tunnel --url http://localhost:8080
npx localtonet http --to 8080
pkg install npx
pkg install nodejs
