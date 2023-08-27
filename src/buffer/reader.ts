import { IoBuffer } from './io-buffer.ts'
import { ByteOrder } from './data-types.ts'

export class Reader extends IoBuffer {
  protected textDecoder: TextDecoder

  constructor (public data: Uint8Array, public readonly byteOrder: ByteOrder = ByteOrder.BIG_ENDIAN) {
    super(data, byteOrder)
    this.textDecoder = new TextDecoder()
  }

  public getUint8 (): number {
    const value = this.view.getUint8(this._offset)
    this._offset += 1
    return value
  }

  public getInt8 (): number {
    const value = this.view.getInt8(this._offset)
    this._offset += 1
    return value
  }

  public getUint16 (): number {
    const value = this.view.getUint16(this._offset, this.littleEndian)
    this._offset += 2
    return value
  }

  public getInt16 (): number {
    const value = this.view.getInt16(this._offset, this.littleEndian)
    this._offset += 2
    return value
  }

  public getUint32 (): number {
    const value = this.view.getUint32(this._offset, this.littleEndian)
    this._offset += 4
    return value
  }

  public getInt32 (): number {
    const value = this.view.getInt32(this._offset, this.littleEndian)
    this._offset += 4
    return value
  }

  public getFloat32 (): number {
    const value = this.view.getFloat32(this._offset, this.littleEndian)
    this._offset += 8
    return value
  }

  public getFloat64 (): number {
    const value = this.view.getFloat64(this._offset, this.littleEndian)
    this._offset += 8
    return value
  }

  public get (byteLength: number | undefined = undefined): Uint8Array {
    const end = byteLength === undefined ? undefined : this.offset + byteLength
    const value = this.data.subarray(this._offset, end)
    this._offset += value.byteLength
    return value
  }

  public getString (byteLength: number | undefined = undefined): string {
    return this.textDecoder.decode(this.get(byteLength))
  }

  public getNullTerminatedByteString (): string {
    const index = this.data.subarray(this._offset).findIndex((value) => value === 0)

    if (index === -1) {
      throw Error('null byte not found')
    }

    if (index === 0) {
      this._offset += 1
      return ''
    }

    const value = this.getString(index)
    this._offset += 1
    return value
  }
}
