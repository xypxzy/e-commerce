# Документация для E-Commerce проекта на React, TypeScript, Tailwind CSS, React Context и Vite

Добро пожаловать в документацию для E-Commerce проекта, разработанного с использованием технологий React, TypeScript, Tailwind CSS, React Context и сборщика Vite. В этой документации вы найдете описание основных компонентов, структуру проекта, инструкции по запуску и другую полезную информацию.
Для захода в логин можно использовать 
    Логин: mor_2314
    Пароль: 83r5^_

## Содержание

1. [Введение](#введение)
2. [Структура проекта](#структура-проекта)
3. [Установка](#установка)
4. [Конфигурация](#конфигурация)
5. [Компоненты](#компоненты)
6. [React Context](#react-context)
7. [Стилизация с Tailwind CSS](#стилизация-с-tailwind-css)
8. [Сборка и развертывание](#сборка-и-развертывание)
9. [Дополнительные ресурсы](#дополнительные-ресурсы)

## Введение

Данный E-Commerce проект разработан для предоставления платформы для онлайн-торговли. Проект построен на базе библиотеки React, использует TypeScript для статической типизации, Tailwind CSS для быстрой и гибкой стилизации, React Context для управления состоянием приложения и сборщика Vite для оптимизированной разработки.

## Установка

1. Клонируйте репозиторий:

```
git clone <URL репозитория>
```

2. Перейдите в директорию проекта:

```
cd <директория проекта>
```

3. Установите зависимости:

```
yarn 
```

## Конфигурация

- Конфигурация TypeScript находится в файле `tsconfig.json`.
- Конфигурация Vite находится в файле `vite.config.js`.

## Компоненты

Проект содержит набор переиспользуемых компонентов в директории `src/components`, таких как `Header`, `ProductCard` и другие. Эти компоненты могут быть настроены и расширены в соответствии с потребностями проекта.

## React Context

Для управления состоянием приложения используется React Context. Контекст для корзины находится в файле `src/context/`. Он обеспечивает доступ к состоянию корзины из любой части приложения.

## Стилизация с Tailwind CSS

Проект использует Tailwind CSS для быстрой и адаптивной стилизации. Файл `src/styles/tailwind.css` настроен для подключения стилей Tailwind.

## Сборка и развертывание

Для запуска проекта в режиме разработки используйте:

```
yarn dev
```

Для сборки проекта используйте:

```
yarn build
```

Полученные файлы сборки будут находиться в директории `dist/`.

## Дополнительные ресурсы

- [React документация](https://reactjs.org/docs/getting-started.html)
- [TypeScript документация](https://www.typescriptlang.org/docs/)
- [Tailwind CSS документация](https://tailwindcss.com/docs)
- [React Context документация](https://reactjs.org/docs/context.html)
- [Vite документация](https://vitejs.dev/)

## Заключение

Эта документация предоставила обзор E-Commerce проекта, разработанного с использованием React, TypeScript, Tailwind CSS, React Context и сборщика Vite. Следуйте инструкциям, чтобы установить, настроить и запустить проект на своей локальной машине.
