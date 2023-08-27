import { BYTE_ORDER, BYTE_ORDER_SIZE, TIFF_HEADER, TIFF_HEADER_SIZE, TiffWriter } from './tiff-writer.ts'
import type { Ifd, IfdTagValue } from './ifd'
import { IfdIdTagId, IfdTag } from './ifd'
import { Ascii, Byte, Double, Float, Long, Rational, SByte, Short, SLong, SRational, SShort } from './data-types.ts'
import { ByteOrder } from '../buffer/data-types.ts'

export function exifWrite (
  ifd0: Ifd,
  byteOrder: ByteOrder = ByteOrder.BIG_ENDIAN
): Uint8Array {
  const size = BYTE_ORDER_SIZE + TIFF_HEADER_SIZE + 4 + ifd0.size // bo + th + idf0 pointer + idf0
  const data = new Uint8Array(size)
  const writer = new TiffWriter(data, byteOrder)

  writer.short(BYTE_ORDER[byteOrder])
  writer.short(TIFF_HEADER)

  // set offset for first firstIfd
  writer.long(writer.offset + 4)
  writer.skipEndOffset(writer.offset)
  exifWriteIFD(ifd0, writer)

  if (writer.endOffset !== data.byteLength) {
    throw Error(`byteLength = ${data.byteLength} <> end offset = ${writer.endOffset} mismatch on writing exif data`)
  }

  return data
}

export function exifWriteIFD (ifd: Ifd, writer: TiffWriter, hasNext: boolean = false): void {
  // number of entries of tags and subs pointer tags
  writer.short(ifd.count)

  // every tag / ifd entry 12 + next idf pos 4
  writer.skipEndOffset(2 + ifd.count * 12 + 4)

  ifd.tags.forEach((tag) => {
    exifWriteIFDTag(tag, writer)
  })

  // // add offset pointer tags and subs
  ifd.subs.forEach((sub) => {
    const tagId = IfdIdTagId[sub.id]
    if (tagId === undefined) {
      throw new Error(`sub ifd id ${sub.id} not supported`)
    }
    exifWriteIFDTag(new IfdTag(tagId, new Long(writer.endOffset)), writer)
    writer.pushEndOffset()
    exifWriteIFD(sub, writer, false)
    writer.popEndOffset()
  })

  if (hasNext) {
    writer.long(writer.endOffset)
    return
  }

  writer.long(0)
}

export function exifWriteIFDTag (tag: IfdTag, writer: TiffWriter): void {
  writer.short(tag.id)
  writer.short(tag.dataType)
  writer.long(tag.count)

  if (tag.dataSize > 4) {
    writer.long(writer.endOffset) // write offset location of sub ifd
    writer.pushEndOffset()
    exifWriteIFDTagValue(tag.value, writer)
    writer.popEndOffset()
  } else {
    exifWriteIFDTagValue(tag.value, writer)
    if (tag.dataSize < 4) {
      // fill up with \0
      writer.set(new Uint8Array(4 - tag.dataSize))
    }
  }
}

export function exifWriteIFDTagValue (tagValue: IfdTagValue, writer: TiffWriter): void {
  if (tagValue instanceof SShort) {
    tagValue.components.forEach((component) => {
      writer.sShort(component)
    })
  } else if (tagValue instanceof Short) {
    tagValue.components.forEach((component) => {
      writer.short(component)
    })
  } else if (tagValue instanceof SLong) {
    tagValue.components.forEach((component) => {
      writer.sLong(component)
    })
  } else if (tagValue instanceof Long) {
    tagValue.components.forEach((component) => {
      writer.long(component)
    })
  } else if (tagValue instanceof Float) {
    tagValue.components.forEach((component) => {
      writer.float(component)
    })
  } else if (tagValue instanceof Double) {
    tagValue.components.forEach((component) => {
      writer.double(component)
    })
  } else if (tagValue instanceof Byte) {
    tagValue.components.forEach((component) => {
      writer.byte(component)
    })
  } else if (tagValue instanceof SByte) {
    tagValue.components.forEach((component) => {
      writer.sByte(component)
    })
  } else if (tagValue instanceof Rational) {
    tagValue.components.forEach(([component1, component2]) => {
      writer.rational(component1, component2)
    }
    )
  } else if (tagValue instanceof SRational) {
    tagValue.components.forEach(([component1, component2]) => {
      writer.sRational(component1, component2)
    }
    )
  } else if (tagValue instanceof Ascii) {
    tagValue.components.forEach((component) => {
      writer.ascii(component)
    })
  } else {
    writer.set(tagValue.components)
  }
}
