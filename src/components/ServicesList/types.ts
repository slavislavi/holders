export type SectionItemType = {
  name: string;
  date: string;
  description: string;
  address: string;
  location: string;
  attach: string;
};

export type SectionCategoryType = {
  title: string;
  data: SectionItemType[];
};

export type SectionDataType = SectionCategoryType[];
