import { DataTypeId } from './data-types.ts'

// based on https://exiftool.org/TagNames/EXIF.html
export enum TagIFD0SubOffsetId {
  InteropOffset = 0xa005,
  ExifOffset = 0x8769,
  GPSInfo = 0x8825,
}

export enum TagIFD0Id {
  // idf0
  ProcessingSoftware = 0x000b,
  SubfileType = 0x00fe,
  OldSubfileType = 0x00ff,
  ImageWidth = 0x0100,
  ImageHeight = 0x0101,
  BitsPerSample = 0x0102,
  Compression = 0x0103,
  PhotometricInterpretation = 0x0106,
  Thresholding = 0x0107,
  CellWidth = 0x0108,
  CellLength = 0x0109,
  FillOrder = 0x010a,
  DocumentName = 0x010d,
  ImageDescription = 0x010e,
  Make = 0x010f,
  Model = 0x0110,
  StripOffsets = 0x0111,
  Orientation = 0x0112,
  SamplesPerPixel = 0x0115,
  RowsPerStrip = 0x0116,
  StripByteCounts = 0x0117,
  MinSampleValue = 0x0118,
  MaxSampleValue = 0x0119,
  XResolution = 0x011a,
  YResolution = 0x011b,
  PlanarConfiguration = 0x011c,
  PageName = 0x011d,
  XPosition = 0x011e,
  YPosition = 0x011f,
  GrayResponseUnit = 0x0122,
  ResolutionUnit = 0x0128,
  PageNumber = 0x0129,
  TransferFunction = 0x012d,
  Software = 0x0131,
  ModifyDate = 0x0132,
  Artist = 0x013b,
  HostComputer = 0x013c,
  Predictor = 0x013d,
  WhitePoint = 0x013e,
  PrimaryChromaticities = 0x013f,
  HalftoneHints = 0x0141,
  TileWidth = 0x0142,
  TileLength = 0x0143,
  SubIFD = 0x014a,
  InkSet = 0x014c,
  TargetPrinter = 0x0151,
  ThumbnailOffset = 0x0201,
  ThumbnailLength = 0x0202,
  YCbCrCoefficients = 0x0211,
  YCbCrSubSampling = 0x0212,
  YCbCrPositioning = 0x0213,
  ReferenceBlackWhite = 0x0214,
  ApplicationNotes = 0x02bc,
  Rating = 0x4746,
  RatingPercent = 0x4749,
  Copyright = 0x8298,
  PixelScale = 0x830e,
  IPTC_NAA = 0x83bb,
  IntergraphMatrix = 0x8480,
  ModelTiePoint = 0x8482,
  SEMInfo = 0x8546,
  ModelTransform = 0x85d8,
  PhotoshopSettings = 0x8649,
  ICC_Profile = 0x8773,
  GeoTiffDirectory = 0x87af,
  GeoTiffDoubleParams = 0x87b0,
  GeoTiffAsciiParams = 0x87b1,
  ImageSourceData = 0x935c,
  XPTitle = 0x9c9b,
  XPComment = 0x9c9c,
  XPAuthor = 0x9c9d,
  XPKeywords = 0x9c9e,
  XPSubject = 0x9c9f,
  GDALMetadata = 0xa480,
  GDALNoData = 0xa481,
  PrintIM = 0xc4a5,
  DNGVersion = 0xc612,
  DNGBackwardVersion = 0xc613,
  UniqueCameraModel = 0xc614,
  LocalizedCameraModel = 0xc615,
  ColorMatrix1 = 0xc621,
  ColorMatrix2 = 0xc622,
  CameraCalibration1 = 0xc623,
  CameraCalibration2 = 0xc624,
  ReductionMatrix1 = 0xc625,
  ReductionMatrix2 = 0xc626,
  AnalogBalance = 0xc627,
  AsShotNeutral = 0xc628,
  AsShotWhiteXY = 0xc629,
  BaselineExposure = 0xc62a,
  BaselineNoise = 0xc62b,
  BaselineSharpness = 0xc62c,
  LinearResponseLimit = 0xc62e,
  CameraSerialNumber = 0xc62f,
  DNGLensInfo = 0xc630,
  ShadowScale = 0xc633,
  SR2Private = 0xc634,
  MakerNoteSafety = 0xc635,
  CalibrationIlluminant1 = 0xc65a,
  CalibrationIlluminant2 = 0xc65b,
  RawDataUniqueID = 0xc65d,
  OriginalRawFileName = 0xc68b,
  OriginalRawFileData = 0xc68c,
  AsShotICCProfile = 0xc68f,
  AsShotPreProfileMatrix = 0xc690,
  CurrentICCProfile = 0xc691,
  CurrentPreProfileMatrix = 0xc692,
  ColorimetricReference = 0xc6bf,
  SRawType = 0xc6c5,
  PanasonicTitle = 0xc6d2,
  PanasonicTitle2 = 0xc6d3,
  CameraCalibrationSig = 0xc6f3,
  ProfileCalibrationSig = 0xc6f4,
  ProfileIFD = 0xc6f5,
  AsShotProfileName = 0xc6f6,
  ProfileName = 0xc6f8,
  ProfileHueSatMapDims = 0xc6f9,
  ProfileHueSatMapData1 = 0xc6fa,
  ProfileHueSatMapData2 = 0xc6fb,
  ProfileToneCurve = 0xc6fc,
  ProfileEmbedPolicy = 0xc6fd,
  ProfileCopyright = 0xc6fe,
  ForwardMatrix1 = 0xc714,
  ForwardMatrix2 = 0xc715,
  PreviewApplicationName = 0xc716,
  PreviewApplicationVersion = 0xc717,
  PreviewSettingsName = 0xc718,
  PreviewSettingsDigest = 0xc719,
  PreviewColorSpace = 0xc71a,
  PreviewDateTime = 0xc71b,
  RawImageDigest = 0xc71c,
  OriginalRawFileDigest = 0xc71d,
  ProfileLookTableDims = 0xc725,
  ProfileLookTableData = 0xc726,
  TimeCodes = 0xc763,
  FrameRate = 0xc764,
  TStop = 0xc772,
  ReelName = 0xc789,
  OriginalDefaultFinalSize = 0xc791,
  OriginalBestQualitySize = 0xc792,
  OriginalDefaultCropSize = 0xc793,
  CameraLabel = 0xc7a1,
  ProfileHueSatMapEncoding = 0xc7a3,
  ProfileLookTableEncoding = 0xc7a4,
  BaselineExposureOffset = 0xc7a5,
  DefaultBlackRender = 0xc7a6,
  NewRawImageDigest = 0xc7a7,
  RawToPreviewGain = 0xc7a8,
  DepthFormat = 0xc7e9,
  DepthNear = 0xc7ea,
  DepthFar = 0xc7eb,
  DepthUnits = 0xc7ec,
  DepthMeasureType = 0xc7ed,
  EnhanceParams = 0xc7ee,
  CalibrationIlluminant3 = 0xcd31,
  CameraCalibration3 = 0xcd32,
  ColorMatrix3 = 0xcd33,
  ForwardMatrix3 = 0xcd34,
  IlluminantData1 = 0xcd35,
  IlluminantData2 = 0xcd36,
  IlluminantData3 = 0xcd37,
  ProfileHueSatMapData3 = 0xcd39,
  ReductionMatrix3 = 0xcd3a,
  RGBTables = 0xcd3b,
}

export enum TagExifId {
  ExposureTime = 0x829a,
  FNumber = 0x829d,
  ExposureProgram = 0x8822,
  SpectralSensitivity = 0x8824,
  ISO = 0x8827,
  TimeZoneOffset = 0x882a,
  SelfTimerMode = 0x882b,
  SensitivityType = 0x8830,
  StandardOutputSensitivity = 0x8831,
  RecommendedExposureIndex = 0x8832,
  ISOSpeed = 0x8833,
  ISOSpeedLatitudeyyy = 0x8834,
  ISOSpeedLatitudezzz = 0x8835,
  ExifVersion = 0x9000,
  DateTimeOriginal = 0x9003,
  CreateDate = 0x9004,
  GooglePlusUploadCode = 0x9009,
  OffsetTime = 0x9010,
  OffsetTimeOriginal = 0x9011,
  OffsetTimeDigitized = 0x9012,
  ComponentsConfiguration = 0x9101,
  CompressedBitsPerPixel = 0x9102,
  ShutterSpeedValue = 0x9201,
  ApertureValue = 0x9202,
  BrightnessValue = 0x9203,
  ExposureCompensation = 0x9204,
  MaxApertureValue = 0x9205,
  SubjectDistance = 0x9206,
  MeteringMode = 0x9207,
  LightSource = 0x9208,
  Flash = 0x9209,
  FocalLength = 0x920a,
  ImageNumber = 0x9211,
  SecurityClassification = 0x9212,
  ImageHistory = 0x9213,
  SubjectArea = 0x9214,
  MakerNoteApple = 0x927c,
  UserComment = 0x9286,
  SubSecTime = 0x9290,
  SubSecTimeOriginal = 0x9291,
  SubSecTimeDigitized = 0x9292,
  AmbientTemperature = 0x9400,
  Humidity = 0x9401,
  Pressure = 0x9402,
  WaterDepth = 0x9403,
  Acceleration = 0x9404,
  CameraElevationAngle = 0x9405,
  FlashpixVersion = 0xa000,
  ColorSpace = 0xa001,
  ExifImageWidth = 0xa002,
  ExifImageHeight = 0xa003,
  RelatedSoundFile = 0xa004,
  FlashEnergy = 0xa20b,
  FocalPlaneXResolution = 0xa20e,
  FocalPlaneYResolution = 0xa20f,
  FocalPlaneResolutionUnit = 0xa210,
  SubjectLocation = 0xa214,
  ExposureIndex = 0xa215,
  SensingMethod = 0xa217,
  FileSource = 0xa300,
  SceneType = 0xa301,
  CFAPattern = 0xa302,
  CustomRendered = 0xa401,
  ExposureMode = 0xa402,
  WhiteBalance = 0xa403,
  DigitalZoomRatio = 0xa404,
  FocalLengthIn35mmFormat = 0xa405,
  SceneCaptureType = 0xa406,
  GainControl = 0xa407,
  Contrast = 0xa408,
  Saturation = 0xa409,
  Sharpness = 0xa40a,
  SubjectDistanceRange = 0xa40c,
  ImageUniqueID = 0xa420,
  OwnerName = 0xa430,
  SerialNumber = 0xa431,
  LensInfo = 0xa432,
  LensMake = 0xa433,
  LensModel = 0xa434,
  LensSerialNumber = 0xa435,
  Title = 0xa436,
  Photographer = 0xa437,
  ImageEditor = 0xa438,
  CameraFirmware = 0xa439,
  RAWDevelopingSoftware = 0xa43a,
  ImageEditingSoftware = 0xa43b,
  MetadataEditingSoftware = 0xa43c,
  CompositeImage = 0xa460,
  CompositeImageCount = 0xa461,
  CompositeImageExposureTimes = 0xa462,
  Gamma = 0xa500,
  Padding = 0xea1c,
  OffsetSchema = 0xea1d,
  OwnerNameText = 0xfde8,
  SerialNumberText = 0xfde9,
  Lens = 0xfdea,
  RawFile = 0xfe4c,
  Converter = 0xfe4d,
  WhiteBalanceText = 0xfe4e,
  Exposure = 0xfe51,
  Shadows = 0xfe52,
  Brightness = 0xfe53,
  ContrastText = 0xfe54,
  SaturationText = 0xfe55,
  SharpnessText = 0xfe56,
  Smoothness = 0xfe57,
  MoireFilter = 0xfe58,
}

export enum TagInteropId {
  InteropIndex = 0x0001,
  InteropVersion = 0x0002,
  RelatedImageFileFormat = 0x1000,
  RelatedImageWidth = 0x1001,
  RelatedImageHeight = 0x1002,
}

export enum TagOtherId {
  FreeOffsets = 0x0120,
  FreeByteCounts = 0x0121,
  GrayResponseCurve = 0x0123,
  T4Options = 0x0124,
  T6Options = 0x0125,
  ColorResponseUnit = 0x012c,
  ColorMap = 0x0140,
  TileOffsets = 0x0144,
  TileByteCounts = 0x0145,
  BadFaxLines = 0x0146,
  CleanFaxData = 0x0147,
  ConsecutiveBadFaxLines = 0x0148,
  InkNames = 0x014d,
  NumberofInks = 0x014e,
  DotRange = 0x0150,
  ExtraSamples = 0x0152,
  SMinSampleValue = 0x0154,
  SMaxSampleValue = 0x0155,
  TransferRange = 0x0156,
  ClipPath = 0x0157,
  XClipPathUnits = 0x0158,
  YClipPathUnits = 0x0159,
  Indexed = 0x015a,
  JPEGTables = 0x015b,
  OPIProxy = 0x015f,
  GlobalParametersIFD = 0x0190,
  ProfileType = 0x0191,
  FaxProfile = 0x0192,
  CodingMethods = 0x0193,
  VersionYear = 0x0194,
  ModeNumber = 0x0195,
  Decode = 0x01b1,
  DefaultImageColor = 0x01b2,
  T82Options = 0x01b3,
  JPEGTables2 = 0x01b5,
  JPEGProc = 0x0200,
  JPEGRestartInterval = 0x0203,
  JPEGLosslessPredictors = 0x0205,
  JPEGPointTransforms = 0x0206,
  JPEGQTables = 0x0207,
  JPEGDCTables = 0x0208,
  JPEGACTables = 0x0209,
  StripRowCounts = 0x022f,
  USPTOMiscellaneous = 0x03e7,
  XP_DIP_XML = 0x4747,
  StitchInfo = 0x4748,
  SonyRawFileType = 0x7000,
  SonyToneCurve = 0x7010,
  ImageID = 0x800d,
  WangTag1 = 0x80a3,
  WangAnnotation = 0x80a4,
  WangTag3 = 0x80a5,
  WangTag4 = 0x80a6,
  ImageReferencePoints = 0x80b9,
  RegionXformTackPoint = 0x80ba,
  WarpQuadrilateral = 0x80bb,
  AffineTransformMat = 0x80bc,
  Matteing = 0x80e3,
  DataType = 0x80e4,
  ImageDepth = 0x80e5,
  TileDepth = 0x80e6,
  ImageFullWidth = 0x8214,
  ImageFullHeight = 0x8215,
  TextureFormat = 0x8216,
  WrapModes = 0x8217,
  FovCot = 0x8218,
  MatrixWorldToScreen = 0x8219,
  MatrixWorldToCamera = 0x821a,
  Model2 = 0x827d,
  BatteryLevel = 0x828f,
  KodakIFD = 0x8290,
  MDFileTag = 0x82a5,
  MDScalePixel = 0x82a6,
  MDColorTable = 0x82a7,
  MDLabName = 0x82a8,
  MDSampleInfo = 0x82a9,
  MDPrepDate = 0x82aa,
  MDPrepTime = 0x82ab,
  MDFileUnits = 0x82ac,
  AdventScale = 0x8335,
  AdventRevision = 0x8336,
  UIC1Tag = 0x835c,
  UIC2Tag = 0x835d,
  UIC3Tag = 0x835e,
  UIC4Tag = 0x835f,
  IntergraphPacketData = 0x847e,
  IntergraphFlagRegisters = 0x847f,
  INGRReserved = 0x8481,
  Site = 0x84e0,
  ColorSequence = 0x84e1,
  IT8Header = 0x84e2,
  RasterPadding = 0x84e3,
  BitsPerRunLength = 0x84e4,
  BitsPerExtendedRunLength = 0x84e5,
  ColorTable = 0x84e6,
  ImageColorIndicator = 0x84e7,
  BackgroundColorIndicator = 0x84e8,
  ImageColorValue = 0x84e9,
  BackgroundColorValue = 0x84ea,
  PixelIntensityRange = 0x84eb,
  TransparencyIndicator = 0x84ec,
  ColorCharacterization = 0x84ed,
  HCUsage = 0x84ee,
  TrapIndicator = 0x84ef,
  CMYKEquivalent = 0x84f0,
  AFCP_IPTC = 0x8568,
  PixelMagicJBIGOptions = 0x85b8,
  JPLCartoIFD = 0x85d7,
  WB_GRGBLevels = 0x8602,
  LeafData = 0x8606,
  TIFF_FXExtensions = 0x877f,
  MultiProfiles = 0x8780,
  SharedData = 0x8781,
  T88Options = 0x8782,
  ImageLayer = 0x87ac,
  JBIGOptions = 0x87be,
  Opto_ElectricConvFactor = 0x8828,
  Interlace = 0x8829,
  FaxRecvParams = 0x885c,
  FaxSubAddress = 0x885d,
  FaxRecvTime = 0x885e,
  FedexEDR = 0x8871,
  LeafSubIFD = 0x888a,
  FlashEnergy = 0x920b,
  SpatialFrequencyResponse = 0x920c,
  Noise = 0x920d,
  FocalPlaneXResolution = 0x920e,
  FocalPlaneYResolution = 0x920f,
  FocalPlaneResolutionUnit = 0x9210,
  ExposureIndex = 0x9215,
  TIFF_EPStandardID = 0x9216,
  SensingMethod = 0x9217,
  CIP3DataFile = 0x923a,
  CIP3Sheet = 0x923b,
  CIP3Side = 0x923c,
  StoNits = 0x923f,
  MSDocumentText = 0x932f,
  MSPropertySetStorage = 0x9330,
  MSDocumentTextPosition = 0x9331,
  SamsungRawPointersOffset = 0xa010,
  SamsungRawPointersLength = 0xa011,
  SamsungRawByteOrder = 0xa101,
  SamsungRawUnknown = 0xa102,
  SpatialFrequencyResponse2 = 0xa20c,
  Noise2 = 0xa20d,
  ImageNumber = 0xa211,
  SecurityClassification = 0xa212,
  ImageHistory = 0xa213,
  TIFF_EPStandardID2 = 0xa216,
  DeviceSettingDescription = 0xa40b,
  ExpandSoftware = 0xafc0,
  ExpandLens = 0xafc1,
  ExpandFilm = 0xafc2,
  ExpandFilterLens = 0xafc3,
  ExpandScanner = 0xafc4,
  ExpandFlashLamp = 0xafc5,
  HasselbladRawImage = 0xb4c3,
  PixelFormat = 0xbc01,
  Transformation = 0xbc02,
  Uncompressed = 0xbc03,
  ImageType = 0xbc04,
  ImageWidth = 0xbc80,
  ImageHeight = 0xbc81,
  WidthResolution = 0xbc82,
  HeightResolution = 0xbc83,
  ImageOffset = 0xbcc0,
  ImageByteCount = 0xbcc1,
  AlphaOffset = 0xbcc2,
  AlphaByteCount = 0xbcc3,
  ImageDataDiscard = 0xbcc4,
  AlphaDataDiscard = 0xbcc5,
  OceScanjobDesc = 0xc427,
  OceApplicationSelector = 0xc428,
  OceIDNumber = 0xc429,
  OceImageLogic = 0xc42a,
  Annotations = 0xc44f,
  HasselbladExif = 0xc51b,
  OriginalFileName = 0xc573,
  USPTOOriginalContentType = 0xc580,
  CR2CFAPattern = 0xc5e0,
  RawImageSegmentation = 0xc640,
  AliasLayerMetadata = 0xc660,
  SubTileBlockSize = 0xc71e,
  RowInterleaveFactor = 0xc71f,
  NikonNEFInfo = 0xc7d5,
  KDC_IFD = 0xfe00,
}

export type TagId = TagIFD0SubOffsetId | TagIFD0Id | TagExifId | TagInteropId | TagOtherId

export const TagIdDataType: Record<TagId, DataTypeId> = {
  // IFD0 sub offsets
  [TagIFD0SubOffsetId.InteropOffset]: DataTypeId.LONG,
  [TagIFD0SubOffsetId.ExifOffset]: DataTypeId.LONG,
  [TagIFD0SubOffsetId.GPSInfo]: DataTypeId.LONG,

  // IFD0
  [TagIFD0Id.ProcessingSoftware]: DataTypeId.ASCII,
  [TagIFD0Id.SubfileType]: DataTypeId.LONG,
  [TagIFD0Id.OldSubfileType]: DataTypeId.SHORT,
  [TagIFD0Id.ImageWidth]: DataTypeId.LONG,
  [TagIFD0Id.ImageHeight]: DataTypeId.LONG,
  [TagIFD0Id.BitsPerSample]: DataTypeId.SHORT,
  [TagIFD0Id.Compression]: DataTypeId.SHORT,
  [TagIFD0Id.PhotometricInterpretation]: DataTypeId.SHORT,
  [TagIFD0Id.Thresholding]: DataTypeId.SHORT,
  [TagIFD0Id.CellWidth]: DataTypeId.SHORT,
  [TagIFD0Id.CellLength]: DataTypeId.SHORT,
  [TagIFD0Id.FillOrder]: DataTypeId.SHORT,
  [TagIFD0Id.DocumentName]: DataTypeId.ASCII,
  [TagIFD0Id.ImageDescription]: DataTypeId.ASCII,
  [TagIFD0Id.Make]: DataTypeId.ASCII,
  [TagIFD0Id.Model]: DataTypeId.ASCII,
  [TagIFD0Id.StripOffsets]: DataTypeId.UNDEFINED,
  [TagIFD0Id.Orientation]: DataTypeId.SHORT,
  [TagIFD0Id.SamplesPerPixel]: DataTypeId.SHORT,
  [TagIFD0Id.RowsPerStrip]: DataTypeId.LONG,
  [TagIFD0Id.StripByteCounts]: DataTypeId.UNDEFINED,
  [TagIFD0Id.MinSampleValue]: DataTypeId.SHORT,
  [TagIFD0Id.MaxSampleValue]: DataTypeId.SHORT,
  [TagIFD0Id.XResolution]: DataTypeId.RATIONAL,
  [TagIFD0Id.YResolution]: DataTypeId.RATIONAL,
  [TagIFD0Id.PlanarConfiguration]: DataTypeId.SHORT,
  [TagIFD0Id.PageName]: DataTypeId.ASCII,
  [TagIFD0Id.XPosition]: DataTypeId.RATIONAL,
  [TagIFD0Id.YPosition]: DataTypeId.RATIONAL,
  [TagIFD0Id.GrayResponseUnit]: DataTypeId.SHORT,
  [TagIFD0Id.ResolutionUnit]: DataTypeId.SHORT,
  [TagIFD0Id.PageNumber]: DataTypeId.SHORT,
  [TagIFD0Id.TransferFunction]: DataTypeId.SHORT,
  [TagIFD0Id.Software]: DataTypeId.ASCII,
  [TagIFD0Id.ModifyDate]: DataTypeId.ASCII,
  [TagIFD0Id.Artist]: DataTypeId.ASCII,
  [TagIFD0Id.HostComputer]: DataTypeId.ASCII,
  [TagIFD0Id.Predictor]: DataTypeId.SHORT,
  [TagIFD0Id.WhitePoint]: DataTypeId.RATIONAL,
  [TagIFD0Id.PrimaryChromaticities]: DataTypeId.RATIONAL,
  [TagIFD0Id.HalftoneHints]: DataTypeId.SHORT,
  [TagIFD0Id.TileWidth]: DataTypeId.LONG,
  [TagIFD0Id.TileLength]: DataTypeId.LONG,
  [TagIFD0Id.SubIFD]: DataTypeId.UNDEFINED,
  [TagIFD0Id.InkSet]: DataTypeId.SHORT,
  [TagIFD0Id.TargetPrinter]: DataTypeId.ASCII,
  [TagIFD0Id.ThumbnailOffset]: DataTypeId.LONG,
  [TagIFD0Id.ThumbnailLength]: DataTypeId.LONG,
  [TagIFD0Id.YCbCrCoefficients]: DataTypeId.RATIONAL,
  [TagIFD0Id.YCbCrSubSampling]: DataTypeId.SHORT,
  [TagIFD0Id.YCbCrPositioning]: DataTypeId.SHORT,
  [TagIFD0Id.ReferenceBlackWhite]: DataTypeId.RATIONAL,
  [TagIFD0Id.ApplicationNotes]: DataTypeId.BYTE,
  [TagIFD0Id.Rating]: DataTypeId.SHORT,
  [TagIFD0Id.RatingPercent]: DataTypeId.SHORT,
  [TagIFD0Id.Copyright]: DataTypeId.ASCII,
  [TagIFD0Id.PixelScale]: DataTypeId.DOUBLE,
  [TagIFD0Id.IPTC_NAA]: DataTypeId.LONG,
  [TagIFD0Id.IntergraphMatrix]: DataTypeId.DOUBLE,
  [TagIFD0Id.ModelTiePoint]: DataTypeId.DOUBLE,
  [TagIFD0Id.SEMInfo]: DataTypeId.ASCII,
  [TagIFD0Id.ModelTransform]: DataTypeId.DOUBLE,
  [TagIFD0Id.PhotoshopSettings]: DataTypeId.UNDEFINED,
  [TagIFD0Id.ICC_Profile]: DataTypeId.UNDEFINED,
  [TagIFD0Id.GeoTiffDirectory]: DataTypeId.SHORT,
  [TagIFD0Id.GeoTiffDoubleParams]: DataTypeId.DOUBLE,
  [TagIFD0Id.GeoTiffAsciiParams]: DataTypeId.ASCII,
  [TagIFD0Id.ImageSourceData]: DataTypeId.UNDEFINED,
  [TagIFD0Id.XPTitle]: DataTypeId.BYTE,
  [TagIFD0Id.XPComment]: DataTypeId.BYTE,
  [TagIFD0Id.XPAuthor]: DataTypeId.BYTE,
  [TagIFD0Id.XPKeywords]: DataTypeId.BYTE,
  [TagIFD0Id.XPSubject]: DataTypeId.BYTE,
  [TagIFD0Id.GDALMetadata]: DataTypeId.ASCII,
  [TagIFD0Id.GDALNoData]: DataTypeId.ASCII,
  [TagIFD0Id.PrintIM]: DataTypeId.UNDEFINED,
  [TagIFD0Id.DNGVersion]: DataTypeId.BYTE,
  [TagIFD0Id.DNGBackwardVersion]: DataTypeId.BYTE,
  [TagIFD0Id.UniqueCameraModel]: DataTypeId.ASCII,
  [TagIFD0Id.LocalizedCameraModel]: DataTypeId.ASCII,
  [TagIFD0Id.ColorMatrix1]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ColorMatrix2]: DataTypeId.SRATIONAL,
  [TagIFD0Id.CameraCalibration1]: DataTypeId.SRATIONAL,
  [TagIFD0Id.CameraCalibration2]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ReductionMatrix1]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ReductionMatrix2]: DataTypeId.SRATIONAL,
  [TagIFD0Id.AnalogBalance]: DataTypeId.RATIONAL,
  [TagIFD0Id.AsShotNeutral]: DataTypeId.RATIONAL,
  [TagIFD0Id.AsShotWhiteXY]: DataTypeId.RATIONAL,
  [TagIFD0Id.BaselineExposure]: DataTypeId.SRATIONAL,
  [TagIFD0Id.BaselineNoise]: DataTypeId.RATIONAL,
  [TagIFD0Id.BaselineSharpness]: DataTypeId.RATIONAL,
  [TagIFD0Id.LinearResponseLimit]: DataTypeId.RATIONAL,
  [TagIFD0Id.CameraSerialNumber]: DataTypeId.ASCII,
  [TagIFD0Id.DNGLensInfo]: DataTypeId.RATIONAL,
  [TagIFD0Id.ShadowScale]: DataTypeId.RATIONAL,
  [TagIFD0Id.SR2Private]: DataTypeId.UNDEFINED,
  [TagIFD0Id.MakerNoteSafety]: DataTypeId.SHORT,
  [TagIFD0Id.CalibrationIlluminant1]: DataTypeId.SHORT,
  [TagIFD0Id.CalibrationIlluminant2]: DataTypeId.SHORT,
  [TagIFD0Id.RawDataUniqueID]: DataTypeId.BYTE,
  [TagIFD0Id.OriginalRawFileName]: DataTypeId.ASCII,
  [TagIFD0Id.OriginalRawFileData]: DataTypeId.UNDEFINED,
  [TagIFD0Id.AsShotICCProfile]: DataTypeId.UNDEFINED,
  [TagIFD0Id.AsShotPreProfileMatrix]: DataTypeId.SRATIONAL,
  [TagIFD0Id.CurrentICCProfile]: DataTypeId.UNDEFINED,
  [TagIFD0Id.CurrentPreProfileMatrix]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ColorimetricReference]: DataTypeId.SHORT,
  [TagIFD0Id.SRawType]: DataTypeId.UNDEFINED,
  [TagIFD0Id.PanasonicTitle]: DataTypeId.UNDEFINED,
  [TagIFD0Id.PanasonicTitle2]: DataTypeId.UNDEFINED,
  [TagIFD0Id.CameraCalibrationSig]: DataTypeId.ASCII,
  [TagIFD0Id.ProfileCalibrationSig]: DataTypeId.ASCII,
  [TagIFD0Id.ProfileIFD]: DataTypeId.UNDEFINED,
  [TagIFD0Id.AsShotProfileName]: DataTypeId.ASCII,
  [TagIFD0Id.ProfileName]: DataTypeId.ASCII,
  [TagIFD0Id.ProfileHueSatMapDims]: DataTypeId.LONG,
  [TagIFD0Id.ProfileHueSatMapData1]: DataTypeId.FLOAT,
  [TagIFD0Id.ProfileHueSatMapData2]: DataTypeId.FLOAT,
  [TagIFD0Id.ProfileToneCurve]: DataTypeId.FLOAT,
  [TagIFD0Id.ProfileEmbedPolicy]: DataTypeId.LONG,
  [TagIFD0Id.ProfileCopyright]: DataTypeId.ASCII,
  [TagIFD0Id.ForwardMatrix1]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ForwardMatrix2]: DataTypeId.SRATIONAL,
  [TagIFD0Id.PreviewApplicationName]: DataTypeId.ASCII,
  [TagIFD0Id.PreviewApplicationVersion]: DataTypeId.ASCII,
  [TagIFD0Id.PreviewSettingsName]: DataTypeId.ASCII,
  [TagIFD0Id.PreviewSettingsDigest]: DataTypeId.BYTE,
  [TagIFD0Id.PreviewColorSpace]: DataTypeId.LONG,
  [TagIFD0Id.PreviewDateTime]: DataTypeId.ASCII,
  [TagIFD0Id.RawImageDigest]: DataTypeId.BYTE,
  [TagIFD0Id.OriginalRawFileDigest]: DataTypeId.BYTE,
  [TagIFD0Id.ProfileLookTableDims]: DataTypeId.LONG,
  [TagIFD0Id.ProfileLookTableData]: DataTypeId.FLOAT,
  [TagIFD0Id.TimeCodes]: DataTypeId.BYTE,
  [TagIFD0Id.FrameRate]: DataTypeId.SRATIONAL,
  [TagIFD0Id.TStop]: DataTypeId.RATIONAL,
  [TagIFD0Id.ReelName]: DataTypeId.ASCII,
  [TagIFD0Id.OriginalDefaultFinalSize]: DataTypeId.LONG,
  [TagIFD0Id.OriginalBestQualitySize]: DataTypeId.LONG,
  [TagIFD0Id.OriginalDefaultCropSize]: DataTypeId.RATIONAL,
  [TagIFD0Id.CameraLabel]: DataTypeId.ASCII,
  [TagIFD0Id.ProfileHueSatMapEncoding]: DataTypeId.LONG,
  [TagIFD0Id.ProfileLookTableEncoding]: DataTypeId.LONG,
  [TagIFD0Id.BaselineExposureOffset]: DataTypeId.SRATIONAL,
  [TagIFD0Id.DefaultBlackRender]: DataTypeId.LONG,
  [TagIFD0Id.NewRawImageDigest]: DataTypeId.BYTE,
  [TagIFD0Id.RawToPreviewGain]: DataTypeId.DOUBLE,
  [TagIFD0Id.DepthFormat]: DataTypeId.SHORT,
  [TagIFD0Id.DepthNear]: DataTypeId.RATIONAL,
  [TagIFD0Id.DepthFar]: DataTypeId.RATIONAL,
  [TagIFD0Id.DepthUnits]: DataTypeId.SHORT,
  [TagIFD0Id.DepthMeasureType]: DataTypeId.SHORT,
  [TagIFD0Id.EnhanceParams]: DataTypeId.ASCII,
  [TagIFD0Id.CalibrationIlluminant3]: DataTypeId.SHORT,
  [TagIFD0Id.CameraCalibration3]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ColorMatrix3]: DataTypeId.SRATIONAL,
  [TagIFD0Id.ForwardMatrix3]: DataTypeId.SRATIONAL,
  [TagIFD0Id.IlluminantData1]: DataTypeId.UNDEFINED,
  [TagIFD0Id.IlluminantData2]: DataTypeId.UNDEFINED,
  [TagIFD0Id.IlluminantData3]: DataTypeId.UNDEFINED,
  [TagIFD0Id.ProfileHueSatMapData3]: DataTypeId.FLOAT,
  [TagIFD0Id.ReductionMatrix3]: DataTypeId.SRATIONAL,
  [TagIFD0Id.RGBTables]: DataTypeId.UNDEFINED,

  // EXIF
  [TagExifId.ExposureTime]: DataTypeId.RATIONAL,
  [TagExifId.FNumber]: DataTypeId.RATIONAL,
  [TagExifId.ExposureProgram]: DataTypeId.SHORT,
  [TagExifId.SpectralSensitivity]: DataTypeId.ASCII,
  [TagExifId.ISO]: DataTypeId.SHORT,
  [TagExifId.TimeZoneOffset]: DataTypeId.SSHORT,
  [TagExifId.SelfTimerMode]: DataTypeId.SHORT,
  [TagExifId.SensitivityType]: DataTypeId.SHORT,
  [TagExifId.StandardOutputSensitivity]: DataTypeId.LONG,
  [TagExifId.RecommendedExposureIndex]: DataTypeId.LONG,
  [TagExifId.ISOSpeed]: DataTypeId.LONG,
  [TagExifId.ISOSpeedLatitudeyyy]: DataTypeId.LONG,
  [TagExifId.ISOSpeedLatitudezzz]: DataTypeId.LONG,
  [TagExifId.ExifVersion]: DataTypeId.UNDEFINED,
  [TagExifId.DateTimeOriginal]: DataTypeId.ASCII,
  [TagExifId.CreateDate]: DataTypeId.ASCII,
  [TagExifId.GooglePlusUploadCode]: DataTypeId.UNDEFINED,
  [TagExifId.OffsetTime]: DataTypeId.ASCII,
  [TagExifId.OffsetTimeOriginal]: DataTypeId.ASCII,
  [TagExifId.OffsetTimeDigitized]: DataTypeId.ASCII,
  [TagExifId.ComponentsConfiguration]: DataTypeId.UNDEFINED,
  [TagExifId.CompressedBitsPerPixel]: DataTypeId.RATIONAL,
  [TagExifId.ShutterSpeedValue]: DataTypeId.SRATIONAL,
  [TagExifId.ApertureValue]: DataTypeId.RATIONAL,
  [TagExifId.BrightnessValue]: DataTypeId.SRATIONAL,
  [TagExifId.ExposureCompensation]: DataTypeId.SRATIONAL,
  [TagExifId.MaxApertureValue]: DataTypeId.RATIONAL,
  [TagExifId.SubjectDistance]: DataTypeId.RATIONAL,
  [TagExifId.MeteringMode]: DataTypeId.SHORT,
  [TagExifId.LightSource]: DataTypeId.SHORT,
  [TagExifId.Flash]: DataTypeId.SHORT,
  [TagExifId.FocalLength]: DataTypeId.RATIONAL,
  [TagExifId.ImageNumber]: DataTypeId.LONG,
  [TagExifId.SecurityClassification]: DataTypeId.ASCII,
  [TagExifId.ImageHistory]: DataTypeId.ASCII,
  [TagExifId.SubjectArea]: DataTypeId.SHORT,
  [TagExifId.MakerNoteApple]: DataTypeId.UNDEFINED,
  [TagExifId.UserComment]: DataTypeId.UNDEFINED,
  [TagExifId.SubSecTime]: DataTypeId.ASCII,
  [TagExifId.SubSecTimeOriginal]: DataTypeId.ASCII,
  [TagExifId.SubSecTimeDigitized]: DataTypeId.ASCII,
  [TagExifId.AmbientTemperature]: DataTypeId.SRATIONAL,
  [TagExifId.Humidity]: DataTypeId.RATIONAL,
  [TagExifId.Pressure]: DataTypeId.RATIONAL,
  [TagExifId.WaterDepth]: DataTypeId.SRATIONAL,
  [TagExifId.Acceleration]: DataTypeId.RATIONAL,
  [TagExifId.CameraElevationAngle]: DataTypeId.SRATIONAL,
  [TagExifId.FlashpixVersion]: DataTypeId.UNDEFINED,
  [TagExifId.ColorSpace]: DataTypeId.SHORT,
  [TagExifId.ExifImageWidth]: DataTypeId.SHORT,
  [TagExifId.ExifImageHeight]: DataTypeId.SHORT,
  [TagExifId.RelatedSoundFile]: DataTypeId.ASCII,
  [TagExifId.FlashEnergy]: DataTypeId.RATIONAL,
  [TagExifId.FocalPlaneXResolution]: DataTypeId.RATIONAL,
  [TagExifId.FocalPlaneYResolution]: DataTypeId.RATIONAL,
  [TagExifId.FocalPlaneResolutionUnit]: DataTypeId.SHORT,
  [TagExifId.SubjectLocation]: DataTypeId.SHORT,
  [TagExifId.ExposureIndex]: DataTypeId.RATIONAL,
  [TagExifId.SensingMethod]: DataTypeId.SHORT,
  [TagExifId.FileSource]: DataTypeId.UNDEFINED,
  [TagExifId.SceneType]: DataTypeId.UNDEFINED,
  [TagExifId.CFAPattern]: DataTypeId.UNDEFINED,
  [TagExifId.CustomRendered]: DataTypeId.SHORT,
  [TagExifId.ExposureMode]: DataTypeId.SHORT,
  [TagExifId.WhiteBalance]: DataTypeId.SHORT,
  [TagExifId.DigitalZoomRatio]: DataTypeId.RATIONAL,
  [TagExifId.FocalLengthIn35mmFormat]: DataTypeId.SHORT,
  [TagExifId.SceneCaptureType]: DataTypeId.SHORT,
  [TagExifId.GainControl]: DataTypeId.SHORT,
  [TagExifId.Contrast]: DataTypeId.SHORT,
  [TagExifId.Saturation]: DataTypeId.SHORT,
  [TagExifId.Sharpness]: DataTypeId.SHORT,
  [TagExifId.SubjectDistanceRange]: DataTypeId.SHORT,
  [TagExifId.ImageUniqueID]: DataTypeId.ASCII,
  [TagExifId.OwnerName]: DataTypeId.ASCII,
  [TagExifId.SerialNumber]: DataTypeId.ASCII,
  [TagExifId.LensInfo]: DataTypeId.RATIONAL,
  [TagExifId.LensMake]: DataTypeId.ASCII,
  [TagExifId.LensModel]: DataTypeId.ASCII,
  [TagExifId.LensSerialNumber]: DataTypeId.ASCII,
  [TagExifId.Title]: DataTypeId.ASCII,
  [TagExifId.Photographer]: DataTypeId.ASCII,
  [TagExifId.ImageEditor]: DataTypeId.ASCII,
  [TagExifId.CameraFirmware]: DataTypeId.ASCII,
  [TagExifId.RAWDevelopingSoftware]: DataTypeId.ASCII,
  [TagExifId.ImageEditingSoftware]: DataTypeId.ASCII,
  [TagExifId.MetadataEditingSoftware]: DataTypeId.ASCII,
  [TagExifId.CompositeImage]: DataTypeId.SHORT,
  [TagExifId.CompositeImageCount]: DataTypeId.SHORT,
  [TagExifId.CompositeImageExposureTimes]: DataTypeId.UNDEFINED,
  [TagExifId.Gamma]: DataTypeId.RATIONAL,
  [TagExifId.Padding]: DataTypeId.UNDEFINED,
  [TagExifId.OffsetSchema]: DataTypeId.SLONG,
  [TagExifId.OwnerNameText]: DataTypeId.ASCII,
  [TagExifId.SerialNumberText]: DataTypeId.ASCII,
  [TagExifId.Lens]: DataTypeId.ASCII,
  [TagExifId.RawFile]: DataTypeId.ASCII,
  [TagExifId.Converter]: DataTypeId.ASCII,
  [TagExifId.WhiteBalanceText]: DataTypeId.ASCII,
  [TagExifId.Exposure]: DataTypeId.ASCII,
  [TagExifId.Shadows]: DataTypeId.ASCII,
  [TagExifId.Brightness]: DataTypeId.ASCII,
  [TagExifId.ContrastText]: DataTypeId.ASCII,
  [TagExifId.SaturationText]: DataTypeId.ASCII,
  [TagExifId.SharpnessText]: DataTypeId.ASCII,
  [TagExifId.Smoothness]: DataTypeId.ASCII,
  [TagExifId.MoireFilter]: DataTypeId.ASCII,

  // interop
  [TagInteropId.InteropIndex]: DataTypeId.ASCII,
  [TagInteropId.InteropVersion]: DataTypeId.UNDEFINED,
  [TagInteropId.RelatedImageFileFormat]: DataTypeId.ASCII,
  [TagInteropId.RelatedImageWidth]: DataTypeId.SHORT,
  [TagInteropId.RelatedImageHeight]: DataTypeId.SHORT,

  // other
  [TagOtherId.FreeOffsets]: DataTypeId.UNDEFINED,
  [TagOtherId.FreeByteCounts]: DataTypeId.UNDEFINED,
  [TagOtherId.GrayResponseCurve]: DataTypeId.UNDEFINED,
  [TagOtherId.T4Options]: DataTypeId.UNDEFINED,
  [TagOtherId.T6Options]: DataTypeId.UNDEFINED,
  [TagOtherId.ColorResponseUnit]: DataTypeId.UNDEFINED,
  [TagOtherId.ColorMap]: DataTypeId.UNDEFINED,
  [TagOtherId.TileOffsets]: DataTypeId.UNDEFINED,
  [TagOtherId.TileByteCounts]: DataTypeId.UNDEFINED,
  [TagOtherId.BadFaxLines]: DataTypeId.UNDEFINED,
  [TagOtherId.CleanFaxData]: DataTypeId.UNDEFINED,
  [TagOtherId.ConsecutiveBadFaxLines]: DataTypeId.UNDEFINED,
  [TagOtherId.InkNames]: DataTypeId.UNDEFINED,
  [TagOtherId.NumberofInks]: DataTypeId.UNDEFINED,
  [TagOtherId.DotRange]: DataTypeId.UNDEFINED,
  [TagOtherId.ExtraSamples]: DataTypeId.UNDEFINED,
  [TagOtherId.SMinSampleValue]: DataTypeId.UNDEFINED,
  [TagOtherId.SMaxSampleValue]: DataTypeId.UNDEFINED,
  [TagOtherId.TransferRange]: DataTypeId.UNDEFINED,
  [TagOtherId.ClipPath]: DataTypeId.UNDEFINED,
  [TagOtherId.XClipPathUnits]: DataTypeId.UNDEFINED,
  [TagOtherId.YClipPathUnits]: DataTypeId.UNDEFINED,
  [TagOtherId.Indexed]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGTables]: DataTypeId.UNDEFINED,
  [TagOtherId.OPIProxy]: DataTypeId.UNDEFINED,
  [TagOtherId.GlobalParametersIFD]: DataTypeId.UNDEFINED,
  [TagOtherId.ProfileType]: DataTypeId.UNDEFINED,
  [TagOtherId.FaxProfile]: DataTypeId.UNDEFINED,
  [TagOtherId.CodingMethods]: DataTypeId.UNDEFINED,
  [TagOtherId.VersionYear]: DataTypeId.UNDEFINED,
  [TagOtherId.ModeNumber]: DataTypeId.UNDEFINED,
  [TagOtherId.Decode]: DataTypeId.UNDEFINED,
  [TagOtherId.DefaultImageColor]: DataTypeId.UNDEFINED,
  [TagOtherId.T82Options]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGTables2]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGProc]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGRestartInterval]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGLosslessPredictors]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGPointTransforms]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGQTables]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGDCTables]: DataTypeId.UNDEFINED,
  [TagOtherId.JPEGACTables]: DataTypeId.UNDEFINED,
  [TagOtherId.StripRowCounts]: DataTypeId.UNDEFINED,
  [TagOtherId.USPTOMiscellaneous]: DataTypeId.UNDEFINED,
  [TagOtherId.XP_DIP_XML]: DataTypeId.UNDEFINED,
  [TagOtherId.StitchInfo]: DataTypeId.UNDEFINED,
  [TagOtherId.SonyRawFileType]: DataTypeId.UNDEFINED,
  [TagOtherId.SonyToneCurve]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageID]: DataTypeId.UNDEFINED,
  [TagOtherId.WangTag1]: DataTypeId.UNDEFINED,
  [TagOtherId.WangAnnotation]: DataTypeId.UNDEFINED,
  [TagOtherId.WangTag3]: DataTypeId.UNDEFINED,
  [TagOtherId.WangTag4]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageReferencePoints]: DataTypeId.UNDEFINED,
  [TagOtherId.RegionXformTackPoint]: DataTypeId.UNDEFINED,
  [TagOtherId.WarpQuadrilateral]: DataTypeId.UNDEFINED,
  [TagOtherId.AffineTransformMat]: DataTypeId.UNDEFINED,
  [TagOtherId.Matteing]: DataTypeId.UNDEFINED,
  [TagOtherId.DataType]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageDepth]: DataTypeId.UNDEFINED,
  [TagOtherId.TileDepth]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageFullWidth]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageFullHeight]: DataTypeId.UNDEFINED,
  [TagOtherId.TextureFormat]: DataTypeId.UNDEFINED,
  [TagOtherId.WrapModes]: DataTypeId.UNDEFINED,
  [TagOtherId.FovCot]: DataTypeId.UNDEFINED,
  [TagOtherId.MatrixWorldToScreen]: DataTypeId.UNDEFINED,
  [TagOtherId.MatrixWorldToCamera]: DataTypeId.UNDEFINED,
  [TagOtherId.Model2]: DataTypeId.UNDEFINED,
  [TagOtherId.BatteryLevel]: DataTypeId.UNDEFINED,
  [TagOtherId.KodakIFD]: DataTypeId.UNDEFINED,
  [TagOtherId.MDFileTag]: DataTypeId.UNDEFINED,
  [TagOtherId.MDScalePixel]: DataTypeId.UNDEFINED,
  [TagOtherId.MDColorTable]: DataTypeId.UNDEFINED,
  [TagOtherId.MDLabName]: DataTypeId.UNDEFINED,
  [TagOtherId.MDSampleInfo]: DataTypeId.UNDEFINED,
  [TagOtherId.MDPrepDate]: DataTypeId.UNDEFINED,
  [TagOtherId.MDPrepTime]: DataTypeId.UNDEFINED,
  [TagOtherId.MDFileUnits]: DataTypeId.UNDEFINED,
  [TagOtherId.AdventScale]: DataTypeId.UNDEFINED,
  [TagOtherId.AdventRevision]: DataTypeId.UNDEFINED,
  [TagOtherId.UIC1Tag]: DataTypeId.UNDEFINED,
  [TagOtherId.UIC2Tag]: DataTypeId.UNDEFINED,
  [TagOtherId.UIC3Tag]: DataTypeId.UNDEFINED,
  [TagOtherId.UIC4Tag]: DataTypeId.UNDEFINED,
  [TagOtherId.IntergraphPacketData]: DataTypeId.UNDEFINED,
  [TagOtherId.IntergraphFlagRegisters]: DataTypeId.UNDEFINED,
  [TagOtherId.INGRReserved]: DataTypeId.UNDEFINED,
  [TagOtherId.Site]: DataTypeId.UNDEFINED,
  [TagOtherId.ColorSequence]: DataTypeId.UNDEFINED,
  [TagOtherId.IT8Header]: DataTypeId.UNDEFINED,
  [TagOtherId.RasterPadding]: DataTypeId.UNDEFINED,
  [TagOtherId.BitsPerRunLength]: DataTypeId.UNDEFINED,
  [TagOtherId.BitsPerExtendedRunLength]: DataTypeId.UNDEFINED,
  [TagOtherId.ColorTable]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageColorIndicator]: DataTypeId.UNDEFINED,
  [TagOtherId.BackgroundColorIndicator]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageColorValue]: DataTypeId.UNDEFINED,
  [TagOtherId.BackgroundColorValue]: DataTypeId.UNDEFINED,
  [TagOtherId.PixelIntensityRange]: DataTypeId.UNDEFINED,
  [TagOtherId.TransparencyIndicator]: DataTypeId.UNDEFINED,
  [TagOtherId.ColorCharacterization]: DataTypeId.UNDEFINED,
  [TagOtherId.HCUsage]: DataTypeId.UNDEFINED,
  [TagOtherId.TrapIndicator]: DataTypeId.UNDEFINED,
  [TagOtherId.CMYKEquivalent]: DataTypeId.UNDEFINED,
  [TagOtherId.AFCP_IPTC]: DataTypeId.UNDEFINED,
  [TagOtherId.PixelMagicJBIGOptions]: DataTypeId.UNDEFINED,
  [TagOtherId.JPLCartoIFD]: DataTypeId.UNDEFINED,
  [TagOtherId.WB_GRGBLevels]: DataTypeId.UNDEFINED,
  [TagOtherId.LeafData]: DataTypeId.UNDEFINED,
  [TagOtherId.TIFF_FXExtensions]: DataTypeId.UNDEFINED,
  [TagOtherId.MultiProfiles]: DataTypeId.UNDEFINED,
  [TagOtherId.SharedData]: DataTypeId.UNDEFINED,
  [TagOtherId.T88Options]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageLayer]: DataTypeId.UNDEFINED,
  [TagOtherId.JBIGOptions]: DataTypeId.UNDEFINED,
  [TagOtherId.Opto_ElectricConvFactor]: DataTypeId.UNDEFINED,
  [TagOtherId.Interlace]: DataTypeId.UNDEFINED,
  [TagOtherId.FaxRecvParams]: DataTypeId.UNDEFINED,
  [TagOtherId.FaxSubAddress]: DataTypeId.UNDEFINED,
  [TagOtherId.FaxRecvTime]: DataTypeId.UNDEFINED,
  [TagOtherId.FedexEDR]: DataTypeId.UNDEFINED,
  [TagOtherId.LeafSubIFD]: DataTypeId.UNDEFINED,
  [TagOtherId.FlashEnergy]: DataTypeId.UNDEFINED,
  [TagOtherId.SpatialFrequencyResponse]: DataTypeId.UNDEFINED,
  [TagOtherId.Noise]: DataTypeId.UNDEFINED,
  [TagOtherId.FocalPlaneXResolution]: DataTypeId.UNDEFINED,
  [TagOtherId.FocalPlaneYResolution]: DataTypeId.UNDEFINED,
  [TagOtherId.FocalPlaneResolutionUnit]: DataTypeId.UNDEFINED,
  [TagOtherId.ExposureIndex]: DataTypeId.UNDEFINED,
  [TagOtherId.TIFF_EPStandardID]: DataTypeId.UNDEFINED,
  [TagOtherId.SensingMethod]: DataTypeId.UNDEFINED,
  [TagOtherId.CIP3DataFile]: DataTypeId.UNDEFINED,
  [TagOtherId.CIP3Sheet]: DataTypeId.UNDEFINED,
  [TagOtherId.CIP3Side]: DataTypeId.UNDEFINED,
  [TagOtherId.StoNits]: DataTypeId.UNDEFINED,
  [TagOtherId.MSDocumentText]: DataTypeId.UNDEFINED,
  [TagOtherId.MSPropertySetStorage]: DataTypeId.UNDEFINED,
  [TagOtherId.MSDocumentTextPosition]: DataTypeId.UNDEFINED,
  [TagOtherId.SamsungRawPointersOffset]: DataTypeId.UNDEFINED,
  [TagOtherId.SamsungRawPointersLength]: DataTypeId.UNDEFINED,
  [TagOtherId.SamsungRawByteOrder]: DataTypeId.UNDEFINED,
  [TagOtherId.SamsungRawUnknown]: DataTypeId.UNDEFINED,
  [TagOtherId.SpatialFrequencyResponse2]: DataTypeId.UNDEFINED,
  [TagOtherId.Noise2]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageNumber]: DataTypeId.UNDEFINED,
  [TagOtherId.SecurityClassification]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageHistory]: DataTypeId.UNDEFINED,
  [TagOtherId.TIFF_EPStandardID2]: DataTypeId.UNDEFINED,
  [TagOtherId.DeviceSettingDescription]: DataTypeId.UNDEFINED,
  [TagOtherId.ExpandSoftware]: DataTypeId.UNDEFINED,
  [TagOtherId.ExpandLens]: DataTypeId.UNDEFINED,
  [TagOtherId.ExpandFilm]: DataTypeId.UNDEFINED,
  [TagOtherId.ExpandFilterLens]: DataTypeId.UNDEFINED,
  [TagOtherId.ExpandScanner]: DataTypeId.UNDEFINED,
  [TagOtherId.ExpandFlashLamp]: DataTypeId.UNDEFINED,
  [TagOtherId.HasselbladRawImage]: DataTypeId.UNDEFINED,
  [TagOtherId.PixelFormat]: DataTypeId.UNDEFINED,
  [TagOtherId.Transformation]: DataTypeId.UNDEFINED,
  [TagOtherId.Uncompressed]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageType]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageWidth]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageHeight]: DataTypeId.UNDEFINED,
  [TagOtherId.WidthResolution]: DataTypeId.UNDEFINED,
  [TagOtherId.HeightResolution]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageOffset]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageByteCount]: DataTypeId.UNDEFINED,
  [TagOtherId.AlphaOffset]: DataTypeId.UNDEFINED,
  [TagOtherId.AlphaByteCount]: DataTypeId.UNDEFINED,
  [TagOtherId.ImageDataDiscard]: DataTypeId.UNDEFINED,
  [TagOtherId.AlphaDataDiscard]: DataTypeId.UNDEFINED,
  [TagOtherId.OceScanjobDesc]: DataTypeId.UNDEFINED,
  [TagOtherId.OceApplicationSelector]: DataTypeId.UNDEFINED,
  [TagOtherId.OceIDNumber]: DataTypeId.UNDEFINED,
  [TagOtherId.OceImageLogic]: DataTypeId.UNDEFINED,
  [TagOtherId.Annotations]: DataTypeId.UNDEFINED,
  [TagOtherId.HasselbladExif]: DataTypeId.UNDEFINED,
  [TagOtherId.OriginalFileName]: DataTypeId.UNDEFINED,
  [TagOtherId.USPTOOriginalContentType]: DataTypeId.UNDEFINED,
  [TagOtherId.CR2CFAPattern]: DataTypeId.UNDEFINED,
  [TagOtherId.RawImageSegmentation]: DataTypeId.UNDEFINED,
  [TagOtherId.AliasLayerMetadata]: DataTypeId.UNDEFINED,
  [TagOtherId.SubTileBlockSize]: DataTypeId.UNDEFINED,
  [TagOtherId.RowInterleaveFactor]: DataTypeId.UNDEFINED,
  [TagOtherId.NikonNEFInfo]: DataTypeId.UNDEFINED,
  [TagOtherId.KDC_IFD]: DataTypeId.UNDEFINED
}
