# Usa imagem do Node
FROM node:18

# Diretório de trabalho no container
WORKDIR /app

# Copia arquivos de dependências
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia tudo
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Compila TypeScript
RUN npx tsc

# Expõe a porta do backend
EXPOSE 4000

# Comando para rodar
CMD ["node", "dist/index.js"]