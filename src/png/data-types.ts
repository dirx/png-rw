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
  IHDR = 'IHDR',
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

export type IHDRBitDepth = 1 | 2 | 4 | 8 | 16

export enum IHDRColorType {
  GRAYSCALE = 0, // bit depth 1,2,4,8,16
  RGB = 2, // bit depth 8, 16
  PALETTE = 3, // bit depth 1,2,4,8
  GRAYSCALE_ALPHA = 4, // bit depth 8, 16
  RGB_ALPHA = 6, // bit depth 8, 16
}

export enum IHDRCompressionType {
  DEFLATE = 0,
}

export enum IHDRFilterMethod {
  ADAPTIVE = 0,
}

export enum IHDRInterlaceType {
  NONE = 0,
  ADAM7 = 0,
}

export interface IHDR {
  imageWidth: number
  imageHeight: number
  bitDepth: IHDRBitDepth
  colorType: IHDRColorType
  compressionType: IHDRCompressionType
  filterMethod: IHDRFilterMethod
  interlaceType: IHDRInterlaceType
}
