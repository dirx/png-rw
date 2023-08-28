import { expect, test } from 'vitest'
import { type Chunk, ChunkType, IHDRColorType, IHDRCompressionType, IHDRFilterMethod, IHDRInterlaceType } from '../data-types.ts'
import { readFileSync } from 'fs'
import { pngRead } from '../png.ts'
import { pngReadIHDR, pngWriteIHDR } from './ihdr.ts'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

test('encode IHDR chunk should be same like reference chunk', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.IHDR && pngReadIHDR(chunk)).at(0)

  const chunk = pngWriteIHDR({
    imageWidth: 200,
    imageHeight: 200,
    bitDepth: 8,
    colorType: IHDRColorType.RGB_ALPHA,
    compressionType: IHDRCompressionType.DEFLATE,
    filterMethod: IHDRFilterMethod.ADAPTIVE,
    interlaceType: IHDRInterlaceType.NONE
  })

  expect(chunk).toStrictEqual(referenceChunk)
})

test('decode IHDR reference chunk should match IHDR object', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.IHDR && pngReadIHDR(chunk)).at(0) as Chunk

  const IHDR = pngReadIHDR(referenceChunk)

  expect(IHDR).toStrictEqual({
    imageWidth: 200,
    imageHeight: 200,
    bitDepth: 8,
    colorType: IHDRColorType.RGB_ALPHA,
    compressionType: IHDRCompressionType.DEFLATE,
    filterMethod: IHDRFilterMethod.ADAPTIVE,
    interlaceType: IHDRInterlaceType.NONE
  })
})
