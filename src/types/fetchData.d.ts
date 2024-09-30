type HeadlineKey =
  | 'main'
  | 'kicker'
  | 'content_kicker'
  | 'print_headline'
  | 'name'
  | 'seo'
  | 'sub';

interface Person {
  firstname: string;
  lastname: string;
  middlename: string;
  organization: string;
  qualifier: string;
  rank: number;
  role: string;
  title: string;
}

interface Legacy {
  xlarge: string;
  xlargewidth: number;
  xlargeheight: number;
}

interface ByLine {
  organization: string;
  original: string;
  person: Person[];
}

interface KeyWords {
  major: string;
  name: string;
  rank: number;
  value: string;
}

interface Multimedia {
  caption: string;
  subtype: string;
  type: string;
  url: string;
  height: number;
  width: number;
  format?: string;
  credit?: string;
  crop_name?: string;
  subType?: string;
  rank?: number;
  legacy: Legacy;
  copyright?: string;
}

interface SectionTabsArticle {
  abstract: string;
  byline: ByLine;
  document_type: string;
  headline: Record<HeadlineKey, string>;
  keywords: KeyWords[];
  lead_paragraph: string;
  multimedia: Multimedia[];
  news_desk: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}

interface BannerArticle {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: Multimedia[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}
