import Head from 'next/head'
import styles from './components/styles.module.css'
import Cod from './components/cod.module'

export default function Home() {
    if (typeof window !== 'undefined') {
        var form = window.document.getElementById('form')
        var mos = window.document.getElementById('mos')
        form.addEventListener("change", () => {
            mos.innerText = form.value
        })
    }
    const css = `
        .radius-normal {
            border-radius: 10px;
        }
    `
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <main className={styles.main}>
                <h1>Home</h1>
                <div id='mos'></div>
                <form id="form-en">
                    <textarea id="form"></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <style style="display: block; white-space: pre;" contenteditable="true">{css}</style>
            </main>
        </>
    )
}