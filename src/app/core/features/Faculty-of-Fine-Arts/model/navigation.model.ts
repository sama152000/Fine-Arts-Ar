export interface MenuItem {
  label: string;
  url: string;
  active?: boolean;
  icon?: string;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  url: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface LanguageOption {
  code: string;
  label: string;
  flag?: string;
}