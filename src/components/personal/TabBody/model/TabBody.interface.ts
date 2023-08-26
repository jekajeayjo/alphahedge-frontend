export enum tabEnum {
  ACTIVE = 'active',
  PACKAGE = 'package',
  INDIVIDUAL = 'individual',
}

export interface ITabBodyButtons {
  tab: tabEnum
  onClick(type: tabEnum): void
}
