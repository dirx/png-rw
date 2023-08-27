import type { Ifd } from '../exif/ifd'

export enum ChunkType {
  PLTE = 'PLTE',
  ACTL = 'acTL',
  BKGD = 'bKGD',
  CHRM = 'cHRM',
  CICP = 'cICP',
  CABX = 'caBX',
  DSIG = 'dSIG',
  EXIF = 'eXIf',
  FRAC = 'fRAc',
  GAMA = 'gAMA',
  GIFG = 'gIFg',
  GIFT = 'gIFt',
  GIFX = 'gIFx',
  HIST = 'hIST',
  ICCP = 'iCCP',
  IDAT = 'IDAT',
  IDOT = 'iDOT',
  IEND = 'IEND',
  ITXT = 'iTXt',
  OFFS = 'oFFs',
  PCAL = 'pCAL',
  PHYS = 'pHYs',
  SBIT = 'sBIT',
  SCAL = 'sCAL',
  SPLT = 'sPLT',
  SRGB = 'sRGB',
  STER = 'sTER',
  TEXT = 'tEXt',
  TIME = 'tIME',
  TRNS = 'tRNS',
  TXMP = 'tXMP',
  VPAG = 'vpAg',
  ZTXT = 'zTXt',
  ZXIF = 'zxIf',
}

export interface Chunk {
  size: number
  type: ChunkType
  typeData: Uint8Array
  data: Uint8Array
  crc: number
}

export interface ITXT {
  key: string
  compressionFlag: boolean
  compressionMethod: number
  languageTag: string
  translatedKey: string
  value: string
}

export interface TEXT {
  key: string
  value: string
}

export interface EXIF {
  ifd0: Ifd
}

export interface ICCP {
  name: string
  compressionMethod: number
  profileDeflated: Uint8Array
}
