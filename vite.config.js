import react from '@vitejs/plugin-react'

const isCodeSandbox = !!process.env.SANDBOX_URL

export default {
    plugins:
    [
        react()
    ],
    root: "src/",
    publicDir: "../public/",
    base: "./",
    server:
    {
        host: false, // host mishe network zad site omad bala local host
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: "../dist",
        emptyOutDir: true,
        sourcemap: true
    }
}