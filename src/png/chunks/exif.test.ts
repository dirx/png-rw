import { expect, test } from 'vitest'
import { pngRead } from '../png.ts'
import { type Chunk, ChunkType } from '../data-types.ts'
import { readFileSync } from 'fs'
import { pngWriteEXIF } from './exif.ts'
import { Ifd, IfdId, IfdTag } from '../../exif/ifd.ts'
import { TagExifId, TagIFD0Id } from '../../exif/tags.ts'
import { Rational, Short, Undefined } from '../../exif/data-types.ts'
import { stringEncode } from '../string.ts'

const referenceImage = readFileSync(process.cwd() + '/resources/png-rw-reference.png')
const referenceImageData = new Uint8Array(referenceImage)

test('encode eXIf chunk should be same like reference chunk', () => {
  const referenceChunk = pngRead(referenceImageData).filter((chunk) => chunk.type === ChunkType.EXIF).at(0) as Chunk

  const chunk = pngWriteEXIF({
    ifd0: new Ifd(
      IfdId.FIRST,
      [
        new IfdTag(TagIFD0Id.XResolution, new Rational([72, 1])),
        new IfdTag(TagIFD0Id.YResolution, new Rational([72, 1])),
        new IfdTag(TagIFD0Id.ResolutionUnit, new Short(2)),
        new IfdTag(TagIFD0Id.YCbCrPositioning, new Short(1))
      ],
      [
        new Ifd(IfdId.EXIF,
          [
            new IfdTag(TagExifId.ExifVersion, new Undefined(stringEncode('0232'))),
            new IfdTag(TagExifId.ComponentsConfiguration, new Undefined(new Uint8Array([1, 2, 3, 0]))),
            new IfdTag(TagExifId.FlashpixVersion, new Undefined(stringEncode('0100'))),
            new IfdTag(TagExifId.ColorSpace, new Short(0xffff)),
            new IfdTag(TagExifId.ExifImageWidth, new Short(200)),
            new IfdTag(TagExifId.ExifImageHeight, new Short(200))
          ]
        )
      ]
    )
  })

  expect(chunk).toStrictEqual(referenceChunk)
})
