export type GentlemanProps = {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
};

export function Gentleman({
  id,
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
  selected,
}: GentlemanProps);
