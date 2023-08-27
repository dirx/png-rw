import { type Chunk, ChunkType, type ICCP } from '../data-types.ts'
import { createChunk } from '../png.ts'
import { Writer } from '../../buffer/writer.ts'
import { Reader } from '../../buffer/reader.ts'

export function pngReadICCP (chunk: Chunk): ICCP {
  const reader = new Reader(chunk.data)

  return {
    name: reader.getNullTerminatedByteString(), // latin-1
    compressionMethod: reader.getUint8(),
    profileDeflated: reader.get()
  }
}

export function pngWriteICCP (content: ICCP): Chunk {
  const data = new Uint8Array(content.name.length + 2 + content.profileDeflated.byteLength)
  const writer = new Writer(data)

  writer.setNullTerminatedByteString(content.name)
  writer.setUint8(content.compressionMethod)
  writer.set(content.profileDeflated)

  return createChunk(ChunkType.ICCP, data)
}
