# Usa imagem do Node
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Aceita argumento passado pelo docker-compose
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Copia dependências
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Build do Next (com a variável NEXT_PUBLIC_API_URL já setada)
RUN npm run build

# Expõe a porta do Next
EXPOSE 3000

# Inicia em modo produção
CMD ["npm", "run", "start"]