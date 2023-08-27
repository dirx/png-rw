import { type Chunk, ChunkType, type TEXT } from '../data-types.ts'
import { createChunk } from '../png.ts'
import { Reader } from '../../buffer/reader.ts'
import { Writer } from '../../buffer/writer.ts'

export function pngReadTEXT (chunk: Chunk): TEXT {
  const reader = new Reader(chunk.data)

  return {
    key: reader.getNullTerminatedByteString(),
    value: reader.getString()
  }
}

export function pngWriteTEXT (content: TEXT): Chunk {
  const data = new Uint8Array(content.key.length + 1 + content.value.length)
  const writer = new Writer(data)

  writer.setNullTerminatedByteString(content.key)
  writer.setString(content.value)

  return createChunk(
    ChunkType.TEXT,
    data
  )
}
