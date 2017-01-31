import legendOfZelda from './collectables/legend-of-zelda';
import adventureOfLink from './collectables/adventure-of-link';
import aLinkToThePast from './collectables/a-link-to-the-past';
import linksAwakening from './collectables/links-awakening';
import ocarinaOfTime from './collectables/ocarina-of-time';
import majorasMask from './collectables/majoras-mask';
import oracleOfSeasons from './collectables/oracle-of-seasons';
import oracleOfAges from './collectables/oracle-of-ages';
import windWaker from './collectables/wind-waker';
import minishCap from './collectables/minish-cap';
import twilightPrincess from './collectables/twilight-princess';
import phantomHourglass from './collectables/phantom-hourglass';
import spiritTracks from './collectables/spirit-tracks';
import skywardSword from './collectables/skyward-sword';
import aLinkBetweenWorlds from './collectables/a-link-between-worlds';
import triforceHeroes from './collectables/triforce-heroes';

const _map = {
  'the-legend-of-zelda': legendOfZelda,
  'zelda-ii-the-adventure-of-link': adventureOfLink,
  'the-legend-of-zelda-a-link-to-the-past': aLinkToThePast,
  'the-legend-of-zelda-links-awakening': linksAwakening,
  'the-legend-of-zelda-ocarina-of-time': ocarinaOfTime,
  'the-legend-of-zelda-majoras-mask': majorasMask,
  'the-legend-of-zelda-oracle-of-seasons': oracleOfSeasons,
  'the-legend-of-zelda-oracle-of-ages': oracleOfAges,
  'the-legend-of-zelda-the-wind-waker': windWaker,
  'the-legend-of-zelda-the-minish-cap': minishCap,
  'the-legend-of-zelda-twilight-princess': twilightPrincess,
  'the-legend-of-zelda-phantom-hourglass': phantomHourglass,
  'the-legend-of-zelda-spirit-tracks': spiritTracks,
  'the-legend-of-zelda-skyward-sword': skywardSword,
  'the-legend-of-zelda-a-link-between-worlds': aLinkBetweenWorlds,
  'the-legend-of-zelda-tri-force-heroes': triforceHeroes
};

export default function map(titleId) {
  if (!titleId) {
    return new Error('Must use a valid titleId');
  }

  return _map[titleId];
}
