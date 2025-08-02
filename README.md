
# Interval repetition frontend

## Начало работы

В начале установите pnpm глобально в вашей системе

В системе Windows откройте PowerShell и выполните команду:
```bash
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

Далее установите зависимости проекта, используя команду:
```bash
pnpm install
```

Запустите сервер разработки:

```bash
npm run dev
```

Собрать приложение можно через команду:

```bash
npm run build
```

Запустить production версию приложения можно через команду:

```bash
npm run start
```

Добавить новые зависимости можно через использование следующей команды

```bash
pnpm add <some-package-name>
```