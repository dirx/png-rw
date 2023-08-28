import { expect, test } from 'vitest'
import { readFileSync } from 'fs'
import { ChunkType } from './data-types.ts'
import { createChunk, pngRead, pngWrite } from './png.ts'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

test('read and write chunks should result in same image data', () => {
  const chunks = pngRead(referenceImageData)
  const imageData = pngWrite(chunks)

  expect(imageData).toStrictEqual(referenceImageData)
})

test('create chunk should be same like reference chunk', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.TEXT).at(0)

  const chunk = createChunk('tEXt' as ChunkType, new TextEncoder().encode('Comment\0ein bisschen'))

  expect(chunk).toStrictEqual(referenceChunk)
})
