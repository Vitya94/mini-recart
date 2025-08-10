FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 4173

CMD ["pnpm", "exec", "serve", "-s", "dist", "-l", "4173"]