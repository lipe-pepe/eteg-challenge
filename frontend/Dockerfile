# Usa imagem do Node
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia dependências
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Build do Next
RUN npm run build

# Expõe a porta do Next
EXPOSE 3000

# Inicia em modo produção
CMD ["npm", "run", "start"]