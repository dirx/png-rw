import { type Chunk, ChunkType, type IHDR, type IHDRBitDepth } from '../data-types.ts'
import { createChunk } from '../png.ts'
import { Reader } from '../../buffer/reader.ts'
import { Writer } from '../../buffer/writer.ts'

export function pngReadIHDR (chunk: Chunk): IHDR {
  const reader = new Reader(chunk.data)

  return {
    imageWidth: reader.getUint32(),
    imageHeight: reader.getUint32(),
    bitDepth: reader.getUint8() as IHDRBitDepth,
    colorType: reader.getUint8(),
    compressionType: reader.getUint8(),
    filterMethod: reader.getUint8(),
    interlaceType: reader.getUint8()
  }
}

export function pngWriteIHDR (content: IHDR): Chunk {
  const data = new Uint8Array(13)
  const writer = new Writer(data)

  writer.setUint32(content.imageWidth)
  writer.setUint32(content.imageHeight)
  writer.setUint8(content.bitDepth)
  writer.setUint8(content.colorType)
  writer.setUint8(content.compressionType)
  writer.setUint8(content.filterMethod)
  writer.setUint8(content.interlaceType)

  return createChunk(
    ChunkType.IHDR,
    data
  )
}
