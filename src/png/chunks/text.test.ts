import { expect, test } from 'vitest'
import { type Chunk, ChunkType } from '../data-types.ts'
import { readFileSync } from 'fs'
import { pngRead } from '../png.ts'
import { pngReadTEXT, pngWriteTEXT } from './text.ts'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

test('write tEXt chunk should match reference chunk', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.TEXT).at(0)

  const chunk = pngWriteTEXT({
    key: 'Comment',
    value: 'ein bisschen'
  })

  expect(chunk).toStrictEqual(referenceChunk)
})

test('read tEXt reference chunk should match tEXt object', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.TEXT).at(0) as Chunk

  const tEXt = pngReadTEXT(referenceChunk)

  expect(tEXt).toStrictEqual({
    key: 'Comment',
    value: 'ein bisschen'
  })
})
