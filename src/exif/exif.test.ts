import { describe, expect, test } from 'vitest'
import { exifWriteIFDTagValue } from './exif.ts'
import { Ascii, Byte, Double, Float, Long, Rational, SByte, Short, SLong, SRational, SShort, Undefined } from './data-types.ts'
import { TiffWriter } from './tiff-writer.ts'
import { ByteOrder } from '../buffer/data-types.ts'

describe('exifWriteIDFTageValue byte', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(1)
    exifWriteIFDTagValue(
      new Byte(13),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    expect(data).toStrictEqual(new Uint8Array([13]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(1)
    exifWriteIFDTagValue(
      new Byte(13),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    expect(data).toStrictEqual(new Uint8Array([13]))
  })
})

describe('exifWriteIDFTageValue sbyte', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(1)
    exifWriteIFDTagValue(
      new SByte(-13),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    expect(data).toStrictEqual(new Uint8Array([243]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(1)
    exifWriteIFDTagValue(
      new SByte(-13),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    expect(data).toStrictEqual(new Uint8Array([243]))
  })
})

describe('exifWriteIDFTageValue short', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(2)
    exifWriteIFDTagValue(
      new Short(0x64FF),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php on little endian: print_r(unpack("C*", strrev(pack("s", 0x64FF))));
    expect(data).toStrictEqual(new Uint8Array([100, 255]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(2)
    exifWriteIFDTagValue(
      new Short(0x64FF),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php on little endian: print_r(unpack("C*", strrev(pack("s", 0x64FF))));
    expect(data).toStrictEqual(new Uint8Array([255, 100]))
  })
})

describe('exifWriteIDFTageValue sshort', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(2)
    exifWriteIFDTagValue(
      new SShort(-0x64FF),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("v", -0x64FF)));
    expect(data).toStrictEqual(new Uint8Array([155, 1]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(2)
    exifWriteIFDTagValue(
      new SShort(-0x64FF),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("n", -0x64FF)));
    expect(data).toStrictEqual(new Uint8Array([1, 155]))
  })
})

describe('exifWriteIDFTageValue long', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(4)
    exifWriteIFDTagValue(
      new Long(0x646566FF),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("N", 0x646566FF)));
    expect(data).toStrictEqual(new Uint8Array([100, 101, 102, 255]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(4)
    exifWriteIFDTagValue(
      new Long(0x646566FF),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("V", 0x646566FF)));
    expect(data).toStrictEqual(new Uint8Array([255, 102, 101, 100]))
  })
})

describe('exifWriteIDFTageValue slong', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(4)
    exifWriteIFDTagValue(
      new SLong(-0x646566FF),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php on little endian: print_r(unpack("C*", strrev(pack("l", -0x646566FF))));
    expect(data).toStrictEqual(new Uint8Array([155, 154, 153, 1]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(4)
    exifWriteIFDTagValue(
      new SLong(-0x646566FF),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php on little endian:  print_r(unpack("C*", pack("l", -0x646566FF)));
    expect(data).toStrictEqual(new Uint8Array([1, 153, 154, 155]))
  })
})

describe('exifWriteIDFTageValue float', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(4)
    exifWriteIFDTagValue(
      new Float(1.23456789),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("G", 1.23456789)));
    expect(data).toStrictEqual(new Uint8Array([63, 158, 6, 82]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(4)
    exifWriteIFDTagValue(
      new Float(1.23456789),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("g", 1.23456789)));
    expect(data).toStrictEqual(new Uint8Array([82, 6, 158, 63]))
  })
})

describe('exifWriteIDFTageValue double', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(8)
    exifWriteIFDTagValue(
      new Double(1.234567891234567),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("E", 1.234567891234567)));
    expect(data).toStrictEqual(new Uint8Array([63, 243, 192, 202, 66, 216, 180, 215]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(8)
    exifWriteIFDTagValue(
      new Double(1.234567891234567),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php: print_r(unpack("C*", pack("e", 1.234567891234567)));
    expect(data).toStrictEqual(new Uint8Array([215, 180, 216, 66, 202, 192, 243, 63]))
  })
})

describe('exifWriteIDFTageValue rational', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(8)
    exifWriteIFDTagValue(
      new Rational([0x646566FF, 0x6768696A]),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php: print_r(array_merge(unpack("C*", pack("N", 0x646566FF)), unpack("C*", pack("N", 0x6768696A))));
    expect(data).toStrictEqual(new Uint8Array([100, 101, 102, 255, 103, 104, 105, 106]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(8)
    exifWriteIFDTagValue(
      new Rational([0x646566FF, 0x6768696A]),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php: print_r(array_merge(unpack("C*", pack("V", 0x646566FF)), unpack("C*", pack("V", 0x6768696A))));
    expect(data).toStrictEqual(new Uint8Array([255, 102, 101, 100, 106, 105, 104, 103]))
  })
})

describe('exifWriteIDFTageValue srational', () => {
  test('with byte order big endian should encode correctly', () => {
    const data = new Uint8Array(8)
    exifWriteIFDTagValue(
      new SRational([-0x646566FF, -0x6768696A]),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    // php on little endian: print_r(array_merge(unpack("C*", strrev(pack("l", -0x646566FF))), unpack("C*", strrev(pack("l", -0x6768696A)))))
    expect(data).toStrictEqual(new Uint8Array([155, 154, 153, 1, 152, 151, 150, 150]))
  })

  test('with byte order little endian should encode correctly', () => {
    const data = new Uint8Array(8)
    exifWriteIFDTagValue(
      new SRational([-0x646566FF, -0x6768696A]),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    // php on little endian: print_r(array_merge(unpack("C*", pack("l", -0x646566FF)), unpack("C*", pack("l", -0x6768696AA))));
    expect(data).toStrictEqual(new Uint8Array([1, 153, 154, 155, 150, 150, 151, 152]))
  })
})

describe('exifWriteIDFTageValue ascii', () => {
  test('with byte order big endian should encode correctly', () => {
    const value: string = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    const data = new Uint8Array(value.length + 1)
    exifWriteIFDTagValue(
      new Ascii(value),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    expect(data)
      .toStrictEqual(new Uint8Array([
        // @formatter:off
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 0
        // @formatter:on
      ]))
  })

  test('with byte order little endian should encode correctly', () => {
    const value: string = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    const data = new Uint8Array(value.length + 1)
    exifWriteIFDTagValue(
      new Ascii(value),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    expect(data)
      .toStrictEqual(new Uint8Array([
        // @formatter:off
        32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 0
        // @formatter:on
      ]))
  })
})

describe('exifWriteIDFTageValue undefined', () => {
  test('with byte order big endian should encode correctly', () => {
    const value = new Uint8Array([1, 34, 46, 234, 213, 23, 87, 66, 65, 45])
    const data = new Uint8Array(value.length)
    exifWriteIFDTagValue(
      new Undefined(value),
      new TiffWriter(data, ByteOrder.BIG_ENDIAN)
    )

    expect(data)
      .toStrictEqual(new Uint8Array([
        // @formatter:off
        1, 34, 46, 234, 213, 23, 87, 66, 65, 45
        // @formatter:on
      ]))
  })

  test('with byte order little endian should encode correctly', () => {
    const value = new Uint8Array([1, 34, 46, 234, 213, 23, 87, 66, 65, 45])
    const data = new Uint8Array(value.length)
    exifWriteIFDTagValue(
      new Undefined(value),
      new TiffWriter(data, ByteOrder.LITTLE_ENDIAN)
    )

    expect(data)
      .toStrictEqual(new Uint8Array([
        // @formatter:off
        1, 34, 46, 234, 213, 23, 87, 66, 65, 45
        // @formatter:on
      ]))
  })
})
