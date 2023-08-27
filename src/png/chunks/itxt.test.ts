import { expect, test } from 'vitest'
import { type Chunk, ChunkType } from '../data-types.ts'
import { readFileSync } from 'fs'
import { pngRead } from '../png.ts'
import { pngReadITXT, pngWriteITXT } from './itxt.ts'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

test('encode iTXt chunk should be same like reference chunk', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.ITXT && pngReadITXT(chunk).languageTag.startsWith('de-DE')).at(0)

  const chunk = pngWriteITXT({
    key: 'Comment',
    compressionFlag: false,
    compressionMethod: 0,
    languageTag: 'de-DE-swg',
    translatedKey: '',
    value: 'Muggeseggele'
  })

  expect(chunk).toStrictEqual(referenceChunk)
})

test('decode iTXt reference chunk should match iTXt object', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.ITXT && pngReadITXT(chunk).languageTag.startsWith('de-DE')).at(0) as Chunk

  const iTXt = pngReadITXT(referenceChunk)

  expect(iTXt).toStrictEqual({
    key: 'Comment',
    compressionFlag: false,
    compressionMethod: 0,
    languageTag: 'de-DE-swg',
    translatedKey: '',
    value: 'Muggeseggele'
  })
})
