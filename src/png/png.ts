import { type Chunk, ChunkType } from './data-types.ts'
import { isPNG, PNG_SIGNATURE } from './signature.ts'
import { Reader } from '../buffer/reader.ts'
import { Writer } from '../buffer/writer.ts'
import { stringDecode, stringEncode } from './string.ts'
import { crc32 } from './crc32.ts'

export function createChunk (type: ChunkType, data: Uint8Array): Chunk {
  const b = new Uint8Array(type.length + data.length)
  b.set(stringEncode(type))
  b.set(data, 4)
  return {
    size: data.length,
    type,
    typeData: b.subarray(0, 4),
    data: b.subarray(4),
    crc: crc32(b)
  }
}

export function pngRead (data: Uint8Array): Chunk[] {
  if (!isPNG(data)) {
    throw Error('not a png')
  }

  const reader = new Reader(data)

  reader.skipOffset(PNG_SIGNATURE.byteLength)

  const chunks: Chunk[] = []
  while (data.length > reader.offset) {
    const size = reader.getUint32()
    const typeData = reader.get(4)
    const chunkData = reader.get(size)
    const crc = reader.getUint32()
    chunks.push({
      size,
      type: stringDecode(typeData) as ChunkType,
      typeData,
      data: chunkData,
      crc
    })
  }

  return chunks
}

export function pngWrite (chunks: Chunk[]): Uint8Array {
  const size = chunks.map((c) => c.size + 12).reduce((pv, cv) => pv + cv, PNG_SIGNATURE.length)
  const data = new Uint8Array(size)
  const writer = new Writer(data)

  writer.set(PNG_SIGNATURE)

  const write = (chunk: Chunk): void => {
    writer.setUint32(chunk.size)
    writer.set(chunk.typeData)
    writer.set(chunk.data)
    writer.setUint32(chunk.crc)
  }

  // write IHDR first, then all except IHDR, IDAT and IEND, then IDAT, then IEND
  chunks.filter((chunk) => chunk.type === ChunkType.IHDR).forEach((chunk) => { write(chunk) })
  chunks.filter((chunk) => ![ChunkType.IHDR, ChunkType.IDAT, ChunkType.IEND].includes(chunk.type)).forEach((chunk) => { write(chunk) })
  chunks.filter((chunk) => chunk.type === ChunkType.IDAT).forEach((chunk) => { write(chunk) })
  chunks.filter((chunk) => chunk.type === ChunkType.IEND).forEach((chunk) => { write(chunk) })

  return data
}
