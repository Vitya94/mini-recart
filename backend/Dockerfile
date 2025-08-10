FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml* tsconfig.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]
