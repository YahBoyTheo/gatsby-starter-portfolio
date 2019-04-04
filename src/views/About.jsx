import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide, rotateAnimation } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG icon="gear" hiddenMobile width={6} fill={colors['blue-dark']} left="50%" top="75%" />
        <SVG icon="gear" hiddenMobile width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="gear" width={8} fill={colors['grey-darkest']} left="25%" top="5%" />
        <SVG icon="gear" hiddenMobile width={24} fill={colors['blue-dark']} left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="gear" hiddenMobile width={16} fill={colors['blue-dark']} left="5%" top="80%" />
        <SVG icon="gear" width={12} fill={colors.white} left="95%" top="50%" />
        <SVG icon="gear" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG icon="gear" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="gear" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="gear" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="gear" width={6} fill={colors['blue-dark']} left="10%" top="10%" />
      <SVG icon="gear" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="gear" width={8} fill={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
