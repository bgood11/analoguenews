export const filmHistory: Record<string, { year: number; text: string }> = {
  "01-09": { year: 2013, text: "Fujifilm discontinues FP-100C peel-apart instant film, ending an era." },
  "01-14": { year: 1839, text: "Louis Daguerre successfully creates a daguerreotype — the first practical photographic process." },
  "02-21": { year: 1947, text: "Edwin Land demonstrates the first Polaroid instant camera at a meeting of the Optical Society of America." },
  "03-14": { year: 1932, text: "Kodak introduces the first commercially available 8mm film format for home movies." },
  "03-28": { year: 1934, text: "Fuji Photo Film Co. (now Fujifilm) is established in Minami-Ashigara, Japan." },
  "04-12": { year: 1935, text: "Kodak introduces Kodachrome, the first commercially successful colour film." },
  "04-24": { year: 1888, text: "George Eastman registers the trademark 'Kodak' — a word he invented because it was easy to pronounce in any language." },
  "05-01": { year: 2004, text: "Ilford Imaging files for administration, triggering fears for the future of black and white film." },
  "05-14": { year: 1972, text: "Pentax introduces the Spotmatic F, helping popularise through-the-lens metering in SLR cameras." },
  "06-07": { year: 1942, text: "Kodak introduces Kodacolor, the first colour negative film for amateur photographers." },
  "06-22": { year: 2009, text: "Kodak announces the discontinuation of Kodachrome after 74 years of production." },
  "07-16": { year: 1888, text: "The first Kodak camera goes on sale with the slogan 'You press the button, we do the rest.'" },
  "07-23": { year: 1962, text: "Telstar relays the first live transatlantic television signal — filmed on 16mm Kodak stock." },
  "08-19": { year: 1839, text: "The French government purchases the daguerreotype patent and makes it 'free to the world.'" },
  "08-26": { year: 2013, text: "CineStill Film is founded, bringing cinema film to still photography." },
  "09-04": { year: 1888, text: "George Eastman patents the first roll-film camera." },
  "09-21": { year: 1955, text: "Nikon introduces the Nikon S2, establishing the company as a serious rangefinder manufacturer." },
  "10-07": { year: 2010, text: "The Impossible Project (now Polaroid) produces its first new-generation instant film packs." },
  "10-12": { year: 1976, text: "The Canon AE-1 is released, becoming the best-selling SLR in history." },
  "10-26": { year: 1958, text: "Agfa introduces Agfachrome CT 18, a popular consumer slide film." },
  "11-03": { year: 2005, text: "Ilford Photo is rescued from administration by a management buyout, securing the future of its black and white films." },
  "11-11": { year: 1999, text: "Fujifilm releases the Fujifilm Superia range, which would become the world's most popular consumer colour film." },
  "11-30": { year: 2023, text: "Harman Technology announces Phoenix 200 — the first new colour negative film in over a decade." },
  "12-07": { year: 1975, text: "Steven Sasson at Kodak builds the first digital camera — a 0.01 megapixel device." },
  "12-14": { year: 2003, text: "Pentax discontinues the LX, ending one of the longest-running professional SLR lines." },
  "12-23": { year: 1947, text: "Bell Labs demonstrates the transistor — technology that would eventually shrink cameras from boxes to pockets." },
  "12-30": { year: 2010, text: "Dwayne's Photo in Parsons, Kansas processes the world's last roll of Kodachrome." },
};

export function getTodayInHistory(): { year: number; text: string } | null {
  const now = new Date();
  const key = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return filmHistory[key] || null;
}
