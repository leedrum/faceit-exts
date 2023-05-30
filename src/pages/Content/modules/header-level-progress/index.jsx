/** @jsx h */
import { h } from 'dom-chef'
import {
  hasFeatureAttribute,
  setFeatureAttribute
} from '../../../../helpers/dom-element'
import { isLoggedIn } from '../../../../helpers/user'
import { getSelf } from '../../../../helpers/faceit-api'
import { LEVELS } from '../../../../helpers/elo'
import SkillLevelComponent from "../../../../containers/skill-level";

const FEATURE_ATTRIBUTE = 'level-progress'
const REFRESH_TIME = 300

export const FeatureHeaderLevelProgress = async () => {
  if (!isLoggedIn()) {
    return
  }

  let mainHeaderActionsElement = null
  try {
    mainHeaderActionsElement = document.querySelector("div[ui-view='header']").querySelector('#main-header-height-wrapper').querySelector("#main-header-height-wrapper").querySelector('div')
  } catch (error) {
    return
  }

  if (!mainHeaderActionsElement) {
    return
  }

  mainHeaderActionsElement.setAttribute('id', 'header-faceit-exts')

  if (hasFeatureAttribute(FEATURE_ATTRIBUTE, mainHeaderActionsElement)) {
    return
  }
  setFeatureAttribute(FEATURE_ATTRIBUTE, mainHeaderActionsElement)
  let levelElement

  const addLevelElement = async () => {
    const self = await getSelf()

    if (!self) {
      return
    }

    const { flag: game, games } = self
    const { skillLevel, faceitElo = 1000 } = games[game]
    const [levelMinElo, levelMaxElo] = LEVELS[skillLevel]

    const progressWidth = levelMaxElo
      ? `${((faceitElo - levelMinElo) / (levelMaxElo - levelMinElo)) * 100}%`
      : '100%'

    const levelBelow = LEVELS[skillLevel - 1]
    const levelAbove = LEVELS[skillLevel + 1]

    const levelBelowEloDiff = levelBelow ? `-${faceitElo - levelBelow[1]}` : 0
    const levelAboveEloDiff = levelMaxElo
      ? `+${levelAbove[0] - faceitElo}`
      : '∞'

    levelElement = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: 8,
          marginLeft: 24,
          fontSize: '10px'
        }}
      >
        <div style={{ marginRight: 4 }}>
          <div
            className="text-light"
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <a
              className="text-sm text-muted bold"
              style={{ alignSelf: 'flex-end', color: '#fff', textDecoration: 'none', opacity: 0.75 }}
              href="/#"
            >
              <div>{game.toUpperCase()}</div>
            </a>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                fontSize: '13px'
              }}
            >
              {faceitElo}
              <i
                className="icon-ELO-icon text-light"
                style={{ marginLeft: 4 }}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                margin: '1px 0',
                height: 2,
                width: 110,
                background: '#4b4e4e'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: progressWidth,
                  background: '#f50'
                }}
              />
            </div>
            <div
              className="text-sm text-muted bold"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {levelMinElo}
              <span>
                {levelBelowEloDiff}/{levelAboveEloDiff}
              </span>
              <span>{levelMaxElo ? levelMaxElo : '∞'}</span>
            </div>
          </div>
        </div>
        {createSkillLevelElement({ level: skillLevel })}
      </div>
    )

    if (mainHeaderActionsElement) {
      mainHeaderActionsElement.insertBefore(
        levelElement,
        mainHeaderActionsElement.children[mainHeaderActionsElement.children.length - 1]
      )
    }
  }

  addLevelElement()

  setInterval(() => {
    if(levelElement !== undefined) {
      levelElement.remove()
      addLevelElement()
    }
  }, REFRESH_TIME)
}


export const createSkillLevelElement = ({ level, size = 32, style = {} }) => (
  <span
    title={`Skill Level ${level}`}
    style={{ width: size, display: 'inline-block', ...style }}
  >
    {SkillLevelComponent(level)}
  </span>
)

export default FeatureHeaderLevelProgress
