import { TagIFD0SubOffsetId, type TagId, TagIdDataType } from './tags'
import type {
  Ascii,
  Byte,
  DataTypeId,
  Double,
  Float,
  Long,
  Rational,
  SByte,
  Short,
  SLong,
  SRational,
  SShort,
  Undefined
} from './data-types.ts'

export enum IfdId {
  FIRST = 0,
  THUMBNAIL = 1,
  EXIF = 2,
  GPS = 3,
  INTEROPERABILITY = 4,
}

export const IfdIdTagId: Partial<Record<IfdId, TagId>> = {
  [IfdId.EXIF]: TagIFD0SubOffsetId.ExifOffset,
  [IfdId.INTEROPERABILITY]: TagIFD0SubOffsetId.InteropOffset,
  [IfdId.GPS]: TagIFD0SubOffsetId.GPSInfo
}

export class Ifd {
  constructor (
    public id: IfdId,
    public tags: IfdTag[] = [],
    public subs: Ifd[] = []
  ) {
  }

  public get size (): number {
    return this.headerSize + this.dataSize
  }

  public get headerSize (): number {
    return 2 + 4 // count + next idf pos
  }

  public get dataSize (): number {
    // tags + tags for sub pointers (16) + subs
    return (
      this.tags.reduce((size, tag) => size + tag.size, 0) +
            this.subs.reduce((size, sub) => size + 12 + sub.size, 0)
    )
  }

  public get count (): number {
    return this.tags.length + this.subs.length
  }
}

export type IfdTagValue =
    | Short
    | SShort
    | Long
    | SLong
    | Float
    | Double
    | Byte
    | SByte
    | Rational
    | SRational
    | Ascii
    | Undefined

export class IfdTag {
  public static validate: boolean = true
  public dataType: DataTypeId

  constructor (public id: TagId, public value: IfdTagValue) {
    this.dataType = value.dataType
    if (IfdTag.validate && this.dataType !== TagIdDataType[this.id]) {
      throw new Error(`data type for provided value is ${this.dataType} instead ${TagIdDataType[this.id]} for tag id ${id}`)
    }
  }

  public get size (): number {
    return this.headerSize + this.dataSize
  }

  public get headerSize (): number {
    return 8 + (this.value.size > 4 ? 4 : 4 - this.value.size) // 4 offset for pointer or fill up to 4
  }

  public get dataSize (): number {
    return this.value.size
  }

  public get count (): number {
    return this.value.components.length
  }
}
