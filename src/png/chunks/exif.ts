import { type Chunk, ChunkType, type EXIF } from '../data-types.ts'
import { createChunk } from '../png.ts'
import { exifWrite } from '../../exif/exif.ts'

export function pngWriteEXIF (content: EXIF): Chunk {
  return createChunk(ChunkType.EXIF, exifWrite(content.ifd0))
}
