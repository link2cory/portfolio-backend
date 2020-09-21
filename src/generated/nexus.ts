/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BioCreateInput: { // input type
    email: string; // String!
    github: string; // String!
    jobs?: NexusGenInputs['JobCreateManyWithoutProfileInput'] | null; // JobCreateManyWithoutProfileInput
    name: string; // String!
    objective: string; // String!
    tagline: string; // String!
    website?: string | null; // String
  }
  BioCreateOneWithoutJobsInput: { // input type
    connect?: NexusGenInputs['BioWhereUniqueInput'] | null; // BioWhereUniqueInput
    create?: NexusGenInputs['BioCreateWithoutJobsInput'] | null; // BioCreateWithoutJobsInput
  }
  BioCreateWithoutJobsInput: { // input type
    email: string; // String!
    github: string; // String!
    name: string; // String!
    objective: string; // String!
    tagline: string; // String!
    website?: string | null; // String
  }
  BioUpdateInput: { // input type
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    github?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    jobs?: NexusGenInputs['JobUpdateManyWithoutProfileInput'] | null; // JobUpdateManyWithoutProfileInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    objective?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    tagline?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    website?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
  }
  BioUpdateOneRequiredWithoutJobsInput: { // input type
    connect?: NexusGenInputs['BioWhereUniqueInput'] | null; // BioWhereUniqueInput
    create?: NexusGenInputs['BioCreateWithoutJobsInput'] | null; // BioCreateWithoutJobsInput
    update?: NexusGenInputs['BioUpdateWithoutJobsDataInput'] | null; // BioUpdateWithoutJobsDataInput
    upsert?: NexusGenInputs['BioUpsertWithoutJobsInput'] | null; // BioUpsertWithoutJobsInput
  }
  BioUpdateWithoutJobsDataInput: { // input type
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    github?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    objective?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    tagline?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    website?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
  }
  BioUpsertWithoutJobsInput: { // input type
    create: NexusGenInputs['BioCreateWithoutJobsInput']; // BioCreateWithoutJobsInput!
    update: NexusGenInputs['BioUpdateWithoutJobsDataInput']; // BioUpdateWithoutJobsDataInput!
  }
  BioWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  CompanyCreateInput: { // input type
    description?: string | null; // String
    jobs?: NexusGenInputs['JobCreateManyWithoutCompanyInput'] | null; // JobCreateManyWithoutCompanyInput
    logo?: string | null; // String
    name: string; // String!
    website?: string | null; // String
  }
  CompanyCreateOneWithoutJobsInput: { // input type
    connect?: NexusGenInputs['CompanyWhereUniqueInput'] | null; // CompanyWhereUniqueInput
    create?: NexusGenInputs['CompanyCreateWithoutJobsInput'] | null; // CompanyCreateWithoutJobsInput
  }
  CompanyCreateWithoutJobsInput: { // input type
    description?: string | null; // String
    logo?: string | null; // String
    name: string; // String!
    website?: string | null; // String
  }
  CompanyUpdateInput: { // input type
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    jobs?: NexusGenInputs['JobUpdateManyWithoutCompanyInput'] | null; // JobUpdateManyWithoutCompanyInput
    logo?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    website?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
  }
  CompanyUpdateOneWithoutJobsInput: { // input type
    connect?: NexusGenInputs['CompanyWhereUniqueInput'] | null; // CompanyWhereUniqueInput
    create?: NexusGenInputs['CompanyCreateWithoutJobsInput'] | null; // CompanyCreateWithoutJobsInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['CompanyUpdateWithoutJobsDataInput'] | null; // CompanyUpdateWithoutJobsDataInput
    upsert?: NexusGenInputs['CompanyUpsertWithoutJobsInput'] | null; // CompanyUpsertWithoutJobsInput
  }
  CompanyUpdateWithoutJobsDataInput: { // input type
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    logo?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    website?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
  }
  CompanyUpsertWithoutJobsInput: { // input type
    create: NexusGenInputs['CompanyCreateWithoutJobsInput']; // CompanyCreateWithoutJobsInput!
    update: NexusGenInputs['CompanyUpdateWithoutJobsDataInput']; // CompanyUpdateWithoutJobsDataInput!
  }
  CompanyWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  DateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  IntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  JobCreateInput: { // input type
    company?: NexusGenInputs['CompanyCreateOneWithoutJobsInput'] | null; // CompanyCreateOneWithoutJobsInput
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    profile: NexusGenInputs['BioCreateOneWithoutJobsInput']; // BioCreateOneWithoutJobsInput!
    role?: string | null; // String
    roleDescription?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  JobCreateManyWithoutCompanyInput: { // input type
    connect?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    create?: NexusGenInputs['JobCreateWithoutCompanyInput'][] | null; // [JobCreateWithoutCompanyInput!]
  }
  JobCreateManyWithoutProfileInput: { // input type
    connect?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    create?: NexusGenInputs['JobCreateWithoutProfileInput'][] | null; // [JobCreateWithoutProfileInput!]
  }
  JobCreateWithoutCompanyInput: { // input type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    profile: NexusGenInputs['BioCreateOneWithoutJobsInput']; // BioCreateOneWithoutJobsInput!
    role?: string | null; // String
    roleDescription?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  JobCreateWithoutProfileInput: { // input type
    company?: NexusGenInputs['CompanyCreateOneWithoutJobsInput'] | null; // CompanyCreateOneWithoutJobsInput
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    role?: string | null; // String
    roleDescription?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  JobScalarWhereInput: { // input type
    AND?: NexusGenInputs['JobScalarWhereInput'][] | null; // [JobScalarWhereInput!]
    companyId?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    endDate?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['JobScalarWhereInput'][] | null; // [JobScalarWhereInput!]
    OR?: NexusGenInputs['JobScalarWhereInput'][] | null; // [JobScalarWhereInput!]
    profileId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    role?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    roleDescription?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    startDate?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
  }
  JobUpdateInput: { // input type
    company?: NexusGenInputs['CompanyUpdateOneWithoutJobsInput'] | null; // CompanyUpdateOneWithoutJobsInput
    endDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    profile?: NexusGenInputs['BioUpdateOneRequiredWithoutJobsInput'] | null; // BioUpdateOneRequiredWithoutJobsInput
    role?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    roleDescription?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    startDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
  }
  JobUpdateManyDataInput: { // input type
    endDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    role?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    roleDescription?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    startDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
  }
  JobUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['JobUpdateManyDataInput']; // JobUpdateManyDataInput!
    where: NexusGenInputs['JobScalarWhereInput']; // JobScalarWhereInput!
  }
  JobUpdateManyWithoutCompanyInput: { // input type
    connect?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    create?: NexusGenInputs['JobCreateWithoutCompanyInput'][] | null; // [JobCreateWithoutCompanyInput!]
    delete?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    deleteMany?: NexusGenInputs['JobScalarWhereInput'][] | null; // [JobScalarWhereInput!]
    disconnect?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    set?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    update?: NexusGenInputs['JobUpdateWithWhereUniqueWithoutCompanyInput'][] | null; // [JobUpdateWithWhereUniqueWithoutCompanyInput!]
    updateMany?: NexusGenInputs['JobUpdateManyWithWhereNestedInput'][] | null; // [JobUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['JobUpsertWithWhereUniqueWithoutCompanyInput'][] | null; // [JobUpsertWithWhereUniqueWithoutCompanyInput!]
  }
  JobUpdateManyWithoutProfileInput: { // input type
    connect?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    create?: NexusGenInputs['JobCreateWithoutProfileInput'][] | null; // [JobCreateWithoutProfileInput!]
    delete?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    deleteMany?: NexusGenInputs['JobScalarWhereInput'][] | null; // [JobScalarWhereInput!]
    disconnect?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    set?: NexusGenInputs['JobWhereUniqueInput'][] | null; // [JobWhereUniqueInput!]
    update?: NexusGenInputs['JobUpdateWithWhereUniqueWithoutProfileInput'][] | null; // [JobUpdateWithWhereUniqueWithoutProfileInput!]
    updateMany?: NexusGenInputs['JobUpdateManyWithWhereNestedInput'][] | null; // [JobUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['JobUpsertWithWhereUniqueWithoutProfileInput'][] | null; // [JobUpsertWithWhereUniqueWithoutProfileInput!]
  }
  JobUpdateWithWhereUniqueWithoutCompanyInput: { // input type
    data: NexusGenInputs['JobUpdateWithoutCompanyDataInput']; // JobUpdateWithoutCompanyDataInput!
    where: NexusGenInputs['JobWhereUniqueInput']; // JobWhereUniqueInput!
  }
  JobUpdateWithWhereUniqueWithoutProfileInput: { // input type
    data: NexusGenInputs['JobUpdateWithoutProfileDataInput']; // JobUpdateWithoutProfileDataInput!
    where: NexusGenInputs['JobWhereUniqueInput']; // JobWhereUniqueInput!
  }
  JobUpdateWithoutCompanyDataInput: { // input type
    endDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    profile?: NexusGenInputs['BioUpdateOneRequiredWithoutJobsInput'] | null; // BioUpdateOneRequiredWithoutJobsInput
    role?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    roleDescription?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    startDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
  }
  JobUpdateWithoutProfileDataInput: { // input type
    company?: NexusGenInputs['CompanyUpdateOneWithoutJobsInput'] | null; // CompanyUpdateOneWithoutJobsInput
    endDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    role?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    roleDescription?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    startDate?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
  }
  JobUpsertWithWhereUniqueWithoutCompanyInput: { // input type
    create: NexusGenInputs['JobCreateWithoutCompanyInput']; // JobCreateWithoutCompanyInput!
    update: NexusGenInputs['JobUpdateWithoutCompanyDataInput']; // JobUpdateWithoutCompanyDataInput!
    where: NexusGenInputs['JobWhereUniqueInput']; // JobWhereUniqueInput!
  }
  JobUpsertWithWhereUniqueWithoutProfileInput: { // input type
    create: NexusGenInputs['JobCreateWithoutProfileInput']; // JobCreateWithoutProfileInput!
    update: NexusGenInputs['JobUpdateWithoutProfileDataInput']; // JobUpdateWithoutProfileDataInput!
    where: NexusGenInputs['JobWhereUniqueInput']; // JobWhereUniqueInput!
  }
  JobWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedDateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedIntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableDateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    email: string; // String!
    name?: string | null; // String
    password: string; // String!
  }
  UserCredentialsType: { // input type
    email: string; // String!
    password: string; // String!
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  Bio: { // root type
    email: string; // String!
    github: string; // String!
    name: string; // String!
    objective: string; // String!
    tagline: string; // String!
    website?: string | null; // String
  }
  Company: { // root type
    description?: string | null; // String
    logo?: string | null; // String
    name: string; // String!
    website?: string | null; // String
  }
  Job: { // root type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    role?: string | null; // String
    roleDescription?: string | null; // String
    startDate?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    name?: string | null; // String
  }
  UserToken: { // root type
    token: string; // String!
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BioCreateInput: NexusGenInputs['BioCreateInput'];
  BioCreateOneWithoutJobsInput: NexusGenInputs['BioCreateOneWithoutJobsInput'];
  BioCreateWithoutJobsInput: NexusGenInputs['BioCreateWithoutJobsInput'];
  BioUpdateInput: NexusGenInputs['BioUpdateInput'];
  BioUpdateOneRequiredWithoutJobsInput: NexusGenInputs['BioUpdateOneRequiredWithoutJobsInput'];
  BioUpdateWithoutJobsDataInput: NexusGenInputs['BioUpdateWithoutJobsDataInput'];
  BioUpsertWithoutJobsInput: NexusGenInputs['BioUpsertWithoutJobsInput'];
  BioWhereUniqueInput: NexusGenInputs['BioWhereUniqueInput'];
  CompanyCreateInput: NexusGenInputs['CompanyCreateInput'];
  CompanyCreateOneWithoutJobsInput: NexusGenInputs['CompanyCreateOneWithoutJobsInput'];
  CompanyCreateWithoutJobsInput: NexusGenInputs['CompanyCreateWithoutJobsInput'];
  CompanyUpdateInput: NexusGenInputs['CompanyUpdateInput'];
  CompanyUpdateOneWithoutJobsInput: NexusGenInputs['CompanyUpdateOneWithoutJobsInput'];
  CompanyUpdateWithoutJobsDataInput: NexusGenInputs['CompanyUpdateWithoutJobsDataInput'];
  CompanyUpsertWithoutJobsInput: NexusGenInputs['CompanyUpsertWithoutJobsInput'];
  CompanyWhereUniqueInput: NexusGenInputs['CompanyWhereUniqueInput'];
  DateTimeNullableFilter: NexusGenInputs['DateTimeNullableFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  IntNullableFilter: NexusGenInputs['IntNullableFilter'];
  JobCreateInput: NexusGenInputs['JobCreateInput'];
  JobCreateManyWithoutCompanyInput: NexusGenInputs['JobCreateManyWithoutCompanyInput'];
  JobCreateManyWithoutProfileInput: NexusGenInputs['JobCreateManyWithoutProfileInput'];
  JobCreateWithoutCompanyInput: NexusGenInputs['JobCreateWithoutCompanyInput'];
  JobCreateWithoutProfileInput: NexusGenInputs['JobCreateWithoutProfileInput'];
  JobScalarWhereInput: NexusGenInputs['JobScalarWhereInput'];
  JobUpdateInput: NexusGenInputs['JobUpdateInput'];
  JobUpdateManyDataInput: NexusGenInputs['JobUpdateManyDataInput'];
  JobUpdateManyWithWhereNestedInput: NexusGenInputs['JobUpdateManyWithWhereNestedInput'];
  JobUpdateManyWithoutCompanyInput: NexusGenInputs['JobUpdateManyWithoutCompanyInput'];
  JobUpdateManyWithoutProfileInput: NexusGenInputs['JobUpdateManyWithoutProfileInput'];
  JobUpdateWithWhereUniqueWithoutCompanyInput: NexusGenInputs['JobUpdateWithWhereUniqueWithoutCompanyInput'];
  JobUpdateWithWhereUniqueWithoutProfileInput: NexusGenInputs['JobUpdateWithWhereUniqueWithoutProfileInput'];
  JobUpdateWithoutCompanyDataInput: NexusGenInputs['JobUpdateWithoutCompanyDataInput'];
  JobUpdateWithoutProfileDataInput: NexusGenInputs['JobUpdateWithoutProfileDataInput'];
  JobUpsertWithWhereUniqueWithoutCompanyInput: NexusGenInputs['JobUpsertWithWhereUniqueWithoutCompanyInput'];
  JobUpsertWithWhereUniqueWithoutProfileInput: NexusGenInputs['JobUpsertWithWhereUniqueWithoutProfileInput'];
  JobWhereUniqueInput: NexusGenInputs['JobWhereUniqueInput'];
  NestedDateTimeNullableFilter: NexusGenInputs['NestedDateTimeNullableFilter'];
  NestedIntFilter: NexusGenInputs['NestedIntFilter'];
  NestedIntNullableFilter: NexusGenInputs['NestedIntNullableFilter'];
  NestedStringNullableFilter: NexusGenInputs['NestedStringNullableFilter'];
  NullableDateTimeFieldUpdateOperationsInput: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'];
  NullableStringFieldUpdateOperationsInput: NexusGenInputs['NullableStringFieldUpdateOperationsInput'];
  StringFieldUpdateOperationsInput: NexusGenInputs['StringFieldUpdateOperationsInput'];
  StringNullableFilter: NexusGenInputs['StringNullableFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCredentialsType: NexusGenInputs['UserCredentialsType'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  Bio: { // field return type
    email: string; // String!
    github: string; // String!
    jobs: NexusGenRootTypes['Job'][]; // [Job!]!
    name: string; // String!
    objective: string; // String!
    tagline: string; // String!
    website: string | null; // String
  }
  Company: { // field return type
    description: string | null; // String
    logo: string | null; // String
    name: string; // String!
    website: string | null; // String
  }
  Job: { // field return type
    company: NexusGenRootTypes['Company'] | null; // Company
    endDate: NexusGenScalars['DateTime'] | null; // DateTime
    profile: NexusGenRootTypes['Bio']; // Bio!
    role: string | null; // String
    roleDescription: string | null; // String
    startDate: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Mutation: { // field return type
    createOneBio: NexusGenRootTypes['Bio']; // Bio!
    createOneCompany: NexusGenRootTypes['Company']; // Company!
    createOneJob: NexusGenRootTypes['Job']; // Job!
    createOneUser: NexusGenRootTypes['UserToken']; // UserToken!
    login: NexusGenRootTypes['UserToken']; // UserToken!
    updateOneBio: NexusGenRootTypes['Bio'] | null; // Bio
    updateOneCompany: NexusGenRootTypes['Company'] | null; // Company
    updateOneJob: NexusGenRootTypes['Job'] | null; // Job
  }
  Query: { // field return type
    bio: NexusGenRootTypes['Bio'] | null; // Bio
    company: NexusGenRootTypes['Company'] | null; // Company
    job: NexusGenRootTypes['Job'] | null; // Job
    me: NexusGenRootTypes['User']; // User!
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    email: string; // String!
    name: string | null; // String
  }
  UserToken: { // field return type
    token: string; // String!
  }
}

export interface NexusGenArgTypes {
  Bio: {
    jobs: { // args
      after?: NexusGenInputs['JobWhereUniqueInput'] | null; // JobWhereUniqueInput
      before?: NexusGenInputs['JobWhereUniqueInput'] | null; // JobWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Mutation: {
    createOneBio: { // args
      data: NexusGenInputs['BioCreateInput']; // BioCreateInput!
    }
    createOneCompany: { // args
      data: NexusGenInputs['CompanyCreateInput']; // CompanyCreateInput!
    }
    createOneJob: { // args
      data: NexusGenInputs['JobCreateInput']; // JobCreateInput!
    }
    createOneUser: { // args
      userData: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    login: { // args
      credentials: NexusGenInputs['UserCredentialsType']; // UserCredentialsType!
    }
    updateOneBio: { // args
      data: NexusGenInputs['BioUpdateInput']; // BioUpdateInput!
      where: NexusGenInputs['BioWhereUniqueInput']; // BioWhereUniqueInput!
    }
    updateOneCompany: { // args
      data: NexusGenInputs['CompanyUpdateInput']; // CompanyUpdateInput!
      where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
    }
    updateOneJob: { // args
      data: NexusGenInputs['JobUpdateInput']; // JobUpdateInput!
      where: NexusGenInputs['JobWhereUniqueInput']; // JobWhereUniqueInput!
    }
  }
  Query: {
    bio: { // args
      where: NexusGenInputs['BioWhereUniqueInput']; // BioWhereUniqueInput!
    }
    company: { // args
      where: NexusGenInputs['CompanyWhereUniqueInput']; // CompanyWhereUniqueInput!
    }
    job: { // args
      where: NexusGenInputs['JobWhereUniqueInput']; // JobWhereUniqueInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Bio" | "Company" | "Job" | "Mutation" | "Query" | "User" | "UserToken";

export type NexusGenInputNames = "BioCreateInput" | "BioCreateOneWithoutJobsInput" | "BioCreateWithoutJobsInput" | "BioUpdateInput" | "BioUpdateOneRequiredWithoutJobsInput" | "BioUpdateWithoutJobsDataInput" | "BioUpsertWithoutJobsInput" | "BioWhereUniqueInput" | "CompanyCreateInput" | "CompanyCreateOneWithoutJobsInput" | "CompanyCreateWithoutJobsInput" | "CompanyUpdateInput" | "CompanyUpdateOneWithoutJobsInput" | "CompanyUpdateWithoutJobsDataInput" | "CompanyUpsertWithoutJobsInput" | "CompanyWhereUniqueInput" | "DateTimeNullableFilter" | "IntFilter" | "IntNullableFilter" | "JobCreateInput" | "JobCreateManyWithoutCompanyInput" | "JobCreateManyWithoutProfileInput" | "JobCreateWithoutCompanyInput" | "JobCreateWithoutProfileInput" | "JobScalarWhereInput" | "JobUpdateInput" | "JobUpdateManyDataInput" | "JobUpdateManyWithWhereNestedInput" | "JobUpdateManyWithoutCompanyInput" | "JobUpdateManyWithoutProfileInput" | "JobUpdateWithWhereUniqueWithoutCompanyInput" | "JobUpdateWithWhereUniqueWithoutProfileInput" | "JobUpdateWithoutCompanyDataInput" | "JobUpdateWithoutProfileDataInput" | "JobUpsertWithWhereUniqueWithoutCompanyInput" | "JobUpsertWithWhereUniqueWithoutProfileInput" | "JobWhereUniqueInput" | "NestedDateTimeNullableFilter" | "NestedIntFilter" | "NestedIntNullableFilter" | "NestedStringNullableFilter" | "NullableDateTimeFieldUpdateOperationsInput" | "NullableStringFieldUpdateOperationsInput" | "StringFieldUpdateOperationsInput" | "StringNullableFilter" | "UserCreateInput" | "UserCredentialsType" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}