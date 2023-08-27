import { ByteOrder } from './data-types.ts'

export abstract class IoBuffer {
  protected view: DataView
  protected _offset: number
  protected offsets: number[]
  protected readonly littleEndian: boolean

  constructor (public data: Uint8Array, public readonly byteOrder: ByteOrder = ByteOrder.BIG_ENDIAN) {
    this.littleEndian = ByteOrder.LITTLE_ENDIAN === byteOrder
    this.view = new DataView(data.buffer, data.byteOffset, data.byteLength)
    this._offset = 0
    this.offsets = []
  }

  public get offset (): number {
    return this._offset
  }

  public pushOffset (offset: number): void {
    this.offsets.push(this._offset)
    this._offset = offset
  }

  public popOffset (): number {
    const offset = this.offsets.pop()
    if (offset === undefined) {
      throw new Error('pop offset failed')
    }
    const currentOffset = this._offset
    this._offset = offset
    return currentOffset
  }

  public skipOffset (bytesLength: number): void {
    this._offset += bytesLength
  }
}
