import { getSetting } from '../../helpers/settings'

export const reorder = (
  list,
  startIndex,
  endIndex
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const mapsVeto = [
  'de_dust2',
  'de_mirage',
  'de_nuke',
  'de_overpass',
  'de_train',
  'de_inferno',
  'de_vertigo',
  'de_ancient'
]
export const getMaps = async () => {
  const maps = await getSetting("mapsVeto")
  if(!maps) {
    return mapsVeto.map(k => ({ name: k }));
  } else {
    return maps.map(k => ({ name: k }));
  }
}
