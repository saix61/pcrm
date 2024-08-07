# Используем образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем все остальные файлы приложения
COPY . .

# Устанавливаем переменную окружения для порта
ENV PORT=8080

# Открываем порт
EXPOSE 8080

# Запускаем приложение
CMD ["npm", "run", "dev"]
