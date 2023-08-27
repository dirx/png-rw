export enum DataTypeId {
  BYTE = 1,
  ASCII = 2,
  SHORT = 3,
  LONG = 4,
  RATIONAL = 5,
  SBYTE = 6,
  UNDEFINED = 7,
  SSHORT = 8,
  SLONG = 9,
  SRATIONAL = 10,
  FLOAT = 11,
  DOUBLE = 12,
}

export const DataTypeSize: Record<DataTypeId, number> = {
  [DataTypeId.BYTE]: 1,
  [DataTypeId.ASCII]: 1,
  [DataTypeId.SHORT]: 2,
  [DataTypeId.LONG]: 4,
  [DataTypeId.RATIONAL]: 8,
  [DataTypeId.SBYTE]: 1,
  [DataTypeId.UNDEFINED]: 1,
  [DataTypeId.SSHORT]: 2,
  [DataTypeId.SLONG]: 4,
  [DataTypeId.SRATIONAL]: 8,
  [DataTypeId.FLOAT]: 4,
  [DataTypeId.DOUBLE]: 8
}

export abstract class Numeric {
  public readonly dataType: DataTypeId = DataTypeId.UNDEFINED
  public components: number[]

  constructor (...components: number[]) {
    this.components = components
  }

  public get size (): number {
    return this.components.length * DataTypeSize[this.dataType]
  }
}

export class Byte extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.BYTE
}

export class SByte extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.SBYTE
}

export class Short extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.SHORT
}

export class SShort extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.SSHORT
}

export class Long extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.LONG
}

export class SLong extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.SLONG
}

export class Float extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.FLOAT
}

export class Double extends Numeric {
  public readonly dataType: DataTypeId = DataTypeId.DOUBLE
}

export class Rational {
  public readonly dataType: DataTypeId = DataTypeId.RATIONAL
  public components: Array<[number, number]>

  constructor (...components: Array<[number, number]>) {
    this.components = components
  }

  public get size (): number {
    return this.components.length * DataTypeSize[this.dataType]
  }
}

export class SRational {
  public readonly dataType: DataTypeId = DataTypeId.SRATIONAL
  public components: Array<[number, number]>

  constructor (...components: Array<[number, number]>) {
    this.components = components
  }

  public get size (): number {
    return this.components.length * DataTypeSize[this.dataType]
  }
}

export class Ascii {
  public readonly dataType: DataTypeId = DataTypeId.ASCII
  public components: string[]

  constructor (...components: string[]) {
    this.components = components
  }

  public get size (): number {
    return this.components.reduce((size, component) => size + component.length + 1, 0) // incl. null byte
  }
}

export class Undefined {
  public readonly dataType: DataTypeId = DataTypeId.UNDEFINED
  public components: Uint8Array

  constructor (components: Uint8Array) {
    this.components = components
  }

  public get size (): number {
    return this.components.length
  }
}
