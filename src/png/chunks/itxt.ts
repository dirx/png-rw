import { type Chunk, ChunkType, type ITXT } from '../data-types.ts'
import { Writer } from '../../buffer/writer.ts'
import { Reader } from '../../buffer/reader.ts'
import { createChunk } from '../png.ts'

export function pngReadITXT (chunk: Chunk): ITXT {
  const reader = new Reader(chunk.data)

  return {
    key: reader.getNullTerminatedByteString(),
    compressionFlag: reader.getUint8() !== 0,
    compressionMethod: reader.getUint8(),
    languageTag: reader.getNullTerminatedByteString(),
    translatedKey: reader.getNullTerminatedByteString(),
    value: reader.getString()
  }
}

export function pngWriteITXT (content: ITXT): Chunk {
  const data = new Uint8Array(content.key.length + 1 + 2 + content.languageTag.length + 1 + content.translatedKey.length + 1 + content.value.length)
  const writer = new Writer(data)

  writer.setNullTerminatedByteString(content.key)
  writer.setUint8(content.compressionFlag ? 1 : 0)
  writer.setUint8(content.compressionMethod)
  writer.setNullTerminatedByteString(content.languageTag)
  writer.setNullTerminatedByteString(content.translatedKey)
  writer.setString(content.value)

  return createChunk(ChunkType.ITXT, data)
}
