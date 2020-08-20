# gastroprocto.ru

sudo netstat -lpn |grep :'8090'

# for development
pm2 start npm --name "next" -- run dev

# for production
npm run build
pm2 start npm --name "next" -- start
