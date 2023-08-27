import { IoBuffer } from './io-buffer.ts'
import { ByteOrder } from './data-types.ts'

export class Writer extends IoBuffer {
  protected textEncoder: TextEncoder

  constructor (public data: Uint8Array, public readonly byteOrder: ByteOrder = ByteOrder.BIG_ENDIAN) {
    super(data, byteOrder)
    this.textEncoder = new TextEncoder()
  }

  public setUint8 (value: number): void {
    this.view.setUint8(this._offset, value)
    this._offset += 1
  }

  public setInt8 (value: number): void {
    this.view.setInt8(this._offset, value)
    this._offset += 1
  }

  public setUint16 (value: number): void {
    this.view.setUint16(this._offset, value, this.littleEndian)
    this._offset += 2
  }

  public setInt16 (value: number): void {
    this.view.setInt16(this._offset, value, this.littleEndian)
    this._offset += 2
  }

  public setUint32 (value: number): void {
    this.view.setUint32(this._offset, value, this.littleEndian)
    this._offset += 4
  }

  public setInt32 (value: number): void {
    this.view.setInt32(this._offset, value, this.littleEndian)
    this._offset += 4
  }

  public setFloat32 (value: number): void {
    this.view.setFloat32(this._offset, value, this.littleEndian)
    this._offset += 4
  }

  public setFloat64 (value: number): void {
    this.view.setFloat64(this._offset, value, this.littleEndian)
    this._offset += 8
  }

  public set (data: Uint8Array): void {
    this.data.set(data, this._offset)
    this._offset += data.byteLength
  }

  public setNullTerminatedByteString (value: string): void {
    this.setString(value + '\0')
  }

  public setString (value: string): void {
    this.set(this.textEncoder.encode(value))
  }
}
