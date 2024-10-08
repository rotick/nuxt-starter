import { promises as fs } from 'node:fs'
import stringify from 'json-stringify-pretty-compact'
import en from '../locales/en.json'
import zh from '../locales/zh-hans.json'
import index from '../locales'
import { localePrompt } from './prompts'
import { chatGPT } from './openAI'

const getDiffKeys = (obj1: any, obj2: any) => {
  return Object.keys(obj2).reduce((diff: any, key) => {
    // eslint-disable-next-line
    if (!obj1.hasOwnProperty(key)) {
      diff[key] = obj2[key]
    }
    return diff
  }, {})
}
async function main(lang: string) {
  const file = `./locales/${lang}.json`
  let exists: Record<string, any> = {}
  try {
    const existsStr = await fs.readFile(file, { encoding: 'utf-8' })
    exists = JSON.parse(existsStr)
  }
  catch (e: any) {
    console.log(`read error：${e.message}`)
  }
  const enDiff = getDiffKeys(exists, en)
  const zhDiff = getDiffKeys(exists, zh)
  if (!Object.keys(enDiff).length || !Object.keys(zhDiff).length) return

  const prompt = localePrompt(enDiff, zhDiff, lang)
  console.log(lang)
  // console.log(prompt)
  const res: any = await chatGPT(prompt)
  console.log(`tokens: ${res.usage.total_tokens} (${res.usage.prompt_tokens} + ${res.usage.completion_tokens})`)
  const data = JSON.parse(res.choices[0].message.content)
  for (const key in data) {
    exists[key] = data[key]
  }

  await fs.writeFile(`./locales/${lang}.json`, stringify(exists))
}

// const badResult = ['da', 'fi', 'he', 'hu', 'id', 'it', 'th', 'tr'].map(lang => ({ code: lang }))
async function go() {
  for (const l of index) {
    if (l.code !== 'en' && l.code !== 'zh-hans') {
      await main(l.code)
    }
  }
}

go()
