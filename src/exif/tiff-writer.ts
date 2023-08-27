import { Writer } from '../buffer/writer.ts'
import { ByteOrder } from '../buffer/data-types.ts'

export const BYTE_ORDER: Record<ByteOrder, number> = {
  [ByteOrder.LITTLE_ENDIAN]: 0x4949, // II
  [ByteOrder.BIG_ENDIAN]: 0x4d4d // MM
}
export const BYTE_ORDER_SIZE = 2
export const TIFF_HEADER = 0x002a
export const TIFF_HEADER_SIZE = 2

export class TiffWriter extends Writer {
  private _endOffset: number

  public constructor (public data: Uint8Array, public readonly byteOrder: ByteOrder = ByteOrder.BIG_ENDIAN) {
    super(data, byteOrder)
    this._endOffset = 0
  }

  public get endOffset (): number {
    return this._endOffset
  }

  public skipEndOffset (bytesLength: number): void {
    this._endOffset += bytesLength
  }

  public pushEndOffset (): void {
    this.pushOffset(this._endOffset)
  }

  public popEndOffset (): number {
    this._endOffset = this.popOffset()
    return this._endOffset
  }

  public byte (value: number): void {
    this.setUint8(value)
  }

  public sByte (value: number): void {
    this.setInt8(value)
  }

  public short (value: number): void {
    this.setUint16(value)
  }

  public sShort (value: number): void {
    this.setInt16(value)
  }

  public long (value: number): void {
    this.setUint32(value)
  }

  public sLong (value: number): void {
    this.setInt32(value)
  }

  public float (value: number): void {
    this.setFloat32(value)
  }

  public double (value: number): void {
    this.setFloat64(value)
  }

  public rational (numerator: number, denominator: number): void {
    this.setUint32(numerator)
    this.setUint32(denominator)
  }

  public sRational (numerator: number, denominator: number): void {
    this.setInt32(numerator)
    this.setInt32(denominator)
  }

  public ascii (value: string): void {
    this.setNullTerminatedByteString(value)
  }
}
