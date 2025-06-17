export interface Publication {
  type: string;
  title: string;
  author: string[];
  venue: string;
  year: number;
  note?: string;
  paper?: string;
  patent?: string;
  code?: string;
  marked?: boolean;
}

// For sorting "Everything Else" < "ICLR" < "AISTATS" < "ICML" < "UAI" < "NeurIPS"
const CONF_VALS: Record<string, number> = {
  ICAR: 1,
  IROS: 2,
  RAL: 3,
  CVPR: 4,
  NeurIPS: 5,
};
function getConfVal(conf: string): number {
  if (conf in CONF_VALS) {
    return CONF_VALS[conf];
  } else {
    return 0;
  }
}

export function sortPublicationFn(pub1: Publication, pub2: Publication): number {
  return pub2.year - pub1.year || getConfVal(pub2.venue) - getConfVal(pub1.venue);
  // return pub2.year - pub1.year
}