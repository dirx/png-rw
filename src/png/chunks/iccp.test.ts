import { expect, test } from 'vitest'
import { pngRead } from '../png.ts'
import { type Chunk, ChunkType } from '../data-types.ts'
import { readFileSync } from 'fs'
import { pngReadICCP, pngWriteICCP } from './iccp.ts'
import { ICCProfileDisplayP3CompatV4Deflated } from '../../icc/compact-profiles.ts'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

test('encode iCCP chunk should be same like reference chunk', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.ICCP).at(0)

  const chunk = pngWriteICCP({
    name: 'icm',
    compressionMethod: 0,
    profileDeflated: Uint8Array.from(atob(ICCProfileDisplayP3CompatV4Deflated), (v) => v.charCodeAt(0))
  })

  expect(chunk).toStrictEqual(referenceChunk)
})

test('decode iCCP reference chunk should match iCCP object', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.ICCP).at(0)

  const iCCP = pngReadICCP(referenceChunk as Chunk)

  expect(iCCP).toStrictEqual({
    name: 'icm',
    compressionMethod: 0,
    profileDeflated: Uint8Array.from(atob(ICCProfileDisplayP3CompatV4Deflated), (v) => v.charCodeAt(0))
  })
})
